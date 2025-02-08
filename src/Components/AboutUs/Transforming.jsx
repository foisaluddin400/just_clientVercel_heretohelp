import React from "react";
import backImg from "../../assets/about/img4.png";
import img from "../../assets/about/img5.png";
import { TbTargetArrow } from "react-icons/tb";
import { GiEyeShield } from "react-icons/gi";
export const Transforming = () => {
  return (
    <div className="">
      <div
        className="relative bg-cover bg-center w-full flex items-center px-4 lg:px-0 md:h-[100vh] py-11 md:py-0"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className=" max-w-7xl mx-auto ">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Mission & Vision
          </span>
          <h1 className="text-4xl font-semibold mb-6">
            Transforming Technology, Empowering <br /> Your Future.
          </h1>
          <div className="md:grid grid-cols-2 gap-5">
            <div>
              <div className="border-b flex gap-4 items-center py-5">
                <div className="text-blue-500 text-5xl">
                  <GiEyeShield />
                </div>
                <div>
                  <h1 className="text-2xl pb-2">Vision</h1>
                  <p>
                    To be a trusted technology partner for businesses of all
                    sizes, delivering industry-leading solutions and unmatched
                    customer service.
                  </p>
                </div>
              </div>

              <div className="border-b flex gap-4 items-center py-5">
                <div className="text-blue-500 text-5xl">
                  <TbTargetArrow />
                </div>
                <div>
                  <h1 className="text-2xl pb-2">Mission Statement</h1>
                  <p>
                    Empowering organizations with reliable and innovative IT
                    solutions that drive operational efficiency, scalability,
                    and cost-effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img className="rounded md:w-96 mt-7 md:mt-0" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
