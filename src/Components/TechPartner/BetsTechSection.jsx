import React from "react";
import { Form, Input, Button } from "antd";
import img6 from "../../assets/tech/img9.jpg";
import { Apply } from "./Apply";
import { Link } from "react-router-dom";

export const BetsTechSection = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" py-12 px-4">
      <h1 className="md:text-4xl text-3xl font-bold text-center pb-11 text-white ">Tech Partners</h1>
      <div className="max-w-7xl mx-auto lg:grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
        {/* Left Section - Image and Text */}
        <div
          className="relative col-span-2 bg-cover bg-center py-32 text-white rounded-lg"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <div className="absolute rounded-lg inset-0 bg-gradient-to-r from-black via-black to-black opacity-70"></div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
            <h1 className=" md:text-4xl font-bold leading-tight">
              <span className="text-5xl">
                BETS Tech Partnership <br /> Program
              </span>
            </h1>
            <p className="mt-4">
              Collaborate with BETS to expand your technology frontier. Our
              program cultivates partnerships that drive innovation, enhance
              capabilities, and extend market reach. Partner with us for a
              journey towards technological excellence.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-4 rounded-lg shadow-lg mt-4 lg:mt-0">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Start Your Journey And Become A Next-Generation
          </h3>
          <Form
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {/* Full Name */}
            <Form.Item
              name="fullName"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input
                placeholder="Enter your full name"
                className="rounded-md px-4 py-2"
              />
            </Form.Item>

            {/* Job Title */}
            <Form.Item
              name="jobTitle"
              rules={[
                { required: true, message: "Please input your job title!" },
              ]}
            >
              <Input
                placeholder="Enter your job title"
                className="rounded-md px-4 py-2 "
              />
            </Form.Item>

            {/* Business Title */}
            <Form.Item
              name="businessTitle"
              rules={[
                {
                  required: true,
                  message: "Please input your business title!",
                },
              ]}
            >
              <Input
                placeholder="Enter your business title"
                className="rounded-md px-4 py-2"
              />
            </Form.Item>

            {/* Company Name */}
            <Form.Item
              name="companyName"
              rules={[
                { required: true, message: "Please input your company name!" },
              ]}
            >
              <Input
                placeholder="Enter your company name"
                className="rounded-md px-4 py-2"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <div className="flex justify-center">
                <Link to={'/new-ticket'}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="  bg-[#2E4CB9] hover:bg-blue-600 text-white py-5 px-11 rounded-md"
                >
                  Submit
                </Button></Link>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Apply></Apply>
    </div>
  );
};
