import React from "react";

import { NewUpdateCard } from "./NewUpdateCard";
export const NewUpdateCover = () => {
  return (
    <div className="text-white">
      <div className="bg-[#DBE3EA] py-6 px-4 lg:px-0">
        <h1 className="text-blue-600 font-bold max-w-7xl m-auto ">
          News & Updates
        </h1>
      </div>
      
        
        <NewUpdateCard></NewUpdateCard>
     
    </div>
  );
};
