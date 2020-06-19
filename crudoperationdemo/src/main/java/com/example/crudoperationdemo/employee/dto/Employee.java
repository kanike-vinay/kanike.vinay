package com.example.crudoperationdemo.employee.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

import com.example.crudoperationdemo.json.JsonViews;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;

@Component
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonView(JsonViews.Public.class)
public class Employee {

	private String id;

	@NotBlank(message="Employee name can not be null")
	@Size(max=20, message= "Employee name can be maximum of 20 characters")
	private String empName;

	private int empAge;

	private int empSalary;

	@NotBlank(message="Employee location can not be null")
	private String empLocation;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public int getEmpAge() {
		return empAge;
	}

	public void setEmpAge(int empAge) {
		this.empAge = empAge;
	}

	public int getEmpSalary() {
		return empSalary;
	}

	public void setEmpSalary(int empSalary) {
		this.empSalary = empSalary;
	}

	public String getEmpLocation() {
		return empLocation;
	}

	public void setEmpLocation(String empLocation) {
		this.empLocation = empLocation;
	}

}