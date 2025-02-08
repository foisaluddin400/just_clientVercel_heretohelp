import React from "react";
import cover from '../../assets/consultation/cover.png'

export const ConsultaionCover = () => {
  return (
    <div
      className="relative bg-cover bg-center py-9 px-4 lg:px-0 text-white"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60"></div>

      <div className="max-w-7xl m-auto relative z-10  h-full  ">
        <h1 className=" md:text-6xl font-semibold leading-tight">
          <span className="text-3xl">Expert Consultations on the Forefront of Technology</span>
        </h1>
        <p>Navigate the Future with Tailored IT Solutions and Strategic Insights</p>
        <p className="mt-9 ">
          <li>
          In-depth Analysis of Emerging IT Trends and Technologies
          </li>
          <li>Customized Roadmaps for Seamless Technology Integration</li>
          <li>Strategic Advice to Leverage Innovations for Business Growth</li>
        </p>
        <p className="pt-7">
          <span className="font-bold pr-3">Description :</span> Access expert guidance on the latest IT advancements tailored to propel your business forward.

        </p>
        <p className="py-3">
          <span className="font-bold pr-3">BETS Advantage : </span> Dedicated Expertise to Propel Your Business Through Technological Innovation
        </p>
      </div>
    </div>
  );
};
