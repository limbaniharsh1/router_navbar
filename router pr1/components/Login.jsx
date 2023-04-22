import React from 'react'
import Navbar from '../Navbar'

function Login() {
  return (
    <div>
      <Navbar/>
      <div className="main">
        <div className="box">
          <input className='email' type="email" required placeholder='Enter Your Email'/>
          <input className='pass' type="password" required placeholder='Enter Your Password'/>
          <button type='submit'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
