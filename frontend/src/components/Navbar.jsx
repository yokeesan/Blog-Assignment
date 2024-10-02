import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between  py-5 font-medium">
      <Link to="/">
        <img
          src={assets.logo}
          className="w-20 h-20 max-h-16 transition-transform duration-300 transform hover:scale-110 object-contain"
          alt="Logo"
        />
      </Link>

      <ul className="hidden sm:flex gap-10 text-md text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 group transition-transform duration-300 transform hover:scale-110"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 scale-0 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:scale-100" />
        </NavLink>
        <NavLink
          to="/services"
          className="flex flex-col items-center gap-1 group transition-transform duration-300 transform hover:scale-110"
        >
          <p>SERVICES</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 scale-0 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:scale-100" />
        </NavLink>
        <NavLink
          to="/blogs"
          className="flex flex-col items-center gap-1 group transition-transform duration-300 transform hover:scale-110"
        >
          <p>BLOGS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 scale-0 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:scale-100" />
        </NavLink>
      </ul>

      <div>
        <div className="group relative hidden sm:block">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
        </div>
        <div>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-3 cursor-pointer">
            <img
              onClick={() => setVisible(false)}
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/services"
          >
            SERVICES
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/blogs"
          >
            BLOGS
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
