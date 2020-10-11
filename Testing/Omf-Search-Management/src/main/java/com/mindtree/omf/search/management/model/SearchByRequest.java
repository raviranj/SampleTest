package com.mindtree.omf.search.management.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import lombok.Data;

@Data
@JsonAutoDetect
public class SearchByRequest implements Serializable {
	private static final long serialVersionUID = 1L;
	private String dishType;
	private Long distance;
	private double budget;
	private double rating;
	private Long restaurantId;

}
