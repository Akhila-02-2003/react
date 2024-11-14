import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
   
    <div className="SignUp">
      <h1>Sign Up</h1>
      <input type="text" placeholder="Enter Username" /><br />
      <input type="email" placeholder="Enter E-Mail" /><br />
      <input type="password" placeholder="Enter Password" /><br />
      <Link to='/'>
        <button className="btn btn-primary">Sign Up</button>
      </Link>
    </div>
    </div>
  );
}

export default Signup;
