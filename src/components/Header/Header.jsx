import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>

      <img src={Logo} alt= "" className='logo'/>

      <ul className='header-menu'>
{/*         
        <li>          <NavLink to="/"> Home</NavLink>
</li>

        <li>  <NavLink to="/programs"> Programs</NavLink></li>
        <li>  <NavLink to="/reasons"> Why Us</NavLink></li>
        <li>  <NavLink to="/plans"> Plans</NavLink></li>
        <li>  <NavLink to="/testimonials"> Testimonials</NavLink></li>
      </ul> */}



<li>          Home
</li>
<li>   Programs</li>
<li>   Reasons</li>
<li>   Plans</li>
<li> Testimonials</li>

      </ul>
      </div>
  )
}

export default Header