import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ containerStyles, setmenudownOpen }) => {

    const navLinks = [
        { path: "/", title: "Home" },
        { path: "/contact", title: "Contact" },
        { path: "/dresscollection", title: "Dress Collection" },
        { path: "/worthiness", title: "Worthiness" }, 
        { path: "/my_orders", title: "My Orders" },
        { path: "/place-orders", title: "Place Order" },
    ]
    const dropdownRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setmenudownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setmenudownOpen]);

    return (
        <nav className={`${containerStyles} flex gap-8`}>
  {navLinks.map((link) => (
    <NavLink
      key={link.title}
      to={link.path}
      onClick={() => setmenudownOpen(false)}
      className={({ isActive }) =>
        `
        relative font-medium tracking-wide transition-all duration-300
        ${
          isActive
            ? "text-black after:w-full"
            : "text-amber-400 hover:text-amber-400 after:w-0"
        }
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        `
      }
    >
      {link.title}
    </NavLink>
  ))}
</nav>

    )
}

export default Navbar
