package com.example.crudoperationdemo.employee.model;

import java.util.Date;
import java.util.Map;

public class ErrorMessageResponse {

	private Date tiemstamp;
	private String status;
	private Map<String, String> message;
	
	
	public ErrorMessageResponse() {
		super();
	}
	
	public ErrorMessageResponse(Date tiemstamp, String status, Map<String, String> message) {
		this.tiemstamp = tiemstamp;
		this.status = status;
		this.message = message;
	}

	public Date getTiemstamp() {
		return tiemstamp;
	}
	public void setTiemstamp(Date tiemstamp) {
		this.tiemstamp = tiemstamp;
	}
	public Map<String, String> getMessage() {
		return message;
	}
	public void setMessage(Map<String, String> message) {
		this.message = message;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}