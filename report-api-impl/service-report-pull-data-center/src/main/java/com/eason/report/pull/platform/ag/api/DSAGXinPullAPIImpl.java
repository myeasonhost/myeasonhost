package com.eason.report.pull.platform.ag.api;

import com.eason.report.pull.core.annotation.LoadConfig;
import com.eason.report.pull.core.annotation.MQProducer;
import com.eason.report.pull.core.annotation.TypeMgr;
import com.eason.report.pull.core.base.BaseAPI;
import com.eason.report.pull.platform.ag.dao.DSAGConfigDao;
import com.eason.report.pull.platform.ag.exception.AGException;
import com.eason.report.pull.platform.ag.mgo.DSAGXinMgoPo;
import com.eason.report.pull.platform.ag.mgr.DSAGXinMgr;
import com.eason.report.pull.platform.ag.model.xin.XinModel;
import com.eason.report.pull.platform.ag.po.DsAGGameConfigPo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * @author EASON LI
 */
@MQProducer(name = "DSAGXinPullAPIImpl",code = "DS-AG-XIN",url = "/dsagxin/getPullBet")
@Slf4j
public class DSAGXinPullAPIImpl extends BaseAPI {

    @Autowired
    private DSAGConfigDao configDao;

    @LoadConfig(name = "DS-AG配置信息")
    public List<DsAGGameConfigPo> loadConfig(){
        List<DsAGGameConfigPo> configMgoList=configDao.findConfig("DS-AG-XIN");
        configMgoList.forEach(po -> {
            Map<Integer,String> map=new HashMap<>();
            String[] ary=po.getSiteId().split(","); //TYZ_1020,MHD_1040
            for (String s:ary){ //TYZ_1020
                String[] i=s.split("_");
                map.put(Integer.parseInt(i[1]),i[0]+"");
            }
            po.setSiteMap(map);
        });

        log.info("DS-AG读取的配置：configList="+configMgoList);
        return configMgoList;
    }

    @TypeMgr(name = "拉取操作",targetMgr = DSAGXinMgr.class)
    public int getPullBet(DsAGGameConfigPo configPo, DSAGXinMgr iPullMgr) throws AGException {
        try{
            Timestamp startId=iPullMgr.getNextId(configPo);
            Integer length=configPo.getLength();
            List<XinModel> list= iPullMgr.loadDataToEndTime(startId,length,configPo);
            int arraySize = list.size();
            log.info("DS-AG网站={},拉取到注单,数量={}",configPo.getAgentId(), arraySize);
            for (int i = 0; i < arraySize; i++) {
                DSAGXinMgoPo dsagXinMgoPo=new DSAGXinMgoPo();
                XinModel model = list.get(i);
                BeanUtils.copyProperties(model,dsagXinMgoPo);
                iPullMgr.saveAndUpdate(dsagXinMgoPo, configPo);
            }
            return arraySize;
        }catch(Exception e){
            throw new AGException(e);
        }
    }

}
