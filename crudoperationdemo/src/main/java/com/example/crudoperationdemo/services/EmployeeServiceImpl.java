package com.example.crudoperationdemo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.crudoperationdemo.employee.entity.EmployeeData;
import com.example.crudoperationdemo.repositories.EmployeeRepository;

@Component("employeeServiceImpl")
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public List<EmployeeData> listAll() {
		List<EmployeeData> employeesData = new ArrayList<>();
		employeeRepository.findAll().forEach(employeesData::add);
		return employeesData;
	}

	@Override
	public Optional<EmployeeData> getById(String id) {
		return employeeRepository.findById(id);
	}

	@Override
	public EmployeeData saveOrUpdate(EmployeeData employeeData) {
		employeeRepository.save(employeeData);
		return employeeData;
	}

	@Override
	public void delete(String id) {
		employeeRepository.deleteById(id);
	}

}