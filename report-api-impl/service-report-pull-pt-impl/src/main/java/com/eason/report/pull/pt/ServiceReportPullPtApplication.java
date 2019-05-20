package com.eason.report.pull.sgs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ServiceReportPullPtApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceReportPullPtApplication.class, args);
    }

}
