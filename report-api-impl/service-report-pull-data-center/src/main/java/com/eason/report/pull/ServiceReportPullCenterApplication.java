package com.eason.report.pull;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ServiceReportPullCenterApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceReportPullCenterApplication.class, args);
    }

}
