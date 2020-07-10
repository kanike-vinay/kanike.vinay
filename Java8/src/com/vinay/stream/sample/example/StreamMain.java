package com.vinay.stream.sample.example;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamMain {

	public static void main(String[] args) throws InterruptedException {
		List<String> someBingoNumbers = Arrays.asList("N40", "N36", "B12", "B6", "G53", "G49", "G60", "G50", "g64",
				"I26", "I17", "T29", "O71");

		System.out.println("----------------Without using Java streams----------------");
		List<String> gNumbers = new ArrayList<>();
		someBingoNumbers.forEach(number -> {
			if (number.toUpperCase().startsWith("G")) {
				gNumbers.add(number);
			}
		});
		gNumbers.sort((gNum1, gNum2) -> gNum1.compareTo(gNum2));
		gNumbers.forEach(gNum -> System.out.println(gNum));

		System.out.println("----------------Using Java streams----------------");
		someBingoNumbers.stream().map(String::toUpperCase).filter(s -> s.startsWith("G")).sorted()
				.forEach(System.out::println);

		Stream<String> ioNumberStream = Stream.of("I26", "I17", "I29", "O71");
		Stream<String> inNumberStream = Stream.of("N40", "N36", "I26", "I17", "I29", "O71");
		Stream<String> concatStream = Stream.concat(ioNumberStream, inNumberStream);
		
		System.out.println("----------------Making use of collect in streams to store the final result----------------");
		List<String> sortedGNumbers = someBingoNumbers.stream()
				.map(String::toUpperCase)
				.filter(s -> s.startsWith("G"))
				.sorted()
				.collect(Collectors.toList());
		System.out.println("Collector sorted G numbers");
		sortedGNumbers.forEach(System.out::println);
		
		System.out.println("----------------Making use of another version of collect method in streams to store the final result----------------");
		List<String> sortedGNumbersArrLst = someBingoNumbers.stream()
				.map(String::toUpperCase)
				.filter(s -> s.startsWith("G"))
				.sorted()
				.collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
		System.out.println("Collector sorted G numbers ArrayList");
		sortedGNumbersArrLst.forEach(System.out::println);

		// Un-commenting the below line of code will throw illegal state exception
		// because stream should be operated on (invoking an intermediate or terminal
		// stream operation) only once
		/*
		 * System.out.println("Printing the count of distinct items in stream :: " +
		 * concatStream.distinct().count()); Thread.sleep(5000);
		 */

		System.out.println(
				"------------Using peek of stream to see the output return from each intermediate opearations------------");
		System.out.println("Distinct items :: " + concatStream.distinct().peek(System.out::println).count());

		// to avoid illegal state exception, creating a new Stream each time we need
		// one.
		Supplier<Stream<String>> ioNumberSupplierStream = () -> Stream.of("I26", "I17", "I29", "O71");
		Supplier<Stream<String>> inNumberSupplierStream = () -> Stream.of("N40", "N36", "I26", "I17", "I29", "O71");
		Supplier<Stream<String>> concatSupplierStream = () -> Stream.concat(ioNumberSupplierStream.get(),
				inNumberSupplierStream.get());

		System.out.println("Printing the count of distinct items in supplier stream :: "
				+ concatSupplierStream.get().distinct().count());

		System.out.println("------------Using peek of supplier stream to avoid illeagal state exception------------");
		System.out.println("Distinct items :: Supplier Stream :: "
				+ concatSupplierStream.get().distinct().peek(System.out::println).count());

	}

}
