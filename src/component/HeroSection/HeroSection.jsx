import React from "react";

import Baby1 from "../../assets/images/baby-1.png";
import Button from "../../shared_component/Button/Button";
import CV from "../../assets/CV_IGUSTINGURAHRAMAISWARA.pdf";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <div className=" flex flex-col justify-center align-middle mx-auto h-screen">
      <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-[#595A85] to-70% rounded-full md:block hidden absolute "></div>
      <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-[#595A85] to-70% rounded-full md:block hidden  absolute  left-1/4 top-14"></div>
      <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-[#595A85] to-70% rounded-full md:block hidden  absolute  left-3/4 top-14"></div>
      <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-[#595A85] to-70% rounded-full md:block hidden absolute  right-1/4 bottom-20"></div>
      <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-[#595A85] to-70% rounded-full md:block hidden absolute  right-3/4 bottom-40"></div>

      <div className="flex rounded-full bg-gradient-to-b from-[#18ADB3] to-[#595A85] to-70% p-14 justify-center align-middle transition-transform">
        <img src={Baby1} />
      </div>
      <h1 className=" mt-5 md:text-6xl text-4xl uppercase text-white">
        <b>Rama Iswara</b>
      </h1>

      <h1 className=" mt-5 md:text-3xl text-2xl uppercase text-white mt-1 font-bold mb-3">
        <TypeAnimation
          sequence={["Full Stack ", 1000, "Web ", 1000, "Android ", 1000]}
          repeat={Infinity}
          cursor={false}
        />
        Developer
      </h1>
      <div className=" flex-row flex gap-4 justify-center mt-3">
        <Button
          type={"primary"}
          text={"Hire Me"}
          onClick={() => {
            window.location.href = "mailto:ramaiswara098@gmail.com";
          }}
        />
        <Button
          type={"secondary"}
          text={"Download CV"}
          onClick={() => {
            window.location.href = CV;
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
