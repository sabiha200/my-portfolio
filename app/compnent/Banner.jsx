import React from "react";
import person from "../Image/image1.png";
import doodles from "../Image/doodles.png";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import BackToTopButton from "./BackToTopButton";


const Banner = () => {
  return (
    <div id="banner" className="px-4 sm:px-8 md:px-12 lg:px-24 bg-[#222831] flex flex-col md:flex-row justify-between items-center py-20 sm:py-24 md:py-28 lg:py-36 xl:py-44 gap-10 sm:gap-14 md:gap-16 lg:gap-24 xl:gap-28">
      {/* Title */}
      <div className="flex flex-col w-11/12 sm:w-96 md:w-96 lg:w-80 xl:w-96">
        <div className="text-center md:text-left font-semibold sm:font-normal text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#eeeeee]">
        CREATIVE WEB <span className="font-bold text-[#00adb5]">DESIGNER</span>
      </div>
      <div className="flex sm:justify-center sm:items-center gap-2.5">
        <div>
        <button className="w-36 xl:w-28 lg:w-24 md:w-20 sm:w-16 h-10 my-4 bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer rounded-3xl text-[#eeeeee] text-center text-sm md:text-[10px] sm:text-[8px] flex items-center justify-center gap-2 md:gap-1.5 p-3">
          Hire me
        </button>
      </div>
      <div>
      </div>
        <button className="w-44 xl:w-36 lg:w-32 md:w-28 sm:w-20 h-10 my-4 bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer rounded-3xl text-[#eeeeee] text-center text-sm md:text-[10px] sm:text-[8px] flex items-center justify-center gap-2 md:gap-1.5 p-3 ">
          Download CV
          <MdOutlineFileDownload className="size-6 md:size-3 items-center" />
        </button>
      </div>
      </div>

      {/* Images */}
      <div className="relative mt-8 md:mt-0 md:ml-12 w-80 sm:w-72 md:w-72 lg:w-80 xl:w-96 flex justify-center">
        <Image
          src={doodles}
          height={400}
          width={400}
          alt="doodles"
          className="w-full h-auto"
        />
        <div className="absolute top-12 sm:top-16 md:top-20 lg:top-24 xl:top-28 -left-4 sm:-left-6 md:-left-12 lg:-left-16 xl:-left-20 w-64 sm:w-44 md:w-48 lg:w-64 xl:w-72">
          <Image
            src={person}
            height={400}
            width={400}
            alt="person"
            className="w-full h-auto"
          />
        </div>
      </div>
      <BackToTopButton/>
    </div>
  );
};

export default Banner;
