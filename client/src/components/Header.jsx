import React, { use } from 'react'
import {  FaSearch,FaShoppingBasket, FaTshirt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import { RiUserLine } from 'react-icons/ri'
const Header = () => {
  return (
   <header>
    <Link to ='/' className='flex items-center gap-2 text-2xl font-bold'>
        <FaTshirt/>
        <span>Texitiles Shop .</span>
    </Link>
    <Navbar/>
    
    
    
    <div>
       
            <ul>
                <li>
                    Orders
                </li>
                <li>LogOut</li>
            </ul>  
        
    </div>
   </header>
  )
}

export default Header
