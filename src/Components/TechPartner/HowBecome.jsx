import React from "react";
import img from '../../assets/tech/88.png'
import img6 from "../../assets/tech/img9.jpg";
import { Button, Form, Input } from "antd";
export const HowBecome = () => {
  return (
    <div>
        
      <div className="max-w-7xl m-auto text-white mt-20 px-4 lg:px-0">
        <h1 className="md:text-4xl text-3xl font-semibold pb-6">How to become a partner</h1>
        <div className="md:grid grid-cols-3 gap-9">
          <div className="">
            <h1 className="font-bold text-2xl">01</h1>
            <p className="font-semibold text-xl py-2">Apply</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
          </div>
          <div className="my-5 md:my-0">
            <h1 className="font-bold text-2xl">02</h1>
            <p className="font-semibold text-xl py-2">Integrate</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">03</h1>
            <p className="font-semibold text-xl py-2">Partner</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-11 mb-20">
        <img className="w-96" src={img} alt="" />
      </div>
    </div>
  );
};
