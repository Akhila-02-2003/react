import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <h1>Login Page</h1>
      <input type="text" placeholder="Enter Username" /><br />
      <input type="password" placeholder="Enter Password" /><br />
      
      <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
      <Link to='/dashboard'> <button>Login</button></Link>
      
        
     
    </div>
  );
}

export default Login;
