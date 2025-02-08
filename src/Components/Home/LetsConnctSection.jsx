import React from "react";
import Connect from "../../assets/Home/connect.png";
import Top from "../../assets/Home/top.png";
import Bottom from "../../assets/Home/bottom.png";
import back from "../../assets/Home/power1.png";
import mobile from "../../assets/Home/test5.png";
import edit from "../../assets/Home/edit.png";
import logo1 from "../../assets/Home/logo1.png";
import logo2 from "../../assets/Home/logo2.png";
import logo3 from "../../assets/Home/logo3.png";
import ball from "../../assets/Home/ball.png";
import { MdArrowOutward } from "react-icons/md";
import { OurServicesSection } from "./OurServicesSection";
import { SpecialPackage } from "./SpecialPackage";

export const LetsConnctSection = () => {
  return (
    <div className="bg-[#0C197C] relative ">
      <div className="absolute inset-0 bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95"></div>
      <div className="max-w-full relative">
        <img className="w-full" src={mobile} alt="" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#3c24c9] via-[#331bb9] to-[#3b22c7] opacity-30"></div> */}
        <div className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold">
          <div className="text-center">
            <h1 className="md:text-[40px] text-2xl font-semibold">
              READY TO TRANSFORM YOUR IT LANDSCAPE?
            </h1>
            <h1 className="md:text-[35px]  font-semibold md:mt-10">
              Start Your IT Transformation today.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-4 md:px-0">
        <div className="bg-[#ffffff23] font-bold  md:px-16 px-6 border-2 border-gray-500 lg:-mt-20 -mt-9 backdrop-blur-sm text-white md:pt-4 md:pb-6 pt-4 pb-5 lg:text-5xl md:text-2xl text-center  rounded-full">
          Power Up Your Business with Advanced IT Solutions
        </div>
      </div>

      <div className="flex justify-center px-4 md:lg-0">
        <div className="bg-[#ffffff23] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-4  text-center  rounded-xl">
          Step into the future with IT services designed just for you. Whether
          you’re scaling up or just starting out, we ensure your tech keeps up,
          effortlessly.
        </div>
      </div>

      <div>
        <div className="pb-20">
          <div className="max-w-full md:relative">
            <div className="hidden md:block">
              <img className="w-42 md:mt-28  mt-60" src={edit} alt="" />
            </div>

            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#3c24c9] via-[#331bb9] to-[#3b22c7] opacity-30"></div> */}
            <div>
              <div className="md:absolute z-50 inset-0 flex justify-center items-center text-white text-xl font-bold">
                <div>
                  <div className="hidden md:block">
                    <h1 className="text-center lg:-mt-20 font-bold text-4xl text-white my-11">
                      Why Us?
                    </h1>
                  </div>

                  <div className="md:grid grid-cols-3 lg:gap-20 gap-4 mx-4 mt-32 md:mt-0 lg:mx-0">
                    <div className="bg-[#ffffff17] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-4  text-center  rounded-xl">
                      <div className="flex justify-center mb-8">
                        <div>
                          <div className="md:hidden">
                          <h1 className="text-center -mt-20 font-bold text-2xl text-white my-11">
                            Why Us?
                          </h1>
                          </div>
                          <img className="md:w-[200px] w-[100px]" src={logo1} alt="" />
                        </div>
                      </div>
                      <h1 className="md:text-2xl text-xl">Lead The Way</h1>
                      <p className="md:text-2xl font-semibold">
                        Stay on top of tech <br /> trends.
                      </p>
                    </div>
                    <div className="bg-[#ffffff17] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-4  text-center  rounded-xl">
                      <div className="flex justify-center mb-8">
                        <img className="md:w-[200px] w-[100px]" src={logo2} alt="" />
                      </div>
                      <h1 className="md:text-2xl text-xl">Tailored for you</h1>
                      <p className="md:text-2xl font-semibold">
                      Solutions that fit like a <br /> glove
                      </p>
                    </div>
                    <div className="bg-[#ffffff17] px-16 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-4  text-center  rounded-xl">
                      <div className="flex justify-center mb-8">
                        <img className="md:w-[200px] w-[100px]" src={logo3} alt="" />
                      </div>
                      <h1 className="md:text-2xl text-xl">Always There</h1>
                      <p className="md:text-2xl font-semibold">
                      Support that grows <br /> with you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="absolute -bottom-36 right-0 z-30">
                <img className="w-[500px]" src={ball} alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d167a1e] via-[#09135f2d] to-[#06083f] opacity-95"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurServicesSection></OurServicesSection>
    </div>
  );
};
