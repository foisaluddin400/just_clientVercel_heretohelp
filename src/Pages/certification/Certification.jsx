import React from "react";
import img from "../../assets/certification/1.png";
import img1 from "../../assets/certification/2.png";

import img10 from "../../assets/certification/10.png";
import img11 from "../../assets/certification/11.png";
import { GiCheckMark } from "react-icons/gi";
import { CertificationSection } from "./CertificationSection";
export const Certification = () => {
  return (
    <div className="bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95">
      <div className="bg-[#DBE3EA] py-5 px-4 lg:px-0">
        <div className="max-w-7xl m-auto text-xl font-bold">Profile</div>
      </div>
      <div className="px-4 lg:px-0">
      <div className=" md:grid grid-cols-3 max-w-[1500px] m-auto md:py-32 py-11">
        <div className=" col-span-2 flex items-center">
          <div>
            <span className="lg:text-8xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Certified Expertise,
            </span>
            <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Proven Excellence
            </h1>
            <p className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              At BETS, we don’t just offer IT solutions—we back them with
              industry-leading certifications that prove our technical
              expertise. Our team holds top-tier certifications, ensuring we
              deliver cutting-edge, reliable, and secure IT services tailored to
              your business needs.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-end">
          <div className="hidden md:block">
            <div className=" ">
              <div className="relative">
                <div className="absolute  rounded-full  h-[800px] w-[800px] bg-gradient-to-b from-blue-800 to-transparent opacity-90 blur-[160px]"></div>

                <img className="w-80 " src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:grid grid-cols-3 max-w-[1500px] m-auto md:py-32 py-11 ">
        <div className="col-span-1">
          <div className="hidden md:block">
            <div className="flex justify-start ">
              <div className="relative">
                <div className="absolute left-0 rounded-full right-0 h-[800px] w-[800px] bg-gradient-to-b from-blue-800 to-transparent opacity-90 blur-[160px]"></div>

                <img className="w-80 " src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 flex items-center ">
          <div>
            <span className="lg:text-8xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Key Certifications
            </span>

            <p className="mt-4 bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex justify-center">
              <GiCheckMark className="text-gray-500 text-3xl" /> CCNP & CCNA
              (Cisco Certified) – Advanced networking expertise for designing
              and managing enterprise networks.
            </p>
            <p className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex justify-center">
              <GiCheckMark className="text-gray-500 text-3xl" />
              CompTIA Security+ – A globally recognized credential proving our
              strength in cybersecurity and risk management.
            </p>
            <p className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex justify-center">
              <GiCheckMark className="text-gray-5000 text-3xl" />
              ITIL Foundation – Best practices in IT service management for
              seamless and efficient operations.
            </p>
            <p className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex justify-center text-center">
              <GiCheckMark className="text-gray-500 text-3xl" />
              BICSI Installer 1 (INST1) – Certified expertise in structured
              cabling installation, rack organization, and ensuring
              high-performance network infrastructure.
            </p>
          </div>
        </div>
      </div>
      <CertificationSection></CertificationSection>
      <div className=" md:grid grid-cols-3 max-w-[1500px] m-auto md:py-32 py-11">
        <div className=" col-span-2 flex items-center">
          <div>
            <span className="lg:text-8xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Vendor Expertise
            </span>

            <p className="mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              We specialize in deploying and optimizing enterprise-grade
              solutions from industry leaders, including:
            </p>
            <p className="mt-4 bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex ">
              <GiCheckMark className="text-gray-500 text-3xl" />
              Cisco – Networking infrastructure, security, and enterprise
              solutions.
            </p>
            <p className="mt-4 bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex ">
              <GiCheckMark className="text-gray-500 text-3xl" />
              Extreme Networks – High-performance networking tailored to modern
              businesses.
            </p>
            <p className="mt-4 bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent flex ">
              <GiCheckMark className="text-gray-500 text-3xl" />
              Other Industry Leaders – Leveraging the best technology to keep
              your business ahead
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-end">
          <div className="hidden md:block">
            <div className=" ">
              <div className="relative">
                <div className="absolute  rounded-full  h-[800px] w-[800px] bg-gradient-to-b from-[#0000ff73] to-transparent opacity-90 blur-[160px]"></div>

                <img className="w-80 " src={img10} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center md:pb-64 pb-20">
        <span className="lg:text-6xl md:text-5xl text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
        You’re in good hands.
        </span>

        <div className="flex justify-center py-4"><p className="mt-4 bg-gradient-to-r max-w-2xl from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        When you choose BETS, you're choosing a team with certified credibility and real-world expertise. Ready to work with a team that’s recognized for excellence? Let’s build the future together.
        </p></div>
       <div className="flex justify-center">
       <div className="">
            <div className=" ">
              <div className="relative">
                <div className="absolute  rounded-full  h-[300px] w-[300px] bg-gradient-to-b  from-[#3737f3e5] to-transparent opacity-90 blur-[70px]"></div>

                <img className="w-52 " src={img11} alt="" />
              </div>
            </div>
          </div>
       </div>
      </div>
      </div>
    </div>
  );
};
