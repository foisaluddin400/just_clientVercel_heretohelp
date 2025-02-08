import React from "react";
import backImg from "../../assets/ourteam/team.png";
export const OurTeamCover = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className=" md:text-6xl font-bold leading-tight">
            <span className="text-5xl">MEET THE</span> <br />{" "}
            <span className="md:text-7xl text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              BETS
            </span>
            <span className="md:text-7xl text-5xl font-bold"> TEAM.</span>
          </h1>
          <p className="mt-4 text-lg font-bold md:text-4xl">
          Pioneering Reliable IT Innovations.
          </p>
        </div>
      </div>
    </div>
  );
};
