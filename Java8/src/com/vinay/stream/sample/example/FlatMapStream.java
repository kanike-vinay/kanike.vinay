package com.vinay.stream.sample.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

public class FlatMapStream {
	
	public static void main(String[] args) {

		Employee vinay = new Employee("Vinay Kanike", 26);
		Employee disha = new Employee("Disha Krishnamurthy", 25);
		Employee vinaynaresh = new Employee("Vinay Naresh Kanike", 25);
		Employee pushpa = new Employee("Pushpa K", 45);
		Employee naresh = new Employee("Naresh Kumar", 55);
		Employee scott = new Employee("Scott Henderson", 21);
		Employee peter = new Employee("Peter ESS", 15);

		Department hr = new Department("Human Resource");
		hr.addEmployee(disha);
		hr.addEmployee(vinay);
		hr.addEmployee(scott);
		hr.addEmployee(vinaynaresh);
		
		Department accounting = new Department("Accounting");
		accounting.addEmployee(naresh);
		accounting.addEmployee(pushpa);
		accounting.addEmployee(peter);
		
		List<Department> departments = new ArrayList<>();
		departments.add(hr);
		departments.add(accounting);
		
		departments.stream()
		.flatMap(department -> department.getEmployees().stream())
		.forEach(System.out::println);
		
		System.out.println("-----------Group by employee age--------------");
		Map<Integer, List<Employee>> groupByAge = departments.stream()
				.flatMap(department -> department.getEmployees().stream())
				.collect(Collectors.groupingBy(emp -> emp.getAge()));
		System.out.println("Group by result of employee age ");
		
		groupByAge.forEach((key, value) -> {
			System.out.println("Key :: " + key + " Value :: " + value);
		});
		
		System.out.println("Finding youngest employee from all the department");
		Optional<Employee> youngestEmployeeName = departments.stream()
		.flatMap(department -> department.getEmployees().stream())
		.reduce((e1, e2) -> e1.getAge() < e2.getAge() ? e1 : e2);
		youngestEmployeeName.ifPresent(System.out::println);

	}

}
