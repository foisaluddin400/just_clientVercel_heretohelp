import React from "react";
import img from "../../assets/network/img1.png";
import img1 from "../../assets/network/img2.png";
import img2 from "../../assets/network/img5.png";
import img3 from "../../assets/network/img6.png";
import img4 from "../../assets/network/img7.png";
import img5 from "../../assets/network/img3.png";
import logo1 from "../../assets/network/logo1.png";
import logo2 from "../../assets/network/logo2.png";
import logo3 from "../../assets/network/logo3.png";


export const NetworkMigrationsOnePage = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-2 gap-16 pt-20">
        <div className="flex items-center">
          <div className="relative w-full">
            <img className="-ml-40 mt-20 " src={img3} alt="" />
            <div className="absolute top-0 w-full px-4 lg:px-0">
              <div className="lg:pl-28">
                <div className="bg-[#ffffff15] w-full border-2 text-xl border-gray-500 backdrop-blur-sm text-white lg:p-16 p-4 rounded-3xl ">
                  <h1 className="text-4xl font-bold pb-11">
                    Network Migrations and Cutovers
                  </h1>
                  <li>
                    Transitioning businesses to upgraded networks with minimal
                    disruption.
                  </li>
                  <li>
                    Includes meticulous planning, testing, and seamless
                    execution.
                  </li>
                  <p className="py-11">
                    Planning and execution of network upgrades, migrations, and
                    cutovers to ensure seamless transitions with minimal
                    downtime.
                  </p>
                  <p>
                    Expert handling of complex migrations with a focus on risk
                    management and thorough testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative z-20">
            <div className="flex justify-end">
              <img className="mt-32" src={img2} alt="" />
            </div>
            <div className="absolute top-0 ">
              <img
                className="rounded-3xl w-[80%] h-[490px] object-cover"
                src={img}
                alt=""
              />
              <img
                className="rounded-3xl w-[100%] mt-6 h-[490px] object-cover"
                src={img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-56 mt-32">
        <div
          className="relative bg-cover bg-center lg:py-72 md:py-20 py-11 text-white"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className="text-center">
            <div>
              <h1 className="md:text-6xl text-3xl pb-5">Ready to upgrade?</h1>
              <p className="text-2xl">
                Let’s make your network transition smooth and successful.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-[#ffffff15] px-16 border-2 border-gray-500  backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
          <div className="flex justify-center mb-6">
            <span className="text-blue-400 text-6xl">
              {/* Shield Icon */}
             <img className="w-20" src={logo1} alt="" />
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
          Strategic Planning
          </h3>
          <p className="text-gray-300">
          Plan your network upgrade with our strategic mapping, ensuring every detail is considered for a seamless transition.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#ffffff15] px-16 border-2 border-gray-500  backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
          <div className="flex justify-center mb-6">
            <span className="text-yellow-400 text-6xl">
              {/* Lightbulb Icon */}
              <img className="w-20" src={logo2} alt="" />
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
          Efficient Execution
          </h3>
          <p className="text-gray-300">
          Implement new systems with precision. Our team guarantees minimal downtime and maximum efficiency during server cutover.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#ffffff15] px-16 border-2 border-gray-500  backdrop-blur-sm text-white py-8  text-center  rounded-3xl">
          <div className="flex justify-center mb-6">
            <span className="text-pink-400 text-6xl">
              {/* Clock Icon */}
             <img className="w-20" src={logo3} alt="" />
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
          Secure Migration
          </h3>
          <p className="text-gray-300">
          Protect your data with advanced security protocols during all phases of the network migration and cutover process.
          </p>
        </div>
      </div>
      </div>
      <div className="flex justify-center py-20">
      <img src={img5} alt="" />
      </div>
      <h1 className="text-center text-4xl text-white">Satisfaction <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Guaranteed</span> with <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">full support</span> every step of the way.
      </h1>
    </div>
  );
};
