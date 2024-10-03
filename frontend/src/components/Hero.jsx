import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-gray-400 rounded-lg">
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4">
          <div className="text-[#414141] text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">VISION</p>
            </div>
            <h1 className="prata-regular text-2xl sm:text-3xl lg:text-5xl leading-relaxed">
              Work Flow
            </h1>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <p className="font-semibold text-sm md:text-base">TALK WITH US</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        {/* Hero Right Side */}
        <div className="w-full  sm:w-1/2 flex items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-r-lg"
            src={assets.cart}
            alt="Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
