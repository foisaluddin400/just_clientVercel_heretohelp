import React from "react";
import { PricingRack } from "./PricingRack";
import aa from "../../assets/rack/aa.png";
import a from "../../assets/rack/a.png";
import b from "../../assets/rack/b.png";
import c from "../../assets/rack/c.png";
export const ChooseBets = () => {
  return (
    <div className=" py-16">
      <div className="  text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why Choose BETS?
        </h2>

        {/* Features */}
        <div className="relative">
          <div className="flex justify-end">
          <div className="absolute -bottom-20">
            <img className="w-96" src={aa} alt="" />
          </div>
          </div>
          <div className="px-4 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto ">
            {/* Feature 1 */}
            <div className="bg-[#ffffff15] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
              <div className="flex justify-center mb-6">
                <span className="text-blue-400 text-6xl">
                  {/* Shield Icon */}
                 <img className="w-20" src={a} alt="" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Certified & Experienced Technicians
              </h3>
              <p className="text-gray-300">
                Our team comprises industry-certified professionals with years
                of experience, ensuring top-quality service and expertise you
                can rely on.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#ffffff15] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
              <div className="flex justify-center mb-6">
                <span className="text-yellow-400 text-6xl">
                  {/* Lightbulb Icon */}
                  <img className="w-20" src={b} alt="" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Tailored Solutions For Your Needs
              </h3>
              <p className="text-gray-300">
                We don’t believe in one-size-fits-all. We design and implement
                customized IT solutions that align perfectly with your unique
                business requirements and goals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#ffffff15] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
              <div className="flex justify-center mb-6">
                <span className="text-pink-400 text-6xl">
                  {/* Clock Icon */}
                  <img className="w-20" src={c} alt="" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Fast & Efficient Service
              </h3>
              <p className="text-gray-300">
                We understand that time is money. Our streamlined processes and
                dedicated team ensure prompt, efficient service to minimize
                downtime and maximize productivity.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <PricingRack></PricingRack>
    </div>
  );
};
