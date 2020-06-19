package com.example.crudoperationdemo.employee.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "EMPLOYEE_TEST")
public class EmployeeData implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3578207747872240105L;

	@Id
	private String id;
	
	@Column(name = "NAME")
	private String empName;
	
	@Column(name = "AGE")
	private int empAge;
	
	@Column(name = "SALARY")
	private int empSalary;
	
	@Column(name = "LOCATION")
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