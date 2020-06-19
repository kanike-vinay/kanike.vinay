package com.example.crudoperationdemo.employee.model;

import com.example.crudoperationdemo.employee.dto.Employee;
import com.example.crudoperationdemo.json.JsonViews;
import com.fasterxml.jackson.annotation.JsonView;

public class EmployeeResponseModel {

	@JsonView(JsonViews.Public.class)
	private String status;
	
	@JsonView(JsonViews.Public.class)
	private String message;
	
	@JsonView(JsonViews.Public.class)
	private Employee data;
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Employee getData() {
		return data;
	}
	public void setData(Employee data) {
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}