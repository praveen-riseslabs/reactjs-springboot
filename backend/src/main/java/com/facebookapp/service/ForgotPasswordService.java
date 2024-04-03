package com.facebookapp.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.facebookapp.model.Customer;
import com.facebookapp.repository.CustomerRepository;

@Service
public class ForgotPasswordService {

	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	 public void updateResetPasswordToken(String token, String email) throws CustomerNotFoundException {
		 Optional<Customer> users = customerRepository.findByEmail(email);
		 if (!users.isEmpty()) {
		        Customer user = users.get(); // Get the first user
		        user.setResetPasswordToken(token);
		        customerRepository.save(user);
		    } else {
		        throw new CustomerNotFoundException("Could not find customer with this email: " + email);
		    }
	    }
}
