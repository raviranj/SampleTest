package com.mindtree.omf.search.management.Exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@AllArgsConstructor
public class RestaurantNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;
	private String message;
}
