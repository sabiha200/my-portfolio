import React from "react";
import person2 from "../Image/image2.png";
import doodles2 from "../Image/doodles2.png";
import Image from "next/image";

const Aboutme = () => {
  return (

      <div className="bg-[#222831] flex justify-center gap-44 md:gap-28 py-44 md:py-28">
        <div className=" items-center text-[#eeeeee] w-96 xl:w-72 lg:w-64 ">
          <h1 className=" font-semibold pb-4 text-7xl lg:text-5xl md:text-3xl sm:text-sm">
            About
            <span className="font-bold text-[#00adb5]"> me</span>
          </h1>
          <p className="md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.... Read more
          </p>
        </div>
        <div className="relative lg:w-72 md:w-64">
          <Image alt="doodle" src={doodles2} height={400} width={400} />
          <div className="w-xl lg:w-64 md:w-40 absolute top-20 md:top-14 ">
            <Image alt="person" src={person2} height={400} width={400} />
          </div>
        </div>
      </div>

  );
};

export default Aboutme;
