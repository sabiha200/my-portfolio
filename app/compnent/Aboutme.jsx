import React from "react";
import person2 from "../Image/image2.png";
import doodles2 from "../Image/doodles2.png";
import Image from "next/image";

const Aboutme = () => {
  return (
      <section>
        <div className="bg-[#222831] flex justify-center gap-44 py-44">
        <div className="pt-8 items-center text-[#eeeeee] w-96 ">
          <h1 className=" font-semibold text-7xl pb-6">About
          <span className="font-bold text-[#00adb5]"> me</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more</p>
        </div>
        <div>
          <div className="relative">
            <Image alt='doodle' src={doodles2} height={400} width={400} />
            <div className="w-3xl absolute top-2 ">
            <Image
            alt="person"
            src={person2}
            height={400}
            width={400}
            
          />
          </div>
          </div>
          
        </div>
      </div>
      </section>
    
  );
};

export default Aboutme;
