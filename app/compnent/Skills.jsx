import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Skills = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="font-semibold pb-12 text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl text-[#eeeeee]">
          My
          <span className="font-bold text-[#00adb5]"> Skills</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center p-2.5 gap-6 text-[#eeeeee] xl:text-2xl">
        <div className="bg-[#393E46] rounded-xl flex justify-between p-12 w-xl h-96 transition-transform duration-200 ease-in-out hover:scale-105 shadow-2xs">
          <div className="flex-col p-3.5">
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> HTML
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Experienced</p>
            </div>
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> Bootstrap
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Experienced</p>
            </div>
             <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> Javascript
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Intermediate</p>
            </div>
          </div>
          <div className="flex-col p-3.5">
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> CSS
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Experienced</p>
            </div>
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> Tailwind
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Experienced</p>
            </div>
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> React
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Experienced</p>
            </div>
          </div>
        </div>
        <div className="bg-[#393E46] rounded-xl flex justify-between p-12 w-xl h-96 transition-transform duration-200 ease-in-out hover:scale-105 shadow-2xs">
          <div className="flex-col p-3.5">
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> Git
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Intermediate</p>
            </div>
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> VS Code
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Experienced</p>
            </div>
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> NextJs
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Intermediate</p>
            </div>
          </div>
          <div className="flex-col p-3.5">
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill />GitHub
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Intermediate</p>
            </div>
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> Figma
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Tailwind</p>
            </div>
            <div className="p-2.5" >
              <div className="flex gap-3">
                <RiVerifiedBadgeFill /> Firebase
              </div>
              <p className="pl-8 font-normal text-gray-400 text-lg">Basic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
