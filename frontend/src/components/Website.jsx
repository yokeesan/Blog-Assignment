import React from "react";
import { assets } from "../assets/assets";

const Website = () => {
  return (
    <div className="my-10">
      <div className="flex items-center gap-2 py-10 text-center justify-center">
        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        <p className="font-medium md:text-3xl">Websites</p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* Picture 1 */}
        <a
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:animate-blink h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <img
              src={assets.pic1}
              alt="Picture 1"
              className="w-full h-full cursor-pointer object-cover hover:-translate-y-2 transition duration-300"
            />
          </div>
        </a>
        {/* Picture 2 */}
        <a
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border rounded-lg overflow-hidden shadow-lg h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <img
              src={assets.pic2}
              alt="Picture 2"
              className="w-full h-full cursor-pointer object-cover hover:-translate-y-2 transition duration-300"
            />
          </div>
        </a>
        {/* Picture 3 */}
        <a
          href="https://www.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border rounded-lg overflow-hidden shadow-lg h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <img
              src={assets.pic3}
              alt="Picture 2"
              className="w-full h-full cursor-pointer object-cover hover:-translate-y-2 transition duration-300"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Website;
