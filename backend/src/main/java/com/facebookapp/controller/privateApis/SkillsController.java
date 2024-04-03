package com.facebookapp.controller.privateApis;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.facebookapp.model.EmployeeSkills;
import com.facebookapp.service.privateApis.SkillsService;

@RestController
@EnableAutoConfiguration
@CrossOrigin
@RequestMapping("/dashboard")
public class SkillsController {
	
	@Autowired
	private SkillsService skillService;

	 @PostMapping("/add_skills")
	    public ResponseEntity<String> addSkills(@RequestBody EmployeeSkills employeeSkills,
	                                            @RequestHeader(value = "Authorization") String authToken) {
	        if (isValidToken(authToken)) {
	            skillService.addSkills(employeeSkills);
	            return ResponseEntity.ok("Skills Added to the database");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
	        }
	    }
	
	 private boolean isValidToken(String authToken) {
		  List<String> validTokens = Arrays.asList("token", authToken);
		    return authToken != null && validTokens.contains(authToken);
	}

	 @GetMapping("/get/skills")
	    public ResponseEntity<?> getSkills(@RequestHeader("Authorization") String authToken) {
	        if (isValidToken(authToken)) {
	            List<EmployeeSkills> skills = skillService.getEmployeeSkills();
	            return ResponseEntity.ok(skills);
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
	        }
	    }
}
