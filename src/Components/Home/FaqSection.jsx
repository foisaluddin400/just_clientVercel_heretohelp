import { Collapse } from "antd";
import React from "react";
import { useGetFaqQuery } from "../../redux/Api/manageApi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import custom icons (from react-icons)
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const FaqSection = () => {
  const { data: faqData } = useGetFaqQuery();

  const items = faqData?.data?.map((faq, index) => ({
    key: String(index + 1),
    label: faq.question || "No Question Available",
    children: <p>{faq.answer || "No Answer Available"}</p>,
  })) || [];

  return (
    <div className="max-w-7xl mx-auto text-white py-10">
      <h1 className="text-2xl font-semibold text-center lg:mt-16">FAQ</h1>

      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          isActive ? <FaArrowUp style={{ fontSize: '16px', color: '#ffffff' }} /> : <FaArrowDown style={{ fontSize: '16px', color: '#ffffff' }} />
        )}
      />
    </div>
  );
};
