package com.mindtree.omf.search.management.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mindtree.omf.search.management.model.Restaurant;

public interface SearchRepository extends JpaRepository<Restaurant, Long> {

	List<Restaurant> findByBudget(double budget);

	List<Restaurant> findByRestaurantId(Long restaurantid);

	List<Restaurant> findByDistance(Long distance);
}
