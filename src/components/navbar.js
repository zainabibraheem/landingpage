import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className='logo-container'>
      <h2 className='logo'>unbounce</h2>
      <Link to='/' className='nav-link'>Home</Link>
      <Link to='/products' className='nav-link'>Products</Link>
      <Link to='/solutions' className='nav-link'>Solutions</Link>
      <Link to='/pricing' className='nav-link'>Pricing</Link>
      <Link to='/learn' className='nav-link'>Learn</Link>
      <Link to='/contact' className='nav-link'>Contact</Link>

    
      </div>
      
      <div>
        <button className='log-in'>Log In</button>
        <button className='free-trial'>Start My Free Trial</button>
      </div>
    </div>
    
  
    
  )
}

export default Navbar
