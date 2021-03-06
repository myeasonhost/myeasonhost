package com.eason.report.pull.platform.ag.mgr;


import com.eason.report.pull.core.mgr.IPullMgr;
import com.eason.report.pull.core.utils.DateUtil;
import com.eason.report.pull.core.utils.Md5Util;
import com.eason.report.pull.platform.ag.exception.AGException;
import com.eason.report.pull.platform.ag.mgo.DSAGSportMgoPo;
import com.eason.report.pull.platform.ag.model.common.AgAdditionModel;
import com.eason.report.pull.platform.ag.model.sport.SportListModel;
import com.eason.report.pull.platform.ag.model.sport.SportModel;
import com.eason.report.pull.platform.ag.po.DsAGGameConfigPo;
import com.eason.report.pull.platform.ag.utils.XMLUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndReplaceOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.*;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
@Slf4j
public class DSAGSportMgr implements IPullMgr<DSAGSportMgoPo, DsAGGameConfigPo> {
  @Autowired
  private RestTemplate restTemplate;
  @Autowired
  private MongoTemplate mongoTemplate;
  @Autowired
  private StringRedisTemplate stringRedisTemplate10;

  @Override
  public DSAGSportMgoPo extAttr(DSAGSportMgoPo po, DsAGGameConfigPo configPo) {
    po.setAgentId(configPo. getAgentId());
    for(Map.Entry<Integer,String> site:configPo.getSiteMap().entrySet()){
      if(po.getUsername().startsWith(site.getValue())){
        po.setSiteId(site.getKey());
        po.setPlayName(po.getUsername());
        po.setUsername(po.getPlayName().substring(site.getValue().length()));
      }
    }
    //判断输赢
    if(po.getCusAccount().doubleValue() >0){
      po.setWinLossType(Byte.valueOf("2"));//赢
    }else if(po.getCusAccount().doubleValue() < 0){
      po.setWinLossType(Byte.valueOf("1"));//输
    }else if(po.getCusAccount().doubleValue() == 0){
      po.setWinLossType(Byte.valueOf("3"));//和
    }
    po.setCreateTime(new Date());
    return po;
  }

  @Transactional
  @Override
  public void saveAndUpdate(DSAGSportMgoPo po, DsAGGameConfigPo configPo){
    po=this.extAttr(po,configPo);
    Optional<DSAGSportMgoPo> result =mongoTemplate.update(DSAGSportMgoPo.class)
            .matching(query(where("billNo").is(po.getBillNo())))
            .replaceWith(po)
            .withOptions(FindAndReplaceOptions.options().upsert())
            .findAndReplace();
  }

  @Override
  public Timestamp getMaxId(DsAGGameConfigPo configPo){
    TypedAggregation<DSAGSportMgoPo> agg = newAggregation(DSAGSportMgoPo.class,
            match(where("agentId").is(configPo.getAgentId())),
            group().max("$reckonTime").as("reckonTime")
    );
    AggregationResults<DSAGSportMgoPo> results = mongoTemplate.aggregate(agg, DSAGSportMgoPo.class);
    DSAGSportMgoPo po = results.getUniqueMappedResult();

    Object obj=stringRedisTemplate10.boundHashOps("ag_sport_pull_config").get("endTime_"+configPo.getAgentId());
    Date endDate=obj==null?null:DateUtil.covertTime((String)obj);
    if(endDate!=null){
      return new Timestamp(endDate.getTime());
    }
    if(po==null){
      return new Timestamp(configPo.getInitStartId().getTime());
    }
    return new Timestamp(po.getReckonTime().getTime());
  }

  @Override
  public Timestamp getNextId(DsAGGameConfigPo configPo) {
    Date startId= DateUtils.addSeconds(getMaxId(configPo),1);
    return new Timestamp(startId.getTime());
  }

