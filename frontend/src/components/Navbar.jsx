import React from "react";
import { assets } from "../assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-950">
      {/* Logo */}
      <h1 className="cursor-pointer font-pacifico text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Healio
      </h1>

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 group cursor-pointer">
            Home
            <hr className="w-0 h-0.5 bg-black group-hover:w-3/5 transition-all duration-300 mx-auto rounded-full" />
          </li>
        </NavLink>

        <NavLink to="/doctors">
          <li className="py-1 group cursor-pointer">
            All Doctors
            <hr className="w-0 h-0.5 bg-black  group-hover:w-3/5 transition-all duration-300 mx-auto rounded-full" />
          </li>
        </NavLink>

        <NavLink to="/about">
          <li className="py-1 group cursor-pointer">
            About
            <hr className="w-0 h-0.5  bg-black  group-hover:w-3/5 transition-all duration-300 mx-auto  rounded-full" />
          </li>
        </NavLink>

        <NavLink to="/contact">
          <li className="py-1 group cursor-pointer">
            Contact
            <hr className="w-0 h-0.5  bg-black  group-hover:w-3/5 transition-all duration-300 mx-auto rounded-full" />
          </li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative ">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile_pic"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={()=>navigate('my-profile')}className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                  <p onClick={()=> setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>

        ) : (
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-white bg-black px-6 py-4 rounded-full hidden md:block cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
