import React from "react";
import img from "../../assets/tech/hand.png";
export const Partnering = () => {
  return (
    <div>
      <div className="lg:mx-11 mx-4 md:relative  mt-20">
        <div className="hidden md:block">
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        </div>
        <div className="md:absolute lg:bottom-0 top-0 px-4 lg:px-0 w-full bg-[#ffffff15]  border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8 rounded-xl">
          <div className="max-w-7xl m-auto lg:grid  grid-cols-2 gap-11">
            <div className="flex items-center">
              <div>
                <h1 className="md:text-2xl text-xl md:font-bold font-semibold">
                  Partnering with BETS means joining a network dedicated to
                  technological excellence and business success. Discover why
                  becoming a BETS partner is the best move for your business.
                </h1>
                <button className="bg-[#2E4CB9] px-5 py-3 rounded mt-8">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="mt-9 lg:mt-0">
              <div>
                <h1 className="md:text-2xl text-xl font-semibold pb-2">
                  Cutting-Edge IT Solutions
                </h1>
                <p className="pb-5">
                  Access the latest in tech innovations to elevate your service
                  offerings and exceed client expectations.
                </p>
              </div>
              <div>
                <h1 className="md:text-2xl text-xl pb-2">
                  Grow Your Business, Boost Revenue
                </h1>
                <p>
                  Expand your market reach, enhance your services, and increase
                  profitability through our comprehensive support and extensive
                  network.
                </p>
              </div>
              <div>
                <h1 className="md:text-2xl text-xl pb-2 pt-5">
                  Seamless Partnership Program
                </h1>
                <p>
                  Benefit from a frictionless integration into our network with
                  continuous support, resources, and collaborative opportunities
                  designed to ensure mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
