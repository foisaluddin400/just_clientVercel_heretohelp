import React from "react";
import backImg2 from "../../assets/structurecabling/backimg2.png";
import img4 from "../../assets/structurecabling/img4.png";
import backImg3 from "../../assets/structurecabling/backimg3.png";
import a from "../../assets/tech/a.png";
import b from "../../assets/tech/b.png";
import c from "../../assets/tech/c.png";
import x from "../../assets/structurecabling/xx.png";
import { PricingSection } from "./PricingSection";
export const StructureChoose = () => {
  return (
    <div className="">
      <div
        className="relative bg-cover pb-36 bg-center text-white"
        style={{ backgroundImage: `url(${backImg2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r  from-[#06083f] via-[#000d74] to-[#06083f] opacity-65"></div>

        <div className="relative z-10  items-center h-full  px-4">
          <div className="flex items-center">
            <div className="lg:flex ">
              <div className="hidden lg:block">
                <img className="w-full " src={img4} alt="" />
              </div>
              <div className="max-w-7xl m-auto">
                <div className="lg:flex gap-11">
                  <div className="lg:mt-[220px] mt-20">
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                      Why Choose BETS for Your Cabling Needs?
                    </h1>

                    <div className="">
                      <div className=" border-slate-600 py-6 ">
                        <h2 className=" text-2xl">
                          Precision Engineered Solutions:{" "}
                        </h2>
                        <p className=" py-3">
                          We design and implement cabling systems tailored to
                          meet the specific demands of your business, ensuring
                          scalability and high performance.
                        </p>
                      </div>
                      <div className=" border-slate-600 py-6">
                        <h2 className=" text-2xl">
                          Expert Installation and Support:
                        </h2>
                        <p className=" py-3">
                          Our certified technicians provide not only expert
                          installation but also ongoing support and maintenance
                          to keep your network running smoothly.
                        </p>
                      </div>
                      <div className=" border-slate-600 py-6">
                        <h2 className=" text-2xl">Efficient and Reliable: </h2>
                        <p className=" py-3">
                          With state-of-the-art tools and practices, we
                          guarantee minimal disruption during installation and a
                          reliable network infrastructure for your critical
                          operations.
                        </p>
                      </div>

                      <div className=" border-slate-600 py-6">
                        <h2 className=" text-2xl">Future-Proof Networking: </h2>
                        <p className=" py-3">
                          We build systems that are ready for tomorrow’s
                          technology, giving you a competitive edge and ensuring
                          that your investment is long-lasting.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex justify-center">
                      <img
                        className="rounded-3xl my-16 w-[400px]"
                        src={backImg3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pl-20">
            <div className="bg-[#ffffff15] px-5 border-2 max-w-4xl border-gray-500 mt-5 backdrop-blur-sm text-white py-8 rounded-xl">
              <div className="space-y-16">
                <div className="md:flex gap-5">
                  <img className="w-[50px]" src={a} alt="" />
                  <h1>
                    <span className="font-bold">Custom Configurations:</span> Design and install tailored cabling
                    solutions that fit your specific needs, ensuring reliable
                    and scalable network infrastructure.
                  </h1>
                </div>
                <div className="md:flex gap-5">
                  <img className="w-[50px]" src={x} alt="" />
                  <h1>
                    <span className="font-bold">Professional Installation:</span> Experience top-tier installation
                    and meticulous attention to detail from our certified
                    technicians, securing optimal network performance.
                  </h1>
                </div>
                <div className="md:flex gap-5">
                  <img className="w-[50px]" src={c} alt="" />
                  <h1>
                    <span className="font-bold">Performance Monitoring:</span> Maintain and enhance your network
                    efficiency with our comprehensive monitoring solutions that
                    ensure continuous optimal performance.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <PricingSection></PricingSection>
        </div>
      </div>
    </div>
  );
};
