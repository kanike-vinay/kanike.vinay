package com.vinay.lambda.sample.example;

import java.util.ArrayList;
import java.util.List;
import java.util.function.IntPredicate;
import java.util.function.Predicate;

public class LambdaTestMainPart2Predicate {
	public static void main(String[] args) {

		Employee vinay = new Employee("Vinay Kanike", 26);
		Employee disha = new Employee("Disha Krishnamurthy", 25);
		Employee pushpa = new Employee("Pushpa K", 45);
		Employee naresh = new Employee("Naresh Kumar", 55);
		Employee scott = new Employee("Scott Henderson", 21);
		Employee peter = new Employee("Peter ESS", 15);

		List<Employee> employees = new ArrayList<>();
		employees.add(vinay);
		employees.add(disha);
		employees.add(pushpa);
		employees.add(naresh);
		employees.add(scott);
		employees.add(peter);
		
		printEmployeeByAgeGreaterThan30(employees);
		
		Predicate<Employee> ageConditionGreaterThan30 = (emp) -> emp.getAge() > 30;
		Predicate<Employee> ageConditionGreaterYoungetThan25 = (emp) -> emp.getAge() < 25;
		Predicate<Employee> ageConditionGreaterThan25 = (emp) -> emp.getAge() > 25;
		Predicate<Employee> ageConditionLessThan30 = (emp) -> emp.getAge() < 30;
		
		printEmployeeByAge(employees, "Employees of age more than 30", ageConditionGreaterThan30);
		printEmployeeByAge(employees, "Employees of age younger than 25", ageConditionGreaterYoungetThan25);
		printEmployeeByAge(employees, "Employees of age between 25 and 30", ageConditionGreaterThan25.and(ageConditionLessThan30));
		
		IntPredicate intPredicate = (i) -> i > 0 && i < 10;
		System.out.println("intPredicate value :: boolean :: " + intPredicate.test(5));
		System.out.println("intPredicate value :: boolean :: " + intPredicate.test(10));
		
	}
	
	private static void printEmployeeByAgeGreaterThan30(List<Employee> employees) {
		employees.forEach(employee -> {
			if(employee.getAge() > 30) {
				System.out.println(employee.getName());
			}
		});
	}
	
	private static void printEmployeeByAge(List<Employee> employees, 
			String ageText, Predicate<Employee> ageCondition) {
		System.out.println(ageText);
		employees.forEach(emp -> {
			if(ageCondition.test(emp)) {
				System.out.println(emp.getName());
			}
		});
	}
}
