import React from "react";
import img2 from "../../assets/ourteam/cc.png";
// import img3 from "../../assets/ourteam/team3.png";
export const ExploreOurTeam = () => {
  return (
    <div className="max-w-7xl m-auto pb-20 pt-11 lg:pt-0 px-4 lg-px-0">
      <h1 className="md:text-4xl text-3xl font-bold text-white">Explore Our Team of Experts</h1>
      <p className="text-white pt-4">
        Diverse Skills United by a Common Vision for Technological Progress.
      </p>

      <div className="md:grid lg:grid-cols-3 space-y-4 md:space-y-0 md:grid-cols-2 gap-5 text-black mt-11">
        <div className="bg-white rounded-lg">
          <img src={img2} alt="" />
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
            Helmand Momand, Logistics and Deployment Coordinator
            </h1>
            <p>
              drives strategic initiatives and ensures their successful
              execution, enhancing organizational efficiency and operational
              effectiveness.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <img src={img2} alt="" />
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
              Mudasir Momand, VP of Strategy and Implementation
            </h1>
            <p>
              drives strategic initiatives and ensures their successful
              execution, enhancing organizational efficiency and operational
              effectiveness.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <img src={img2} alt="" />
          <div className="p-4">
            <h1 className="text-2xl font-semibold pb-2">
              Mudasir Momand, VP of Strategy and Implementation
            </h1>
            <p>
              drives strategic initiatives and ensures their successful
              execution, enhancing organizational efficiency and operational
              effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
