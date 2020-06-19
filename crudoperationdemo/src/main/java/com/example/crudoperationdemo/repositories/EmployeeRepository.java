package com.example.crudoperationdemo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.crudoperationdemo.employee.entity.EmployeeData;

public interface EmployeeRepository extends CrudRepository<EmployeeData, String>{

}