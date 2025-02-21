import React from 'react'
import "./style.css";

function Header() {
  return (
    <div className="navbar">
      <p className='logo'>FinTrack</p>
      <p onClick>LogOut</p>
    </div>
  )
}

export default Header
