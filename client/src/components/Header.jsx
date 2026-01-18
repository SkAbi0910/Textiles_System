import React, { useState } from 'react';
import { FaTshirt, FaShoppingBasket, FaBars, FaTimes } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // ✅ added
import Navbar from './Navbar.jsx';

const Header = () => {
  const [menudownOpen, setmenudownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const totalCount = useSelector((state) => state.cart.totalCount);

  const toggleMenu = () => {
    setmenudownOpen(prev => !prev);
  };

  return (
    <header className={`${!isHomePage && "bg-black"} absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4`}>
      
      {/* Logo */}
      <Link to={'/'} className='flex items-center gap-2 text-2xl font-bold text-amber-200'>
        <FaTshirt />
        <span className='text-white'>Texitiles</span>
      </Link>

      {/* Navbar */}
      <Navbar 
        setmenudownOpen={setmenudownOpen} 
        containerStyles={`${
          menudownOpen 
            ? "flex flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 z-50"
            : "hidden"
        } lg:flex lg:flex-row lg:static lg:w-auto lg:gap-x-6`}
      />

      {/* Right section */}
      <div className='flex items-center gap-4'>
        {/* Mobile menu */}
        {menudownOpen ? (
          <FaTimes onClick={toggleMenu} className='cursor-pointer text-xl text-white lg:hidden' />
        ) : (
          <FaBars onClick={toggleMenu} className='cursor-pointer text-xl text-white lg:hidden' />
        )}

        <div className='flex items-center gap-4'>
          {/* Cart */}
          <Link to="/cart" className='relative flex items-center gap-2 px-3 py-2 rounded-3xl bg-white text-black'>
            <FaShoppingBasket className='text-xl' />

            {/* ✅ Cart count badge */}
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <button className='flex items-center gap-1 px-3 py-2 rounded-3xl bg-amber-500 text-white'>
            <RiUserLine className='text-xl' />
            <span className="underline">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
