import React from 'react'
import Navbar from '../Navbar'

function Signup() {
  return (
    <div>
      <Navbar/>
      <div className="main">
        <div className="box">
          <input className='text' type="email" required placeholder='Enter Your firstname'/>
          <input className='text' type="email" required placeholder='Enter Your lastname'/>
          <input className='email' type="email" required placeholder='Enter Your Email'/>
          <input className='pass' type="password" required placeholder='Enter Your Password'/>
          <input className='pass' type="password" required placeholder='confirm password Password'/>
          <button type='submit'>sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
