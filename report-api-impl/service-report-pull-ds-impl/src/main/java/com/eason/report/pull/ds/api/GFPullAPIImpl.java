package com.eason.report.pull.ds.api;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.eason.report.pull.ds.base.BaseAPI;
import com.eason.report.pull.ds.config.GFAppInfoConfig;
import com.eason.report.pull.ds.exception.DsException;
import com.eason.report.pull.ds.listener.MQServiceListener;
import com.eason.report.pull.ds.manager.DtGFMgr;
import com.eason.report.pull.ds.model.DsLotteryModel;
import com.eason.report.pull.ds.model.MsgModel;
import com.eason.report.pull.ds.mysqlDao.DtGFDao;
import com.eason.report.pull.ds.po.DtGuangfangLotteryPo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


/**
 * @author EASON LI
 */
@Service
@Slf4j
public class GFPullAPIImpl extends BaseAPI {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private GFAppInfoConfig GFAppInfoConfig;

    @Autowired
    private DtGFMgr dtDFMgr;

    @Autowired
    private DtGFDao dtGFDao;

    @Autowired
    private MQServiceListener mqServiceListener;


    /**
     * 官方彩拉取
     */
    public void getPullBet() throws DsException {
        try {
            boolean flag=false;
            log.info("DS-JD官方彩开始准备拉取,拉取配置", GFAppInfoConfig);
            Long startId = dtGFDao.getMaxId();

            JSONObject request = new JSONObject();
            request.put("num", GFAppInfoConfig.getLength()+"");
            request.put("username", GFAppInfoConfig.getUser());
            request.put("beginId", startId + 1);
            request.put("accType", GFAppInfoConfig.getLevel());
            HttpEntity<String> entity = new HttpEntity<>(request.toString());
            ResponseEntity<JSONObject> exchange=restTemplate.exchange(GFAppInfoConfig.getPullUrl(), HttpMethod.POST,entity,JSONObject.class);
            if (exchange==null || exchange.getBody().isEmpty()){
                log.error("DS-GF官方彩: 重要报警，用户={},参数={},断网维护或者未加白名单", GFAppInfoConfig.getUser(),request.toString());
                return;
            }
            JSONObject object=exchange.getBody();

            if (object.getString("status").equals("10000") && object.getJSONArray("message").size() != 0) {// 获取成功
                JSONArray array = object.getJSONArray("message");
                int arraySize = array.size();
                log.info("DS-GF官方彩网站={},拉取到注单 ,数量={}", GFAppInfoConfig.getUser(), arraySize);
                for (int i = 0; i < array.size(); i++) {
                    DtGuangfangLotteryPo guanfangEntity = array.getObject(i, DtGuangfangLotteryPo.class);
                    DtGuangfangLotteryPo po=dtGFDao.findByNid(guanfangEntity.getNid());
                    if (po!=null){
                        mqServiceListener.sendErrorMsg(
                                MsgModel.builder()
                                        .code("DS-GF-1111")
                                        .message("新拉取发现重复nid="+guanfangEntity.getNid())
                                        .object(guanfangEntity).build());
                    }
                    guanfangEntity=this.dtDFMgr.extAttr(guanfangEntity,GFAppInfoConfig);
                    this.dtGFDao.saveAndFlush(guanfangEntity);
                    flag=true;
                }
                if (flag){
                    Long endId=dtGFDao.getMaxId();
                    DsLotteryModel dsLotteryModel=DsLotteryModel.builder()
                            .startId(startId+"")
                            .endId(endId+"")
                            .siteId(GFAppInfoConfig.getSiteId()).build();
                    mqServiceListener.sendReceiverMsg(
                            MsgModel.builder()
                                    .code("DS-GF-0000")
                                    .message("当前拉取size="+arraySize+"条已完成，开始分发")
                                    .object(dsLotteryModel).build());
                    log.info("DS-GF-0000当前startId={}——endId={}拉取size="+arraySize+"条已完成，开始分发",dsLotteryModel.getStartId(),dsLotteryModel.getEndId());
                }
            } else if (object.getString("status").equals("10000") && object.getJSONArray("message").size() == 0) { // 没有拉取到注单
                log.info("DS-GF官方彩网站={} 拉取成功,但注单数量为0,休眠1分钟,拉取结果={}", GFAppInfoConfig.getUser(), object.toJSONString());
                return;
            } else if (!object.getString("status").equals("10000")) {
                log.error("DS-GF官方彩网站={} 拉取数据失败,请检查配置,休眠1分钟,错误消息={}", GFAppInfoConfig.getUser(), object.toJSONString());
                return;
            }
        }catch (Exception e){
            e.printStackTrace();
            throw new DsException(e.getMessage());
        }

    }

}
