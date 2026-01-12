import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ containerStyles , setmenudownOpen }) => {

    const navLinks =[
        {path :"/", title : "Home"},
        {path :"/contact", title : "Contact"},
        {path:"/dresscollection", title:"Dress Collection"},
        {path:"/worthiness", title:"Worthiness"}
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
        <nav className={`${containerStyles}`}>
{navLinks.map((link) => (
    <NavLink onClick={() => setmenudownOpen(false)}
    key={link.title} to={link.path} className={({ isActive }) =>
        `font-medium ${isActive ? " active-link text-blue-600" : "text-gray-700 hover:text-blue-600"}`
    }>
        {link.title}
    </NavLink>
))}

            {/* <div className='hidden md:flex items-center gap-8'>
                {["Men", "Women", "Kids", "All Products", "Offers"].map(item => (
                    <NavLink
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className={({ isActive }) =>
                            `font-medium ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>{item}</NavLink>
                ))}

            </div> */}


        </nav>
    )
}

export default Navbar
