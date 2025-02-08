import React from "react";
import img from "../../assets/ourteam/img1.png";
export const ForgingFuture = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="text-white py-28 relative ">
        {/* Background Image */}
        <div className="relative flex justify-center ">
          <img className="w-90" src={img} alt="" />
        </div>

        {/* Testimonial Section */}
        <div className="absolute mt-28 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full ">
          <div>
            <div className="max-w-7xl m-auto ">
              <h2 className=" md:text-5xl text-3xl font-semibold  sm:mb-10">
                Forging the Future Together
              </h2>
              <div className="bg-[#ffffff23] md:px-16 px-4 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white md:py-8 py-4 text-center  rounded-xl">
                At BETS, we're more than just a company; we're a team united by
                a shared vision of innovation and reliability. Our journey from
                a small startup to a leader in IT solutions is fueled by the
                collective passion and dedication of our team members. Here's
                where we share our story of growth and the values that drive us.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-11 md:-mt-0">
        <div className="max-w-7xl m-auto ">
          <h2 className=" md:text-5xl text-3xl font-semibold mb-6 sm:mb-10 text-white">
          The BETS Leadership
          </h2>
          <div className="bg-[#ffffff23] md:px-16 px-4 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white md:py-8 py-4   rounded-xl">
          Meet the leaders at BETS who inspire and guide our talented team. With extensive experience in IT and a commitment to excellence, our leadership team shapes the direction of our company, ensuring we not only meet but exceed the expectations of the industries we serve. Get to know the faces behind our innovative solutions.
          </div>
        </div>
      </div>
    </div>
  );
};
