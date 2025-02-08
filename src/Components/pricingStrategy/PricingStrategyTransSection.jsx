import React from "react";
import s from "../../assets/pricingstrategy/a.png";
import { PricingFaqSection } from "./PricingFaqSection";
export const PricingStrategyTransSection = () => {
  return (
    <div className="mt-20 px-4 lg:px-0">
      <div className="md:grid grid-cols-2 gap-4 max-w-7xl m-auto text-white">
        <div>
          <img className="w-[600px] rounded-2xl" src={s} alt="" />
        </div>
        <div className="mt-11 lg:mt-0">
          <h1 className="text-3xl">
          Pricing Strategy and 
          <br />
             Transparency
          </h1>

          <div className="mt-7">
            <div className="flex gap-14">
              <span className="font-semibold">Flexible Pricing :</span>
              <p className=" ">
                <p>
                Service packages can be tailored to meet specific client needs, offering flexibility and cost savings.
                </p>
              </p>
            </div>
            <div className="flex mt-7">
              <span className="font-semibold w-[170px]">Transparent Billing:</span>
              <p>
              Detailed invoices, including a breakdown of labor, materials, equipment, and taxes, ensuring clients understand the value of services provided.
              </p>
            </div>
            <div className="flex mt-7">
              <span className="font-semibold w-[170px]">Free Site Surveys:</span>
              <p>
              Initial basic site surveys offered free of charge for potential clients, demonstrating a commitment to customer-focused service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PricingFaqSection></PricingFaqSection>
    </div>
  );
};
