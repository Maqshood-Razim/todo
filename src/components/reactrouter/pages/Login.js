import React from 'react';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <div className='log' style={{
        height :"100vh",
        display :"flex",
        justifyContent : "center",
        alignItems : "center",
        background : "grey"
    }}>
        <div>
          <label>E-mail</label>
          <input type='email' placeholder='email'/><br/>
          <label>Password</label>
          <input type='password' placeholder='password'/><br/>
          <Link to={'/home'}><button>Home</button></Link> 
        </div>
     </div>
  );
}

export default Login;

