import React from "react";
import Logo from "../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="bg-[#050835] text-white py-10 px-4 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <img src={Logo} alt="Logo" className="w-16 mb-6" />
          <h2 className="text-lg font-bold mb-2">Contact Information</h2>
          <p className="mb-1">Phone Number: +99 125 125894</p>
          <p className="mb-1">Email: DamieMail@Gmail.Com</p>
          <p className="my-6">
            Address: 2118 Thornridge Cir.
            <br />
            Syracuse, Connecticut 35624
          </p>
          <p className="font-semibold">
            Have Questions? Reach Out Today For A Customized Solution!
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-2">Services</h2>
          <ul className="space-y-4">
            <li>Structured Cabling (Copper And Fiber)</li>
            <li>Rack And Device Installation</li>
            <li>Break/Fix Services</li>
            <li>Network Migrations And Cutovers</li>
            <li>Site Surveys</li>
            <li>Deployment Of New Network Devices</li>
            <li>Consultations On Cutting-Edge Technologies</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Link</h2>
          <ul className="space-y-3">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <Link to={'/feedback'}><li  className="pt-3">Feedback</li></Link>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-between border-t items-center border-white max-w-7xl mx-auto">
        <p className="pt-4">Social Media</p>
        <div className=" space-x-4 mt-5 flex gap-2">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"><FaFacebook /></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"><FaXTwitter /></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"><AiFillInstagram /></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
