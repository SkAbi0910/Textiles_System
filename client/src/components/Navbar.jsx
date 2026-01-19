import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ containerStyles, setmenudownOpen }) => {

    const navLinks = [
        { path: "/", title: "Home" },
        { path: "/contact", title: "Contact" },
        { path: "/dresscollection", title: "Dress Collection" },
        { path: "/worthiness", title: "Worthiness" }
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
        `font-lg ${isActive ? " active-link text-amber-400" : "text-white hover:text-amber-400"}`
    }>
        {link.title}
    </NavLink>
))}

           

        </nav>
    )
}

export default Navbar
