import Link from "next/link";
import React from "react";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import Image from "next/image";
const FooterSection = () => {
  return (
    <div className="bg-[#ffc107] w-full">
      <div className="max-w-[1100px] h-[50vh] md:h-[40vh] mx-auto grid grid grid-cols-1 md:grid-cols-2 gap-4 py-[5px] md:py-[100px] p-2 md:p-0">
        <div className="bg-[#ffc107] grid  text-justify text-[12px] font-light ">
          <Image src="/logo2.JPEG" width={80} height={80} className="pb-4 " />
          <p>
            Gitin Suri is not just a brand, it is a revolution in the working
            space domain. We are not just pedestrian office providers. It’s a
            collaborative space that we have built with passion. However, we are
            convinced that every business is a big universe and we sell or rent
            spaces adapted to the level of uniqueness and complexity of yours.
            We provide businesses the place to prove themselves and thrive. We
            are versatile and energetic to provide a workspace that is unique
            and dynamic. Welcome to Gitin Suri, let’s redefine workspaces,
            together.
          </p>
        </div>
        <div className="bg-[#ffc107] grid text-[12px] ">
          <span className="grid text-justify font-bold">Marketing Plans</span>
          <ul className="text-[12px] ">
            <li className="py-[5px]">
              <Link href="#">Coworking Space Marketing Plans</Link>
            </li>
            <li className="py-[5px]">
              <Link href="#">Office Space Marketing Plans</Link>
            </li>
          </ul>
          <div className="py-[10px] text-[12px] font-bold">
            <span>free connect with us</span>
          </div>
          <div className="flex gap-4  text-[12px] font-bold">
            <div className="flex items-center space-x-2">
              <span>
                <MdPhoneInTalk size={18} />
              </span>
              <Link href="tel:+919810150047" className="font-light">
                +919810150047
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <MdEmail size={18} />
              </span>
              <Link href="mailto:gitin@rpgestate.in" className="font-light">
                {" "}
                gitin@rpgestate.in
              </Link>
            </div>
          </div>
          <div className="flex gap-4 py-[10px]">
            <div>
              <Link href="">
                <CiFacebook size={23} color="blue" />
              </Link>
            </div>
            <div>
              <Link href="">
                <FaYoutube size={23} color="red" />
              </Link>
            </div>
            <div>
              <Link href="">
                <FaLinkedin size={23} color="blue" />
              </Link>
            </div>
            <div>
              <Link href="">
                <FaSquareInstagram size={23} color="rgb(253 36 76)" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
