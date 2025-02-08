import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import authBackground from '../assets/auth/auth.png';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../redux/Api/userApi';

export const Login = () => {
  const [form] = Form.useForm();
  const[userLogin] = useLoginUserMutation()
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values;
    const data = {
      email: username,  
      password: password,
    };

    try {
      const response = await userLogin(data).unwrap();
      console.log(response);
      
      if (response.success) {
        localStorage.setItem('accessToken', response.data.accessToken);
        message.success(response.message);
        navigate('/');
      } else {
        message.error(response.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
      message.error('Login failed. Please try again.');
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
        <h1 className="text-3xl font-semibold text-center text-white mb-6">Login</h1>

        <Form
          form={form}
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="User Name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="User Name"
              className="px-4 py-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              className="px-4 py-2 rounded-lg mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>

          <div className="flex items-center justify-between mb-4">
          <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <Link to="/auth/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-4 text-white bg-[#2E4CB9] rounded-[6px] hover:bg-blue-600"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{' '}
          <Link to="/auth/signUp" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
