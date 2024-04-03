package com.facebookapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.facebookapp.dto.CustomerLoginDto;
import com.facebookapp.dto.CustomerLoginResponceDto;
import com.facebookapp.dto.CustomerRegisterDto;
import com.facebookapp.service.CustomerService;
import com.facebookapp.service.JwtUtil;

@RestController
@EnableAutoConfiguration
@CrossOrigin
@RequestMapping("api/v1/signup")
public class CustomerController {

	@Autowired
	CustomerService customerService;
	
	@Autowired
	JwtUtil jwtTokenUtil;
	
	@Autowired
	AuthenticationManager authencationManager;
	
	@Autowired
	PasswordEncoder passwordEncoder;

	
	@PostMapping("/register")
	public String registerCustomer(@RequestBody CustomerRegisterDto customerRegisterDto) {
		customerService.registerCustomer(customerRegisterDto);
		return "User Register Successfully please Login";
	}
	
	@PostMapping("/login")
	public CustomerLoginResponceDto loginEmployee(@RequestBody CustomerLoginDto customerLoginDto) {
	    doAuthentication(customerLoginDto.getEmail(), customerLoginDto.getPassword());

	    UserDetails userDetails = customerService.loadUserByUsername(customerLoginDto.getEmail());

	    String token = jwtTokenUtil.generateToken(userDetails);

	    return CustomerLoginResponceDto.builder()
	            .token(token)
	            .emial(userDetails.getUsername())
	            .build();
	}
	
	private void doAuthentication(String userName, String password) {
	    UserDetails userDetails = customerService.loadUserByUsername(userName);

	    if (!passwordEncoder.matches(password, userDetails.getPassword())) {
	        throw new BadCredentialsException("Invalid Username and Password.");
	    }
	}

}
