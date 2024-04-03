package com.facebookapp.service.privateApis;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.facebookapp.model.AddEmployee;
import com.facebookapp.repository.privateApis.AddEmployeeRepo;

@Service
public class AdminService {

	@Autowired
	AddEmployeeRepo addEmployeeRepo;

	public Integer getAdminCount() {
        return (int) addEmployeeRepo.count();
    }

	public List<AddEmployee> findAll() {
		  return addEmployeeRepo.findAll();
	}

	public BigDecimal getTotalSalary() {
        try {
            return addEmployeeRepo.getTotalSalary();
        } catch (Exception e) {
            throw new RuntimeException("Error occurred while fetching total salary: " + e.getMessage(), e);
        }
    }

	public Integer getEmployeeCount() {
        try {
            return (int) addEmployeeRepo.count();
        } catch (Exception e) {
            throw new RuntimeException("Error occurred while fetching employee count: " + e.getMessage(), e);
        }
    }
}
