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
            <li><Link to={'/services/Structure-Cabling'}>Structured Cabling (Copper And Fiber)</Link></li>
            <li><Link to={'/services/rack-and-device-installation'}>Rack And Device Installation</Link></li>
            <li><Link to={'/services/Break-FixServices'}>Break/Fix Services</Link></li>
            <li><Link to={'/services/Network-Migrations'}>Network Migrations And Cutovers</Link></li>
            <li><Link to={'/services/site-surveys'}>Site Surveys</Link></li>
            <li><Link to={'/services/new-network'}>Deployment Of New Network Devices</Link></li>
            <li><Link to={'/services/consultation-on-cutting'}>Consultations On Cutting-Edge Technologies</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Link</h2>
          <ul className="">
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/company/about-us'}><li className="py-3">About Us</li></Link>
            <Link to={'/blog'}><li>Blog</li></Link>
            <Link to={'/contactUs'}>
            <li className="py-3">Contact Us</li></Link>
            <Link to={'/feedback'}><li >Feedback</li></Link>
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
