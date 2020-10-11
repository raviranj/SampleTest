package com.mindtree.omf.search.management.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.omf.search.management.Exception.RestaurantNotFoundException;
import com.mindtree.omf.search.management.dao.SearchDao;
import com.mindtree.omf.search.management.model.Dishes;
import com.mindtree.omf.search.management.model.Restaurant;
import com.mindtree.omf.search.management.model.RestaurantRatingReview;
import com.mindtree.omf.search.management.model.SearchByRequest;
import com.mindtree.omf.search.management.model.SearchRestaurentResponse;
import com.mindtree.omf.search.management.service.SearchService;

@Service
@Transactional
public class SearchServiceImpl implements SearchService {

	@Autowired
	private SearchDao searchDao;

	@Override
	public List<SearchRestaurentResponse> viewAllRestaurent() throws RestaurantNotFoundException {
		List<SearchRestaurentResponse> searchRestaurentResponselist = null;
		List<Restaurant> restaurantList = searchDao.findAll();
		searchRestaurentResponselist = mappingDetails(searchRestaurentResponselist, restaurantList);
		return searchRestaurentResponselist;
	}

	@Override
	public List<SearchRestaurentResponse> searchbyAttribute(SearchByRequest searchByRequest)
			throws RestaurantNotFoundException {
		List<SearchRestaurentResponse> searchRestaurentResponselist = null;
		List<Restaurant> restaurantList = searchDao.searchbyAttribute(searchByRequest);
		searchRestaurentResponselist = mappingDetails(searchRestaurentResponselist, restaurantList);
		return searchRestaurentResponselist;

	}

	private List<SearchRestaurentResponse> mappingDetails(List<SearchRestaurentResponse> searchRestaurentResponselist,
			List<Restaurant> restaurantList) {
		if (restaurantList != null) {
			searchRestaurentResponselist = new ArrayList<SearchRestaurentResponse>();
			searchRestaurentResponselist = restaurantList.stream().map((restaurant) -> {
				SearchRestaurentResponse searchRestaurentResponse = new SearchRestaurentResponse();
				List<Dishes> disheslist = restaurant.getDishes();
				Map<String, List<Dishes>> collect = disheslist.stream()
						.collect(Collectors.groupingBy(Dishes::getDishType));
				List<RestaurantRatingReview> ratingReview = restaurant.getRatingReview();
				Double averageRating = ratingReview.stream()
						.collect(Collectors.averagingDouble(RestaurantRatingReview::getRating));
				Map<Double, List<RestaurantRatingReview>> collectRatings = ratingReview.stream()
						.collect(Collectors.groupingBy(RestaurantRatingReview::getRating));
				Map<String, List<RestaurantRatingReview>> collectReviews = ratingReview.stream()
						.collect(Collectors.groupingBy(RestaurantRatingReview::getReviewComment));
				searchRestaurentResponse.setRatings(collectRatings);
				searchRestaurentResponse.setReviews(collectReviews);
				searchRestaurentResponse.setMenu(collect);
				searchRestaurentResponse.setAverageRating(averageRating);

				if (restaurant.getRestaurantId() != null) {
					searchRestaurentResponse.setRestaurantId(restaurant.getRestaurantId());
				}
				if (restaurant.getBudget() > 0) {
					searchRestaurentResponse.setBudget(restaurant.getBudget());
				}
				if (restaurant.getRestaurantName() != null) {
					searchRestaurentResponse.setRestaurantName(restaurant.getRestaurantName());
				}
				if (restaurant.getRestaurantAddress() != null) {
					searchRestaurentResponse.setRestaurantAddress(restaurant.getRestaurantAddress());
				}
				if (restaurant.getRestaurantOffer() != null) {
					searchRestaurentResponse.setRestaurantOffer(restaurant.getRestaurantOffer());
				}
				if (restaurant.getMinimumOrder() > 0) {
					searchRestaurentResponse.setMinimumOrder(restaurant.getMinimumOrder());
				}
				if (restaurant.getDistance() != null) {
					searchRestaurentResponse.setDistance(restaurant.getDistance());
				}
				return searchRestaurentResponse;
			}).collect(Collectors.toList());
		}
		return searchRestaurentResponselist;
	}
}