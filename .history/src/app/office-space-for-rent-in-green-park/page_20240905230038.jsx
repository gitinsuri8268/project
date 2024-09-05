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
const page = () => {
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
            onClick={() => handleClick("/p1 (1).png")}
          >
            <Image
              src="/p1 (1).png"
              alt="Building"
              width={500}
              height={300}
              className="rounded-[20px] object-cover w-full h-[42vh] cursor-pointer"
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            <div onClick={() => handleClick("/p1 (2).png")}>
              <Image
                src="/p1 (2).png"
                alt="Office 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/p1 (3).png")}>
              <Image
                src="/p1 (3).png"
                alt="Office 2"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/p1 (4).png")}>
              <Image
                src="/p1 (4).png"
                alt="Cubicles 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/p1 (5).png")}>
              <Image
                src="/p1 (5).png"
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
                        office space
                      </option>
                      <option className="" value="">
                        coworing space
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
              Best Office Space for Rent in Green Park
            </h1>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight
 text-[12px]"
            >
              Are you looking for office space for rent in Green Park, then,
              stay tuned to get the hottest and an excellent office for you in
              Green Park.
            </p>
          </div>

          <div className="py-[15px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">Welcome to Gitin Suri!</h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Gitin Suri is here to assist you find the best coworking office
              space for rent in Green Park without any brokerage. There are
              ample options available for you. Whether you are looking for a
              fully furnished or empty office space, you tell Gitin Suri and we
              will help you find the best office for you in the Green Park
              location.
            </p>
          </div>
          <div className="py-[0px]">
            <h2 className="text-[16px] md:text-[18px] font-bold">
              Let us know more about the Green Park area.
            </h2>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Green Park is one of the most premium suburbs of South Delhi. This
              place has modern facilities and premium residential apartments.
              You will see mainly upper-middle-class people residing in the
              Green Park area in Delhi. Green Park is the main hub with ice
              cream parlours, hotels and a shopping center. Deer Park is famous
              for jogging, ducks, and deer enclosures near Green Park. There are
              small domed structures, Sakri Gumti and Chhoti Gumti near Green
              Park, Delhi. You can work and enjoy the calmness of nature if you
              are looking for a commercial office space for rent in Green Park.
            </p>
          </div>
          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">
              Why Choose Gitin Suri for Coworking office space for rent in Green
              Park? Coliving Spaces on GitinSuri
            </h1>
            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              Gitin Suri is an online marketplace for coworking office space for
              rent in Green Park. Along with coworking office spaces, we have
              conference rooms and meeting rooms too. You will get the best
              coworking office space in the serenity of nature once you choose
              Giti Suri.
            </p>
          </div>
          <div className="py-[5px]">
            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              Whether you are a startup or a small company, Gitin Suri ensures
              to meet your demands. We have a talented team of professionals who
              help you find the best office spaces for you as per your needs.
            </p>
          </div>
          <div className="py-[5px]">
            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              Whether you are a startup or a small company, Gitin Suri ensures
              to meet your demands. We have a talented team of professionals who
              help you find the best office spaces for you as per your needs.
            </p>
          </div>
          <div className="py-[5px]">
            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              Our committed team ensures to discuss with you all your
              requirements first and then offer the best office space for rent
              in Green Park. You will get the best office space of your dreams
              once you choose Gitin Suri! Call Gitin Suri now to find the best
              commercial space for rent in Green Park and get the most appealing
              interior office space for rent at an affordable in Green Park,
              Delhi!
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">FAQ&apos;s</h3>
            <h3 className="text-[16px] md:text-[18px] font-bold">
              Why are coworking office spaces popular in Green Park?
            </h3>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Green Park has greenery and you can work and spend time in nature.
              This is the main reason why coworking office spaces for rent in
              Green Park are popular. Also, Green Park offers networking
              opportunities, world-class facilities and connectivity.
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">
              What are the amenities offered by coworking office spaces for rent
              in Green Park?
            </h3>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              There are different amenities provided by coworking office spaces
              for rent in Green Park including uninterrupted electricity,
              coworking space in the serenity of nature, spacious cabinets,
              Wi-F, high-level security, best infrastructure, parking area, LED
              display lights and much more.
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
