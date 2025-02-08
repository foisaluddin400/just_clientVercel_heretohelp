import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useGetContactQuery } from '../../redux/Api/manageApi';

export const ContactExplore = () => {
  const { data: contactData } = useGetContactQuery();

  // API থেকে ডাটা পাওয়া গেলে সেটিং করা
  const emails = contactData?.data?.writeToUs || [];
  const contactNumbers = contactData?.data?.callToUs || [];

  return (
    <div className="bg-gradient-to-b from-[#2D48B1] to-[#EEF0F9] py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-white md:text-left text-center mb-8">
          Contact Us To <span className="text-black">Explore</span> IT Service <br /> 
          <span className="text-black">Opportunities.</span>
        </h2>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left font-semibold">
          {/* Email Section */}
          <div>
            <h3 className="text-lg font-semibold text-black">Email*</h3>
            {emails.length > 0 ? (
              emails.map((email, index) => (
                <p key={index} className="text-black">{email}</p>
              ))
            ) : (
              <p className="text-black">No email available</p>
            )}
          </div>
          
          {/* Contact Number Section */}
          <div>
            <h3 className="text-lg text-black">Contact Number*</h3>
            {contactNumbers.length > 0 ? (
              contactNumbers.map((number, index) => (
                <p key={index} className="text-black">{number}</p>
              ))
            ) : (
              <p className="text-black">No contact number available</p>
            )}
          </div>
          
          {/* Map Section */}
          <div className="flex items-center md:justify-start justify-center">
            <h3 className="text-lg font-semibold text-black mr-2">Map</h3>
            <FaArrowUpRightFromSquare />
          </div>
        </div>
      </div>
    </div>
  );
};
