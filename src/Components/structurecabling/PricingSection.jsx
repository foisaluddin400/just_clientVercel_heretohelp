import React from 'react'
import { Link } from 'react-router-dom';

export const PricingSection = () => {
    const packages = [
        {
          title: "Starts as Low as $10 Per Cable",
          description: "Basic installations with minimal complexity.",
          buttonLabel: "Book NOW",
        },
        {
          title: "Average Project Costs ",
          description: "Pricing tailored to your needs—our experts will assess your cabling requirements and provide a customized quote.",
          buttonLabel: "Book NOW",
        },
        {
          title: "Request a Custom Quote",
          description: "Perfect for unique or complex projects. Get tailored solutions that fit your needs and budget.",
          buttonLabel: "Request Custom Project",
        },
      ];
      
  return (
    <div className=" text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-10">Pricing (Cost Breakdown)</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white flex items-center text-black rounded-lg shadow-lg p-6 text-center"
          >
           <div>
           <h3 className="text-3xl font-bold mb-2">
              {pkg.title}{" "}
              
            </h3>
           
           
            <p className="text-sm mb-6">{pkg.description}</p>
            <Link to={'/new-ticket'}>
            <button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
              {pkg.buttonLabel}
            </button></Link>
           </div>
          </div>
        ))}
      </div>
    </div>
  )
}
