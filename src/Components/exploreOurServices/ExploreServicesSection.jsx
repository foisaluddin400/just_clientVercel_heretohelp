import React from "react";
import logo1 from "../../assets/explore/1.png";
import logo2 from "../../assets/explore/2.png";
import logo3 from "../../assets/explore/3.png";
import img1 from "../../assets/explore/img1.png";
import img2 from "../../assets/explore/img2.jpg";

export const ExploreServicesSection = () => {
  return (
    <div className="text-white pt-10 px-4 lg:px-0">
      <div className="max-w-7xl m-auto ">
        <div className="lg:grid grid-cols-2 gap-20 ">
          <div>
            <h1 className="text-4xl py-2 font-bold">We Do a Lot At bets</h1>
            <p className="leading-10">
              At BETS, we offer a comprehensive range of IT and networking
              services to meet the unique needs of businesses of all sizes. From
              seamless structured cabling and efficient device installations to
              expert consultations and troubleshooting, we are your all-in-one
              IT partner. Our goal is simple: to ensure your technology works
              seamlessly so you can focus on growing your business. With
              cutting-edge solutions and a commitment to excellence, we handle
              the complexities of IT so you don't have to.
            </p>
          </div>
          <div>
            <div className="flex items-center ">
              <div>
                <div className="flex gap-5 items-center">
                  <img className="w-20" src={logo1} alt="" />
                  <h1 className="text-xl font-semibold">
                    Scalable Cloud Solutions
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center py-8">
              <div className="ml-20">
                <div className="flex gap-5 items-center">
                  <img className="w-20" src={logo2} alt="" />
                  <h1 className="text-xl font-semibold">
                  Robust Security Measures
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <div className="flex gap-5 items-center">
                  <img className="w-20" src={logo3} alt="" />
                  <h1 className="text-xl font-semibold">
                  Custom Tech Configurations
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="relative">
            <img
              src={img1}
              alt="Tech Setup"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src={img2}
              alt="Service Execution"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
