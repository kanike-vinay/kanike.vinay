package com.vinay.lambda.sample.example;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class LambdaTestMain {

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

		System.out.println("---------Sorting name with anonymous class----------");

		Collections.sort(employees, new Comparator<Employee>() {
			@Override
			public int compare(Employee e1, Employee e2) {
				return e1.getName().compareTo(e2.getName());
			}
		});

		for (Employee employee : employees) {
			System.out.println(employee.getName());
		}

		System.out.println("---------Sorting name with lambda class----------");

		List<Employee> employeesLambda = new ArrayList<>();
		employeesLambda.add(vinay);
		employeesLambda.add(disha);
		employeesLambda.add(pushpa);
		employeesLambda.add(naresh);
		employeesLambda.add(scott);
		employeesLambda.add(peter);

		Collections.sort(employeesLambda, (emp1, emp2) -> {
			return emp1.getName().compareTo(emp2.getName());
		});

		employeesLambda.forEach(emp -> {
			System.out.println(emp.getName());
		});

		System.out.println("----------Upper and Concat - Anonymous class-----------");
		String sillyString = doUpperConcat(new UpperConcat() {
			@Override
			public String upperAndConcat(String s1, String s2) {
				return s1.toUpperCase() + s2.toUpperCase();
			}
		}, "String1 ", "String2");
		System.out.println("Upper and concat :: anonymous :: silly string :: " + sillyString);

		System.out.println("-----------Upper and Concat - Lambda class-----------");
		UpperConcat uc = (s1, s2) -> s1.toUpperCase() + s2.toUpperCase();
		String sillyStrLambda = doUpperConcat(uc, "Vinay ", "Kanike");
		System.out.println("Upper and concat :: lambda :: silly string :: " + sillyStrLambda);

	}

	public static String doUpperConcat(UpperConcat uc, String s1, String s2) {
		return uc.upperAndConcat(s1, s2);
	}

}

interface UpperConcat {
	public String upperAndConcat(String s1, String s2);
}
