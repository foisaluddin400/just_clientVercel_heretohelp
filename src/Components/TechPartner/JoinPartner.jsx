import { Form, Input, Button, Select, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const JoinPartner = () => {
  return (
<div>
<div className="bg-[#DBE3EA] py-5 ">
        <div className="max-w-7xl m-auto text-xl font-bold">Send Partner Request</div>
      </div>
<div className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-800 flex justify-center items-center">
        
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-7xl m-auto my-11">
          {/* Personal Information Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Personal Information
          </h2>
          <Form
            layout="vertical"
            onFinish={(values) => console.log(values)}
            className="space-y-6"
          >
            <Form.Item
              name="fullName"
              label="Full Name*"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input
                className="border-gray-300 rounded-md p-3"
                placeholder="Jane Cooper"
              />
            </Form.Item>
  
            <div className="grid grid-cols-2 gap-4">
              <Form.Item name="contactNumber" label="Contact Number">
                <Input
                  className="border-gray-300 rounded-md p-3"
                  placeholder="+99 4566 58585 125"
                />
              </Form.Item>
  
              <Form.Item
                name="email"
                label="Email*"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input
                  className="border-gray-300 rounded-md p-3"
                  placeholder="jane@cooper.com"
                />
              </Form.Item>
            </div>
  
            <div className="grid grid-cols-3 gap-4">
              <Form.Item name="city" label="City">
                <Input
                  className="border-gray-300 rounded-md p-3"
                  placeholder="City"
                />
              </Form.Item>
  
              <Form.Item name="state" label="State">
                <Input
                  className="border-gray-300 rounded-md p-3"
                  placeholder="State"
                />
              </Form.Item>
  
              <Form.Item name="country" label="Country" className="mb-4">
                <Select
                  className="custom-select border-gray-300 rounded-md py-3"
                  defaultValue="select"
                >
                  <Select.Option value="select">Select</Select.Option>
                  <Select.Option value="us">USA</Select.Option>
                  <Select.Option value="uk">UK</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <Form.Item name="description" label="Description">
              <Input.TextArea
                className="border-gray-300 rounded-md p-3"
                placeholder="Type Here"
                rows={4}
              />
            </Form.Item>
  
            {/* Work History Section */}
            <div className="grid grid-cols-2">
              <h2 className=" font-semibold text-gray-800 ">Work History:</h2>
  
              <h2 className=" font-semibold text-gray-800">Work History:</h2>
            </div>
  
            <div className="grid grid-cols-2">
              <Form.Item
                name="position"
                label="Position"
                rules={[
                  { required: true, message: "Please select your position!" },
                ]}
              >
                <Select className="border-gray-300 rounded-md p-3">
                  <Select.Option value="select">Select</Select.Option>
                  <Select.Option value="developer">Developer</Select.Option>
                  <Select.Option value="designer">Designer</Select.Option>
                </Select>
              </Form.Item>
  
              <Form.Item name="previousJobTitle" label="Previous Job Title">
                <Input
                  className="border-gray-300 rounded-md p-3"
                  placeholder="Previous Job Title"
                />
              </Form.Item>
            </div>
  
            <div className="grid grid-cols-3 gap-4">
              <Form.Item
                name="previousJobStartDate"
                label="Date Previous Job Started"
              >
                <DatePicker className="border-gray-300 rounded-md w-full p-3" />
              </Form.Item>
  
              <Form.Item
                name="previousJobEndDate"
                label="Date Previous Job Ended"
              >
                <DatePicker className="border-gray-300 rounded-md w-full p-3" />
              </Form.Item>
  
              <Form.Item
                name="previousJobDescription"
                label="Previous Job Description"
              >
                <Input.TextArea
                  className="border-gray-300 rounded-md p-3 "
                  placeholder="Type Here"
                  rows={10}
                />
              </Form.Item>
            </div>
  
            {/* Resume Section */}
            <h2 className=" font-semibold text-gray-800 mb-6">Resume:</h2>
            <Form.Item name="resume" label="Upload Resume">
              <Upload
                name="resume"
                action="/upload"
                listType="picture"
                className="border-gray-300 rounded-md p-3"
                showUploadList={false}
              >
                <Button icon={<UploadOutlined />}>Upload Resume</Button>
              </Upload>
            </Form.Item>
  
            <div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="bg-[#2E4CB9] text-white py-6  "
                >
                  Submit Your Request
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
</div>
  );
};