  public List<SportModel> loadDataToEndTime(Date pullDate, Integer length, DsAGGameConfigPo configPo) throws AGException {
    try {
      List<SportModel> list=new ArrayList<>();
      Date startDate= pullDate;
      Date endDate= DateUtils.addMinutes(startDate,length);
      Date date=new Date();
      SportListModel sportListModel=this.getRecordAG(startDate,endDate,configPo,1); //起始值page=1
      if(sportListModel.getAgList()!=null && !sportListModel.getAgList().isEmpty()){
        list.addAll(sportListModel.getAgList());
      }
      AgAdditionModel pagination=sportListModel.getAddition();
      Integer currentPage=pagination.getCurrentPage();
      Integer totalPages=pagination.getTotalPage();
      if(currentPage!=null && totalPages!=null){
        for(int page=currentPage;page<totalPages;page++){
          SportListModel sportListModel2=getRecordAG(startDate,endDate,configPo,page+1);
          if(sportListModel2.getAgList()!=null && !sportListModel2.getAgList().isEmpty()) {
            list.addAll(sportListModel.getAgList());
          }
        }
      }

      if (list.isEmpty() || list.size()==0){
        log.info("AG网站={} 拉取成功,但注单数量为0,时间段{}——{}",configPo.getAgentId(), DateUtil.covertStr(startDate), DateUtil.covertStr(endDate));
        if(endDate.compareTo(date)==-1){
          stringRedisTemplate10.boundHashOps("ag_sport_pull_config").put("endTime_"+configPo.getAgentId(), DateUtil.covertStr(endDate));
        }
      }else{
        stringRedisTemplate10.boundHashOps("ag_sport_pull_config").delete("endTime_"+configPo.getAgentId());
      }
      return list;
    } catch (Exception e) {
      throw new AGException(e);
    }
  }

  public SportListModel getRecordAG(Date startDate, Date endDate, DsAGGameConfigPo configPo,Integer page) throws AGException {
    try {
      HttpHeaders headers = new HttpHeaders();
      headers.setContentType(MediaType.APPLICATION_XML);

      Map<String, String> request= new TreeMap<>();
      request.put("0cagent", configPo.getAgentId());
      request.put("1startdate", DateUtil.covertStr(startDate));
      request.put("2enddate", DateUtil.covertStr(endDate));
      request.put("3page", page+"");
      request.put("4pagelimit", 100+""); //默认拉取的条数
      request.put("5params_key", configPo.getParamsKey()); //默认拉取的条数
      request.put("6key", getParamsKey(request));

      String url=configPo.getPullUrl()+"?cagent={0cagent}&startdate={1startdate}" +
              "&enddate={2enddate}&page={3page}&perpage={4pagelimit}&key={6key}";
      log.info("AG拉取请求={}",url);
      log.info("请求参数={}",request);

      String result=restTemplate.exchange(url, HttpMethod.GET,new HttpEntity<>(headers),String.class,request).getBody();
      log.info("AG拉取返回结果={}",result);

      SportListModel sportListModel= XMLUtil.xmlStrToOject(SportListModel.class,result);
      return sportListModel;
    } catch (Exception e) {
      if(e instanceof HttpClientErrorException){
        log.error("AG拉取请求次数频繁，暂停1分钟,错误信息={}",e.getMessage());
        try{
          Thread.sleep(10*1000L);
        }catch (Exception ex){
          ex.printStackTrace();
        }
      }
      throw new AGException(e);
    }
  }

  /**
   * 注意顺序：cagent第一位，key(明码)最后一位
   * 则 key 的加密方式为：
   * 1. hash =md5(cagent + startdate+ enddate+ gametype+order+by+page+perpage + “明碼”)
   */
  private String getParamsKey(Map<String, String> request){
    StringBuffer sb = new StringBuffer();
    request.forEach((k,v)-> sb.append(v));
    return Md5Util.makeMd5Sum(sb.toString().getBytes());
  }

  /**
   * 获取当前时间，时间延迟0分钟; AG不需要延迟
   * 比如:2019-6-27 00:00:00 获取前5分钟，为2019-6-26 23:55:00; 截取时间为2019-6-26
   * 目的在，临界点2019-6-27 00:00:00，由于存在拉取延迟，有充裕时间给第三方汇总26日的数据，避免数据遗漏
   * @return
   */
  private String getAGRounddate(DsAGGameConfigPo configPo){
    Date date=configPo.getInitStartId();
    if(date==null){
      date=DateUtils.addHours(new Date(),-12); //当前时间为28号，AG为27号的美东时间，查询为美东时间的RoundDate
    }
    return DateUtil.getDayBefore(date,0);
  }

}
