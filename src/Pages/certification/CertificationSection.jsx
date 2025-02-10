import React, { useEffect, useState } from "react";
import img3 from "../../assets/certification/3.png";
import img4 from "../../assets/certification/4.png";
import img5 from "../../assets/certification/5.png";
import img6 from "../../assets/certification/6.png";
import img7 from "../../assets/certification/7.png";
import img8 from "../../assets/certification/8.png";
import img9 from "../../assets/certification/9.png";

const certificationImages = [img3, img4, img5, img6, img7, img8, img9];

export const CertificationSection = () => {
  const [scrollX, setScrollX] = useState(0);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.8;

      if (window.scrollY > scrollThreshold) {
        setStartScroll(true);
        setScrollX((window.scrollY - scrollThreshold) * 0.8);
      } else {
        setStartScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden mx-4 lg:mx-0">
      <div className="flex justify-between items-center max-w-[1600px] m-auto gap-11">
        <div
          className="flex space-x-16 min-w-full transition-transform duration-500"
          style={{ transform: `translateX(${-scrollX}px)` }}
        >
          {certificationImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-[200px]">
              <img className="w-full" src={img} alt={`cert-${index}`} />
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};
