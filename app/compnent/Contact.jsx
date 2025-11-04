import Image from "next/image";
import React from "react";
import graph from "../Image/graph.png";
import arrow from "../Image/arrow.png";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex p-20 xl:p-8 lg:p-4 md:p-2 gap-32 xl:gap-16 lg:gap-10 md:gap-5">
      <div>
        <div>
          <h1 className=" font-bold pb-6 text-[#eeeeee] w-xl lg:w-lg md:w-sm text-6xl lg:text-4xl md:text-2xl">
            Got a project in
            <span className="font-bold text-[#00adb5]"> mind</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="lg:w-36 md:w-24">
            <Image src={arrow} alt="arrow" />
          </div>
          <div className="lg:w-72 md:w-52">
            <Image src={graph} alt="graph" />
          </div>
        </div>
      </div>
      <div className=" mt-6">
        <div className="flex gap-6 lg:gap-4 md:gap-1.5 pb-6">
          <div>
            <h3 className="text-sm md:text-[10px] font-bold text-white pb-2.5">Your Name</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-60 xl:w-40 lg:w-32 md:w-26 h-11 bg-[#393e46] rounded-lg text-[#eeeeee] p-2"
            />
          </div>
          <div>
            <h3 className="text-sm md:text-[10px] font-bold text-white pb-2.5">Your Email</h3>
            <input
              type="email"
              placeholder="Name"
              className="w-60 xl:w-40 lg:w-32 md:w-26 h-11 bg-[#393e46] rounded-lg text-[#eeeeee] p-2"
            />
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-sm md:text-[10px] font-bold text-white pb-2.5 ">Your Message</h3>
          <input
            type="text"
            placeholder="message"
            className="p-2 w-[510px] xl:w-[345px] lg:w-[280px] md:w-52 h-72 md:h-46 bg-[#393e46] rounded-lg text-[#eeeeee]"
          />
          </div>
          <button className="w-36 md:w-20 h-8 my-4 bg-[#00adb5] rounded-3xl text-[#eeeeee] text-center md:text-[8px] flex items-center gap-2 md:gap-1.5 p-3"> send message <BsSend className="size-3.5 items-center" /></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
