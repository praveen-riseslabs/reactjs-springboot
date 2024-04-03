package com.facebookapp.model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;


@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employeeregistration")
public class Customer implements UserDetails{

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "emp_id")
	@Id
	private Integer id;
			
	@Column(name = "firstname")
	private String firstname;
	
	@Column(name = "lastname")
	private String lastname;
	
	@Column(name = "email", unique = true)
	private String email;
	
	@Column(name = "password"  )
	private String password;
	
	@Column(name = "reset_password_token")
	private String resetPasswordToken;
	
	private final String createdAt = LocalDateTime.now()
			.format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));

	
	@Column(name = "confirmpassword")
	private String confirmpassword;
	
	
	public Integer getEmpid() {
		return id;
	}

	public void setEmpid(Integer empid) {
		this.id = empid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public String getResetPasswordToken() {
		return resetPasswordToken;
	}

	public void setResetPasswordToken(String resetPasswordToken) {
		this.resetPasswordToken = resetPasswordToken;
	}
}
