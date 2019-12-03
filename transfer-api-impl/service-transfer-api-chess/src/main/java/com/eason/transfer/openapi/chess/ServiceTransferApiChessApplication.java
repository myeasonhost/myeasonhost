package com.eason.transfer.openapi.chess;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableDiscoveryClient
@SpringBootApplication
@EnableCaching
@EnableScheduling
@MapperScan(basePackages = {"com.eason.transfer.openapi.chess"})
public class ServiceTransferApiChessApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceTransferApiChessApplication.class, args);
    }

}
