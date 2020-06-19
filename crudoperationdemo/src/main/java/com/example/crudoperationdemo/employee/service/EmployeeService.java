package com.example.crudoperationdemo.employee.service;

import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.example.crudoperationdemo.employee.dto.Employee;
import com.example.crudoperationdemo.employee.entity.EmployeeData;

@Service("employeeService")
public class EmployeeService {
	
	public EmployeeData convertEmployeeDtoToEntity(Employee employee) {
		ModelMapper modelMapper = new ModelMapper();
		String randomId = UUID.randomUUID().toString();
		employee.setId(randomId);
		return modelMapper.map(employee, EmployeeData.class);
	}
	
	public Employee convertEmployeeEntityToDto(EmployeeData employee) {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(employee, Employee.class);
	}

}
