import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn , forgotPassword} from '../../services/employee-service';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  async function handleSignin(event) {
    event.preventDefault();
    try {
      const signinData = {
        email: email,
        password: password,
      };

      await signIn(signinData);

      alert('Login Successfully!!!');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Invalid credentials. Please Signup First.');
    }
  }

  const goToSignup = () => {
    navigate('/signup'); // Use navigate instead of history.push
  };

  const goToForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleSendOTP = async () => {
    try {
      await forgotPassword({ email });
      alert(`OTP sent to ${email}`);
    } catch (error) {
      alert('Failed to send OTP. Please try again later.');
    }
  };

  return (
    <div>
      <div className="loginformcontroller">
        <div className="content">   
          <div className="text">
            <div className='pragraph'>
          {showForgotPassword ? "we sent the otp on given email id you can check" : <div></div>}
         </div>
            {showForgotPassword ? "Forgot Password " : "Login"}</div>
          {showForgotPassword ? (
            <div className="forgot-password-container"> 
          
              <form className="formsinputs">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    style={{marginTop: '30px'}}
                    placeholder="Enter Valid Email"
                    aria-label="Enter Valid Email"
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
              </form>
            </div>
          ) : (
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
                <div>
                  <a
                    // href="/forgot_password"
                    className="forgetpass"
                    onClick={goToForgotPassword}
                  >
                    Forget password
                  </a>
                </div>
              </div>

              <div class="col-12">
                <button
                  type="button"
                  class="btn btn-primary"
                  id="signupbtn2"
                  onClick={goToSignup}
                >
                  Sign Up
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  id="signinbtn1"
                  onClick={handleSignin}
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { signIn } from '../../services/employee-service';
// import './Login.css';

// export const Login = () => { 
//    const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   async function handleSignin(event) {
//     event.preventDefault();
//     try {
//       const signinData = {
//         email: email,
//         password: password,
//       };

//       await signIn(signinData);

//       alert('Login Successfully!!!');
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       alert('Invalid credentials. Please Signup First.');
//     }
//   }

//   const goToSignup = () => {
//     navigate('/signup'); // Use navigate instead of history.push
//   };

//   const goToForgotPassword = () => {
//     navigate('/forgot-password');
//   };

//   const handleSendOTP = () => {
//     // Add logic to send OTP to the provided email
//     alert(`OTP sent to ${email}`);
//     };

//   return (
    
//     <div>
//       <div className="loginformcontroller">
//         <div className="content">
//       <div className="text">
//           Login
//         </div>
//         <form>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               id="email"
//               aria-describedby="emailHelp"
//               autoComplete="off"
//               required
//               value={email}
//               onChange={(event) => {
//                 setEmail(event.target.value);
//               }}
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               type="password"
//               className="form-control"
//               id="Password"
//               placeholder="Password"
//               autoComplete="off"
//               required
//               value={password}
//               onChange={(event) => {
//                 setPassword(event.target.value);
//               }}
//             />
//             <div>
//               <span className="forgetpass" onClick={goToForgotPassword}>Forget password</span>
//             </div>
//           </div>

//           <div class="col-12">
//             <button type="button" class="btn btn-primary" id="signupbtn2" onClick={goToSignup}>
//               Sign Up
//             </button>
//             <button type="submit" class="btn btn-primary" id="signinbtn1" onClick={handleSignin}>
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>


//       <div>
//          <div className="forgot-password-container">
//       <h4 className="heading">Forgot Password</h4>
//       <form className="formsinputs">
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter Valid Email"
//             aria-label="Enter Valid Email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div className="sendotp">
//           <button type="button" className="btn btn-primary" onClick={handleSendOTP}>
//             Send OTP
//           </button>
//         </div>
//       </form>
//     </div>
//     </div>

//     </div>
    
//     </div> 
   
//   );
// };





// {/* <div className="forgetpassword">
//       <h4 class="heading">Forgot Password</h4>
//       <form className='formsinputs'>
//       <div class="col">
//           <input type="text" className="form-control" placeholder="Enter Valid Email" aria-label="Last name"/>
//       </div>
//       <div className="sendotp">
//            <button type="button" class="btn btn-primary">Send OTP</button>
//       </div>

//       </form>
//     </div> */}