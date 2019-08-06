package com.eason.transfer.openapi.core.listener;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;


@Component
@Slf4j
public class RunnerListener implements CommandLineRunner {
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void run(String... args)  {

    }

}
