import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Signup-Login/Login';
import Signup from './components/Signup-Login/Signup';
import  ResetPassword  from './components/Signup-Login/ResetPassword'

function App() {
  return (
    <div>
    
     <Router>
     <Routes>  
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/resetpassword" element={<ResetPassword/>} /> 
       {/* Other routes */}
     </Routes>
   </Router>
  </div>
  );
}

export default App;
