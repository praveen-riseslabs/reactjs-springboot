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
      navigate('/login');
    } catch (error) {
      alert('Employee Register failed');
    }
  }

  return (
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
              <a href='#' onClick={() => navigate('/login')} className="text1">
                Sign In
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;







//  //signin and signup
// import React, { useState } from 'react';
// import './Signup.css';
// import { signUP } from '../../services/employee-service';
// import { signIn } from '../../services/employee-service';
// import { Login } from '../Login/Login'

// const Signup = () => {
//   const [showLogin, setShowLogin] = useState(false);

//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');

//   async function handleSignup(event) {
//     event.preventDefault();
//     try {
//       const userData = {
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         password: password,
//         confirmpassword: confirmpassword,
//       };

//       await signUP(userData);

//       alert('Employee Registered Successfully');
//       setFirstname('');
//       setLastname('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//     } catch (error) {
//       alert('Employee Register failed');
//     }
//   }

//   async function handleSignin(event) {
//     event.preventDefault();
//     try{
//       const signinData = {
//         email: email,
//         password: password
//       }

//       await signIn(signinData);

//       alert('Login Successfully!!!');
//       setEmail('');
//       setPassword('');
//     }catch(error) {
//       alert("Invalid credentials. Please Signup First.");
//     }
//   }

//   const toggleForm = () => {
//     setShowLogin(!showLogin);

//   };

//   return (
//     <div className="form-data">
//       <div className="content">
//         <div className="text">
//           {showLogin ? 'Sign Up' : 'Sign In'}
//         </div>

//         {showLogin ? (
//           // Sign Up Form
//           <div>
//             <div className="row">
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="fname"
//                   placeholder="First name"
//                   aria-label="First name"
//                   autocomplete="off" required                  
//                   value={firstname}
//                   onChange={(event) => {
//                     setFirstname(event.target.value);
//                   }}
//                 />
//               </div>
//               <div className="col">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="lname"
//                   placeholder="Last name"
//                   aria-label="Last name"
//                   autocomplete="off" required            
//                   value={lastname}
//                   onChange={(event) => {
//                     setLastname(event.target.value);
//                   }}
//                 />
//               </div>
//             </div>

//             {/* ... (rest of Sign Up form) */}

//             <form>
//            <div className="mb-3">
//              <input
//                type="email"
//                className="form-control"
//                placeholder="Email"
//                id="email"
//                aria-describedby="emailHelp"
//                autocomplete="off" required
//                value={email}
//                onChange={(event) => {
//                  setEmail(event.target.value);
//                }}
//              />
//            </div>

//            <div className="mb-3">
//              <input
//                type="password"
//                className="form-control"
//                id="Password"
//                placeholder="Password"
//                autocomplete="off" required
//                value={password}
//                onChange={(event) => {
//                  setPassword(event.target.value);
//                }}
//              />
//            </div>
//         </form>
//            <div className="mb-3">
//              <input
//                type="password"
//                className="form-control"
//                id="cPassword"
//                placeholder="Confirm Password"
//                autocomplete="off" required
//                value={confirmpassword}
//                onChange={(event) => {
//                  setConfirmPassword(event.target.value);
//                }}
//              />
//           </div>

//          <div className="mb-3 form-check">
//              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//              <label className="form-check-label" htmlFor="exampleCheck1" required>
//                I Agree with <a href="#" className="link-text">
//                  privacy
//               </a>{' '}
//                and <a href="#" className="link-text">
//                  policy
//                </a>
//              </label>
//            </div>

//           <button type="submit" id="submitbtn" className="btn btn-primary" onClick={handleSignup}>
//              Sign Up
//           </button>

//            <div className="alredyaccount">
//           <div>
//             {showLogin ? "Already have an Account ?" : "Don't have an account?"}
//             <a href='#' onClick={toggleForm} className="text1">
//               {showLogin ? 'Sign In' : <div></div>}
//             </a>
//           </div>
//         </div>
//       </div>       
          
//         ) : (
//           <div class="loginformcontroller">
//         <form >
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 id="email"
//                 aria-describedby="emailHelp"
//                 autocomplete="off" required
//                 value={email}
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                 }}
//               />
//             </div>

//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="Password"
//                 placeholder="Password"
//                 autocomplete="off" required
//                 value={password}
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}
//               /> 
//               <div>
//             <span className="forgetpass">Forget password</span>
//           </div>
//             </div>
           
//        <div class="col-12">
//        <button type="submit" class="btn btn-primary" id="signupbtn2" onClick={toggleForm}>Sign Up</button>
//         <button type="submit" class="btn btn-primary" id="signinbtn1" onClick={handleSignin}>Sign in</button>
//    </div>
//   </form>
//   </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Signup;



















//  //signin and signup
//  import React, { useState } from 'react';
//  import './Signup.css';
//  import { signUP } from '../../services/employee-service';
//  import { signIn } from '../../services/employee-service';
//  import { Login } from '../Login/Login'
 
