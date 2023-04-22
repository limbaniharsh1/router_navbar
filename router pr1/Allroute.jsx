import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contect from './Contect'
import Login from './components/Login'
import Signup from './components/Signup'

function Allroute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/signup' element={<Sign/>}/> */}
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default Allroute
