import React, { useState } from "react";

import img2 from "../../assets/ourteam/img2.png";
import img3 from "../../assets/ourteam/team3.png";
import img4 from "../../assets/ourteam/bb.png";
import img5 from "../../assets/ourteam/zz.png";
import img6 from "../../assets/ourteam/aaa.jpg";

export const MeetTheVision = () => {
  // State to track image for each card
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="lg:py-28 lg:pb-96 px-4 lg:px-0">
      <div className="text-white max-w-7xl m-auto mt-11 ">
        <h1 className="text-4xl font-bold">Meet the Visionaries Behind BETS</h1>
        <p className="pt-3 pb-7">
          {" "}
          Driving Innovation and Excellence in IT Solutions.
        </p>
      </div>
      <div className="text-white lg:py-28 lg:relative">
        {/* Background Image */}
        <div className="hidden lg:block">
          <div className="lg:relative flex justify-end ">
            <img className="" src={img3} alt="" />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="lg:absolute  max-w-7xl m-auto lg:mt-80 lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/4 w-full lg:px-4">
          <div className="bg-[#ffffff15] lg:px-2 md:px-8 px-4 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-2 rounded-xl">
            <div className="lg:flex gap-5 items-center">
              <img className="w-full" src={img2} alt="" />
              <div>
                <div className="bg-[#ffffff15] md:px-4 px-4 border-2 border-gray-500 mt-5 backdrop-blur-sm text-white py-4 rounded-xl">
                  <h1>Moses Momand, Founder & CEO</h1>
                  <p>
                    As the visionary behind Black Eagle Tech Solutions, Moses
                    Momand brings over a decade of expertise in designing,
                    deploying, and supporting complex network infrastructures.
                    With a career spanning top-tier companies like Google, AWS,
                    and MasterCard, Moses has successfully led
                    multimillion-dollar projects, ensuring scalability,
                    optimization, and cutting-edge innovation. At Black Eagle
                    Tech Solutions, Moses is committed to delivering tailored IT
                    solutions that empower businesses to thrive in an increasingly
                    digital world. His leadership and technical acumen have
                    positioned BETS as a reliable partner for enterprises seeking
                    structured cabling, advanced network engineering, and IT
                    consulting services. With a relentless focus on quality,
                    efficiency, and client satisfaction, Moses is shaping the
                    future of networking for businesses across industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 text-black mt-11">
              {/* Card 1 */}
              <div
                className="bg-[#DBE3EA] rounded-lg grid grid-cols-2"
                 // Reset on mouse leave
              >
                <div className="m-2">
                  <img
                    className="w-full h-full"
                    src={img4} // Change image on hover
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h1 className="text-2xl font-semibold pb-2">
                    Mudasir Momand, VP of Strategy and Implementation
                  </h1>
                  <p className="text-sm">
                    Leads the development and execution of strategic
                    initiatives, ensuring their seamless implementation to drive
                    business growth and operational excellence. With a keen focus
                    on enhancing organizational efficiency, he collaborates with
                    cross-functional teams to streamline processes, optimize
                    workflows, and foster innovation.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="bg-[#DBE3EA] rounded-lg grid grid-cols-2"
                 // Reset on mouse leave
              >
                <div className="m-2">
                  <img
                    className="w-full h-full"
                    src={ img5} // Change image on hover
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h1 className="text-2xl font-semibold pb-2">
                    Mudasir Momand, VP of Strategy and Implementation
                  </h1>
                  <p className="text-sm">
                    Leads the development and execution of strategic
                    initiatives, ensuring their seamless implementation to drive
                    business growth and operational excellence. With a keen focus
                    on enhancing organizational efficiency, he collaborates with
                    cross-functional teams to streamline processes, optimize
                    workflows, and foster innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
