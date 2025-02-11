import React from "react";
import img from "../../assets/network/img4.png";
import { Link } from "react-router-dom";
export const NetworkPricing = () => {
  const packages = [
    {
      title: "Small-Scale Migrations",
      
      services:
        " Starting as low as $1,000",
     
      buttonLabel: "Book NOW",
    },
    {
      title: "Large-Scale Migrations",
      
      services: "Custom quotes based on project complexity.",
    
      buttonLabel: "Book NOW",
    },
  ];
  return (
    <div>
      <div className=" text-white py-32">
        <h2 className="text-center text-3xl font-bold mb-10">
          Special Packages
        </h2>
        <div className="relative ">
          <div className=" flex justify-center ">
            <div className=" grid  grid-cols-1 md:grid-cols-2 gap-6 px-4">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white hover:bg-[#2727aa] hover:text-white transition duration-100 text-black rounded-lg shadow-lg p-6 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">
                    {pkg.title}{" "}
                    {pkg.discount && (
                      <span className="text-sm text-[#2E4CB9]">
                        (Discount: {pkg.discount})
                      </span>
                    )}
                  </h3>
                  <p className="text-lg font-semibold">
                  
                    {pkg.savings && (
                      <span className="text-base">(Save {pkg.savings}!)</span>
                    )}
                  </p>
                  <p className="text-sm my-4">{pkg.services}</p>
                  <p className="text-sm mb-6">{pkg.description}</p>
                  
                  <Link to={'/new-ticket'}>
                  <button className="bg-[#2E4CB9]  text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition">
                    {pkg.buttonLabel}
                  </button></Link>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -z-10  -top-28">
            <div className="flex justify-center ">
              <div className="relative">
                <div className="absolute -top-11 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-700 to-transparent opacity-80 blur-[100px]"></div>

                <img className="w-[400px] " src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
