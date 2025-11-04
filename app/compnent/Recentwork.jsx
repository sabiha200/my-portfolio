import React from "react";
import frame1 from "../Image/Frame1.png";
import frame2 from "../Image/Frame2.png";
import frame3 from "../Image/Frame3.png";
import Image from "next/image";

const Recentwork = () => {
  return (
    <div className="bg-[url('/Image/doodlesbg.png')] bg-cover bg-center  flex flex-col justify-center items-center py-64 md:py-44">     
        <div className="flex">
          <h1 className=" font-semibold pb-6 text-[#eeeeee] w-auto text-4xl md:text-2xl">
            My recent
            <span className="font-bold text-[#00adb5]"> works</span>
          </h1>
        </div>
        <div className="flex gap-4 md:gap-2 pb-12">
          <div className="bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer w-fit text-[#eeeeee] text-center rounded-xl px-8 md:px-4 py-2.5 md:py-1.5 md:text-sm">
            All
          </div>
          <div className="bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer w-fit text-[#eeeeee] text-center rounded-xl px-8 md:px-4 py-2.5 md:py-1.5 md:text-sm">
            HTML
          </div>
          <div className="bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer w-fit text-[#eeeeee] text-center rounded-xl px-8 md:px-4 py-2.5 md:py-1.5 md:text-sm">
            JS
          </div>
          <div className="bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer w-fit text-[#eeeeee] text-center rounded-xl px-8 md:px-4 py-2.5 md:py-1.5 md:text-sm">
            REACT
          </div>
          <div className="bg-[#393E46] hover:bg-[#00adb5] transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer w-fit text-[#eeeeee] text-center rounded-xl px-8 md:px-4 py-2.5 md:py-1.5 md:text-sm">
            Next.js
          </div>
        </div>
      <div className="flex gap-12 lg:gap-8 md:gap-4">
        <div className="w-2xs md:w-32">
          <Image alt="frame" src={frame1} width={368} height={280} />
        </div>
        <div className="w-2xs md:w-32">
          <Image alt="frame" src={frame2} width={368} height={280} />{" "}
        </div>
        <div className="w-2xs md:w-32">
          <Image alt="frame" src={frame3} width={368} height={280} />
        </div>
      </div>
    </div>
  );
};

export default Recentwork;
