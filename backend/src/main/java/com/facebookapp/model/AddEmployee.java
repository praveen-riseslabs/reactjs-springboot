package com.facebookapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "employee")
public class AddEmployee {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name= "name")
	private String name;
	
	@Column(name= "email", unique=true)
	private String email;
	
	@Column(name= "address")
	private String address;
	
	@Column(name= "salary")
	private  double salary;
	
	@Column(name= "designation")
	private String designation;
		
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
}
