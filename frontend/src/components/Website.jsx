import React from "react";
import { assets } from "../assets/assets";

const Website = () => {
  return (
    <div className="my-10 md:h-auto sm:h-auto ">
      <div className="flex items-center gap-2 text-center justify-center sm:my-10 md:my-10 ">
        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        <p className="font-medium md:text-3xl">Websites</p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6 ">
        {/* Picture 1 */}
        <a
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer ">
            <img
              src={assets.pic1}
              alt="Picture 1"
              className="w-full  object-cover transition duration-300 hover:scale-110"
            />
          </div>
        </a>
        {/* Picture 2 */}
        <a
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer ">
            <img
              src={assets.pic2}
              alt="Picture 1"
              className="w-full  object-cover transition duration-300 hover:scale-110"
            />
          </div>
        </a>

        {/* Picture 3 */}
        <a
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer ">
            <img
              src={assets.pic3}
              alt="Picture 1"
              className="w-full  object-cover transition duration-300 hover:scale-110"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Website;
