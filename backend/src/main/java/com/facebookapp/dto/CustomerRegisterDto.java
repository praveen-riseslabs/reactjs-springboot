package com.facebookapp.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CustomerRegisterDto {

	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private String confirmpassword;
}
