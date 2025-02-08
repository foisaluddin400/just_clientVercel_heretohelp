import React from 'react';
import { Form, Input, Button, message } from 'antd';
import authBackground from '../assets/auth/auth.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForgotPasswordMutation } from '../redux/Api/userApi';

export const ForgotPassword = () => {
  const [form] = Form.useForm(); 
  const[forgotPass] = useForgotPasswordMutation();
  const navigate = useNavigate(); 
  

  const onFinish = async (values) => {
    const { email } = values;
    const data = {
      email: email, 
    };

    try {
      const response = await forgotPass(data).unwrap();
      console.log(response);
      
     
      if (response.success) {
        message.success(response.message );
        localStorage.setItem('email',  values?.email)
        navigate('/auth/verification'); 
      } else {
        message.error(response.message );
      }
    } catch (error) {
      console.error('Error:', error);
      message.error(error?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackground})` }}
    >
      <div className="bg-[#DBE3EA14] bg-opacity-30 backdrop-blur-lg md:p-14 p-4 m-2 md:m-0 md:py-28 py-20 rounded-[20px] w-full max-w-[600px]">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">Forgot Password</h1>

        <Form
          form={form}
          name="forgot-password"
          layout="vertical"
          initialValues={{ email: '' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your Email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="px-4 py-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-4 text-white bg-[#2E4CB9] rounded-[6px] hover:bg-blue-600"
            >
              Send OTP
            </Button>
          </Form.Item>
        </Form>

        
      </div>
    </div>
  );
};
