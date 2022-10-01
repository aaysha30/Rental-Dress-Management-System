package study.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vendor_information")
public class VendorEntity {

	@Id 
	@Column
	private int vendorId;
	@Column
	private String first_name;
	@Column
	private String last_name;
	@Column
	private String mobile_no;
	@Column
	private String emailId;
	@Column
	private String password;
	@Column
	private String address;
	
	public VendorEntity(int vendorId, String first_name, String last_name, String mobile_no, String emailId,
			String password, String address) {
		super();
		this.vendorId = vendorId;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mobile_no = mobile_no;
		this.emailId = emailId;
		this.password = password;
		this.address = address;
	}
	

	public VendorEntity() {
		super();
	}

	public int getVendorId() {
		return vendorId;
	}

	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
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

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
}
