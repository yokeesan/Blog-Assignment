import React from 'react';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 px-[4%]">
      <img className="w-[10%] max-w-[60px]" src={assets.logo} alt="Logo" />
      <img className="w-[40px]" src={assets.profile_image} alt="Profile" />
    </div>
  );
};

export default Navbar;
