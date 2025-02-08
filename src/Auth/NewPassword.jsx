import React from "react";
import { Form, Input, Button, message } from "antd";
import authBackground from "../assets/auth/auth.png";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../redux/Api/userApi"; // Assuming this is your hook for password reset

export const NewPassword = () => {
  const [resetPass] = useResetPasswordMutation();
  const navigate = useNavigate();
  const onFinish = async (values) => {

    const email = localStorage.getItem("email");


    const data = {
      email: email,
      newPassword: values.password,
      confirmPassword: values.confirmPassword,
    };

    try {

      const response = await resetPass(data).unwrap();
      if (response.success) {
        message.success(response.message );
        navigate("/auth/login"); 
      } else {
        message.error(response.message );
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(error?.data?.message );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackground})` }}
    >
      <div className="bg-[#DBE3EA14] bg-opacity-30 backdrop-blur-lg md:p-14 p-4 m-2 md:m-0 md:py-28 py-20 rounded-[20px] w-full max-w-[600px]">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Set New Password
        </h1>
        <Form
          name="new-password"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical" // Ensures labels are above the input fields
        >
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Enter new password"
              className="px-4 py-2 rounded-lg mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[
              { required: true, message: "Please input your Confirm password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Re-enter your new password"
              className="px-4 py-2 rounded-lg mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-4 text-white bg-[#2E4CB9] rounded-[6px] hover:bg-blue-600 focus:outline-none"
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
