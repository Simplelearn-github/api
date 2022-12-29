import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutus from './Aboutus'
import Apitable from './Apitable'
import Contactuss from './Contactuss'
import Home from './Home'
import Registration from './Registration'

function Routingss() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='Contactuss' element={<Contactuss/>}/>
          <Route path='/Registration' element={<Registration/>}/>
          <Route path='/Apitable' element={<Apitable/>}/>



      </Routes>

    </div>
  )
}

export default Routingss