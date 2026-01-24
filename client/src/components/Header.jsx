import React, { useState } from "react";
import { FaTshirt, FaShoppingBasket, FaBars, FaTimes } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import Navbar from "./Navbar.jsx";

const Header = () => {
  const [menudownOpen, setmenudownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isHomePage = location.pathname === "/";

  // const totalCount = useSelector((state) => state.cart.totalCount);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const toggleMenu = () => setmenudownOpen((prev) => !prev);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header
      className={`${!isHomePage && "bg-black"
        } absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4`}
    >

      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <FaTshirt className="text-amber-200" />
        <span className="text-white">Textiles</span>
      </Link>


      <Navbar
        setmenudownOpen={setmenudownOpen}
        containerStyles={`${menudownOpen
            ? "flex flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 z-50"
            : "hidden"
          } lg:flex lg:flex-row lg:static lg:w-auto lg:gap-x-6`}
      />


      <div className="flex items-center gap-4">

        {menudownOpen ? (
          <FaTimes
            onClick={toggleMenu}
            className="cursor-pointer text-xl text-white lg:hidden"
          />
        ) : (
          <FaBars
            onClick={toggleMenu}
            className="cursor-pointer text-xl text-white lg:hidden"
          />
        )}


        <Link
          to="/cart"
          className="relative flex items-center gap-2 px-3 py-2 rounded-3xl bg-white text-black"
        >
          <FaShoppingBasket className="text-xl" />
          {/* {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalCount}
            </span>
          )} */}
        </Link>


        {!isAuthenticated ? (
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-1 px-3 py-2 rounded-3xl bg-amber-500 text-white"
          >
            <RiUserLine className="text-xl" />
            <span className="cursor-pointer">Login</span>
          </button>
        ) : (
          <div className="flex items-center gap-3 text-white">
            <span className="text-sm">Hi, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded-full bg-red-500 hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
