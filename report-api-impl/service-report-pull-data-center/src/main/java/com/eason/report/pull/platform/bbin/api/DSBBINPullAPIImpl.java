package com.eason.report.pull.platform.bbin.api;

import com.alibaba.fastjson.JSONArray;
import com.eason.report.pull.core.annotation.LoadConfig;
import com.eason.report.pull.core.annotation.MQProducer;
import com.eason.report.pull.core.annotation.TypeMgr;
import com.eason.report.pull.core.base.BaseAPI;
import com.eason.report.pull.platform.bbin.dao.DSBBINConfigDao;
import com.eason.report.pull.platform.bbin.dao.po.DsBbinGameConfigPo;
import com.eason.report.pull.platform.bbin.exception.BBINException;
import com.eason.report.pull.platform.bbin.mgo.DSBBINMgoPo;
import com.eason.report.pull.platform.bbin.mgr.DSBBINMgr;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * @author EASON LI
 */
@MQProducer(name = "DSBBINPullAPIImpl",code = "DS-BBIN",url = "/dsbbin/getPullBet")
@Slf4j
public class DSBBINPullAPIImpl extends BaseAPI {

    @Autowired
    private DSBBINConfigDao configDao;

    @LoadConfig(name = "DS-BBIN配置信息")
    public List<DsBbinGameConfigPo> loadConfig(){
        List<DsBbinGameConfigPo> configMgoList=configDao.findConfig();
        configMgoList.forEach(po -> {
            Map<Integer,String> map=new HashMap<>();
            String[] ary=po.getSiteId().split(","); //TYZ_1020,MHD_1040
            for (String s:ary){ //TYZ_1020
                String[] i=s.split("_");
                map.put(Integer.parseInt(i[1]),i[0]+"");
            }
            po.setSiteMap(map);
        });

        log.info("DS-BBIN读取的配置：configList="+configMgoList);
        return configMgoList;
    }

    @TypeMgr(name = "拉取操作",targetMgr = DSBBINMgr.class)
    public int getPullBet(DsBbinGameConfigPo configPo, DSBBINMgr iPullMgr) throws BBINException {
        try{
            JSONArray jsonArray= iPullMgr.loadDataToEndTime(configPo);
            int arraySize = jsonArray.size();
            log.info("DS-BBIN网站={},拉取到注单,数量={}",configPo.getAgentId(), arraySize);
            for (int i = 0; i < arraySize; i++) {
                DSBBINMgoPo po = jsonArray.getObject(i, DSBBINMgoPo.class);
                iPullMgr.saveAndUpdate(po, configPo);
            }
            return arraySize;
        }catch(Exception e){
            throw new BBINException(e);
        }
    }

}
