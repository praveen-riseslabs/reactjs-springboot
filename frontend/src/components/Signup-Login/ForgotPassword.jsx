

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../services/employee-service';
 import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');

  const handleSendOTP = async () => {
    try {
      await forgotPassword({ email });
      alert(`OTP sent to ${email}`);
      // You can navigate to the OTP verification page here
    } catch (error) {
      alert('Failed to send OTP. Please try again later.');
    }
  };

  const goToLogin = () => {
    navigate('/');
  };
  const goToResetPassword = () => {
    navigate('/resetpassword');
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-3 forgotPasswordPage'>
      <div className="forgotPasswordController">
        <div className="content">   
          <div className="text">Forgot Password</div>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Valid Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="sendotp">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            </div>
            <div>
              <a
                className="backToLogin"
                onClick={goToLogin}
              >
                Back to Login
              </a>
              <a
                className="backToresetpass"
                onClick={goToResetPassword}
              >
               Go to Reset Password
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

