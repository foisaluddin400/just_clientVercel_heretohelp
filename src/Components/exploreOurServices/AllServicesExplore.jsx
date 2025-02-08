import React from "react";
import hand from "../../assets/explore/hand.png";
export const AllServicesExplore = () => {
  return (
    <div className=" text-white ">
      <div className="max-w-7xl m-auto px-4 lg:px-0">
        <h1 className="text-4xl font-bold mt-20 mb-11 ">All Services</h1>
        <div className="bg-gradient-to-r from-[#020124] via-[#1a1c80] to-[#01001f] p-8 ">
          <div className="  rounded-lg shadow-lg ">
            <h1>All Services</h1>
            <h3 className="text-4xl font-semibold  mb-4">
              Discover Our Comprehensive IT Solutions
            </h3>
            <div className="">
              <p className=" mb-6">
                From Structured Cabling to Advanced Network Consulting, Our
                Services Are Tailored to Meet Your Business Needs.
              </p>

              <div className="space-y-6">
                <div className="service-item border-b pb-5 px-5 border-gray-700">
                  <h4 className="text-2xl font-semibold pb-4">
                    Structured Cabling (Copper And Fiber)
                  </h4>
                  <p className="">
                    Professional Installation And Management Of Copper And Fiber
                    Cabling To Ensure Reliable Connectivity And Optimized
                    Performance.
                  </p>
                </div>

                <div className="service-item border-b pb-5 px-5 border-gray-700">
                  <h4 className="text-2xl font-semibold pb-4">
                    Rack And Device Installation
                  </h4>
                  <p className="">
                    Efficient Installation Of Racks, Servers, And Network
                    Devices, Paired With Professional Cable Management For An
                    Organized IT Environment.
                  </p>
                </div>

                <div className="service-item border-b pb-5 px-5 border-gray-700">
                  <h4 className="text-2xl font-semibold pb-4">
                    Break/Fix Services
                  </h4>
                  <p className="">
                    Professional Installation And Management Of Copper And Fiber
                    Cabling To Ensure Reliable Connectivity And Optimized
                    Performance.
                  </p>
                </div>

                <div className="service-item border-b pb-5 px-5 border-gray-700">
                  <h4 className="text-2xl font-semibold pb-4">
                    Network Migrations And Cutovers
                  </h4>
                  <p className="">
                    Seamless Transitions For Network Upgrades And Migrations,
                    With A Focus On Minimal Disruption And Robust Risk
                    Management.
                  </p>
                </div>

                <div className="service-item border-b pb-5 px-5 border-gray-700">
                  <h4 className="text-2xl font-semibold pb-4">Site Surveys</h4>
                  <p className="">
                    In-Depth Assessments Of Your Current Network Infrastructure
                    To Provide Tailored Recommendations For Enhancements And
                    Expansion.
                  </p>
                </div>

                <div className="service-item border-b pb-5 px-5 border-gray-700">
                  <h4 className="text-2xl font-semibold pb-4">
                    Deployment Of New Network Devices
                  </h4>
                  <p className="">
                    Installation And Configuration Of New Hardware, Ensuring
                    Smooth Integration And Optimized Functionality Within Your
                    Existing Network.
                  </p>
                </div>

                <div className="service-item border-b pb-5 px-5 border-gray-700">
                  <h4 className="text-2xl font-semibold pb-4">
                    Consultations On Cutting-Edge Technologies
                  </h4>
                  <p className="">
                    Expert Guidance On Adopting The Latest Technologies, From
                    Cloud Integration To IoT, Tailored To Your Business Goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <img className="" src={hand} alt="" />
      </div>

      <div className="pb-20">
        <div className="flex justify-center -mt-20 mx-2 md:mx-0">
          <div className="bg-gradient-to-r from-[#1a1e3f75] to-[#59595a63]   bg-blue-800 rounded-xl px-8 md:py-9 py-4 shadow-lg max-w-4xl w-full">
            <div className="">
              <div>
                <h1 className="text-4xl font-bold">
                  Found what you're looking for ? Start your first ticket !
                </h1>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#DBE3EA] py-3 px-11 text-black rounded">
                  Start Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
