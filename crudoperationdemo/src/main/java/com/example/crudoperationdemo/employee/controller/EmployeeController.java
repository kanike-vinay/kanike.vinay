package com.example.crudoperationdemo.employee.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.crudoperationdemo.employee.dto.Employee;
import com.example.crudoperationdemo.employee.entity.EmployeeData;
import com.example.crudoperationdemo.employee.model.EmployeeResponseModel;
import com.example.crudoperationdemo.json.JsonViews;
import com.example.crudoperationdemo.services.EmployeeService;
import com.fasterxml.jackson.annotation.JsonView;

@Controller("employeeController")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private com.example.crudoperationdemo.employee.service.EmployeeService employeeServiceConversion;
	
	@GetMapping(value = "/")
	public ResponseEntity<String> sayHello(){
		return new ResponseEntity<>("Started Successfuly!!", HttpStatus.OK);
	}
	
	@PostMapping(value = "/employee/create")
	@JsonView(JsonViews.Public.class)
	public ResponseEntity<EmployeeResponseModel> createEmployeeRecord(@Valid @RequestBody Employee employee,
			HttpServletRequest request,
			HttpServletResponse response) {
		
		EmployeeResponseModel employeeResponseModel = new EmployeeResponseModel();
		try {
			EmployeeData employeeEntity = employeeServiceConversion.convertEmployeeDtoToEntity(employee);
			employeeService.saveOrUpdate(employeeEntity);
		} catch (Exception e) {
			employeeResponseModel.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.name());
			employeeResponseModel.setMessage("Error saving employee record");
			return new ResponseEntity<>(employeeResponseModel, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if(Optional.ofNullable(employee).isPresent()) {
			employeeResponseModel.setStatus(HttpStatus.OK.name());
			employeeResponseModel.setMessage("Employee record inserted successfuly");
			employeeResponseModel.setData(employee);
		}
		return new ResponseEntity<>(employeeResponseModel, HttpStatus.OK);
	}
}