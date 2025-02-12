import side from "../../assets/break/side.png";
import dd from "../../assets/break/dd.png";
import aa from "../../assets/break/aa.png";
import ddd from "../../assets/break/ddd.png";
import img from "../../assets/break/1.png";
import img1 from "../../assets/break/2.png";
import img2 from "../../assets/break/3.png";
import price from "../../assets/rack/vv.png";
import { Link } from "react-router-dom";
export const OurBreakFixSection = () => {
  const packages = [
    {
      title: "Hourly Rate",

      services:
        "Starts as Low as $50/Hour",
        buttonLabel: "Book NOW",
    },
    {
      title: "Emergency Rate",

      
      
      description:
        "$200 per hour (For critical after-hours issues or immediate-response troubleshooting needs.)",
      buttonLabel: "Book NOW",
    },
    {
      title: "Retainer Packages",

      services:
        "Flexible Maintenance Plans",
      description:
        "Starting at $400/Month for up to 5 hours of support. Includes proactive maintenance, troubleshooting, and priority support for ongoing needs.",
      buttonLabel: "Contact Us for a Custom Plan",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95 ">
      <div className="lg:grid px-4 lg:px-0 grid-cols-2 relative bg-cover bg-center w-full text-white">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1A348D] via-[#0e68dd] to-[#1A348D] opacity-20"></div> */}
        <div className="text-white lg:p-20 lg:pt-32 pt-11 z-30">
          <div className="mb-20">
            <h1 className=" leading-tight">
              <span className="text-xl md:text-xl font-bold pe-2">
                Our Break/Fix IT services
              </span>
              <span>
                cover everything from hardware malfunctions, software conflicts,
                and network outages to peripheral and accessory repair. We
                understand the urgency of IT failures, which is why our approach
                is centered around prompt, effective action to get your
                operations back on track swiftly.
              </span>
            </h1>
            <p className="mt-4 text-sm "></p>
          </div>

          <div>
            <div className="relative">
              <div className="">
                <div className="flex  gap-5 items-center bg-[#ffffff15] px-5 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8   rounded-xl">
                  <img className="w-[50px]" src={img} alt="" />
                  <li>
                    Hardware Repairs: Quick fixes and replacements for faulty
                    components to ensure optimal performance.
                  </li>
                </div>
                <div className="flex gap-5 items-center bg-[#ffffff15] px-5 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8   rounded-xl">
                  <img className="w-[50px]" src={img1} alt="" />
                  <li>
                  Software Restoration: Corrections and configuration adjustments for crashed or malfunctioning software.
                  </li>
                </div>
                <div className="flex gap-5 items-center bg-[#ffffff15] px-5 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-8   rounded-xl">
                  <img className="w-[50px]" src={img2} alt="" />
                  <li>
                  Network Troubleshooting: Rapid recovery solutions for network-related issues that affect your connectivity and performance.
                  </li>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 -z-20">
              <div className="flex justify-center ">
                <div className="relative">
                  <div className="absolute  left-0 right-0 h-[800px] bg-gradient-to-b  bg-blue-950 to-transparent opacity-90 blur-[100px]"></div>

                  <img className=" " src={dd} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="z-30 hidden lg:block">
          <img className="w-full h-[600px]" src={side} alt="" />
        </div>
      </div>

      <div
        className="relative bg-cover bg-center lg:py-72 py-11 text-white"
        style={{ backgroundImage: `url(${price})` }}
      >
        <div className="flex items-center justify-center">
          <h1 className="md:text-5xl text-2xl font-semibold text-center">
          Don't let technical disruptions stall your business.
          <h1 className="text-4xl">Contact us today to schedule a consultation or learn more about our Break/Fix services.</h1>
          </h1>
        </div>
      </div>
      <div className=" text-white py-32">
        <h2 className="text-center text-3xl font-bold mb-10">Pricing</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between items-center hover:bg-[#2727aa] hover:text-white transition duration-100 text-black rounded-lg shadow-lg p-6 text-center"
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
              <button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition mt-auto">
                {pkg.buttonLabel}
              </button>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
