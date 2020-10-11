package com.mindtree.omf.search.management.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mindtree.omf.search.management.model.RestaurantRatingReview;

public interface RatingRepository extends JpaRepository<RestaurantRatingReview, Long> {
	List<RestaurantRatingReview>  findByRating( double rating);

}
