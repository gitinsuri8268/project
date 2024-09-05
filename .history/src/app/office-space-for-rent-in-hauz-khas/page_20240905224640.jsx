"use client";
import React from "react";
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
            onClick={() => handleClick("/f1.png")}
          >
            <Image
              src="/f1.png"
              alt="Building"
              width={500}
              height={300}
              className="rounded-[20px] object-cover w-full h-[42vh] cursor-pointer"
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            <div onClick={() => handleClick("/f2.png")}>
              <Image
                src="/f2.png"
                alt="Office 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/f3.png")}>
              <Image
                src="/f3.png"
                alt="Office 2"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/f4.png")}>
              <Image
                src="/f4.png"
                alt="Cubicles 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/f5.png")}>
              <Image
                src="/f5.png"
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
            <span>Yes i&lsquo;am Interested</span>
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
              Get An Astonishing Coworking office space for rent in Hauz Khas
            </h1>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight
 text-[12px]"
            >
              Do you spend money in cafes and work sipping a coffee in Hauz
              Khas? You should invest in an office space for rent in Hauz Khas
              that will help you boost your creativity and save your cafe bills.
              South Delhi is a perfect spot for a commercial space for you. Hauz
              Khas has many advantages for freelancers, start-ups, small
              businesses, and young professionals offering modern amenities,
              cost-effectiveness and better flexibility.
            </p>
            <p
                className="py-[5px] leading-relaxed
 font-light tracking-tight
 text-[12px]"
              >
                You should consider different factors when choosing a coworking
                space for rent in Hauz Khas, Delhi that includes facilities,
                area, culture and prices. You also get hourly, weekly, and
                yearly options for your coworking space on rent. You can connect
                with like-minded young professionals once you rent a commercial
                office space in Hauz Khas.
              </p>
          </div>
         
          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">About Hauz Khas</h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Hauz Khas is a residential area in South Delhi that has cafes,
              shopping centres, pubs, and hotels. Hauz Khas is home to many
              diplomatic missions including Iraq, Burundi and Albania. It
              attracts not only domestic but also international tourists due to
              the best cafes and pubs in Hauz Khas. Hauz Khas offers the best
              connectivity to the office hubs of Noida, Connaught Place and
              Gurgaon, Delhi. Having an office space for rent in Hauz Khas is a
              dream for many businesses.
            </p>
          </div>
          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">
              Conveys a Professional Image
            </h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Having a commercial office space for rent in Hauz Khas offers you
              a home base where you can impress your clients and show a
              remarkable professional image to your prospects. You can create an
              amazing work environment as per your choice and increase your
              productivity once you have an office space in Hauz Khas. Gitin
              Suri is an online platform for finding the best coworking office
              space for rent in Hauz Khas.
            </p>
          </div>
          <div className="py-[0px]">
            <h2 className="text-[16px] md:text-[18px] font-bold">
              Why Choose Gitin Suri for Commercial Office Space for Rent in Hauz
              Khas?
            </h2>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Gitin Suri is a learning platform to provides the best coworking
              office space for rent in Hauz Khas. Here are the advantages of
              choosing Gitin Suri that includes:
            </p>
          </div>

          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">Affordable Pricing</h1>

            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              Gitin Suri provides affordable pricing for commercial spaces for
              rent in Hauz Khas, Delhi.
            </p>
          </div>

          <div className="py-[5px]">
            <h3 className="text-[18px] font-bold">Quick Booking Process</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Gitin Suri makes it simple for brands to book coworking spaces for
              rent in Hauz Khas, Delhi.
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">Wide Range of Options</h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Gitin Suri provides you with a wide range of office space options
              in Hauz Khas, Delhi. You can choose an office space area as per
              your needs.
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">FAQs</h3>
            <h3 className="text-[16px] md:text-[18px] font-bold">
              Why do businesses choose coworking office space for rent in Hauz
              Khas?
            </h3>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Due to efficient transportation, amazing amenities, metro station,
              better flexibility and connectivity businesses choose coworking
              office space for rent in Hauz Khas.
            </p>
          </div>
          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">
              Can I hire an office space for rent in Hauz Khas for a day?
            </h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Renting an office space in Hauz Khas for a day or an hour is
              possible with Gitin Suri's competitive and flexible pricing. An
              online booking option is also available at Gitin Suri. You can
              call Gitin Suri an online platform for coworking office space for
              rent in Hauz Khas.
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
