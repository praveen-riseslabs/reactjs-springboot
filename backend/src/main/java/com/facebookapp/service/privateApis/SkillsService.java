package com.facebookapp.service.privateApis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.facebookapp.model.EmployeeSkills;
import com.facebookapp.repository.privateApis.EmpManagementSystemRepo;

@Service
public class SkillsService {
	
	@Autowired
	private EmpManagementSystemRepo empManagementSystemRepo;

	public EmployeeSkills addSkills(EmployeeSkills employeeSkills) {
		EmployeeSkills skills = new EmployeeSkills();
		skills.setEmpid(employeeSkills.getEmpid());
		skills.setSkills(employeeSkills.getSkills());
		  return empManagementSystemRepo.save(employeeSkills);
		}

	public List<EmployeeSkills> getEmployeeSkills() {
		return empManagementSystemRepo.findAll();
	}
}
