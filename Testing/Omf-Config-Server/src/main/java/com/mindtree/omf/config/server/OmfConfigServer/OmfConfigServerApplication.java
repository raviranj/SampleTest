package com.mindtree.omf.config.server.OmfConfigServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.context.config.annotation.RefreshScope;

@SpringBootApplication
@EnableConfigServer
@EnableDiscoveryClient
@RefreshScope
public class OmfConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OmfConfigServerApplication.class, args);
	}

}
