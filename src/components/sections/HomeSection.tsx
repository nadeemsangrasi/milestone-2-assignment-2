import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import martImg from "@/assets/images/mart.jpg";
const HomeSection = () => {
  return (
    <Wrapper>
      <div className="space-y-4 md:space-y-0  md:flex justify-between gap-4">
        <div className="w-full md:w-1/2 space-y-3 pt-16 mx-auto md:mx-0 text-center md:text-left ">
          <h4 className="font-semibold">Welcome to MART</h4>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            We provide best quality products
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            magnam eos officiis, quas quae dolores est odio distinctio a? Rem,
            sed sequi. Neque odio vitae sit dicta! Deserunt, deleniti explicabo?
          </p>
        </div>
        <div className="w-full md:w-1/2 mx-auto md:mx-0">
          <Image src={martImg} alt="martImage" className="w-full" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
