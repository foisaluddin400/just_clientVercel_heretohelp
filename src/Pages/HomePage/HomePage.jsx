import React from "react";
import { HeroSection } from "../../Components/Home/HeroSection";
import { LetsConnctSection } from "../../Components/Home/LetsConnctSection";
import { OurServicesSection } from "../../Components/Home/OurServicesSection";
import { SpecialPackage } from "../../Components/Home/SpecialPackage";
import { TestimonialSection } from "../../Components/Home/TestimonialSection";
import { SubscribeSection } from "../../Components/Home/SubscribeSection";
import { FaqSection } from "../../Components/Home/FaqSection";
import { ContactFormSection } from "../../Components/Home/ContactFormSection";

export const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <LetsConnctSection></LetsConnctSection>

      <div className="bg-[#0C197C]">
        <div className="inset-0 bg-gradient-to-r from-[#06083f] via-[#000d74] to-[#06083f] opacity-95 text-white">
          <SpecialPackage></SpecialPackage>
          <TestimonialSection></TestimonialSection>
          <SubscribeSection></SubscribeSection>
          <FaqSection></FaqSection>
          <div className="pt-28">
            <ContactFormSection></ContactFormSection>
          </div>
        </div>
      </div>
    </div>
  );
};
