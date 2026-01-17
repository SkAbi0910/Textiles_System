import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { Outlet } from 'react-router-dom';
import { FaSquarePlus } from 'react-icons/fa6';
import { FaListAlt,FaTshirt } from 'react-icons/fa'
import { MdFactCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

export default function Sidebar() {
    const { navigate } = useContext(ShopContext);
    const navItems = [
        {
            path: "/admin",
            label: "Add Items",
            icon: <FaSquarePlus />
        },
        {
            path: "/admin/list",
            label: "List",
            icon: <FaListAlt />
        },
        {
            path: "/admin/orders",
            label: "Orders",
            icon: <MdFactCheck />
        }
    ]
    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-xl hidden sm:flex flex-col">
                   <div className="h-20 flex items-center justify-center border-b">
                   <Link to={'/admin'} className='flex items-center gap-2 text-2xl font-bold'>
                           <FaTshirt />
                           <span>Texitiles Shop .</span>
                         </Link></div>
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {navItems.map((link) => (
                                <NavLink to={link.path} key={link.label} end={link.path === '/admin'}
                                    className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
                ${isActive
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }
                                >
                                    <span className="text-lg">{link.icon}</span>
                                    <span>{link.label}</span>
                                </NavLink>
                            ))}</nav>
                        <div className="p-4 border-t">
                            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition">
                                <BiLogOut className="text-lg" />
                                <div className='hidden sm:flex'>Logout</div>
                            </button>
                        </div>
                    
                
            </aside>
            <main className="flex-1 p-6">
            <Outlet /></main>
        </div>
    )
}