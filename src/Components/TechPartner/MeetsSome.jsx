import React, { useEffect, useState } from "react";
import img1 from "../../assets/tech/1.png";
import img2 from "../../assets/tech/2.png";
import img3 from "../../assets/tech/3.png";
import img4 from "../../assets/tech/4.png";
import img5 from "../../assets/tech/5.png";
import img6 from "../../assets/tech/6.png";

const techPartners = [
  {
    name: "Cisco Systems",
    image: img1,
    description: "Networking and cybersecurity solutions",
  },
  { name: "IBM", image: img2, description: "Cloud computing and AI solutions" },
  {
    name: "Microsoft",
    image: img5,
    description: "Software and cloud services",
  },
  { name: "Google Cloud", image: img3, description: "Cloud computing and AI" },
  {
    name: "Amazon Web Services",
    image: img4,
    description: "Cloud computing solutions",
  },
];

export const MeetsSome = () => {
  const [scrollX, setScrollX] = useState(0);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.9; // 10% of viewport height

      if (window.scrollY > scrollThreshold) {
        setStartScroll(true);
        setScrollX((window.scrollY - scrollThreshold) * 0.9); // Adjust speed
      } else {
        setStartScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-4 lg:mx-0">
      <div className="max-w-7xl m-auto lg:mt-20 md:mt-64 mt-11 mb-16">
        <h1 className="md:text-5xl text-3xl bg-gradient-to-r font-bold from-pink-500 via-yellow-400  to-blue-500 bg-clip-text text-transparent">
          Meet some of our
        </h1>

        <h1 className="md:text-5xl text-3xl pb-11  font-bold bg-gradient-to-r from-blue-500 via-orange-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
          Technology Partners
        </h1>
      </div>
      <div className="flex justify-between items-center text-center max-w-[1600px] m-auto text-white gap-11">
        <div
          className="flex space-x-20 min-w-full transition-transform duration-500"
          style={{ transform: `translateX(${-scrollX}px)` }}
        >
          {techPartners.map((partner, index) => (
            <div key={index} className="text-center flex-shrink-0 w-[250px]">
              <p className="text-xl font-semibold text-white">{partner.name}</p>
              <div className="flex justify-center my-4">
                <img
                  className="md:w-[150px] w-[60px]"
                  src={partner.image}
                  alt={partner.name}
                />
              </div>
              <p className="text-md font-light text-gray-300">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="relative">
          <div className="absolute -top-11 left-0 right-0 h-[400px] bg-gradient-to-b from-pink-300 to-transparent opacity-50 blur-[100px]"></div>

          <img className="md:w-[400px] " src={img6} alt="" />
        </div>
      </div>
    </div>
  );
};
