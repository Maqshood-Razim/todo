import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { Link, Route, Routes } from 'react-router-dom'

function MainRouter() {
  return (

    <div>
 
        <Routes>
     <Route path='/' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
     <Route path='/home' element={<Home/>}/>
    
     </Routes>
    </div>

  )
} 

export default MainRouter