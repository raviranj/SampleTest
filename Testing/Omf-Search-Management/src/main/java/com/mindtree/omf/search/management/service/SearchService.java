package com.mindtree.omf.search.management.service;

import java.util.List;

import com.mindtree.omf.search.management.Exception.RestaurantNotFoundException;
import com.mindtree.omf.search.management.model.SearchByRequest;
import com.mindtree.omf.search.management.model.SearchRestaurentResponse;

public interface SearchService {

	List<SearchRestaurentResponse> viewAllRestaurent() throws RestaurantNotFoundException;

	List<SearchRestaurentResponse> searchbyAttribute(SearchByRequest searchByRequest)
			throws RestaurantNotFoundException;
}
