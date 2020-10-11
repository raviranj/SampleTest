package com.mindtree.omf.search.management.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import lombok.Data;

@Data
@Entity
@Table(name = "RESTAURANT_INFO")
public class Restaurant implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "restaurant_id",nullable = false) 	
	private Long restaurantId;

	@Column(name = "restaurant_name")
	private String restaurantName;

	@Column(name = "restaurant_address")
	private String restaurantAddress;

	@Column(name = "restaurant_offer")
	private String restaurantOffer;

	@Column(name = "restaurant_distance")
	private Long distance;
	
	@Column(name = "restaurant_minimum_order")
	private long minimumOrder;

	@Column(name = "restaurant_latitude")
	private long latitude;

	@Column(name = "restaurant_longitude")
	private long longitude;

	private double budget;

	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany
	@JoinColumn(name = "restaurant_id")
	private List<Dishes> dishes ;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany
	@JoinColumn(name = "restaurant_id")
	private List<RestaurantRatingReview> ratingReview ;

}
