package com.facebookapp.controller;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.facebookapp.model.Customer;
import com.facebookapp.service.ResetPasswordService;

@RestController
@EnableAutoConfiguration
@CrossOrigin
@RequestMapping("api/v1/signup")
public class ResetPasswordController {
	
	@Autowired
	ResetPasswordService resetPasswprdService;


    @PostMapping("/resetpassword")
    public ResponseEntity<Map<String, Serializable>> processResetPassword(@RequestParam String token, @RequestParam String password) {
        Map<String, String> response = new HashMap<>();
        Customer user = resetPasswprdService.getByResetPasswordToken(token);

        if (user == null) {
            response.put("title", "Reset your Password");
            response.put("message", "Invalid Password Reset Link");
            int httpStatus = HttpStatus.BAD_REQUEST.value();
            return ResponseEntity.status(httpStatus).body(Map.of("status", false, "message", response.get("message"), "statusCode", httpStatus));
        }
        else {
        	resetPasswprdService.updatePassword(user, password);
            response.put("title", "Reset password successful");
            response.put("message", "Password reset successful");
            int httpStatus = HttpStatus.CREATED.value();
            return ResponseEntity.status(httpStatus).body(Map.of("status", true, "message", response.get("message"), "statusCode", httpStatus));
        }
    }

	
}
