import React from "react";
import person from "../Image/image1.png";
import doodles from "../Image/doodles.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#222831] flex justify-center py-44 md:py-28 sm:py-20 gap-30 lg:gap-20 md:gap-14 sm:gap-10">
      <div className="pt-8 items-center font-semibold sm:font-normal text-7xl lg:text-5xl md:text-3xl sm:text-[8px] text-[#eeeeee] w-xl xl:w-lg lg:w-sm sm:w-2.5">
        CREATIVE WEB <span className="font-bold text-[#00adb5]">DESIGNER</span>
      </div>
      <div className="relative lg:w-72 md:w-64 sm:w-20">
        <Image src={doodles} height={400} width={400} alt={doodles} />
        <div className="absolute top-30 md:top-20 -left-16 xl:right-40 lg:w-64 md:w-44 sm:w-28"><Image
          alt="person"
          src={person}
          height={400}
          width={400}
          
        /></div>
      </div>
    </div>
  );
};

export default Banner;
