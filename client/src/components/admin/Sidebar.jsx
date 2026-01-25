import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

import {
  MdDashboard,
  MdFactCheck
} from "react-icons/md";
import { FaSquarePlus} from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAdmin, user } = useSelector((state) => state.auth);

  
  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [isAdmin, navigate]);

  const navItems = [
    {
      path: "/admin/dashboard",
      label: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/admin/dashboard/addProduct",
      label: "Add Products",
      icon: <FaSquarePlus />,
    },
    {
      path: "/admin/list",
      label: "Product List",
      icon: <FaListAlt />,
    },
    {
      path: "/admin/orders",
      label: "Orders",
      icon: <MdFactCheck />,
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

 return (
  <div className="flex min-h-screen bg-slate-100">
    {/* Sidebar */}
    <aside className="w-72 bg-white shadow-xl hidden sm:flex flex-col">
      {/* Header */}
      <div className="h-20 flex items-center gap-3 px-6 border-b">
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600">
          <MdDashboard className="text-xl" />
        </div>

        <div>
          <h1 className="text-lg font-extrabold text-gray-900">
            Admin Panel
          </h1>
          <p className="text-xs text-gray-500 truncate">
            {user?.email || "Administrator"}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
              group flex items-center gap-3 px-4 py-3 rounded-2xl
              font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-amber-400 text-black shadow-md"
                  : "text-gray-600 hover:bg-amber-100 hover:text-amber-600"
              }
              `
            }
          >
            <span
              className={`text-xl transition
                ${
                  window.location.pathname === item.path
                    ? "text-black"
                    : "group-hover:text-amber-600"
                }`}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3
                     rounded-2xl text-red-500 font-medium
                     hover:bg-red-50 transition"
        >
          <BiLogOut className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-6 lg:p-10">
      <Outlet />
    </main>
  </div>
);

}
