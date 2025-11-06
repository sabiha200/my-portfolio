import Image from "next/image";
import React from "react";
import graph from "../Image/graph.png";
import arrow from "../Image/arrow.png";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-20 2xl:p-16 xl:p-10 lg:p-8 md:p-4 sm:p-3 gap-32 2xl:gap-20 xl:gap-16 lg:gap-10 md:gap-6 sm:gap-4 max-w-screen-xl mx-auto">
      {/* Left Side */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div>
          <h1 className="font-bold pb-6 text-[#eeeeee] text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl leading-tight">
            Got a project in
            <span className="font-bold text-[#00adb5]"> mind</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <div className="w-48 2xl:w-44 xl:w-36 lg:w-28 md:w-24 sm:w-20">
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="w-80 2xl:w-72 xl:w-60 lg:w-48 md:w-40 sm:w-36">
            <Image src={graph} alt="graph" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-6 flex flex-col items-center lg:items-start">
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 pb-6">
          <div>
            <h3 className="text-sm md:text-xs font-bold text-white pb-2.5">
              Your Name
            </h3>
            <input
              type="text"
              placeholder="Name"
              className="w-60 2xl:w-52 xl:w-44 lg:w-36 md:w-32 sm:w-28 h-11 bg-[#393e46] rounded-lg text-[#eeeeee] p-2 text-sm md:text-xs"
            />
          </div>
          <div>
            <h3 className="text-sm md:text-xs font-bold text-white pb-2.5">
              Your Email
            </h3>
            <input
              type="email"
              placeholder="Email"
              className="w-60 2xl:w-52 xl:w-44 lg:w-36 md:w-32 sm:w-28 h-11 bg-[#393e46] rounded-lg text-[#eeeeee] p-2 text-sm md:text-xs"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:items-start">
          <h3 className="text-sm md:text-xs font-bold text-white pb-2.5">
            Your Message
          </h3>
          <textarea
            placeholder="Message"
            className="p-2 w-[510px] 2xl:w-[460px] xl:w-[380px] lg:w-[320px] md:w-64 sm:w-52 h-72 md:h-48 sm:h-40 bg-[#393e46] rounded-lg text-[#eeeeee] resize-none text-sm md:text-xs"
          ></textarea>

          <button className="w-40 xl:w-32 lg:w-28 md:w-24 sm:w-20 h-10 my-4 bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer rounded-3xl text-[#eeeeee] text-center text-sm md:text-[10px] flex items-center justify-center gap-2 md:gap-1.5 p-3 ">
            Send message
            <BsSend className="size-4 md:size-3 items-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
