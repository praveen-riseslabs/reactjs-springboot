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
@Table(name = "empskills")
public class EmployeeSkills {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer skillsid;
	
	@Column(name= "skills")
	private String skills;

	public Integer getEmpid() {
		return skillsid;
	}

	public void setEmpid(Integer skillsid) {
		this.skillsid = skillsid;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}
}
