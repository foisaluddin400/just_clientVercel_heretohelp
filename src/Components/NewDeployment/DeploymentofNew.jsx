import React from "react";
import img from "../../assets/newDeployment/img.png";
import back from "../../assets/newDeployment/back.png";
import logo from "../../assets/newDeployment/aa.png";
import logo1 from "../../assets/newDeployment/bb.png";
import logo2 from "../../assets/newDeployment/cc.png";
import img2 from "../../assets/newDeployment/img2.png";
import { Link } from "react-router-dom";
export const DeploymentofNew = () => {
  const packages = [
    {
      title: "Standard Device Deployment",
      
     
      description:
        "Starting at $100 per device. Final pricing will depend on the complexity and specific requirements of your project.",
      buttonLabel: "Book NOW",
    },
    {
      title: "Advanced Configuration",
      
     
      description:
        "An additional $100 per device. The final cost may vary based on the level of configuration needed.",
      buttonLabel: "Book NOW",
    },
  ];
  return (
    <div className="px-4 lg:px-0">
      <div className="lg:grid grid-cols-2 max-w-7xl m-auto pt-20">
        <div className="text-white">
          <h1 className="text-5xl font-bold pb-4">
            Deployment of New Network Devices
          </h1>
          <p className="text-xl py-4">
            Integration and configuration of hardware, ensuring optimal
            compatibility and performance.
          </p>
          <div className="flex gap-4">
            <h1 className="text-xl font-bold">Description:</h1>
            <p>
              Installation and configuration of new network hardware, ensuring
              seamless integration with existing infrastructure.
            </p>
          </div>
          <div className="flex gap-4 py-4">
            <h1 className="text-xl font-bold">BETS Advantage:</h1>
            <p>Comprehensive setup, including testing and optimization.</p>
          </div>
          <button className="bg-[#2E4CB9] py-3 px-6 rounded">
            Consultations
          </button>
        </div>
        <div className="lg:flex items-center hidden ">
          <div className="flex justify-start ml-16 -mt-11">
            <div className="relative">
              <div className="absolute left-0 right-0 h-[400px] bg-gradient-to-b from-blue-950 to-transparent opacity-90 blur-[100px]"></div>

              <img className=" " src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16 lg:mt-48 mt-11">
        <div className="lg:relative ">
          <div className="hidden lg:block">
          <div className="">
            <img className="w-full" src={back} alt="" />
          </div>
          </div>
          <div className="lg:pl-32">
            <div className="  lg:absolute bottom-20 lg:space-y-20 space-y-8">
              <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white flex gap-7 items-center max-w-4xl  p-6 rounded-3xl">
                <img className="w-20" src={logo} alt="" />
                <div>
                  <h1 className="font-bold pb-1">Optimal Network Setup</h1>
                  <p>
                    Customized configuration settings to meet specific business
                    requirements, ensuring seamless integration and maximum
                    efficiency.
                  </p>
                </div>
              </div>
              <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white flex gap-7 items-center max-w-4xl  p-6 rounded-3xl">
                <img className="w-20" src={logo1} alt="" />
                <div>
                  <h1 className="font-bold pb-1">Speed and Precision</h1>
                  <p>
                  Streamlined deployment processes that minimize downtime and accelerate your transition to new network capabilities.
                  </p>
                </div>
              </div>
              <div className="bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white flex gap-7 items-center max-w-4xl  p-6 rounded-3xl">
                <img className="w-20" src={logo2} alt="" />
                <div>
                  <h1 className="font-bold pb-1">Secure Installations</h1>
                  <p>
                  Rigorous security protocols in place during hardware setup to protect your data and network integrity from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20">
        <div>
          <div className="hidden lg:block">
            <div className="flex justify-start ">
              <div className="relative">
                <div className="absolute left-0 right-0 h-[800px] bg-gradient-to-b from-blue-800 to-transparent opacity-100 blur-[40px]"></div>

                <img className="w-80 -mt-20" src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-20">
          <div className="lg:absolute top-0">
            <h1 className="text-center text-4xl font-bold text-white pb-11">
              Pricing
            </h1>
            <div className="max-w-4xl m-auto grid  grid-cols-1 md:grid-cols-2 gap-6 ">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white hover:bg-[#2727aa] hover:text-white transition duration-100 text-black rounded-lg shadow-lg p-6 text-center"
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
                  <button className="bg-[#2E4CB9] text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition">
                    {pkg.buttonLabel}
                  </button></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
