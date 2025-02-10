// import React from "react";

// import { NewUpdateCard } from "./NewUpdateCard";
// export const NewUpdateCover = () => {
//   return (
//     <div className="text-white">
//       <div className="bg-[#DBE3EA] py-6 px-4 lg:px-0">
//         <h1 className="text-blue-600 font-bold max-w-7xl m-auto ">
//           News & Updates
//         </h1>
//       </div>
      
        
//         <NewUpdateCard></NewUpdateCard>
     
//     </div>
//   );
// };


import React from "react";
import img from "../../assets/newUpdate/cover.jpg";
import { NewUpdateCard } from "./NewUpdateCard";
export const NewUpdateCover = () => {
  return (
    <div className="text-white">
      <div className="bg-[#DBE3EA] py-6 px-4 lg:px-0">
        <h1 className="text-blue-600 font-bold max-w-7xl m-auto ">
          News & Updates
        </h1>
      </div>
      <div className="max-w-7xl m-auto px-4 lg:px-0">
        <h1 className="text-2xl font-bold py-5">In The Press Center</h1>
        <div className="lg:grid grid-cols-2 gap-5 ">
          <div>
            <img className="w-full rounded-3xl" src={img} alt="" />
          </div>
          <div className="mt-6 lg:mt-0">
            <h1 className="pb-5 font-bold md:text-4xl text-3xl">
              Streamline Your IT Operations: How To Eliminate Helpdesk
              Inefficiencies
            </h1>
            <p className="text-xl text-gray-400"> November 11, 2024</p>
            <p className="py-5">
              Stay Ahead with BETS: Innovations and Expansions in IT Services
            </p>

            <p>
              In today's fast-paced digital landscape, efficiency is key.
              Discover how BETS is leading the charge in streamlining IT
              operations and reducing helpdesk delays with our latest technology
              upgrades and partnerships.
            </p>

            <div className="pt-5">
              <li>Highlights:</li>
              <li>
                Global Partnerships: We've teamed up with leading tech giants
                like Cisco and Extreme Networks to bring you cutting-edge
                solutions.
              </li>

              <li>
                Service Expansion: BETS is expanding! We're introducing new
                services and extending our reach to new regions, ensuring more
                businesses can benefit from our expertise.
              </li>

              <li>
                Leadership Achievements: Our leadership team continues to excel,
                gaining key industry certifications that keep us at the
                forefront of IT innovations.
              </li>
            </div>
            <h1 className="text-xl font-bold">Engage with Us</h1>
          </div>
        </div>
        <p className="text-lg font-semibold underline text-blue-300 text-end">Go To Article</p>
        <NewUpdateCard></NewUpdateCard>
      </div>
    </div>
  );
};
