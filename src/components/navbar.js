import React from 'react'

const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className='logo-container'>
      <h2 className='logo'>unbounce</h2>
      <ul className='link-container'>
        <li><a href='#'>Products</a></li>
        <li><a href='#'>Solutions</a></li>
        <li><a href='#'>Pricing</a></li>
        <li><a href='#'>Learn</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    
      </div>
      
      <div>
        <button className='log-in'>Log In</button>
        <button className='free-trial'>Start My Free Trial</button>
      </div>
    </div>
    
  
    
  )
}

export default Navbar
