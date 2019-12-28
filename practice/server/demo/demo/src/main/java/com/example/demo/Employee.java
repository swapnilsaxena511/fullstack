package com.example.demo;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="Employee")
public class Employee {
	
	@Id
	private ObjectId _id;
	
	@Field(value="name")
	private String name;
	
	@Field(value="position")
	private String position;
	
	@Field(value="office")
	private String office;
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	// ObjectId needs to be converted to string
	  public String get_id() { return _id.toHexString(); }
	  public void set_id(ObjectId _id) { this._id = _id; }
	  
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getOffice() {
		return office;
	}
	public void setOffice(String office) {
		this.office = office;
	}
	public Employee(String name, String position, String office) {
		super();
		this.name = name;
		this.position = position;
		this.office = office;
	}
	@Override
	public String toString() {
		return "Employee [name=" + name + ", position=" + position + ", office=" + office + "]";
	}
	
	
	

}
	