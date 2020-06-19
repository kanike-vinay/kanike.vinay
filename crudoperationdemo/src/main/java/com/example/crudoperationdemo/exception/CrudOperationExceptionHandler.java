package com.example.crudoperationdemo.exception;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.crudoperationdemo.employee.model.ErrorMessageResponse;

@ControllerAdvice
public class CrudOperationExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(value={Exception.class})
	public ResponseEntity<Object> handleAnyException(Exception ex, HttpServletRequest request){
		return new ResponseEntity<>(ex, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
            HttpHeaders headers, HttpStatus status, WebRequest request) {
	    Map<String, String> errors = new HashMap<>();
	    ex.getBindingResult().getAllErrors().forEach((error) -> {
	        String fieldName = ((FieldError) error).getField();
	        String errorMessage = error.getDefaultMessage();
	        errors.put(fieldName, errorMessage);
	    });
	    
	    ErrorMessageResponse errorMessageResponse = new ErrorMessageResponse(new Date(), HttpStatus.BAD_REQUEST.name(), errors);
		
		return new ResponseEntity<>(errorMessageResponse, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
}