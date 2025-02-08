import React from "react";
import img from "../../assets/siteSurvey/dd.png";
import { Link } from "react-router-dom";
export const SitePricing = () => {
  const packages = [
    {
      title: "Basic Site Survey",
      
      services:
        "As low as $100",
     
      buttonLabel: "Book NOW",
    },
    {
      title: "Detailed Network Assessment",
      discount: "15%",
      price: "$7,500",
      savings: "$1,000",
    
      description:
        "$499 - $? depending on the facility size and network complexity.",
      buttonLabel: "Book NOW",
    },
  ];
  return (
    <div className="pb-16 mt-11">
        <div className="lg:relative ">
      <div className="hidden lg:block">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="flex justify-center">
      <div className="  lg:absolute bottom-20">
        <h1 className="text-center text-4xl font-bold text-white pb-11">Pricing</h1>
        <div className=" grid  grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-2">
                {pkg.title}{" "}
                
              </h3>
              <p className="text-lg font-semibold">
               
                {pkg.savings && (
                  <span className="text-base">Starts At {pkg.savings}</span>
                )}
              </p>
              <p className="text-sm my-4">{pkg.services}</p>
              <p className="text-sm mb-6">{pkg.description}</p>
              <Link to={'/new-ticket'}>
              <button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
                {pkg.buttonLabel}
              </button></Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};
