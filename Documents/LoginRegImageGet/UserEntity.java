package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer_information2")
public class UserEntity {
	 
@Id 
@Column
private int customerId;
@Column
private String first_name;
@Column
private String last_name;
@Column
private long mobile_no;
@Column
private String emailId;
@Column
private String  password;
@Column
private char gender;

public UserEntity(){
	
}

public UserEntity(String first_name, String last_name, long mobile_no, String emailId, String password, char gender) {
	super();
	this.first_name = first_name;
	this.last_name = last_name;
	this.mobile_no = mobile_no;
	this.emailId = emailId;
	this.password = password;
	this.gender = gender;
}

public UserEntity(int customerId, String first_name, String last_name, long mobile_no, String emailId, String password,
		char gender) {
	super();
	this.customerId = customerId;
	this.first_name = first_name;
	this.last_name = last_name;
	this.mobile_no = mobile_no;
	this.emailId = emailId;
	this.password = password;
	this.gender = gender;
	
}

public int getCustomerId() {
	return customerId;
}
public void setCustomerId(int customerId) {
	this.customerId = customerId;
}
public String getFirst_name() {
	return first_name;
}
public void setFirst_name(String first_name) {
	this.first_name = first_name;
}
public String getLast_name() {
	return last_name;
}
public void setLast_name(String last_name) {
	this.last_name = last_name;
}
public long getMobile_no() {
	return mobile_no;
}
public void setMobile_no(long mobile_no) {
	this.mobile_no = mobile_no;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public char getGender() {
	return gender;
}
public void setGender(char gender) {
	this.gender = gender;
}


}
