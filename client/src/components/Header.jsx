import React, { useContext, useEffect, useState } from 'react'
import { FaSearch, FaShoppingBasket, FaTshirt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import { RiUserLine } from 'react-icons/ri'
import userImg from '../assets/user.png'
import { FaBars, FaBarsStaggered } from 'react-icons/fa6'
import { ShopContext } from '../context/ShopContext'
const Header = () => {

  const { user, setUser, navigate, searchQuery, setSearchQuery, setShowUserLogin,getCartCount } = useContext(ShopContext);
  const [menudownOpen, setmenudownOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCollectionPage = location.pathname.endsWith('/dresscollection');

  const toggleMenu = () => {
    setmenudownOpen((prev) => !prev);
  }
  useEffect(() => {
    if (searchQuery.length > 0 && !isCollectionPage) {
      navigate('/dresscollection');
    }
  }, [searchQuery]);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser(null);
    navigate('/login');
  }

  return (

    <header className={`${!isHomePage && "bg-blue-100"} absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4`}>

      <Link to={'/'} className='flex items-center gap-2 text-2xl font-bold'>
        <FaTshirt />
        <span>Texitiles Shop .</span>
      </Link>
      <Navbar setmenudownOpen={setmenudownOpen} containerStyles={`${menudownOpen ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 z-50 " : "hidden  "}`} />

      <div className='flex items-center gap-4'>
        <div className=' relative xl:flex items-center'>
          <div className={`${showSearch ? "flex bg-white-100" : "hidden"} ${!isHomePage && "bg-primary"}`}>
            <input onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='Search .....' className='bg-transparent w-full rounded-full border border-gray-300 pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />

          </div>
          <div onClick={() => setShowSearch((prev) => !prev)} className={`cursor-pointer bg-teritarry rounded-full p-2 text-blue ${showSearch ? "absolute top-0 right-0 " : ""}`}>  <FaSearch className='text-xl' /></div>
        </div>
        <div className='flex items-center gap-6'>



          <>
            {menudownOpen ? (

              <FaBarsStaggered onClick={toggleMenu} className='hidden cursor-pointer text-xl absolute top-[-10px] right-3 text-white bg-white' />
            ) : (
              <FaBars onClick={toggleMenu} className=' lg:hidden cursor-pointer text-xl' />
            )
            }
          </>
          <div onClick={() => navigate('/cart')} className='relative flex cursor-pointer'>
            <FaShoppingBasket className='text-xl' />
            <label className='ml-2'>{getCartCount}</label>
            {/* {cartCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>{cartCount}</span>
          )} */}
          </div>

          <div><div>
            {user ? (
              <div className='relative'>
                <img src={userImg} alt="User Avatar" height={44} width={44} className='w-8 h-8 rounded-full cursor-pointer' onClick={() => setmenudownOpen((prev) => !prev)} />
              </div>

            ) : (
              <button onClick={() => setShowUserLogin(true)} className="relative z-50 flex items-center gap-1">
                <RiUserLine className='text-xl' />Login
              </button>
            )}

          </div>
            {user && (
              <ul className='absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50'>
                <Link to="/profile" onClick={() => setmenudownOpen(false)}>Profile</Link>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => { navigate('/orders'); setmenudownOpen(false); }}>My Orders</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>LogOut</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
