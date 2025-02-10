import React from "react";
import Hero from "../../assets/Home/hero1.png";
import { MdArrowOutward } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div className="relative h-screen bg-black text-white">
      {/* Use the img tag instead of backgroundImage */}
      <img
        src={Hero}
        alt="Hero Image"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b307e] via-[#022e8d] to-[#022980] opacity-30"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Streamline Your Business with <br /> Cutting-Edge IT Solutions
        </h1>
        <span className="text-xl mt-5 mb-6">Without:</span>
        
          <h1 className="flex gap-3 text-lg font-semibold">Unexpected Cost Surges<GiCheckMark className="text-xl font-semibold mt-1 text-blue-500"/></h1>
          <h1 className="flex gap-3 text-lg font-semibold">Complex Implementation Hassles<GiCheckMark className="text-xl font-semibold mt-1 text-blue-500"/></h1>
          <h1 className="flex gap-3 text-lg font-semibold">Performance Lags<GiCheckMark className="text-xl font-semibold mt-1 text-blue-500"/></h1>
      
        <Link to={'/our-services'}>
        <button className="mt-8 px-6 py-3 text-sm md:text-lg font-medium bg-[#DBE3EA] text-blue-900 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 flex items-center group">
          Explore Our Services
          <FaArrowRight className="text-xl ml-2" />
        </button></Link>
      </div>
    </div>
  );
};
