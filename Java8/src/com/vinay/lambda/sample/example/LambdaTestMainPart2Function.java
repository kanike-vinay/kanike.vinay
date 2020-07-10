package com.vinay.lambda.sample.example;

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.IntBinaryOperator;
import java.util.function.IntUnaryOperator;

public class LambdaTestMainPart2Function {

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

		// a way using interface, below will be a sample example. Need to create two interface and then we can either create lambda class or implement the anonymous class. Preferable lambda
		System.out.println("----------Retriving firstname with anonymous class----------");
		String firstName = getFirstName(new EmployeeFirstName() {
			@Override
			public String getFirstName(String s) {
				return s.substring(0, s.indexOf(' '));
			}
		}, employees.get(0));
		System.out.println("First Name :: Anonymous class :: " + firstName);

		System.out.println("----------Retriving lastname with anonymous class----------");
		String lastName = getLastName(new EmployeeLastName() {
			@Override
			public String getLastName(String s) {
				return s.substring(s.indexOf(' ') + 1);
			}
		}, employees.get(0));
		System.out.println("Last Name :: Anonymous class :: " + lastName);
		
		System.out.println("----------Retriving firstname with lambda class----------");
		EmployeeFirstName employeeFirstName = (s) -> s.substring(0, s.indexOf(' '));
		String firstNameWithLambda = getFirstName(employeeFirstName, employees.get(0));
		System.out.println("First Name :: lambda class :: " + firstNameWithLambda);

		System.out.println("----------Retriving lastname with lambda class----------");
		EmployeeLastName employeeLastName = (s) -> s.substring(s.indexOf(' ') + 1);
		String lastNameWithLambda = getLastName(employeeLastName, employees.get(0));
		System.out.println("Last Name :: lambda class :: " + lastNameWithLambda);
		
		// sample example of above example using Functions, which avoids creating multiple interface for different logic to perform
		System.out.println("----------Retriving Employee firstname with Lambda Functions----------");
		Function<Employee, String> firstNameWithFunction = (emp) -> emp.getName().substring(0, emp.getName().indexOf(' ' ));
		employees.forEach(emp -> {
			System.out.println("First Name :: Using lambda function :: " + getNameGeneric(firstNameWithFunction, emp));
		});
		
		System.out.println("----------Retriving Employee last with Lambda Functions----------");
		Function<Employee, String> lastNameWithFunction = (emp) -> emp.getName().substring(emp.getName().indexOf(' ' ) + 1);
		employees.forEach(emp -> {
			System.out.println("Last Name :: Using lambda function :: " + getNameGeneric(lastNameWithFunction, emp));
		});
		
		System.out.println("----------Retriving Employee age with Lambda Functions----------");
		Function<Employee, Integer> employeeAgeWithFunction = (emp) -> emp.getAge();
		employees.forEach(emp -> {
			System.out.println("Employee Age :: Using lambda function :: " + employeeAgeWithFunction.apply(emp));
		});
		
		Function<String, String> upperCase = (s) -> s.toUpperCase();
		
		System.out.println("----------Combining First Name and UpperCase with Lambda Functions----------");
		Function<Employee, String> chainedFunctionFirstNameUppercase = firstNameWithFunction.andThen(upperCase);
		employees.forEach(emp -> {
			System.out.println("Employee First Name and Upper Case Combining :: Using lambda function :: " + chainedFunctionFirstNameUppercase.apply(emp));
		});
		
		System.out.println("----------Combining First Name and UpperCase and last name with Lambda BiFunction----------");
		BiFunction<Employee, Function<Employee, String>, String> finalResult = (emp, chainedFunction) -> chainedFunction.apply(emp).toString().
				concat(" " + emp.getName().substring(emp.getName().indexOf(' ') + 1).toUpperCase());
			
		employees.forEach(emp -> {
			System.out.println("Final Result :: " + finalResult.apply(emp, chainedFunctionFirstNameUppercase));
		});
		
		System.out.println("----------Integer Unary Operator Example----------");
		IntUnaryOperator incBy5 = i -> i + 5;
		System.out.println("Unary Operator result :: " + incBy5.applyAsInt(10));
		
		System.out.println("----------Integer Unary Operator Example----------");
		IntBinaryOperator multiplyOperator = (i, j) -> i * j;
		System.out.println("Binary Operator result :: " + multiplyOperator.applyAsInt(5, 5));
	}

	public static String getFirstName(EmployeeFirstName efn, Employee employee) {
		return efn.getFirstName(employee.getName());
	}

	public static String getLastName(EmployeeLastName eln, Employee employee) {
		return eln.getLastName(employee.getName());
	}
	
	public static String getNameGeneric(Function<Employee, String> functionEmp, Employee employee) {
		return functionEmp.apply(employee);
	}

}

interface EmployeeFirstName {
	public String getFirstName(String s);
}

interface EmployeeLastName {
	public String getLastName(String s);
}
