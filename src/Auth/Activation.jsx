import React, { useState } from 'react'
import OtpInput from "react-otp-input";
import authBackground from '../assets/auth/auth.png';
import { Link } from 'react-router-dom';
import { useRegisterActivationMutation } from '../redux/Api/userApi';
import { toast } from 'sonner';
export const Activation = () => {
    const [registerActivation]= useRegisterActivationMutation()
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
  const data = {
    email: localStorage.getItem("email"),
    activationCode: otp,
  };

  console.log(data);
  try {
    const response = await registerActivation(data).unwrap();
    console.log(response);
    const token = response.data;
    localStorage.setItem("accessToken", token);
    if (response.success) {
      toast.success(response.message || "Account activated successfully!");
    }
    
    navigate("/"); 
  } catch (error) {
    console.error(error?.data?.message);
    
    // Display error toast only if there is an error
    toast.error(error?.data?.message || "Verification failed. Please try again.");
  }
};


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${authBackground})` }}
    >
      <div className="bg-[#DBE3EA14] bg-opacity-30 backdrop-blur-lg md:p-14 p-4 m-2 md:m-0 md:py-28 py-20 rounded-[20px]  w-full max-w-[600px]">

        <h1 className="text-3xl font-semibold text-center text-white mb-6">Verification Code</h1>
        <div className="flex justify-center mb-5">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="md:mx-3 mx-1"></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-16 h-16 text-center text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ width: "50px", height: "50px" }}
                />
              )}
            />
          </div>
        <button
            onClick={handleVerify}
            className="w-full py-2 bg-[#2E4CB9] text-white rounded-md mb-4"
          >
            {"Verify OTP"}
          </button>

          <span className="flex justify-center text-white">
            You have not received the email?{" "}
            <span className="text-blue-500 pl-2">Resend</span>
          </span>
        
      </div>
    </div>
  )
}
