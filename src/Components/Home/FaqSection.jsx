// import { Collapse } from "antd";
// import React from "react";
// import { useGetFaqQuery } from "../../redux/Api/manageApi";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import custom icons (from react-icons)
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// export const FaqSection = () => {
//   const { data: faqData } = useGetFaqQuery();

//   const items = faqData?.data?.map((faq, index) => ({
//     key: String(index + 1),
//     label: faq.question || "No Question Available",
//     children: <p>{faq.answer || "No Answer Available"}</p>,
//   })) || [];

//   return (
//     <div className="max-w-7xl mx-auto text-white py-10">
//       <h1 className="text-2xl font-semibold text-center lg:mt-16">FAQ</h1>

//       <Collapse
//         defaultActiveKey={["1"]}
//         ghost
//         items={items}
//         expandIconPosition="right"
//         expandIcon={({ isActive }) => (
//           isActive ? <FaArrowUp style={{ fontSize: '16px', color: '#ffffff' }} /> : <FaArrowDown style={{ fontSize: '16px', color: '#ffffff' }} />
//         )}
//       />
//     </div>
//   );
// };

import { Collapse } from "antd";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const FaqSection = () => {
  const items = [
    {
      key: "1",
      label: "What is included in your Break/Fix services?",
      children: (
        <p>
          We Provide On-Demand Troubleshooting And Repair Services For Hardware
          Failures, Network Outages, And Software Issues. Our Services Include
          Diagnostics, Replacement Of Faulty Components, Configuration
          Adjustments, And Deploying New Solutions If Required. We Ensure
          Minimal Downtime And Tailored Fixes Based On Your Business Needs.
        </p>
      ),
    },
    {
      key: "2",
      label: "Do you offer remote IT support?",
      children: (
        <p>
          Yes, We Provide Comprehensive Remote IT Support. Our Team Can
          Troubleshoot And Resolve Many Technical Issues Remotely, Including
          Software Configuration, Network Performance Optimization, And Basic
          Troubleshooting. If An On-Site Visit Is Required, Our Team Will
          Schedule It Promptly.
        </p>
      ),
    },
    {
      key: "3",
      label: "How soon can you deliver network migration services?",
      children: (
        <p>
          Our Network Migration Services Are Planned And Delivered Based On The
          Complexity Of Your Project. For Small-Scale Migrations, We Aim To
          Complete Within 1-2 Weeks. Large-Scale Migrations May Require 3-6
          Weeks, Depending On The Network Size, Data Volume, And Customization
          Required.
        </p>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto text-white ">
      <h1 className="text-2xl font-semibold text-center lg:mt-16">Faq</h1>

      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        expandIconPosition="right"
        expandIcon={({ isActive }) =>
          isActive ? (
            <FaArrowUp style={{ fontSize: "16px", color: "#ffffff" }} />
          ) : (
            <FaArrowDown style={{ fontSize: "16px", color: "#ffffff" }} />
          )
        }
      />
    </div>
  );
};
