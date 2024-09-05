"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GiMoneyStack } from "react-icons/gi";
import { FaChartArea } from "react-icons/fa";
import { IoCloudDone } from "react-icons/io5";
import { TbHomeMove } from "react-icons/tb";
import { BsFillEasel2Fill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSolidCctv } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import { GiFloorPolisher } from "react-icons/gi";
import { GiSecurityGate } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import {
  MdOutlineCellWifi,
  MdElectricBike,
  MdOutlineSecurity,
} from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { BsBatteryCharging } from "react-icons/bs";
import { RiHomeOfficeFill } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Textsocial from "@/components/textsocial";

import React, { useState } from 'react';
const officespaceforrentinokhlaesta = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen py-[100px]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <div
            className="lg:col-span-2"
            onClick={() => handleClick("/z1.png")}
          >
            <Image
              src="/z1.png"
              alt="Building"
              width={500}
              height={300}
              className="rounded-[20px] object-cover w-full h-[42vh] cursor-pointer"
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            <div onClick={() => handleClick("/z2.png")}>
              <Image
                src="/z2.png"
                alt="Office 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/z3.png")}>
              <Image
                src="/z3.png"
                alt="Office 2"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/z4.png")}>
              <Image
                src="/z4.png"
                alt="Cubicles 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/z5.png")}>
              <Image
                src="/z5.png"
                alt="Cubicles 2"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
          </div>
        </div>
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative">
              <Image
                src={selectedImage}
                width={800}
                height={800}
                alt="Selected Image"
              />
              <button
                onClick={handleClose}
                className="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-full"
              >
                X
              </button>
            </div>
          </div>
        )}

        <div className="max-w-[1400px]  grid grid grid-cols-2 md:grid-cols-5 mx-auto py-[40px] md:py-[30px] ">
          <div>
            <div className=" flex gap-2">
              <GiMoneyStack size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Rent <br /> <p className="text-[14px]">₹2,2,000</p>
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <GiFloorPolisher size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}

              <span className="grid items-center  text-[12px] font-light">
                Floor <br /> <p className="text-[14px]">2</p>
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <FaMoneyBillTrendUp size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Value for Money
              </span>
            </div>

            <div className=" flex gap-2 pt-[20px]">
              <MdElectricBike size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Bike Parking
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <MdOutlineCellWifi size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Wi Fi
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <RiHomeOfficeFill size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Reception
              </span>
            </div>
          </div>

          <div>
            <div className=" flex gap-2">
              <FaChartArea size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center text-[12px] font-light">
                Area <br />
                <p className="text-[14px]">1,500 Sq. Ft.</p>
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <GiSecurityGate size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Security Deposit <br /> <p className="text-[14px]">2</p>
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <BsFillEasel2Fill size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Flexible Lease
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <TbAirConditioning size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Air Conditioning
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <FaCar size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                Parking
              </span>
            </div>
            <div className=" flex gap-2 pt-[20px]">
              <MdOutlineSecurity size={40} color="orange" />
              {/* style={{ width: '50px', height: '50px' }} */}
              <span className="grid items-center  text-[12px] font-light">
                24x7 Security
              </span>
            </div>
          </div>
          <div>
            <div className="hidden md:block py-[30px] md:py-[0px]  col-span-2 md:col-span-1">
              <div className=" flex gap-2 X">
                <IoCloudDone size={40} color="orange" />
                {/* style={{ width: '50px', height: '50px' }} */}
                <span className="grid items-center text-[12px] font-light">
                  Status <br className="text-[16px]" /> fully-furnished
                </span>
              </div>
              <div className=" flex gap-2 pt-[20px]">
                <GrVmMaintenance size={40} color="orange" />
                {/* style={{ width: '50px', height: '50px' }} */}
                <span className="grid items-center  text-[12px] font-light">
                  Maintenance <br />
                  <p>yes</p>
                </span>
              </div>
              <div className=" flex gap-2 pt-[20px]">
                <TbHomeMove size={40} color="orange" />
                {/* style={{ width: '50px', height: '50px' }} */}
                <span className="grid items-center  text-[12px] font-light">
                  Ready To Move
                </span>
              </div>
              <div className=" flex gap-2 pt-[20px] ">
                <BiSolidCctv size={40} color="orange" />
                {/* style={{ width: '50px', height: '50px' }} */}
                <span className="grid items-center  text-[12px] font-light">
                  CCTV
                </span>
              </div>
              <div className=" flex gap-2 pt-[20px]">
                <BsBatteryCharging size={40} color="orange" />
                {/* style={{ width: '50px', height: '50px' }} */}
                <span className="grid items-center  text-[12px] font-light">
                  Power Backup
                </span>
              </div>
              <div className=" flex gap-2 pt-[20px]">
                <IoCheckmarkDoneCircle size={40} color="green" />
                {/* style={{ width: '50px', height: '50px' }} */}
                <span className="grid items-center  text-[12px] font-light">
                  Fully Furnished
                </span>
              </div>
            </div>
          </div>
          {/* mobile view */}

          <div className="grid md:hidden col-span-2 grid grid-cols-2 gap-2 items-center justify-center   py-[30px]">
            <div className="flex gap-2">
              <IoCheckmarkDoneCircle size={40} color="orange" />
              <span className="grid items-center text-[12px] font-light">
                Status <br /> fully-furnished
              </span>
            </div>
            <div className="flex gap-2 pt-[20px]">
              <GrVmMaintenance size={40} color="orange" />
              <span className="grid items-center text-[12px] font-light">
                Maintenance <br />
                <p>yes</p>
              </span>
            </div>
            <div className="flex gap-2 pt-[20px]">
              <TbHomeMove size={40} color="orange" />
              <span className="grid items-center text-[12px] font-light">
                Ready To Move
              </span>
            </div>
            <div className="flex gap-2 pt-[20px]">
              <BiSolidCctv size={40} color="orange" />
              <span className="grid items-center text-[12px] font-light">
                CCTV
              </span>
            </div>
            <div className="flex gap-2 pt-[20px]">
              <BsBatteryCharging size={40} color="orange" />
              <span className="grid items-center text-[12px] font-light">
                Power Backup
              </span>
            </div>
            <div className="flex gap-2 pt-[20px]">
              <IoCheckmarkDoneCircle size={40} color="orange" />
              <span className="grid items-center text-[12px] font-light">
                Fully Furnished
              </span>
            </div>
          </div>

          <div className=" bg-[rgb(250,248,254)] hidden md:grid md:w-[560px] p-4 h-[30vh] md:h-[50vh]  items-center justify-center py-[30px]">
            <span>Yes i&apos;am Interested</span>
            <form action="">
              <div className="md:py-[3px]">
                <input
                  className="p-2 w-auto md:w-[480px] m-1  border border-white shadow-lg rounded-lg"
                  type="text"
                  placeholder="name"
                />
              </div>
              <div className="py-[3px]">
                <input
                  className="p-2  w-auto md:w-[480px] m-1 border border-white shadow-lg rounded-lg"
                  type="tel"
                  placeholder="phone"
                />
              </div>
              <div className="py-[3px]">
                <input
                  className="border border-white shadow-lg rounded-lg p-2 w-auto md:w-[480px] m-1"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="py-[3px]">
                <div className="grid grid-cols-2 m-1 items-center">
                  <div className="">
                    <select
                      className="border w-auto md:w-[240px] border-white shadow-lg rounded-lg"
                      name=""
                      id=""
                    >
                      <option className="" value="">
                        select
                      </option>
                      <option className="" value="">
                        select
                      </option>
                      <option className="" value="">
                        select
                      </option>
                      <option className="" value="">
                        select
                      </option>
                    </select>
                  </div>
                  <div className="py-[3px]">
                    <select
                      className="border w-auto md:w-[240px] border-white shadow-lg rounded-lg"
                      name=""
                      id=""
                    >
                      <option className="" value="">
                        select
                      </option>
                      <option className="" value="">
                        select
                      </option>
                      <option className="" value="">
                        select
                      </option>
                      <option className="" value="">
                        select
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="w-auto md:w-[480px] m-2 border border-blue-400 hover:bg-sky-400 p-3 grid text-center items-center justify-center py-[10px]">
                <button className="bg-transparent ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Content /> */}
      <div>
        <div className="max-w-[1100px] mx-auto text-justify py-[20px] p-2 md:p-0">
          <div className="grid  py-[5px] ">
            <h1 className="font-serif text-[16px] md:text-[18px] font-bold">
              Explore the Best Coworking office space for rent in Saket
            </h1>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight
 text-[12px]"
            >
              Planning to start your own business? Gitin Suri can assist you!
              Gitin Suri has the best office space for rent in Saket, Delhi with
              world-class facilities and interiors. Having a commercial office
              space for rent in Saket is a dream of many individuals and it is
              now possible with Gitin Suri. Whether you are a small business
              owner or a well-established company, as you come closer to your
              goals having a space to accommodate your team members is a must.
              Here is where Gitin Suri comes to the rescue. You can find
              commercial office space for rent in Saket with our talented team
              of professionals.
            </p>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight
 text-[12px]"
            >
              Explore the stunning work areas in Saket, Delhi providing a range
              of seating options such as hot desks, virtual offices, dedicated
              desks, cabins and much more. You will get the dream office space
              of your choice. Within Saket, you can get cost-effective options
              for coworking office space for rent in Saket, Delhi. Also, you get
              access to hassle-free commutation once you choose Saket location
              for your office. You will get additional facilities with Gitin
              Suri.
            </p>
          </div>

          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">About Saket</h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Saket is a residential area in South Delhi. You can get access to
              pubs, hotels, cafes and restaurants in Saket. Choosing an office
              space for rent in Saket is the smartest choice you will make. You
              don&apos;t have to worry about transportation as Saket offers better
              flexibility and connectivity. It is named after the Ayodhya city
              of Uttar Pradesh.
            </p>
          </div>
          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">
              Why Choose Gitin Suri for Coworking Space for Rent in Saket,
              Delhi?
            </h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Coworking spaces for rent in Saket provide a collaborative
              atmosphere for young and vibrant business individuals. It allows
              professionals from different industries to network and grow in
              their careers. Here are the reasons why you must consider choosing
              commercial office space for rent in Saket, Delhi:
            </p>
          </div>
          <div className="py-[0px]">
            <h2 className="text-[16px] md:text-[18px] font-bold">Breakout Zones</h2>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              A place to relax with professionals, the breakout zone provides
              new networking opportunities for businesses
            </p>
          </div>

          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">High-Speed Internet</h1>

            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              Fast and good internet speed keeps work uninterrupted and
              communication easy.
            </p>
          </div>

          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">Meeting Rooms</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Good meeting rooms create the best and most unique space that
              boosts creativity among professionals and promotes talent.
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[18px] font-bold">
              Amenities provided for Coworking office space for rent in Saket
            </h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Coworking office space for rent in Saket offers a range of
              facilities that keep professionals inspired to do their work:
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">Infrastructure</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Well-developed infrastructure that includes bus station and Saket
              Metro station helps professionals to travel hassle-free to their
              work
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">Infrastructure</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Well-developed infrastructure that includes bus station and Saket
              Metro station helps professionals to travel hassle-free to their
              work
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">Connectivity</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Saket offers excellent connectivity to young and vibrant
              professionals which makes it a prime location for you to choose
              your office space in Saket on rent.
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">Range of Working Spaces</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              There are many options of coworking spaces in Saket that allow you
              to choose a coworking space in Saket as per your budget and needs
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">Business Hub</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              There are startups and companies in Saket that provide good
              networking opportunities for businesses
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">FAQ&apos;s</h3>
            <h3 className="text-[16px] md:text-[18px] font-bold">
              What are the types of coworking spaces for rent in Saket?
            </h3>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              You will find three types of coworking spaces for rent in Saket
              including private cabins, dedicated desks and managed office
              spaces for rent in Saket. Each type of office space promotes
              productivity and offers diverse working styles.
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[18px] font-bold">
              What Are the Facilities offered at Coworking Spaces for rent in
              Saket, Delhi?
            </h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Coworking spaces for rent in Saket, Delhi provide a range of
              facilities that provide comfort and productivity including meeting
              rooms, high-speed internet and scanning amenities and 24-hour
              access.
            </p>
          </div>
        </div>
      </div>
      <Textsocial />
      <Footer />
    </>
  );
};

export default page;
