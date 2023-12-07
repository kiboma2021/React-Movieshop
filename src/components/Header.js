import React from 'react'
import Logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="Logo" className='logo' />
        <ul className='nav'>
            <li>Home</li>
            <li>Movies</li>
            <li>Contact Us</li>
            <li>Login</li>
        </ul>
      
    </div>
  )
}

export default Header
