import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Drawer } from "antd";
import Logo from "../assets/Home/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuItemClick = () => {
    onClose();
  };

  const isActive = (path) => location.pathname === path;

  const dropdownItemsCompany = [
    {
      label: (
        <Link
          to="/company/about-us"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/company/about-us") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-2 md:px-5">
            <h2 className="md:text-xl text-[17px] font-semibold ">About Us</h2>
            <p className="text-sm">Learn about our mission and team.</p>
          </div>
        </Link>
      ),
      key: "about-us",
    },
    {
      label: (
        <Link
          to="/company/our-team"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/company/our-team") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-2 md:px-5">
            <h2 className="md:text-xl text-[17px] font-semibold">Leadership</h2>
            <p className="text-sm">Meet Our team</p>
          </div>
        </Link>
      ),
      key: "our",
    },
    
    // {
    //   label: (
    //     <Link  to="/company/tech-pertners" rel="noopener noreferrer">
    //       <div className="py-2">
    //       <h2 className="text-base font-semibold">Tech Partners</h2>
    //       <p className="text-sm">Explore exclusive partnership opportunities with BETS</p>
    //       </div>
    //     </Link>
    //   ),
    //   key: "techPartners",
    // },

    
    {
      label: (
        <Link
          to="/company/new-update"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/company/new-update") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-2 md:px-5">
            <h2 className="md:text-xl text-[17px] font-semibold">News & Updates</h2>
            <p className="text-sm">
              Discover the latest updates and media coverage
            </p>
          </div>
        </Link>
      ),
      key: "newupdate",
    },
    {
      label: (
        <Link
          to="/company/certification"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/company/certification") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-2 md:px-5">
            <h2 className="md:text-xl text-[17px] font-semibold ">Certifications</h2>
            <p className="text-sm">Join us at industry-leading events to connect and learn.</p>
          </div>
        </Link>
      ),
      key: "Certification",
    },
    {
      label: (
        <Link
          to="/company/tech-pertners"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/company/tech-pertners") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-2 md:px-5">
            <h2 className="md:text-xl text-[17px] font-semibold">Business Partner</h2>
            <p className="text-sm">
              Collaborate with us to drive your business forward.
            </p>
          </div>
        </Link>
      ),
      key: "Business",
    },
    // {
    //   label: (
    //     <Link to="/company/tech-pertners" rel="noopener noreferrer">
    //       <div className="py-2">
    //       <h2 className="text-base font-semibold">Ateraverse'24</h2>
    //       <p className="text-sm">Altera's flagship event</p>
    //       </div>
    //     </Link>
    //   ),
    //   key: "Ateraverse",
    // },
    {
      label: (
        <Link
          to="/company/careers"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/company/careers") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-2 md:px-5">
            <h2 className="md:text-xl text-[17px] font-semibold">Careers</h2>
            <p className="text-sm">
              Looking for a career where creativity thrives and the <br />{" "}
              extraordinary in celebrated? Welcome to your future!
            </p>
          </div>
        </Link>
      ),
      key: "careers",
    },
    

    
  ];

  const dropdownItemsServices = [
    {
      label: (
        <Link
          to="/services/Structure-Cabling"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/Structure-Cabling") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold ">
              Structure Cabling (Copper And Fiber)
            </h1>
            <p>
              Reliable Copper And Fiber Solutions Tailored To Your Buisiness
              Needs.
            </p>
          </div>
        </Link>
      ),
      key: "structured",
    },
    {
      label: (
        <Link
          to="/services/Break-FixServices"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/Break-FixServices") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold">Break/Fix Services</h1>
            <p>
              Rapid Diagnosis And Repair Of Hardware And Network Issues To <br />
              Minimize Disruptions.
            </p>
          </div>
        </Link>
      ),
      key: "BreakFixServices",
    },
    {
      label: (
        <Link
          to="/services/rack-and-device-installation"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/rack-and-device-installation") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold">
              {" "}
              Rack And Device Installation
            </h1>
            <p>
              Setup Of Servers, Routers, And Switches In Data Centers <br /> Or Office
              Environments With Optimized Cable Management.
            </p>
          </div>
        </Link>
      ),
      key: "rack-and-device",
    },
    {
      label: (
        <Link
          to="/services/Network-Migrations"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/Network-Migrations") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold">Network Migrations And Cutovers</h1>
            <p>Seamless Upgrades Or Migrations Of Networks With Minimal <br />
            Downtime And High Precision.</p>
          </div>
        </Link>
      ),
      key: "Network",
    },
    {
      label: (
        <Link
          to="/services/site-surveys"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/site-surveys") ? "border-b-2 border-white" : ""}`}
        >
         <div className="md:py-1">
          <h1 className="md:text-xl text-[17px] font-semibold"> Site Surveys</h1>
          <p>Comprehensive Evaluation Of Network Needs With Recommendations <br />
          For Infrastructure Optimization.</p>
         </div>
        </Link>
      ),
      key: "site-surveys",
    },
    {
      label: (
        <Link
          to="/services/consultation-on-cutting"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/consultation-on-cutting") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold">Consultations On Cutting-Edge Technologies</h1>
            <p>Expert Advice On Adopting The Latest Technologies To Streamline <br />
            Operations And Boost Productivity.</p>
          </div>
        </Link>
      ),
      key: "consultation-on-cutting",
    },
    {
      label: (
        <Link
          to="/services/new-network"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/new-network") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold">Deployment Of New Network Devices</h1>
            <p>Configuration And Deployment Of Cutting-Edge IT Hardware Tailored To <br />
            Your Network Environment.</p>
          </div>
        </Link>
      ),
      key: "newNetwork",
    },
   
    {
      label: (
        <Link
          to="/services/service-bundle"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/service-bundle") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold">Services Bundles And Maintenance</h1>
          </div>
        </Link>
      ),
      key: "service-bundle",
    },
    {
      label: (
        <Link
          to="/services/pricing-strategy"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/services/pricing-strategy") ? "border-b-2 border-white" : ""}`}
        >
          <div className="md:py-1">
            <h1 className="md:text-xl text-[17px] font-semibold">Pricing Strategy And Transparency</h1>
          </div>
        </Link>
      ),
      key: "pricing-strategy",
    },
   
  ];

  const dropdownItemsProfile = [
    {
      label: (
        <Link
          to="/profilePage"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/profilePage") ? "border-b-2 border-white" : ""}`}
        >
          Profile
        </Link>
      ),
      key: "profilepage",
    },
    {
      label: (
        <Link
          to="/profilePage/ongoing-tickets"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/profilePage/ongoing-tickets") ? "border-b-2 border-white" : ""}`}
        >
          Ongoing Tickets
        </Link>
      ),
      key: "ongoing",
    },
    {
      label: (
        <Link
          to="/new-ticket"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/new-ticket") ? "border-b-2 border-white" : ""}`}
        >
          New Ticket
        </Link>
      ),
      key: "newTicket",
    },
    {
      label: (
        <Link
          to="/privacy-policy"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/privacy-policy") ? "border-b-2 border-white" : ""}`}
        >
          Privacy & Policy
        </Link>
      ),
      key: "privacy",
    },
    {
      label: (
        <Link
          to="/terms-condition"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/terms-condition") ? "border-b-2 border-white" : ""}`}
        >
          Terms & Condition
        </Link>
      ),
      key: "terms",
    },
    {
      label: (
        <Link
          to="/auth/login"
          rel="noopener noreferrer"
          onClick={handleMenuItemClick}
          className={`hover:underline ${isActive("/auth/login") ? "border-b-2 border-white" : ""}`}
        >
          Log Out
        </Link>
      ),
      key: "log",
    },
  ];

  const items = [
    {
      key: "home",
      label: (
        <Link onClick={handleMenuItemClick} to="/" className={`hover:underline ${isActive("/") ? "border-b border-white" : ""}`}>
        Home
        </Link>
      ),
    },
    {
      key: "company",
      label: (
        <Dropdown menu={{ items: dropdownItemsCompany }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              Company
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
    {
      key: "services",
      label: (
        <Dropdown menu={{ items: dropdownItemsServices }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              Services
              <FaCircleArrowDown />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
    {
      key: "contactUs",
      label: (
        <Link onClick={handleMenuItemClick} to="/contactUs" className={`hover:underline ${isActive("/contactUs") ? "border-b border-white" : ""}`}>
          Contact Us
        </Link>
      ),
    },
    {
      key: "blog",
      label: (
        <Link onClick={handleMenuItemClick} to="/blog" className={`hover:underline ${isActive("/blog") ? "border-b border-white" : ""}`}>
          Blog
        </Link>
      ),
    },
    {
      key: "submitTicket",
      label: (
        <Link onClick={handleMenuItemClick} to="/new-ticket" className={`hover:underline ${isActive("/new-ticket") ? "border-b border-white" : ""}`}>
          Submit A Ticket
        </Link>
      ),
    },
    {
      key: "profile",
      label: (
        <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
         <div className="flex justify-center">
         <Link onClick={(e) => e.preventDefault()}>
            <Space>
              <FaRegUserCircle className="text-3xl"/>
              <DownOutlined />
            </Space>
          </Link>
         </div>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="bg-[#2E4CB9] text-white">
    {/* Desktop Navbar */}
    <nav className="flex items-center  max-w-7xl m-auto justify-between  px-6 lg:px-0 py-1">
      <img className="w-[65px]" src={Logo} alt="Logo" />
      <ul className="hidden lg:flex lg:space-x-20 space-x-6 pt-3">
        {items.map((item) => (
          <li key={item.key} className="list-none">
            {item.label}
          </li>
        ))}
      </ul>
      <button className="lg:hidden text-2xl" onClick={showDrawer}>
        <MenuOutlined />
      </button>
    </nav>

    {/* Mobile Drawer */}
    <Drawer title="" placement="right" onClose={onClose} open={drawerOpen}>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item.key} className="list-none border-b border-slate-200 py-5">
            {item.label}
          </li>
        ))}
      </ul>
    </Drawer>
  </div>
  );
};
