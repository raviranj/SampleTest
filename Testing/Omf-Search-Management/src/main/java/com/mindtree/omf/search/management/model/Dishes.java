package com.mindtree.omf.search.management.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "DISH_INFO")
public class Dishes implements Serializable {
	private static final long serialVersionUID = 8247370011818025420L;

	@Id
	@Column(name = "dish_id")
	private long dishId;

	@Column(name = "dish_name")
	private String dishName;

	@Column(name = "dish_price")
	private double dishPrice;

	@Column(name = "dish_type")
	private String dishType;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "restaurant_id")
	private Restaurant restaurant;

}
