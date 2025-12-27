import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { FaSearch, FaShoppingBasket } from 'react-icons/fa'
import { RiUserLine } from 'react-icons/ri'
const Navbar = ({user, cartCount = 0}) => {
    
    return (
        <nav>
        <div className='hidden md:flex items-center gap-8'>
        {["Men","Women","Kids","All Products","Offers"].map(item => (
<NavLink
key ={item}
to={`/${item.toLowerCase()}`}
className={({ isActive }) =>
`font-medium ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>{item}</NavLink>
        ))}
            
        </div>
        <div className='flex items-center gap-4'>
            <div className='flex-1 relative hidden md:block'>
                <input type="text" placeholder='Search .....' className='w-full rounded-full border border-gray-300 pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
            </div>
            <Link to="/cart" className='relative'>
        <FaShoppingBasket className='text-xl' />
        {cartCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>{cartCount}</span>
        )}
    </Link>
    {user ? (
        <img src={user.avatar} alt="User Avatar" className='w-8 h-8 rounded-full' />
    ) : (
  <Link to="/login" className='flex items-center gap-1'>
            <RiUserLine className='text-xl' />Login
            </Link>
    )}
        
          
       
   
            </div>
        </nav>
    )
}

export default Navbar
