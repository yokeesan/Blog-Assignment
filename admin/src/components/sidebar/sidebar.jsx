import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-[1.5px] border-gray-400 border-t-0 text-[clamp(10px,1vw,16px)]">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer ${
              isActive ? "bg-black text-white" : ""
            }`
          }
        >
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer ${
              isActive ? "bg-black text-white" : ""
            }`
          }
        >
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Sidebar;
