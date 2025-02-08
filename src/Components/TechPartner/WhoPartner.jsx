import React from "react";
import img from "../../assets/tech/11.png";
import img1 from "../../assets/tech/22.jpg";
import img2 from "../../assets/tech/33.jpg";

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
    </div>
  );
};
