
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../services/employee-service';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignin(event) {
    event.preventDefault();

    if (!email || !password) {
      alert('Email and password cannot be empty');
      return;
    }

    try {
      const signinData = {
        email: email,
        password: password,
      };

      await signIn(signinData);

      localStorage.setItem("valid", true);

      alert('Login Successfully!!!');
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } catch (error) {
      alert('Invalid credentials. Please Signup First.');
    }
  }

  const goToSignup = () => {
    navigate('/signup');
  };

  const goToForgotPassword = () => {
    navigate('/forgotpassword');
  };

  return (
    <div className='d-flex justify-content-center align-items-center mt-3 loginPage'>
      <div className="loginformcontroller">
        <div className="content">   
          <div className="text">Login</div>
          <form>
          <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  aria-describedby="emailHelp"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                 <input
                   type="password"
                   className="form-control"
                   id="Password"
                   placeholder="Password"
                   autoComplete="off"
                   required
                   value={password}
                   onChange={(event) => {
                     setPassword(event.target.value);
                   }}
                 />
                </div>
            <button
              type="submit"
              className="btn btn-primary"
              id="signinbtn1"
              onClick={handleSignin}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="signupbtn2"
              onClick={goToSignup}
            >
              Sign Up
            </button>
            <a
              className="forgetpass"
              onClick={goToForgotPassword}
            >
              Forget password
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

