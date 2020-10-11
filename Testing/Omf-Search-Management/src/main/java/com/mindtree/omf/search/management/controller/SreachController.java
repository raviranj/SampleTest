package com.mindtree.omf.search.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.omf.search.management.Exception.RestaurantNotFoundException;
import com.mindtree.omf.search.management.model.SearchByRequest;
import com.mindtree.omf.search.management.model.SearchRestaurentResponse;
import com.mindtree.omf.search.management.service.SearchService;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@RestController
@OpenAPIDefinition(info = @Info(title = "OMF SEARCH API", version = "v1"))
@RequestMapping(value = "/api/omf")
public class SreachController {

	@Autowired
	private SearchService serachService;

	@GetMapping("/viewAll")
	public ResponseEntity<?> viewAllRestaurent() throws RestaurantNotFoundException {
		return new ResponseEntity<>(serachService.viewAllRestaurent(), HttpStatus.OK);
	}

	@PostMapping(value = "/searchby",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<SearchRestaurentResponse> searchbyAttribute(@RequestBody SearchByRequest searchByRequest)
			throws RestaurantNotFoundException {
		List<SearchRestaurentResponse> SearchRestaurentResponse = serachService.searchbyAttribute(searchByRequest);
		return SearchRestaurentResponse;
	}
}
