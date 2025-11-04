import React from "react";
import { GoHome } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { LuYoutube } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="py-40 md:py-32">
      <div className="text-[#eeeeee] flex justify-center gap-12 ">
        <div className="flex gap-2 justify-center items-center">
          <GoHome /> <div>Home</div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <BsFillPersonFill /> <div>About me</div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <FaPhoneAlt /> <div>Contact</div>
        </div>
      </div>
      <div className="text-[#eeeeee] flex justify-center gap-10 pt-7 ">
        <div className="text-xl"><FaFacebook /></div>
        <div className="text-xl"><GrInstagram /></div>
        <div className="text-xl"><BsLinkedin /></div>
        <div className="text-xl"><LuYoutube /></div>
      </div>
    </div>
  );
};

export default Footer;
