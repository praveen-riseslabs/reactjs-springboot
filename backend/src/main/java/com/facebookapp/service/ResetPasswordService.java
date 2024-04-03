package com.facebookapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.facebookapp.model.Customer;
import com.facebookapp.repository.CustomerRepository;

@Service
public class ResetPasswordService {

    @Autowired
    private CustomerRepository userRepository;

    public Customer getByResetPasswordToken(String token) {
        return userRepository.findByResetPasswordToken(token);
    }

    public void updatePassword(Customer user, String newPassword) {

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
        user.setResetPasswordToken(null);

        userRepository.save(user);
    }
}
