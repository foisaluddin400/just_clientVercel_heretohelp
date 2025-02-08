import React from "react";
import price1 from "../../assets/rack/price1.png";
import price2 from "../../assets/rack/price2.png";
import price from "../../assets/rack/vv.png";
import { Link } from "react-router-dom";
export const PricingRack = () => {
  return (
    <div>
      <div className=" text-white py-16 lg:mt-32">
        <h2 className="text-center text-3xl font-semibold mb-10 mt-11">
          Pricing
        </h2>
        <div className="lg:flex">
          <div className="hidden lg:block">
            <div className="-mt-32">
              <img src={price1} alt="" />
            </div>
          </div>
          <div className="px-4 lg:px-0">
            <div className="max-w-5xl mx-auto flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Rack Installation Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Rack Installation
                  </h3>
                  <p className="text-black mb-4">
                  As low as $299
                  </p>
                  <p className="text-black mb-6">
                    Rack Assembly Services Begin As Low As $300 And Scale Up To
                    $600, Depending On The Number Of Devices And Complexity Of
                    The Cabling And Rack Setup.
                  </p>
                  <Link to={'/new-ticket'}><button className="bg-[#2E4CB9] hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Book NOW
                  </button></Link>
                </div>

                {/* Device Installation Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Device Installation
                  </h3>
                  <p className="text-black mb-4">Starting as low as $49 per Device</p>
                  <p className="text-black mb-6">
                    Device Installation Starts At $50 Per Device And Goes Up To
                    $250 For Advanced Configurations, Depending On
                    Project-Specific Requirements.
                  </p>
                  <Link to={'/new-ticket'}><button className="bg-[#2E4CB9] hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Book NOW
                  </button></Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white lg:w-[50%] lg:m-8 mt-8 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Quote
                </h3>
                
                <p className="text-black mb-6">
                Have a unique project or large-scale setup? Contact us for a tailored quote designed to meet your exact needs.
                </p>
                <Link to={'/new-ticket'}><button className="bg-[#2E4CB9] hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Request Custom Project
                  </button></Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="-mt-32">
              <img src={price2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center lg:py-60 md:py-20 py-11 text-white"
        style={{ backgroundImage: `url(${price})` }}
      >
        <div className="flex items-center justify-center">
          <h1 className="md:text-5xl text-2xl font-semibold text-center">
            Ensure <span className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Seamless</span> Operations with <span className="bg-gradient-to-r from-blue-200 via-purple-500 to-blue-600 bg-clip-text text-transparent">Professional</span> Rack and Device
            Installations.
          </h1>
        </div>
      </div>
    </div>
  );
};
