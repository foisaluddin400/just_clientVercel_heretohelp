import React, { useState } from "react";
import img2 from "../../assets/ourteam/cc.png";
import img6 from "../../assets/ourteam/aaa.jpg";
// import img3 from "../../assets/ourteam/team3.png";
export const ExploreOurTeam = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div className="max-w-7xl m-auto pb-20 pt-11 lg:pt-0 px-4 lg-px-0">
      <h1 className="md:text-4xl text-3xl font-bold text-white">
        Explore Our Team of Experts
      </h1>
      <p className="text-white pt-4">
        Diverse Skills United by a Common Vision for Technological Progress.
      </p>

      <div className="md:grid lg:grid-cols-3 space-y-4 md:space-y-0 md:grid-cols-2 gap-5 text-black mt-11">
      <div
          className="bg-[#DBE3EA] rounded-lg "
          onMouseEnter={() => setHoveredCard(1)} // Set hovered card to 1
          onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
        >
          <div className="m-2">
            <img
              className="w-full h-[400px]"
              src={hoveredCard === 1 ? img6 : img2} // Change image on hover
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
            Helmand Momand, Logistics and Deployment Coordinator
            </h1>
            <p className="text-sm ">
            coordinates logistics and deployment, ensuring timely and precise delivery of materials and equipment for essential installations.
            </p>
          </div>
        </div>
        
        <div
          className="bg-[#DBE3EA] rounded-lg "
          onMouseEnter={() => setHoveredCard(2)} // Set hovered card to 1
          onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
        >
          <div className="m-2">
            <img
              className="w-full h-[400px]"
              src={hoveredCard === 2 ? img6 : ''} // Change image on hover
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
            NAME - ROLE
            </h1>
            <p className="text-sm ">
           DESCRIPTION
            </p>
          </div>
        </div>
       
        <div
          className="bg-[#DBE3EA] rounded-lg "
          onMouseEnter={() => setHoveredCard(3)} // Set hovered card to 1
          onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
        >
          <div className="m-2">
            <img
              className="w-full h-[400px]"
              src={hoveredCard === 3 ? img6 : ''} // Change image on hover
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
            NAME - ROLE
            </h1>
            <p className="text-sm ">
           DESCRIPTION
            </p>
          </div>
        </div>

        <div
          className="bg-[#DBE3EA] rounded-lg "
          onMouseEnter={() => setHoveredCard(4)} // Set hovered card to 1
          onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
        >
          <div className="m-2">
            <img
              className="w-full h-[400px]"
              src={hoveredCard === 4 ? img6 : ''} // Change image on hover
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
            NAME - ROLE
            </h1>
            <p className="text-sm ">
           DESCRIPTION
            </p>
          </div>
        </div>

        <div
          className="bg-[#DBE3EA] rounded-lg "
          onMouseEnter={() => setHoveredCard(5)} // Set hovered card to 1
          onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
        >
          <div className="m-2">
            <img
              className="w-full h-[400px]"
              src={hoveredCard === 5 ? img6 : ''} // Change image on hover
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
            NAME - ROLE
            </h1>
            <p className="text-sm ">
           DESCRIPTION
            </p>
          </div>
        </div>

        <div
          className="bg-[#DBE3EA] rounded-lg "
          onMouseEnter={() => setHoveredCard(6)} // Set hovered card to 1
          onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
        >
          <div className="m-2">
            <img
              className="w-full h-[400px]"
              src={hoveredCard === 6 ? img6 : ''} // Change image on hover
              alt=""
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
            NAME - ROLE
            </h1>
            <p className="text-sm ">
           DESCRIPTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
