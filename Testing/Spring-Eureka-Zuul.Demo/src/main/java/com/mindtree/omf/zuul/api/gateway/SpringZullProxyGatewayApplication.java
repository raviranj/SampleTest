package com.mindtree.omf.zuul.api.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

import com.mindtree.omf.zuul.api.gateway.filter.ErrorFilter;
import com.mindtree.omf.zuul.api.gateway.filter.PostFilter;
import com.mindtree.omf.zuul.api.gateway.filter.PreFilter;
import com.mindtree.omf.zuul.api.gateway.filter.RouteFilter;

@SpringBootApplication
@EnableZuulProxy
@EnableDiscoveryClient
public class SpringZullProxyGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringZullProxyGatewayApplication.class, args);
	}

	@Bean
	public PreFilter preFilter() {
		return new PreFilter();
	}

	@Bean
	public PostFilter postFilter() {
		return new PostFilter();
	}

	@Bean
	public ErrorFilter errorFilter() {
		return new ErrorFilter();
	}

	@Bean
	public RouteFilter routeFilter() {
		return new RouteFilter();
	}

}
