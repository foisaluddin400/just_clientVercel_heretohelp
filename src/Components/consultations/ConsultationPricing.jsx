import React from 'react'
import { Link } from 'react-router-dom';

export const ConsultationPricing = () => {
    const packages = [
        {
          title: "Initial Consultation (35 mins)",
          
         
          description: "Your first consultation is FREE. Let's discuss your needs and explore how we can help.",
          buttonLabel: "Call Us Now!",
        },
        {
          title: "Project-Based Consulting",
          
         
          description: "Starting at $699 per project. Final pricing will be tailored based on the complexity and scope of your needs.",
          buttonLabel: "Book NOw",
        },
        
      ];
  return (
    <div className=" text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-10">Pricing</h2>
      <div className='flex justify-center'>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-6  text-center"
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
             
              {pkg.savings && <span className="text-base">(Save {pkg.savings}!)</span>}
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
  )
}
