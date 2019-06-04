package com.eason.report.pull.core.base;

import com.eason.report.pull.core.annotation.MQConsumer;
import com.eason.report.pull.core.annotation.MQProducer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@Slf4j
public class BaseAPI implements ApplicationContextAware {

    @Value("${target.siteId}")
    protected Integer siteId;

    public static final Integer GAMENUM=11; //彩票、视讯、电游、棋牌、体育


    public static final String xxxPullAPIImpl="PullAPIImpl";
    public static final String xxxPushAPIImpl="PushAPIImpl";


    /**MG的配置**/
    public static final String DATE_PATTERN="yyyy:MM:dd:HH:mm:ss";
    public static final String MG_PULL_CONFIG="mg_pull_config";
    public static final String START_TIME="startTime";
    public static final String END_TIME="endTime";
    public static final String CREATE_TIME="createTime";


    protected Map<String, Object> producerMap;
    protected Map<String, Object> consumerMap;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        producerMap = applicationContext.getBeansWithAnnotation(MQProducer.class); // 获取所有带有 MQProducer 注解的 Spring Bean
        consumerMap = applicationContext.getBeansWithAnnotation(MQConsumer.class); // 获取所有带有 MQConsumer 注解的 Spring Bean
    }

}