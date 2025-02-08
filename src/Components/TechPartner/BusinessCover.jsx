import React from "react";
import img from "../../assets/tech/img.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
export const BusinessCover = () => {
  return (
    <div>
       <div className="bg-[#DBE3EA] py-5 px-4 lg:px-0">
        <div className="max-w-7xl m-auto text-xl font-bold">Profile</div>
      </div>
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-70"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="  font-bold leading-tight max-w-5xl">
            
            <span className="lg:text-6xl md:text-3xl  leading-snug ">
              Enhance the header to be more inviting and aligned with BETS's
              goals
            </span>
            <h3 className="text-3xl pt-4">Become a BETS Business Partner</h3>
            <p className="my-8 text-lg md:text-lg font-normal">
          Join forces with BETS to lead the future of innovation in IT. Together, we can deliver transformative solutions that drive business growth and technological advancement.
          </p>
          </h1>
          
         <Link to={'/join-our-partner'}><button className="bg-[#2E4CB9] flex items-center gap-5 py-3 px-5 rounded">Join Our Partner Program <FaArrowRight /></button></Link>
        </div>
      </div>
    </div>
  );
};
