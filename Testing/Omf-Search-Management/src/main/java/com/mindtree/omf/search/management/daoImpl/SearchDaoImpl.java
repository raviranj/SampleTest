package com.mindtree.omf.search.management.daoImpl;

import java.util.List;
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
import com.mindtree.omf.search.management.repository.DishRepository;
import com.mindtree.omf.search.management.repository.RatingRepository;
import com.mindtree.omf.search.management.repository.SearchRepository;

@Service
@Transactional
public class SearchDaoImpl implements SearchDao {

	@Autowired
	private SearchRepository searchRepository;

	@Autowired
	private RatingRepository ratingRepository;

	@Autowired
	private DishRepository dishRepository;

	@Override
	public List<Restaurant> findAll() throws RestaurantNotFoundException {
		List<Restaurant> restaurantlist = searchRepository.findAll();
		if (restaurantlist != null) {
			return restaurantlist;
		} else {
			throw new RestaurantNotFoundException("Restaurant Details are not available");
		}

	}

	@Override
	public List<Restaurant> searchbyAttribute(SearchByRequest searchByRequest) throws RestaurantNotFoundException {
		List<Restaurant> restaurantlist = null;
		if (searchByRequest.getDistance() != null && searchByRequest.getDistance() > 0) {
			restaurantlist = searchRepository.findByDistance(searchByRequest.getDistance());
			if (restaurantlist != null) {
				return restaurantlist;
			} else {
				throw new RestaurantNotFoundException(
						"Restaurant is not availble for " + searchByRequest.getDistance() + " Km distance");
			}
		}
		if (searchByRequest.getBudget() > 0) {
			restaurantlist = searchRepository.findByBudget(searchByRequest.getBudget());

			if (restaurantlist != null) {
				return restaurantlist;
			} else {
				throw new RestaurantNotFoundException(
						"Restaurant is not availble for " + searchByRequest.getBudget() + "Rs Budget");
			}
		}
		if (searchByRequest.getDishType() != null && searchByRequest.getDishType() != "") {
			List<Dishes> dishList = dishRepository.findByDishType(searchByRequest.getDishType());
			if (dishList != null) {
				List<Restaurant> restaurantList = dishList.stream().map(e -> e.getRestaurant())
						.collect(Collectors.toList());
				return restaurantList;
			} else {
				throw new RestaurantNotFoundException(
						"Restaurant is not availble for " + searchByRequest.getDishType() + " type");
			}
		}
		if (searchByRequest.getRating() > 0) {
			List<RestaurantRatingReview> ratinglist = ratingRepository.findByRating(searchByRequest.getRating());
			if (ratinglist != null) {
				List<Restaurant> restaurantList = ratinglist.stream().map(e -> e.getRestaurant())
						.collect(Collectors.toList());
				return restaurantList;
			} else {
				throw new RestaurantNotFoundException(
						"Restaurant is not availble for " + searchByRequest.getRating() + " Ratig");
			}
		}
		if (Long.valueOf(searchByRequest.getRestaurantId()) != null) {
			return searchRepository.findByRestaurantId(Long.valueOf(searchByRequest.getRestaurantId()));
		}
		return restaurantlist;
	}
}
