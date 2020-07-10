package com.vinay.stream.sample.example;

import java.util.ArrayList;
import java.util.List;

public class Department {

	private String name;
	private List<Employee> employees;

	public Department() {

	}

	public Department(String name) {
		this.name = name;
		this.employees = new ArrayList<>();
	}

	public void addEmployee(Employee employee) {
		this.employees.add(employee);
	}

	public List<Employee> getEmployees() {
		return this.employees;
	}

}
