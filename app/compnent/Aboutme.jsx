import React from "react";
import person2 from "../Image/image2.png";
import doodles2 from "../Image/doodles2.png";
import Image from "next/image";

const Aboutme = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 bg-[#222831] flex flex-col md:flex-row justify-between items-center md:gap-32 gap-16 py-24 md:py-36 lg:py-44 xl:py-52">
      {/* Text Section */}
      <div className="text-[#eeeeee] w-11/12 sm:w-96 md:w-96 lg:w-80 xl:w-96 text-center md:text-left">
        <h1 className="font-semibold pb-4 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
          About
          <span className="font-bold text-[#00adb5]"> me</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg xl:text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.... Read more
        </p>
      </div>

      {/* Image Section */}
      <div className="relative mt-12 md:mt-0 md:ml-12 w-80 sm:w-72 md:w-80 lg:w-80 xl:w-96 flex justify-center">
        <Image alt="doodle" src={doodles2} className="w-full h-auto" />
        <div className="absolute top-16 sm:top-16 md:top-14 lg:top-20 xl:top-24 w-64 sm:w-48 md:w-48 lg:w-64 xl:w-72">
          <Image alt="person" src={person2} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
