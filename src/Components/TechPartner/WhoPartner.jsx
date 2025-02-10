import React from "react";
import img from "../../assets/tech/11.png";
import img1 from "../../assets/tech/22.jpg";
import img2 from "../../assets/tech/33.jpg";
import img6 from "../../assets/tech/ba.png";
const partners = [
  {
    title: "IT Service Providers",
    description:
      "Integrate BETS's advanced IT solutions into your service offerings, enhancing your ability to handle large-scale IT demands and complex tech environments.",
    image: img,
  },
  {
    title: "Technology Consultants",
    description:
      "Collaborate with us to provide cutting-edge advice and solutions that help businesses navigate their IT journeys effectively.",
    image: img1,
  },
  {
    title: "Managed Service Providers (MSPs)",
    description:
      "Expand your services by integrating BETS's comprehensive IT solutions into your portfolio, offering added value to your clients.",
    image: img2,
  },
];

export const WhoPartner = () => {
  return (
    <div className=" text-white py-12 px-6 mt-40">
      {/* Section Title */}
      <h2 className="md:text-5xl text-3xl font-bold text-center mb-8">
        Who we partner with
      </h2>

      {/* Partner Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className=" p-4 rounded-lg shadow-lg border border-[#1F356E] hover:scale-105 transition transform duration-300"
          >
            <img
              src={partner.image}
              alt={partner.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{partner.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{partner.description}</p>
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto  gap-5 items-center mt-16">
        {/* Left Section - Image and Text */}
        <div
          className="relative col-span-2 bg-cover bg-center py-32 text-white rounded-lg"
          style={{ backgroundImage: `url(${img6})` }}
        >
          <div className="absolute rounded-lg inset-0 bg-gradient-to-r from-black via-black to-black opacity-70"></div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
            <h1 className=" md:text-4xl font-bold leading-tight">
              <span className="text-5xl">
                BETS Tech Partnership <br /> Program
              </span>
            </h1>
            <p className="mt-4 max-w-2xl">
              Collaborate with BETS to expand your technology frontier. Our
              program cultivates partnerships that drive innovation, enhance
              capabilities, and extend market reach. Partner with us for a
              journey towards technological excellence.
            </p>
            <button className="text-xl font-semibold bg-[#2E4CB9] py-3 px-5 rounded mt-7">Become a partner</button>
          </div>
        </div>

        
      </div>
    </div>
  );
};
