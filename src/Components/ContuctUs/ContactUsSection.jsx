import React from "react";
import { Form, Input, Select, Button } from "antd";
import image from "../../assets/contuct/img.png";

const { Option } = Select;

export const ContactUsSection = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-gradient-to-b from-[#0E135C] to-[#2e49b1] min-h-screen  px-6">
        <h1 className="text-4xl font-bold mb-6 text-white max-w-6xl mx-auto pt-32"><span className="text-[#C2CEFA]">Let's Work</span><br />Together.</h1>
      <div className="flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden ">
        
        {/* Left Section with Image */}
        
        <div>
            
        <div className="hidden md:block">
            
            <img
              src={image}
              alt="Contact Us"
              className="w-full rounded-lg h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="p-8 lg:col-span-2 bg-white rounded-lg ">
          <Form
            name="contact"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {/* Full Name */}
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input placeholder="Jane Cooper" className=" px-4 py-2" />
            </Form.Item>

            {/* Contact Number and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Contact Number"
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your contact number!",
                  },
                ]}
              >
                <Input placeholder="+1 (419)-123-4567" className="px-4 py-2" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="jonecooper@company.com"
                  className="px-4 py-2"
                />
              </Form.Item>
            </div>

            {/* Select Services and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Select Services"
                name="services"
                rules={[
                  { required: true, message: "Please select a service!" },
                ]}
              >
                <Select placeholder="Select" className="rounded-md ">
                  <Option value="service1"><h1 className="text-lg font-bold">Structured Cabling (Copper and Fiber)</h1> <p >Reliable copper and fiber solutions tailored to your business needs.</p></Option>
                  <Option value="service2"><span className="font-bold text-lg">Rack and Device Installation</span></Option>
                  <Option value="service3"><span className="font-bold text-lg">Break/Fix Services</span></Option>
                  <Option value="service3">Network Migrations and Cutovers</Option>
                  <Option value="service3">Deployment of New Network Devices</Option>
                  <Option value="service3">Consultations on Cutting-Edge Technologies</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Location"
                name="location"
                rules={[
                  { required: true, message: "Please input your location!" },
                ]}
              >
                <Input placeholder="Location" className=" px-4 py-2" />
              </Form.Item>
            </div>

            {/* Description */}
            <Form.Item
              label="Briefly Describe Your Request Or Issue"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please describe your request or issue!",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Type here"
                rows={4}
                className=" px-4 py-2"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#2E4CB9] hover:bg-blue-600 text-white  py-2 rounded-md"
              >
                Submit Your Request
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      </div>
    </div>
  );
};
