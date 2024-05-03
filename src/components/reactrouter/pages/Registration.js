import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {


  return (


    
   
<div className='reg' style={{
    height :"100vh",
    display :"flex",
    justifyContent : "center",
    alignItems : "center",
    background : "grey"
}}>
    <div>
      <label>Username</label>
      <input type='text' placeholder='Username'/><br/>
    
      <label>E-mail</label>
      <input type='email' placeholder='email'/><br/>

      <label>Password</label>
      <input type='password' placeholder='password'/><br/>
      <Link to={'/login'}><button>Login</button></Link> 
    </div>


       
     
 </div>

  )
}

export default Registration