package com.example.demo;

public class RegistrationPojo {
private String first_name;
private String last_name;
private String email_Id;
private String password;
private  Long mobile_no;
private String gender;
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


public String getEmail_Id() {
	return email_Id;
}
public void setEmail_Id(String email_Id) {
	this.email_Id = email_Id;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public Long getMobile_no() {
	return mobile_no;
}
public void setMobile_no(Long mobile_no) {
	this.mobile_no = mobile_no;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public RegistrationPojo(String first_name, String last_name, String emailID, String password, Long mobile_no,
		String gender) {
	super();
	this.first_name = first_name;
	this.last_name = last_name;
	this.email_Id = emailID;
	this.password = password;
	this.mobile_no = mobile_no;
	this.gender = gender;
}
public RegistrationPojo() {
	super();
}

}
