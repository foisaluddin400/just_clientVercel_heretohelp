import React from "react";
import side from "../../assets/survicesBundle/side.png";
import a from "../../assets/survicesBundle/a.png";
import s from "../../assets/survicesBundle/s.png";
import vv from "../../assets/survicesBundle/vv.png";
import { ServicesBundlePricing } from "./ServicesBundlePricing";

export const ServiceBundlePackegSection = () => {
  return (
    <div className="pt-20 px-4 lg:px-0">
      <div>
        <div className="lg:grid grid-cols-2 gap-11 ">
          <div className="lg:ml-28">
            <img className="" src={side} alt="" />
          </div>
          <div className="relative">
            <div className="mt-11 lg:mr-28 bg-[#ffffff15] border-2 border-gray-500  backdrop-blur-sm text-white  max-w-4xl m-auto  lg:p-11 p-4 rounded-3xl">
              <h1 className="text-3xl">
                Service Bundles and Maintenance <br /> Packages
              </h1>

              <div className="flex items-center gap-5 mt-9 w-[400px]">
                <div>
                  <img className="w-[100px]" src={a} alt="" />
                </div>
                <p>
                  Expert advice on the latest networking solutions, including
                  SD-WAN, cloud integration, and IoT deployment, to align with
                  business objectives.
                </p>
              </div>
              <div className="flex gap-5 items-center mt-5 w-[400px]">
                <div>
                  <img className="w-[60px]" src={s} alt="" />
                </div>
                <p>
                  Personalized consulting to help clients stay ahead in
                  technological advancements.
                </p>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="absolute bottom-28 -z-20">
              <img className="w-96" src={vv} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesBundlePricing></ServicesBundlePricing>
    </div>
  );
};
