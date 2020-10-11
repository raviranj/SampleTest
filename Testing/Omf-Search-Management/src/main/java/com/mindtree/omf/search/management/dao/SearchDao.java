package com.mindtree.omf.search.management.dao;

import java.util.List;

import com.mindtree.omf.search.management.Exception.RestaurantNotFoundException;
import com.mindtree.omf.search.management.model.Restaurant;
import com.mindtree.omf.search.management.model.SearchByRequest;

public interface SearchDao {
	List<Restaurant> findAll() throws RestaurantNotFoundException;
	List<Restaurant> searchbyAttribute(SearchByRequest searchByRequest) throws RestaurantNotFoundException;
}
