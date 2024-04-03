import React, { useState } from 'react';
import './Signup.css';
import { signUP } from '../../services/employee-service';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  async function handleSignup(event) {
    event.preventDefault();
    try {
      const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
      };

      await signUP(userData);

      alert('Employee Registered Successfully');
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Redirect to login page after successful signup
      navigate('/');
    } catch (error) {
      alert('Employee Register failed');
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center mt-3 loginPage' >
      <div className="form-data">
        <div className="content">
          <div className="text">
            Sign Up
          </div>

          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="First name"
                  aria-label="First name"
                  autoComplete="off" required
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Last name"
                  aria-label="Last name"
                  autoComplete="off" required
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                aria-describedby="emailHelp"
                autoComplete="off" required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
                autoComplete="off" required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="cPassword"
                placeholder="Confirm Password"
                autoComplete="off" required
                value={confirmpassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I Agree with <a href="#" className="link-text">privacy</a>{' '}
                and <a href="#" className="link-text">policy</a>
              </label>
            </div>

            <button type="submit" id="submitbtn" className="btn btn-primary" onClick={handleSignup}>
              Sign Up
            </button>

            <div className="alredyaccount">
              <div>
                Already have an Account?
                <a href='#' onClick={() => navigate('/')} className="text1">
                  Sign In
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


