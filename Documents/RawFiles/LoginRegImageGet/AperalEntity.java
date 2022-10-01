package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="apparels_tbl2")
public class AperalEntity {
@Id
@Column
private int ApparelID;
@Column
private String Size;
@Column
private String Description;
@Column
private String  Cate;
@Column
private int Rent_amount;
@Column
private int Deposit_amount;
@Column
private int VendorID;
@Column
private char gender;
@Column
private String status;
@Lob
@Column
private byte[] image;
@Column
private int imageid;
public byte[] getImage() {
	return image;
}
public void setImage(byte[] image) {
	this.image = image;
}
public int getImageid() {
	return imageid;
}
public void setImageid(int imageid) {
	this.imageid = imageid;
}
public AperalEntity() {
	super();
}
public AperalEntity(int apparelID, String size, String description, String category, int rent_amount,
		int deposit_amount, int vendorID, char gender, String status) {
	super();
	ApparelID = apparelID;
	Size = size;
	Description = description;
	Cate = category;
	Rent_amount = rent_amount;
	Deposit_amount = deposit_amount;
	VendorID = vendorID;
	this.gender = gender;
	this.status = status;
}

public AperalEntity(String size, String description, int rent_amount, int deposit_amount, String status,byte[] b,int imgid) {
	super();
	Size = size;
	Description = description;
	Rent_amount = rent_amount;
	Deposit_amount = deposit_amount;
	this.status = status;
	this.imageid=imgid;
	this.image=b;
}
public int getApparelID() {
	return ApparelID;
}
public void setApparelID(int apparelID) {
	ApparelID = apparelID;
}
public String getSize() {
	return Size;
}
public void setSize(String size) {
	Size = size;
}
public String getDescription() {
	return Description;
}
public void setDescription(String description) {
	Description = description;
}


public String getCate() {
	return Cate;
}
public void setCate(String cate) {
	Cate = cate;
}
public int getRent_amount() {
	return Rent_amount;
}
public void setRent_amount(int rent_amount) {
	Rent_amount = rent_amount;
}
public int getDeposit_amount() {
	return Deposit_amount;
}
public void setDeposit_amount(int deposit_amount) {
	Deposit_amount = deposit_amount;
}
public int getVendorID() {
	return VendorID;
}
public void setVendorID(int vendorID) {
	VendorID = vendorID;
}
public char getGender() {
	return gender;
}
public void setGender(char gender) {
	this.gender = gender;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}


}
