package com.vinay.lambda.sample.example;

import java.util.Random;
import java.util.function.Supplier;

public class LambdaTestMainPart2Supplier {

	public static void main(String[] args) {
		
		System.out.println("-------------Normal Random Function-----------");
		Random random = new Random();
		for(int i = 0; i < 10; i++) {
			System.out.println(random.nextInt(1000));
		}
		
		System.out.println("------------RANDOM FUNCTION WITH SUPPLIER-------------");
		Supplier<Integer> supplierRandom = () -> random.nextInt(1000);
		for(int i = 0; i < 10; i++) {
			System.out.println(supplierRandom.get());
		}

	}

}
