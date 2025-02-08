import React from "react";
import d from "../../assets/pricingstrategy/x.png";
import { Collapse } from "antd";
export const PricingFaqSection = () => {
  const items = [
    {
      key: "1",
      label: "What payment methods do you accept?",
      children: (
        <p>
          We Provide On-Demand Troubleshooting And Repair Services For Hardware Failures, Network Outages, And Software Issues. Our

Services Include Diagnostics, Replacement Of Faulty Components, Configuration Adjustments, And Deploying New Solutions If

Required. We Ensure Minimal Downtime And Tailored Fixes Based On Your Business Needs.
        </p>
      ),
    },
    {
      key: "2",
      label: "Are there any hidden fees I should be aware of?",
      children: (
        <p>
          Yes, We Provide Comprehensive Remote IT Support. Our Team Can Troubleshoot And Resolve Many Technical Issues Remotely,

Including Software Configuration, Network Performance Optimization, And Basic Troubleshooting. If An On-Site Visit Is Required, Our

Team Will Schedule It Promptly.
        </p>
      ),
    },
    {
      key: "3",
      label: "Can I change my service package after signing up?",
      children: (
        <p>
          Our Network Migration Services Are Planned And Delivered Based On The Complexity Of Your Project. For Small-Scale Migrations, We

Aim To Complete Within 1-2 Weeks. Large-Scale Migrations May Require 3-6 Weeks, Depending On The Network Size, Data Volume,

And Customization Required.
        </p>
      ),
    },
    
  ];
  return (
    <div className="pb-28">
      <div
      className="relative bg-cover bg-center py-5 lg:mt-32 mt-20 text-white max-w-7xl m-auto rounded-2xl"
      style={{ backgroundImage: `url(${d})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-15"></div>

      <div className="max-w-7xl m-auto relative z-10  h-full  lg:px-7">
        <h1 className="text-2xl font-semibold text-center ">Faq</h1>

        <Collapse
          defaultActiveKey={["1"]}
          ghost
          items={items}
          expandIconPosition="right"
        />
      </div>
    </div>
    </div>
  );
};
