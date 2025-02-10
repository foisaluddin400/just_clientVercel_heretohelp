import React from "react";
import { Link } from "react-router-dom";

const packages = [
  {
    title: "Basic Bundle",
    discount: "10%",
    price: "We'll tailor a competitive quote to your needs.",
    
    services:
      "Services: Structured Cabling (Copper and Fiber) + Device Installation 10% oFF",
    description: "Perfect for small businesses setting up their initial IT infrastructure.",
    buttonLabel: "Book NOW",
  },
  {
    title: "Pro Bundle",
    discount: "15%",
    price: "We'll tailor a competitive quote to your needs.",
    
    services:
      "Structured Cabling + Rack Installation + Device Deployment",
    description: "Ideal for businesses scaling their IT systems with precision.",
    buttonLabel: "Book NOW",
  },
  {
    title: "Maintenance Package",
    discount: null,
    price: "We'll tailor a competitive quote to your needs.",
    savings: null,
    services:
      "Routine Inspections, Troubleshooting, Priority Support (Annual Subscription)",
    description: "Ensures Your IT Systems Stay Operational With Minimal Downtime.",
    buttonLabel: "Book NOW",
  },
];

export const SpecialPackage = () => {
  return (
    <div className=" text-white py-16">
      <h2 className="text-center md:text-3xl text-2xl font-bold mb-10 px-5 md:px-0">Optimized IT Packages for Every Business Phase</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-6 text-center"
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
              {pkg.price}{" "}
              {pkg.savings && <span className="text-base">(Save {pkg.savings}!)</span>}
            </p>
            <p className="text-sm my-4">{pkg.services}</p>
            <p className="text-sm mb-6">{pkg.description}</p>
            <Link to={'/new-ticket'}><button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
              {pkg.buttonLabel}
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};
