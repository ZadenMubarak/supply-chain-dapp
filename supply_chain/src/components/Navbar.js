import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      ScMa
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to='/'> Home </Link>
    <Link to='/history' >history</Link>
    <Link to='/magement'>Product Management</Link>
    
    {/* <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
  </div>
</div>
  )
}

export default Navbar