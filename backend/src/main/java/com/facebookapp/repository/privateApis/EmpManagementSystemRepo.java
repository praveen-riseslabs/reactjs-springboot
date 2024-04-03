package com.facebookapp.repository.privateApis;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.facebookapp.model.EmployeeSkills;

@Repository
public interface EmpManagementSystemRepo extends JpaRepository<EmployeeSkills, Integer> {
	
//	List<EmployeeSkills> findByName(String Skills);
	List<EmployeeSkills> findBySkills(String Skills);



	

}
