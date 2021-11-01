import { NavLink } from "react-router-dom";

import { BsCartPlus } from 'react-icons/bs'

import Logo from '../../assets/logo1-wbg.png'

import './Navbar.css'
import { useEffect, useState } from "react";

const Navbar = () => {

  const [cartNumber, setCartNumber] = useState(0)

  const ordersTest = localStorage.getItem('waiting_order')
  
  useEffect(() => {

    const setNumberOfOrders = (number) => {
      setCartNumber(number)
    }

    if(localStorage.getItem('waiting_order')) {
      const listOfOrders = JSON.parse(localStorage['waiting_order'])
      const numberOfOrders = listOfOrders.length
      setNumberOfOrders(numberOfOrders)
      console.log(listOfOrders.length)  
    }
  }, [ordersTest])

  

  

  return (
    <div className='Navbar'>
      <div className='navbar-logo-container'>
        <NavLink to='/'>
          <img src={Logo} alt='logo home' />
        </NavLink>
      </div>
      <div className='navbar-menu-container'>
        <ul>
          <NavLink to='/description-product'><li className='menu-link-nav'>Notre produit</li></NavLink>
          <NavLink to=''><li className='menu-link-nav'>Qui sommes-nous ?</li></NavLink>
          <NavLink to='/buy-product'><li className='menu-link-buy'>Acheter</li></NavLink>
          <NavLink to=''><li className='menu-link-cart'><ruby><BsCartPlus /><rp>(</rp><rt>{cartNumber}</rt><rp>)</rp></ruby></li></NavLink>
        </ul>
      </div>
    </div>
    );
}
 
export default Navbar;