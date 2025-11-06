import React from "react";
import { GoHome } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-40 md:py-32">
      <div className="text-[#eeeeee] flex justify-center gap-12 ">
        <div className="flex gap-2 justify-center items-center transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
          <GoHome /> <div>Home</div>
        </div>
        <div className="flex gap-2 justify-center items-center transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
          <BsFillPersonFill /> <div>About me</div>
        </div>
        <div className="flex gap-2 justify-center items-center transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
          <FaPhoneAlt /> <div>Contact</div>
        </div>
      </div>
      <div className="text-[#eeeeee] flex justify-center gap-10 pt-7 ">
        <div className="text-xl transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"><Link href={'https://www.facebook.com/profile.php?id=61567994706396'}><FaFacebook /></Link></div>
        <div className="text-xl transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"><Link href={'https://www.instagram.com/call_mee_prity/?hl=en'}> <GrInstagram /> </Link></div>
        <div className="text-xl transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"><Link href={'https://www.linkedin.com/in/sabiha-jahan-prity-149a81321/'}><BsLinkedin /></Link></div>
        <div className="text-xl transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"><Link href={'https://github.com/sabiha200'}><RiGithubLine /></Link></div>
      </div>
    </div>
  );
};

export default Footer;
