import React from 'react'
import { Link } from 'react-router-dom'

export const ServicesBundlePricing = () => {
  return (
    <div>
      <div className="text-white py-32">
        <h2 className="text-center text-3xl font-bold mb-10">Pricing</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white hover:bg-[#2727aa] hover:text-white transition duration-100 text-black rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">
              Basic Bundle{" "}
              
            </h3>
            <p className="text-lg font-semibold">
              We'll tailor a competitive quote to your needs.
            </p>
            <p className="text-sm my-4">
              Services: Structured Cabling (Copper and Fiber) + Device Installation
              Discount: 10%
            </p>
            <p className="text-sm mb-6">
              Perfect For Small Businesses Setting Up Their Initial IT Infrastructure.
            </p>
            <Link to={'/new-ticket'}>
            <button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition">
              Optimize Your Network Today!
            </button></Link>
          </div>

          <div className="bg-white hover:bg-[#2727aa] hover:text-white transition duration-100 text-black rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">
              Pro Bundle
            </h3>
            <p className="text-lg font-semibold">
              We'll tailor a competitive quote to your needs.
            </p>
            <p className="text-sm my-4">
              Structured Cabling + Rack Installation + Device Deployment
            </p>
            <p className="text-sm mb-6">
              Ideal for businesses scaling their IT systems with precision.
            </p>
            <Link to={'/new-ticket'}>
            <button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition">
              Scale Seamlessly Now!
            </button></Link>
          </div>

          <div className="bg-white hover:bg-[#2727aa] hover:text-white transition duration-100 text-black rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">
              Custom Maintenance Package
            </h3>
            <p className="text-lg font-semibold">
              Tailored to Your Unique Needs
            </p>
            <li className="text-sm my-4">
              Customized Routine Inspections
            </li>
            <li className="text-sm mb-6">
            Targeted Troubleshooting
            </li>
            <li className="text-sm mb-6">
            Priority Support
            </li>
            <Link to={'/new-ticket'}><button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition">
            Book Your Custom Plan NOW
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
