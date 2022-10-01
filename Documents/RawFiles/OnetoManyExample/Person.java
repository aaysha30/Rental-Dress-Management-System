package com.example.demo;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity

public class Person {
@Id
@Column	
private int id;
@Column
private String name;

@OneToMany(mappedBy="p", cascade = CascadeType.ALL)
private java.util.List<Address>li;

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public java.util.List<Address> getLi() {
	return li;
}
public void setLi(java.util.List<Address> li) {
	this.li = li;
}



}
