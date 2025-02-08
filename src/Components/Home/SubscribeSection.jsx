import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

export const SubscribeSection = () => {
  return (
    <div className=" py-28 mt-28 lg:mt-6 mx-4 md:mx-0">
      <h1 className="text-center font-semibold pb-3  bg-gradient-to-r from-white  to-blue-600 bg-clip-text text-transparent">Join our newsletter for important updates and exclusive discounts!</h1>
      <div className=" flex justify-center">
      
      <div className="bg-gradient-to-r from-[#1a1e3f75] to-[#59595a63] md:flex justify-between items-center bg-blue-800 rounded-xl px-8 md:py-9 py-4 shadow-lg max-w-4xl w-full">
        <h2 className="text-white font-bold md:text-3xl text-2xl col-span-1 mb-5 md:mb-0">
          Subscribe To Our Newsletter
        </h2>
        <form className="relative w-full max-w-md ">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-[#9696aa57] text-white placeholder-gray-400 rounded-lg px-4 py-4 pr-20 outline-none"
          />
          <button
            type="submit"
            className="absolute flex top-1/2 right-2 transform -translate-y-1/2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:text-white"
          >
            Subscribe <CiLocationArrow1 className="text-2xl"/>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};
