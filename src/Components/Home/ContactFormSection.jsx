import React from "react";
import { Form, Input, Select, Button } from "antd";
import Back2 from "../../assets/Home/back2.png";
import { Link } from "react-router-dom";

export const ContactFormSection = () => {
  const { Option } = Select;

  const handleFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="">
      <div
      className="relative bg-cover bg-center  text-white "
      style={{ backgroundImage: `url(${Back2})` }}
    >
      {/* Background Overlay */}
      <div className="max-w-7xl m-auto">
        <div className="absolute inset-0 bg-black opacity-50 "></div>

        {/* Form Container */}
        <div className="relative z-10 lg:flex gap-11 lg:p-8 p-4 py-28 rounded-lg shadow-lg ">
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Get Started With <br /> BETS Today
          </h2>

          <div className="bg-white p-8 py-16 rounded-lg shadow-lg max-w-3xl w-full">
            <Form
              layout="vertical"
              onFinish={handleFinish}
              className="space-y-4"
            >
              {/* Full Name */}
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>

              {/* Contact Number & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  label="Contact Number"
                  name="contactNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your contact number",
                    },
                  ]}
                >
                  <Input placeholder="+99 4656 58585 125" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ]}
                >
                  <Input placeholder="john.doe@example.com" />
                </Form.Item>
              </div>

              {/* Select Services & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  label="Select Services"
                  name="services"
                  rules={[
                    { required: true, message: "Please select a service" },
                  ]}
                >
                  <Select placeholder="Select">
                    <Option value="service1">Service 1</Option>
                    <Option value="service2">Service 2</Option>
                    <Option value="service3">Service 3</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Location"
                  name="location"
                  rules={[
                    { required: true, message: "Please enter your location" },
                  ]}
                >
                  <Input placeholder="Your Location" />
                </Form.Item>
              </div>

              {/* Description */}
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please provide a description" },
                ]}
              >
                <Input.TextArea placeholder="Type here..." rows={4} />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Link to={'/new-ticket'}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className=" bg-[#2E4CB9] hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                  Send Inquiry
                </Button></Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
