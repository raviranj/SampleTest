package com.mindtree.omf.search.management.model;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class SearchRestaurentResponse {
	private Long restaurantId;
	private String restaurantName;
	private String restaurantAddress;
	private String restaurantOffer;
	private long minimumOrder;
	private long distance;
	private double budget;
	private Double averageRating;
	private Map<String, List<Dishes>> menu;
	private Map<Double, List<RestaurantRatingReview>> ratings;
	private Map<String, List<RestaurantRatingReview>> reviews;
}
