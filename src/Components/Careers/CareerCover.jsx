import React from "react";
import cover from "../../assets/careers/cover.png";
export const CareerCover = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a011b] via-blue-900 to-[#0a011b] opacity-30"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className=" md:text-6xl font-bold leading-tight">
            <span className="text-3xl">Careers At</span> <br />{" "}
            <span className="text-7xl bg-gradient-to-r from-[#cbafe6] via-[#ab82f1] to-[#e5d7f3] bg-clip-text text-transparent">
              BETS.
            </span>
        
          </h1>
          <p className="mt-4 text-lg font-bold md:text-2xl">
          Join Us to make a change
          </p>
        </div>
      </div>
    </div>
  );
};
