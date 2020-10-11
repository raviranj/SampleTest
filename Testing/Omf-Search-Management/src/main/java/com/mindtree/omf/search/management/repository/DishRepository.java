package com.mindtree.omf.search.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mindtree.omf.search.management.model.Dishes;

public interface DishRepository extends JpaRepository<Dishes, Long> {

	List<Dishes> findByDishType(String type);

}
