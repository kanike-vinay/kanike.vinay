package com.example.crudoperationdemo.services;

import java.util.List;
import java.util.Optional;

import com.example.crudoperationdemo.employee.entity.EmployeeData;

public interface EmployeeService {

	List<EmployeeData> listAll();
	
	Optional<EmployeeData> getById(String id);
	
	EmployeeData saveOrUpdate(EmployeeData employeeData);
	
	void delete(String id);
	
}