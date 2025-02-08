import React from 'react';
import { Form, Input, Button } from 'antd';
import authBackground from '../assets/auth/auth.png';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/Api/userApi';
import { toast } from 'sonner';

export const SignUp = () => {
  const [registerUser] = useRegisterUserMutation()
  const [form] = Form.useForm(); 
const navigate = useNavigate()
  const onFinish = async (values) => {
    const data = {
      name: values.username,
      email: values.email,
      phoneNumber: values.phone,
      password: values.password,
      confirmPassword: values.confirmPassword,
      role: 'USER',
    };

    try {
      const response = await registerUser(data).unwrap();
      if (response.success) {
        toast.success(response.message);  // Show success toast
        console.log('Success:', response);
        localStorage.setItem('email', values.email);  // Save the email in localStorage
      
      // Navigate to the next page (activation page)
      navigate('/auth/signUp/activation');
      } else {
        toast.error(response.message || 'Registration failed!');  // Show error toast
      }
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');  // Show error toast if API fails
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackground})` }}
    >
      <div className="bg-[#DBE3EA14] bg-opacity-30 backdrop-blur-lg md:p-14 p-4 m-2 md:m-0 md:py-16 py-8 rounded-[20px] w-full max-w-[600px]">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">Sign Up</h1>
        
        <Form
          form={form}
          name="signup"
          layout="vertical"
          initialValues={{ username: '', email: '', phone: '', password: '', confirmPassword: '' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name="username" label="User Name" rules={[{ required: true, message: 'Please input your username!' }]}>            
            <Input className='py-2' placeholder="User Name" />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please input a valid Email!' }]}>            
            <Input className='py-2' placeholder="Email" />
          </Form.Item>

          <Form.Item name="phone" label="Contact Number" rules={[{ required: true, message: 'Please input your Contact Number!' }]}>            
            <Input className='py-2' placeholder="Contact Number" />
          </Form.Item>

          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>            
            <Input.Password className='py-2' placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password className='py-2' placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-sm mt-4">
          Already have an account? 
          <Link to="/auth/login" className="text-blue-500 hover:underline"> Sign In</Link>
        </p>
      </div>
    </div>
  );
};
