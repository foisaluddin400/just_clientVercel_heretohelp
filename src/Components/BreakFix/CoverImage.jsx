import React from "react";
import img from "../../assets/break/back.jpg";
export const CoverImage = () => {
  return (
    <div
      className="relative bg-cover bg-center py-9 px-4 lg:px-0 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60"></div>

      <div className="max-w-7xl m-auto relative z-10  h-full  ">
        <h1 className=" md:text-6xl font-semibold leading-tight">
          <span className="text-3xl">Break/Fix Services</span>
        </h1>
        <p className="mt-9 ">
          <li>
            Rapid response to technical issues, from hardware failures to
            network outages.
          </li>
          <li>Troubleshooting and repair to minimize downtime.</li>
        </p>
        <p className="pt-7">
          <span className="font-bold pr-3">Description :</span> On-call
          troubleshooting and repair services to address network hardware
          failures, connectivity issues, and software problems.
        </p>
        <p className="py-3">
          <span className="font-bold pr-3">BETS Advantage : </span> Fast
          response times with flexible service packages.
        </p>
      </div>
    </div>
  );
};
