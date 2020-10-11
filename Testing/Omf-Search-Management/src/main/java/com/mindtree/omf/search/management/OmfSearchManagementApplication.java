package com.mindtree.omf.search.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class OmfSearchManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(OmfSearchManagementApplication.class, args);
	}

}
