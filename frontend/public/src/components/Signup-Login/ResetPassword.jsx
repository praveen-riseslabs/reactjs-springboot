import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../services/employee-service';
import './ResetPassword.css';

const ResetPassword = () => {
  const [token, setToken] = useState('');
  const [Password, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    try {
      const response = await resetPassword(Password, token); // Pass token and password 
        if (response.status) {
       alert('Password reset successfully!');
         navigate('/login'); // Redirect to login page after successful password reset
       } else {
          alert(response.message);
       }
     } catch (error) {
       alert('Failed to reset password. Please try again.');
     }
   };

  return (
    <div class='container'>
      <div className='resetformcontainer'>
        <h2 className='formheading'>Reset Password</h2>
        <div className='formdatainput'>
          <input
            type="text"
            className="form-control"
            placeholder='Enter valid token'
            aria-label="Enter Valid token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div className='formdatainput'>
          <input
            type="password"
            className="form-control"
            placeholder='Enter new Password'
            value={Password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          id='resetpassbtn'
          onClick={handleChangePassword}
        >
          Reset Your Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;

