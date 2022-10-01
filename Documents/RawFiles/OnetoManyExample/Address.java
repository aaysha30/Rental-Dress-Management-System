package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ManyToAny;

@Entity
public class Address {
	@Id
	@Column
	private int pincode;
	@Column
private String state;
	@ManyToOne
	private Person p;
	
	public Address() {
		super();
	}
	
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public Person getP() {
		return p;
	}
	public void setP(Person p) {
		this.p = p;
	}
	public Address(String state, int pincode, Person p) {
		super();
		this.state = state;
		this.pincode = pincode;
		this.p = p;
	}
	

}
