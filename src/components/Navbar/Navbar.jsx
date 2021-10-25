import { NavLink } from "react-router-dom";

import Logo from '../../assets/logo1-wbg.png'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='navbar-logo-container'>
        <NavLink to='/'>
          <img src={Logo} alt='logo home' />
        </NavLink>
      </div>
      <div className='navbar-menu-container'>
        <ul>
          <NavLink to=''><li>Description</li></NavLink>
          <NavLink to=''><li>Acheter</li></NavLink>
        </ul>
      </div>
    </div>
    );
}
 
export default Navbar;