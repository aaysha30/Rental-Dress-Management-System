package com.example.demo;





import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_tbl3")
public class OrderEntity {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE)
@Column
private int order_id;
@Column
private int rent_amount;
@Column
private int deposit_amount;
@Column
private int total_amount;
@Column
private String delievery_address;
@Column
private Date date_of_dispatch;
@Column
private Date date_of_return;
@Column
private String status;
@Column
private int cid;

public OrderEntity(int order_id, int total_amount, Date date_of_dispatch, Date date_of_return, String status) {
	super();
	this.order_id = order_id;
	this.total_amount = total_amount;
	this.date_of_dispatch = date_of_dispatch;
	this.date_of_return = date_of_return;
	this.status = status;
}
public OrderEntity(int order_id) {
	super();
	this.order_id = order_id;
}
public OrderEntity(int order_id, int rent_amount, int deposit_amount, int total_amount, String delievery_address,
		Date date_of_dispatch, Date date_of_return, String status, int cid) {
	super();
	this.order_id = order_id;
	this.rent_amount = rent_amount;
	this.deposit_amount = deposit_amount;
	this.total_amount = total_amount;
	this.delievery_address = delievery_address;
	this.date_of_dispatch = date_of_dispatch;
	this.date_of_return = date_of_return;
	this.status = status;
	this.cid = cid;
}
public OrderEntity() {
	super();
}
public int getOrder_id() {
	return order_id;
}
public void setOrder_id(int order_id) {
	this.order_id = order_id;
}
public int getRent_amount() {
	return rent_amount;
}
public void setRent_amount(int rent_amount) {
	this.rent_amount = rent_amount;
}
public int getDeposit_amount() {
	return deposit_amount;
}
public void setDeposit_amount(int deposit_amount) {
	this.deposit_amount = deposit_amount;
}
public int getTotal_amount() {
	return total_amount;
}
public void setTotal_amount(int total_amount) {
	this.total_amount = total_amount;
}
public String getDelievery_address() {
	return delievery_address;
}
public void setDelievery_address(String delievery_address) {
	this.delievery_address = delievery_address;
}
public Date getDate_of_dispatch() {
	return date_of_dispatch;
}
public void setDate_of_dispatch(Date date_of_dispatch) {
	this.date_of_dispatch = date_of_dispatch;
}
public Date getDate_of_return() {
	return date_of_return;
}
public void setDate_of_return(Date date_of_return) {
	this.date_of_return = date_of_return;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public int getCid() {
	return cid;
}
public void setCid(int cid) {
	this.cid = cid;
}


}
