import React from "react";
import back1 from "../../assets/Home/back1.png";
import ball from "../../assets/Home/ball.png";
import { SpecialPackage } from "./SpecialPackage";
export const OurServicesSection = () => {
  return (
    <div className="  ">
       
      <div
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${back1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95"></div>

        <div className="relative z-10  items-center h-full  md:px-6 px-4">
          <div className="flex justify-center items-center">
            <div className="mt-20">
              <h1 className="font-semibold pb-3 italic">Your IT Needs, Solved.</h1>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                Find out more about <br /> our Services
              </h1>
              <p className="mt-4 text-sm ">
                whether you need a full IT team or specialized consultation,
                BETS can help
              </p>
              <div className="md:ml-8 ml-4">
                <div className="border-b border-[#243270] py-6 hover:bg-[#ffffff27] md:px-3">
                  <h2 className=" text-2xl">Structured Cabling</h2>
                  <p className=" py-3">
                    Professional installation and management of copper and fiber
                    cabling to ensure reliable connectivity and optimized
                    performance.
                  </p>
                </div>
                <div className="border-b border-[#243270] py-6 hover:bg-[#ffffff27] md:px-3">
                  <h2 className=" text-2xl">Rack and Device Installation</h2>
                  <p className=" py-3">
                  Efficient installation of racks, servers, and network devices, paired with professional cable management for an organized IT environment.
                  </p>
                </div>
                <div className="border-b border-[#243270] py-6 hover:bg-[#ffffff27] md:px-3">
                  <h2 className=" text-2xl">Break/Fix Services</h2>
                  <p className=" py-3">
                  Swiftly resolving hardware and software issues to minimize downtime and maintain performance.
                  </p>
                </div>
                <div className="border-b border-[#243270] py-6 hover:bg-[#ffffff27] md:px-3">
                  <h2 className=" text-2xl">Network Migrations and Cutovers</h2>
                  <p className=" py-3">
                  Seamless transitions for network upgrades and migrations, with a focus on minimal disruption and robust risk management.
                  </p>
                </div>
                <div className="border-b border-[#243270] py-6 hover:bg-[#ffffff27] md:px-3">
                  <h2 className=" text-2xl">Site Surveys</h2>
                  <p className=" py-3">
                  In-depth assessments of your current network infrastructure to provide tailored recommendations for enhancements, expansion, and seamless adoption of new technologies.
                  </p>
                </div>
                <div className="border-b border-[#243270] py-6 hover:bg-[#ffffff27] md:px-3">
                  <h2 className=" text-2xl">Deployment of New Network Devices</h2>
                  <p className=" py-3">
                  Installation and configuration of new hardware, ensuring smooth integration and optimized functionality within your existing network.
                  </p>
                </div>
                <div className="border-b border-[#243270] py-6 hover:bg-[#ffffff27] md:px-3">
                  <h2 className=" text-2xl">Consultations on Cutting-Edge Technologies</h2>
                  <p className=" py-3">
                  Expert guidance on adopting the latest technologies, from Cloud Integration and IoT to SD-WAN, Software-Defined Networking (SDN), and Automation for Network Modernization—all tailored to align with your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
