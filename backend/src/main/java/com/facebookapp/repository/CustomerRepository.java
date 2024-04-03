package com.facebookapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.facebookapp.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	Customer findByEmailAndPassword(String email, String password);

	Optional<Customer> findByEmail(String email);

	public Customer findByResetPasswordToken(String token);

	Customer findFirstByEmail(String email);


	
}
