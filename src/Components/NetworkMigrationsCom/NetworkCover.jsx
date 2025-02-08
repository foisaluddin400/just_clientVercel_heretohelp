import React from "react";
import backImg from "../../assets/network/cover.png";
export const NetworkCover = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-10"></div>

        <div className="relative z-10 max-w-7xl text-xl m-auto items-center h-full  px-6">
          <h1 className=" md:text-6xl text-3xl font-bold leading-tight">
            Network Migrations and Cutover Services
          </h1>
          <p className="mt-1 text-lg font-bold md:text-xl">
            Upgrade Your Network with Confidence
          </p>
          <div className="space-y-2 mt-7">
          <li>
            Seamless Transitions: Migrate to advanced networks with minimal
            disruption and maximum efficiency.
          </li>
          <li>
            Comprehensive Planning: We meticulously plan every step to ensure a
            flawless cutover.
          </li>
          <li>
            Expert Execution: Our team guarantees a smooth transition with
            detailed testing and precision.
          </li>
          </div>
          <p className="pt-5">
            Step into the future of networking with our expert migration
            services. We manage every detail, ensuring your transition to more
            advanced technology is seamless and stress-free.
          </p>
          <div className="flex flex-row gap-5 items-center pt-7">
            <h3 className="font-semibold ">BETS Advantage: </h3>
            <p>
              Reliable and Swift Migrations: We minimize downtime and maximize
              performance, so your business keeps moving forward without a
              hitch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
