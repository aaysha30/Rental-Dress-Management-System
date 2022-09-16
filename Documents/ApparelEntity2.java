package study.project;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="appareltable1")
public class ApparelEntity2 {

	@Id
	@GeneratedValue
	@Column
	private int apparelID;
	@Column
	private int vendorId;
	@Column
	private String description;
	@Column
	private String category;
	@Column
	private int  damount;
	@Column
	private int ramount;
	@Column
	private String size;
	@Column
	private String gender;
	
	
	
	public ApparelEntity2() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ApparelEntity2(int vendorId, String description, String category, int damount,
			int ramount, String size, String gender) {
		super();
//		this.apparelID = apparelID;
		this.vendorId = vendorId;
		this.description = description;
		this.category = category;
		this.damount = damount;
		this.ramount = ramount;
		this.size = size;
		this.gender = gender;
	}

//	public int getApparelID() {
//		return apparelID;
//	}
//
//	public void setApparelID(int apparelID) {
//		this.apparelID = apparelID;
//	}

	public int getVendorId() {
		return vendorId;
	}

	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getDamount() {
		return damount;
	}

	public void setDamount(int damount) {
		this.damount = damount;
	}

	public int getRamount() {
		return ramount;
	}

	public void setRamount(int ramount) {
		this.ramount = ramount;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
}

	
	
	

