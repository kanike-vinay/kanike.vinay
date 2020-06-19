package com.example.crudoperationdemo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import com.example.crudoperationdemo.employee.controller.EmployeeController;
import com.example.crudoperationdemo.employee.dto.Employee;
import com.example.crudoperationdemo.employee.model.EmployeeResponseModel;

@SpringBootTest
class TestEmployeeController {

	@Autowired
	private EmployeeController employeeCtrl;
	
	@Autowired
	Employee employeeDto;
	
	Logger logger = LoggerFactory.getLogger(TestEmployeeController.class);
	
	@Test
	void testCreateEmployeeRecord() {
		try {
			employeeDto.setEmpName("Disha Krishnamurthy");
			employeeDto.setEmpAge(25);
			employeeDto.setEmpSalary(70000);
			employeeDto.setEmpLocation("Bengaluru");
			MockHttpServletRequest request = new MockHttpServletRequest();
			MockHttpServletResponse response = new MockHttpServletResponse();
			ResponseEntity<EmployeeResponseModel> createEmployeeRecord = employeeCtrl.createEmployeeRecord(employeeDto, request, response);
			assertNotNull(createEmployeeRecord.getBody().getData());
			assertEquals(createEmployeeRecord.getBody().getStatus(), HttpStatus.OK);
		} catch (Exception e) {
			logger.error("Internal Server Error :: ", e.getMessage());
		}
	}

}
