import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { Outlet } from 'react-router-dom';
import { FaPeopleGroup, FaSquarePlus } from 'react-icons/fa6';
import { FaListAlt, FaShoppingCart, FaStar, FaTshirt, FaUsers } from 'react-icons/fa'
import { MdAttachMoney, MdDashboard, MdError, MdFactCheck, MdInventory } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { BiCheckCircle, BiLogOut } from 'react-icons/bi';
import AdminLogin from './AdminLogin';
import { TbDashboard } from 'react-icons/tb';

export default function Sidebar() {
    const { navigate } = useContext(ShopContext);



    const navItems = [
        {
            path: "/admin/dashboard",
            label: "Dashboard",
            icon: <MdDashboard />
        }
        ,

        {
            path: "/admin/addProduct",
            label: "Add Products",
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
        },
        // {
        //     path: "/admin/users",
        //     label: "Users",
        //     icon: <FaUsers />
        // },
        // {
        //     path: "/admin/reviews",
        //     label: "Reviews",
        //     icon: <FaStar />
        // }
    ]
    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-xl hidden sm:flex flex-col">
                <div className="h-20 flex items-center gap-3 px-6 border-b bg-white shadow-sm">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600">
                        <MdDashboard className="text-xl" />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-lg font-semibold text-gray-800">
                            Admin Dashboard
                        </h1>
                        <p className="text-xs text-gray-500">
                            Manage products, orders & users
                        </p>
                    </div>
                </div>

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
                <Outlet /></main> </div>



    )
}