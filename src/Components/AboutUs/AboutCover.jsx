import React from "react";
import backImg from "../../assets/about/cover.png";
import img from "../../assets/about/img1.png";
import img1 from "../../assets/about/img2.png";
import img2 from "../../assets/about/im3.png";

export const AboutCover = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className=" md:text-6xl font-bold leading-tight">
            <span className="text-4xl">DISCOVER THE</span> <br />{" "}
            <span className="md:text-8xl text-5xl bg-gradient-to-r from-[#cbafe6] via-[#ab82f1] to-[#e5d7f3] bg-clip-text text-transparent">
              BETS
            </span>
            <span className="md:text-8xl text-5xl font-bold"> NETWORK.</span>
          </h1>
          <p className="mt-4 text-lg md:text-4xl">
            Where innovation meets reliability.
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-full lg:h-[90vh] object-cover" src={img} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0716b3] via-[#000e7400] to-[#0011c7] opacity-30"></div>
      </div>

      <div className="">
        <div className="relative inset-0 bg-gradient-to-r from-[#090f58] via-[#3442ac] to-[#090f58] md:py-20 py-11 pb-11">
          {/* Left Image */}
          <div className="lg:py-20">
            <div className="absolute left-0  w-1/3 flex justify-start z-0">
              <img src={img2} alt="Left Image" className="w-96" />
            </div>

            {/* Right Image */}
            <div className="absolute right-0 md:top-6  w-1/3 flex justify-end z-0">
              <img src={img1} alt="Right Image" className="w-96" />
            </div>

            {/* Center Text */}
            <div className="mx-4">
              <div className="relative z-10 max-w-[1500px]  bg-[#ffffff17]  border-2 border-gray-500 lg:mt-5 backdrop-blur-sm  md:py-6 py-4 m-auto rounded-3xl text-white lg:px-16 md:px-8 px-4">
                <h1 className="lg:text-7xl md:text-4xl font-bold mb-6">
                 <span className="font-normal"> Get to Know Us: Our</span> Journey <br /> and Vision
                </h1>
                <p className="text-sm sm:text-lg font-semibold">
                  BETS (Black Eagle Tech Solutions) is an IT services company
                  specializing in structured cabling, network infrastructure,
                  and managed IT solutions. We provide customized, scalable IT
                  solutions for businesses, government agencies, healthcare
                  organizations, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
