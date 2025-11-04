import React from "react";
import person from "../Image/image1.png";
import doodles from "../Image/doodles.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 bg-[#222831] flex flex-col md:flex-row justify-between items-center py-20 sm:py-24 md:py-28 lg:py-36 xl:py-44 gap-10 sm:gap-14 md:gap-16 lg:gap-24 xl:gap-28">
      {/* Title */}
      <div className="text-center md:text-left font-semibold sm:font-normal text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#eeeeee] w-11/12 sm:w-96 md:w-96 lg:w-80 xl:w-96">
        CREATIVE WEB <span className="font-bold text-[#00adb5]">DESIGNER</span>
      </div>

      {/* Images */}
      <div className="relative mt-8 md:mt-0 md:ml-12 w-80 sm:w-72 md:w-72 lg:w-80 xl:w-96 flex justify-center">
        <Image src={doodles} height={400} width={400} alt="doodles" className="w-full h-auto" />
        <div className="absolute top-12 sm:top-16 md:top-20 lg:top-24 xl:top-28 -left-4 sm:-left-6 md:-left-12 lg:-left-16 xl:-left-20 w-64 sm:w-44 md:w-48 lg:w-64 xl:w-72">
          <Image src={person} height={400} width={400} alt="person" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
