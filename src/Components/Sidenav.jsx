import React from 'react'
import { Link } from 'react-router-dom'


function Sidenav() {
  return (
    <div className='a1'>
      <Link to='/Mobiles'><li>Mobiles</li></Link>
      <Link to='/Laptops'><li>Laptops</li></Link>
      
      <Link to='/Watches'><li>Watches</li></Link>
      <Link to='/'><button>Logout</button></Link>
      
      
    </div>
  )
}

export default Sidenav
