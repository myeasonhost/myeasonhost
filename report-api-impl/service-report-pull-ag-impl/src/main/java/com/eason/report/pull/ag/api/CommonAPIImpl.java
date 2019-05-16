package com.eason.report.pull.ag.api;

import com.eason.report.pull.ag.ICommonAPI;
import com.eason.report.pull.ag.utils.Md5Util;
import com.eason.report.pull.ag.vo.common.*;
import com.eason.report.pull.ag.vo.competition.CompOrdersRo;
import com.eason.report.pull.ag.vo.competition.CompOrdersVo;
import com.eason.report.pull.ag.vo.hunter.GameOrdersRo;
import com.eason.report.pull.ag.vo.hunter.GameOrdersVo;
import com.eason.report.pull.ag.vo.hunter.ScenesOfUserReportExtVo;
import com.eason.report.pull.ag.vo.hunter.ScenesOfUserReportExtRo;
import com.eason.report.pull.ag.vo.live.OrdersRo;
import com.eason.report.pull.ag.vo.live.OrdersVo;
import com.eason.report.pull.ag.vo.slot.SlotOrdersRo;
import com.eason.report.pull.ag.vo.slot.SlotOrdersTExRo;
import com.eason.report.pull.ag.vo.slot.SlotOrdersTExVo;
import com.eason.report.pull.ag.vo.slot.SlotOrdersVo;
import com.eason.report.pull.ag.vo.sport.AgSportOrdersExVo;
import com.eason.report.pull.ag.vo.sport.AgSportOrdersExRo;
import com.eason.report.pull.ag.vo.xinSlot.XinEventResRo;
import com.eason.report.pull.ag.vo.xinSlot.XinEventResVo;
import com.eason.report.pull.ag.vo.xinSlot.XinSlotEventResRo;
import com.eason.report.pull.ag.vo.xinSlot.XinSlotEventResVo;
import com.eason.report.pull.ag.vo.yoPlay.YoPlayOrdersExRo;
import com.eason.report.pull.ag.vo.yoPlay.YoPlayOrdersExVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import static com.eason.report.pull.ag.utils.XStreamUtil.xmlStrToOject;

/**
 * @author EASON LI
 */
@Service
@Slf4j
public class CommonAPIImpl implements ICommonAPI {

    // 启动的时候要注意，由于我们在controller中注入了RestTemplate，所以启动的时候需要实例化该类的一个实例
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private RedisTemplate redisTemplate10;
    @Autowired
    private StringRedisTemplate stringRedisTemplate10;


    @Override
    public SumOrdersRo getSumOrders(SumOrdersVo vo) {
        try {
            String pullUrl = stringRedisTemplate10.boundHashOps("ag").get("pullUrl").toString();
            String pidtoken = stringRedisTemplate10.boundHashOps("ag").get("pidtoken").toString();

            String key = Md5Util.makeMd5Sum((vo.getCAgent() + vo.getStartDate() + vo.getEndDate() + pidtoken).getBytes());
            vo.setKey(key);
          /*  String str = restTemplate.getForObject(pullUrl, SumOrdersRo.class, SumOrdersVo.class).toString();
            SumOrdersRo agList = (SumOrdersRo) xmlStrToOject(SumOrdersRo.class, str);*/
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @Override
    public SumOrdersDaysRo getSumOrdersDays(SumOrdersDaysVo vo) {
        return null;
    }

    @Override
    public SumOrdersDaysXinRo getSumOrdersDaysXin(SumOrdersDaysXinVo vo) {
        return null;
    }
    @Override
    public OrdersRo getOrders(OrdersVo vo) {
        return null;
    }

    @Override
    public SlotOrdersRo getSlotOrdersEX(SlotOrdersVo vo) {
        return null;
    }

    @Override
    public YoPlayOrdersExRo getYoPlayOrdersEX(YoPlayOrdersExVo vo) {
        return null;
    }

    @Override
    public SlotOrdersTExRo getSlotOrdersTEX(SlotOrdersTExVo vo) {
        return null;
    }

    @Override
    public AgSportOrdersExRo getAgSportOrdersEX(AgSportOrdersExVo vo) {
        return null;
    }

    @Override
    public XinSlotEventResRo getXinSlotEventRes(XinSlotEventResVo vo) {
        return null;
    }

    @Override
    public XinEventResRo getXinEventRes(XinEventResVo vo) {
        return null;
    }

    @Override
    public CompOrdersRo getComPorders(CompOrdersVo vo) {
        return null;
    }

    @Override
    public GameOrdersRo getGameOrders(GameOrdersVo vo) {
        return null;
    }

    @Override
    public ScenesOfUserReportExtRo getScenesOfUserReportExt(ScenesOfUserReportExtVo vo) {
        return null;
    }
}
