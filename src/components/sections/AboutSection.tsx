import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import aboutImg from "@/assets/images/about.jpg";
const AboutSection = () => {
  return (
    <Wrapper>
      <div
        id="about"
        className="space-y-4 md:space-y-0  md:flex justify-between gap-4  pt-12"
      >
        <div className="w-full md:w-1/2 mx-auto md:mx-0">
          <Image src={aboutImg} alt="martImage" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 space-y-3 pt-16 mx-auto md:mx-0 text-center md:text-left ">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            magnam eos officiis, quas quae dolores est odio distinctio a? Rem,
            sed sequi. Neque odio vitae sit dicta! Deserunt, deleniti explicabo?
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
