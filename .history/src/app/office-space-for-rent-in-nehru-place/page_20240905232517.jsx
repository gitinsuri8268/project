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
const officespaceforrentinnehruplace = () => {
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
            onClick={() => handleClick("/b5.png")}
          >
            <Image
              src="/b5.png"
              alt="Building"
              width={500}
              height={300}
              className="rounded-[20px] object-cover w-full h-[42vh] cursor-pointer"
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            <div onClick={() => handleClick("/b1.png")}>
              <Image
                src="/b1.png"
                alt="Office 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/b2.png")}>
              <Image
                src="/b2.png"
                alt="Office 2"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/b3.png")}>
              <Image
                src="/b3.png"
                alt="Cubicles 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/b4.png")}>
              <Image
                src="/b4.png"
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
              Coworking office space for rent in Nehru Place
            </h1>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight6
 text-[12px]"
            >
              Are you looking for a commercial office space for rent in Nehru
              Place? Your search has ended in Gitin Suri as we provide
              commercial office space in Nehru Place with top-notch facilities.
            </p>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight6
 text-[12px]"
            >
              You can get a range of options to choose from for your office
              space for rent in Nehru Place. These workspaces have the best
              facilities including conference rooms, housekeeping service, air
              conditioning, a parking facility, a high level of security,
              top-notch Wi-Fi speed, an open pantry and much more. You will be
              happy and would love your office space once you see it.
            </p>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight6
 text-[12px]"
            >
              Nehru Place as the name goes is named after the first Prime
              Minister of India, Jawaharlal Nehru. Nehru Place in Delhi has
              direct access to the rest of Delhi, which gives excellent
              connectivity. There are many food outlets, retail stores, cafes
              and restaurants in Nehru Place. You can also get public
              transportation easily in Nehru Place. You can also choose a
              coworking place for an hour, day, week or month as per your
              convenience on rent in Nehru Place. Gitin Suri offers an exclusive
              coworking office space for rent in Nehru Place!
            </p>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight6
 text-[12px]"
            >
              Nehru Place is a technology hub and this is the perfect place to
              have your office space. If you are looking for good opportunities,
              and a good company culture for your business then Nehru Place is
              your choice!
            </p>
          </div>

          <div className="py-[15px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">
              Why Choose Gitin Suri for Commerical Office Space for Rent in
              Nehru Place?
            </h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Gitin Suri is a brand that offers coworking office space for rent
              in Nehru Place, Delhi. With aesthetically attractive office spaces
              and advanced technical amenities, we provide luxurious office
              spaces for rent in Nehru Place. Apart from offices, you may choose
              from a range of options according to your budget. We also have
              conference and training rooms.
            </p>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              In Gitin Suri office spaces in Nehru Place, you get a coffee
              vending machine, LED display and all the modern amenities. With a
              positive environment and the best office spaces for rent, you can
              focus on your work and get the desired results to grow your
              business. Once you choose Gitin Suri, you get access to a
              flexible, effective and hassle-free environment to expand your
              business. If you are planning to start your business and looking
              for an office space for rent in Nehru Place, call Gitin Suri right
              away!
            </p>
          </div>
          <div className="py-[15px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">FAQ&apos;s</h1>
            <h1 className="text-[16px] md:text-[18px] font-bold">
              What are the prices of dedicated desks, hot desks and private
              cabins of commercial office space for rent in Nehru Place?
            </h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Dedicated desks cost Rs 6500 per seat, private cabins Rs 6500 per
              seat and hot desks start from Rs 6000 per seat.
            </p>
          </div>
          <div className="py-[0px]">
            <h2 className="text-[18px] font-bold">
              Why do individuals choose Nehru office space for rent in Nehru
              Place, Delhi?
            </h2>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Office space for rent in Nehru Place is favoured because of its
              infrastructure, astonishing interior, flexibility and community
              access, top-notch amenities and good culture.
            </p>
          </div>
          <div className="py-[0px]">
            <h2 className="text-[18px] font-bold">
              What are the amenities offered by commercial office space for rent
              in Nehru Place?
            </h2>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              The amenities are a parking area, cleaning services, a
              well-equipped office with modern furniture and a water supply for
              24 hours.
            </p>
          </div>
          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">
              What is the rent of coworking office space for rent in Nehru
              Place?
            </h1>
            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              Rent of coworking office space for rent in Nehru Place starts at
              Rs 300 every day.
            </p>
          </div>
        </div>
      </div>
      <Textsocial />
      <Footer />
    </>
  );
};

export default OfficespaceForRentInNehruplace;
