import React from 'react'
import { NavLink } from 'react-router-dom'

function Lefts() {
  return (
    <div className='links'>
      <ul>
        <li><NavLink to='/Aboutus'>ABOUT US</NavLink></li>
        <li><NavLink to='/Contactuss'>CONTACT US</NavLink></li>
        <li><NavLink to='/Registration'>REGISTER </NavLink></li>
        <li><NavLink to='/Apitable'>API</NavLink></li>
        <li><NavLink to='/Aboutus'>FOUNDER</NavLink></li>
        <li><NavLink to='/Aboutus'>EXTRA</NavLink></li>
      </ul>

    </div>
  )
}

export default Lefts