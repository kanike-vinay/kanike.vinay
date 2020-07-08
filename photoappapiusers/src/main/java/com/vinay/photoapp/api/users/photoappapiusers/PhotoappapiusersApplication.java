package com.vinay.photoapp.api.users.photoappapiusers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PhotoappapiusersApplication {

    public static void main(String[] args) {
        SpringApplication.run(PhotoappapiusersApplication.class, args);
    }

}