//  const Signup = () => {
//    const [showLogin, setShowLogin] = useState(false);
 
//    const [firstname, setFirstname] = useState('');
//    const [lastname, setLastname] = useState('');
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const [confirmpassword, setConfirmPassword] = useState('');
 
//    async function handleSignup(event) {
//      event.preventDefault();
//      try {
//        const userData = {
//          firstname: firstname,
//          lastname: lastname,
//          email: email,
//          password: password,
//          confirmpassword: confirmpassword,
//        };
 
//        await signUP(userData);
 
//        alert('Employee Registered Successfully');
//        setFirstname('');
//        setLastname('');
//        setEmail('');
//        setPassword('');
//        setConfirmPassword('');
//      } catch (error) {
//        alert('Employee Register failed');
//      }
//    }
 
//    async function handleSignin(event) {
//      event.preventDefault();
//      try{
//        const signinData = {
//          email: email,
//          password: password
//        }
 
//        await signIn(signinData);
 
//        alert('Login Successfully!!!');
//        setEmail('');
//        setPassword('');
//      }catch(error) {
//        alert("Invalid credentials. Please Signup First.");
//      }
//    }
 
//    const toggleForm = () => {
//      setShowLogin(!showLogin);
 
//    };
 
//    return (
//      <div className="form-data">
//        <div className="content">
//          <div className="text">
//            {showLogin ? 'Sign Up' : 'Sign In'}
//          </div>
 
//          {showLogin ? (
//            // Sign Up Form
//            <div>
//              <div className="row">
//                <div className="col">
//                  <input
//                    type="text"
//                    className="form-control"
//                    id="fname"
//                    placeholder="First name"
//                    aria-label="First name"
//                    autocomplete="off" required                  
//                    value={firstname}
//                    onChange={(event) => {
//                      setFirstname(event.target.value);
//                    }}
//                  />
//                </div>
//                <div className="col">
//                  <input
//                    type="text"
//                    className="form-control"
//                    id="lname"
//                    placeholder="Last name"
//                    aria-label="Last name"
//                    autocomplete="off" required            
//                    value={lastname}
//                    onChange={(event) => {
//                      setLastname(event.target.value);
//                    }}
//                  />
//                </div>
//              </div>
 
//              {/* ... (rest of Sign Up form) */}
 
//              <form>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 id="email"
//                 aria-describedby="emailHelp"
//                 autocomplete="off" required
//                 value={email}
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                 }}
//               />
//             </div>
 
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="Password"
//                 placeholder="Password"
//                 autocomplete="off" required
//                 value={password}
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}
//               />
//             </div>
//          </form>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="cPassword"
//                 placeholder="Confirm Password"
//                 autocomplete="off" required
//                 value={confirmpassword}
//                 onChange={(event) => {
//                   setConfirmPassword(event.target.value);
//                 }}
//               />
//            </div>
 
//           <div className="mb-3 form-check">
//               <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//               <label className="form-check-label" htmlFor="exampleCheck1" required>
//                 I Agree with <a href="#" className="link-text">
//                   privacy
//                </a>{' '}
//                 and <a href="#" className="link-text">
//                   policy
//                 </a>
//               </label>
//             </div>
 
//            <button type="submit" id="submitbtn" className="btn btn-primary" onClick={handleSignup}>
//               Sign Up
//            </button>
 
//             <div className="alredyaccount">
//            <div>
//              {showLogin ? "Already have an Account ?" : "Don't have an account?"}
//              <a href='#' onClick={toggleForm} className="text1">
//                {showLogin ? 'Sign In' : <div></div>}
//              </a>
//            </div>
//          </div>
//        </div>       
           
//          ) : (
//            <div class="loginformcontroller">
//          <form >
//              <div className="mb-3">
//                <input
//                  type="email"
//                  className="form-control"
//                  placeholder="Email"
//                  id="email"
//                  aria-describedby="emailHelp"
//                  autocomplete="off" required
//                  value={email}
//                  onChange={(event) => {
//                    setEmail(event.target.value);
//                  }}
//                />
//              </div>
 
//              <div className="mb-3">
//                <input
//                  type="password"
//                  className="form-control"
//                  id="Password"
//                  placeholder="Password"
//                  autocomplete="off" required
//                  value={password}
//                  onChange={(event) => {
//                    setPassword(event.target.value);
//                  }}
//                /> 
//                <div>
//              <span className="forgetpass">Forget password</span>
//            </div>
//              </div>
            
//         <div class="col-12">
//         <button type="submit" class="btn btn-primary" id="signupbtn2" onClick={toggleForm}>Sign Up</button>
//          <button type="submit" class="btn btn-primary" id="signinbtn1" onClick={handleSignin}>Sign in</button>
//     </div>
//    </form>
//    </div>
//          )}
//        </div>
//      </div>
//    );
//  };
 
//  export default Signup;
 