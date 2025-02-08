import { Button } from 'antd'; 
import React, { useState } from 'react';
import { useFeedbackMutation, useGetProfileQuery } from '../../redux/Api/userApi';
import { toast } from 'sonner';

export const Feedback = () => {
  const { data: profile, isLoading, isError } = useGetProfileQuery();
  const [feedback, { isLoading: isSubmitting }] = useFeedbackMutation();
  const [feedbackText, setFeedbackText] = useState('');

  if (isLoading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (isError || !profile?.data) {
    return <div className="text-white text-center">Error loading profile</div>;
  }

  const { name, email } = profile.data;
  console.log(name)

  const handleSubmit = async () => {
    if (!feedbackText.trim()) {
      toast.error('Enter Value')
      return;
    }
  
    const data = { 
      userName: name,
      feedback: feedbackText
    };
  
    console.log(data);
    
    try {
      const response = await feedback(data).unwrap();
      console.log('Feedback Submitted:', response);
      toast.success(response.message)
      setFeedbackText('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error(error.data.message)
    }
  };
  

  return (
    <div className="flex text-white justify-center items-center min-h-screen bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95">
      <div className="p-8 rounded-lg w-[600px]">
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full mr-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>Email: {email}</p>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-4">Feedback</label>
          <textarea
            className="bg-transparent border px-4 py-2 border-white h-48"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
          <Button
            type="primary"
            className="mt-4 w-full text-white hover:bg-gray-800"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send'}
          </Button>
        </div>
      </div>
    </div>
  );
};
