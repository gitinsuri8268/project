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
const officespaceforrentinvasantvihar = () => {
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
            onClick={() => handleClick("/a1.png")}
          >
            <Image
              src="/a1.png"
              alt="Building"
              width={500}
              height={300}
              className="rounded-[20px] object-cover w-full h-[42vh] cursor-pointer"
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-3">
            <div onClick={() => handleClick("/a2.png")}>
              <Image
                src="/a2.png"
                alt="Office 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/a3.png")}>
              <Image
                src="/a3.png"
                alt="Office 2"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/a4.png")}>
              <Image
                src="/a4.png"
                alt="Cubicles 1"
                width={250}
                height={150}
                className="rounded-[20px] object-cover w-full h-[20vh] cursor-pointer"
              />
            </div>
            <div onClick={() => handleClick("/a5.png")}>
              <Image
                src="/a5.png"
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
              Explore An Amazing Commerical Office Space for Rent in Vasant
              Vihar
            </h1>
            <p
              className="py-[5px] leading-relaxed
 font-light tracking-tight
 text-[12px]"
            >
              Do you wish to make your fortune by having an office in Vasant
              Vihar, the perfect space for your company in Delhi? Vasant Vihar
              is the premium area to start your company in Delhi. There are
              luxurious office spaces for rent in Vasant Vihar. Vasant Vihar
              provides unique offerings that make it special for businesses to
              have a coworking space in Vasant Vihar. Collaborate, Network and
              Grow with commercial office space in Vasant Vihar, Delhi where
              culture comes together. You can increase your productivity once
              you choose a coworking office space for rent in Vasant Vihar.
              Gitin Suri your one-stop-destination for all your coworking office
              space is here to assist you with the best amenities, appealing
              interior and a dream office space to start your brand!
            </p>
          </div>

          <div className="py-[15px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">About Vasant Vihar</h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Vasant Vihar is a luxurious and posh area in Delhi. Vasant Vihar
              is a highly diplomatic area that includes the Embassy of
              Argentina. It is near to Indira Gandhi International Airport.
              Vasant Vihar is popular for coworking spaces, the world&lsquo;s largest
              restaurants and shopping centers. Vasant Vihar has many parks and
              is mainly composed of senior government diplomats, and wealthy
              business owners that contribute to the status as one of Delhi&lsquo;s
              most premium locations. If you are planning for commercial office
              space for rent in Vasant Vihar, this would be the smartest
              decision that you will never regret in your life.
            </p>
          </div>
          <div className="py-[15px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">About Vasant Vihar</h1>
            <p className="py-[5px] font-light text-[12px] leading-relaxed ">
              Vasant Vihar has several parks in every block. Vasant Vihar is
              composed of Government diplomats, business owners and wealthy
              people who contribute to the status as one of Delhi&lsquo;s most premium
              neighborhood.
            </p>
          </div>
          <div className="py-[0px]">
            <h2 className="text-[16px] md:text-[18px] font-bold">
              Why Choose Gitin Suri for Commerical Office Space for rent in
              Vasant Vihar?
            </h2>
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Gitin Suir provides the most astonishing commercial office space
              for rent in Vasant Vihar. Gitin Suri is an online platform where
              you can compare the best office spaces for rent in Vasant Vihar by
              comparing the amenities, connectivity and reviews of our elegant
              customers. Gitin Suri ensures to fulfil the requirements of our
              customers with well-equipped office space for rent in Vasant
              Vihar. Whether you are a freelancer in, a small or medium-sized
              company, we ensure to provide the best coworking space that caters
              for your needs.
            </p>
          </div>
          <div className="py-[0px]">
            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              Choosing Gitin Suri to find you the best office space for rent in
              Vasant Vihar is the smartest decision that you will make. We at
              Gitin Suri ensure to provide smooth operations, amazing networking
              opportunities and the best customer support to our premium
              clients. Gitin Suri welcomes you to a highly productive
              environment where your dreams of having a dedicated space and
              private cabin come into reality in Vasant Vihar. For more details,
              connect with Gitin Suri now!
            </p>
          </div>
          <div className="py-[5px]">
            <h1 className="text-[16px] md:text-[18px] font-bold">FAQ’s</h1>
            <h1 className="text-[16px] md:text-[18px] font-bold">
              Who prefers coworking spaces for rent in Vasant Vihar, Delhi?
            </h1>
            <p className="py-[2px] font-light text-[12px] leading-relaxed">
              From entertainment, beauty, HR and consultation, IT companies,
              fashion, and real estate every industry prefers coworking spaces
              for rent in Vasant Vihar, Delhi.
            </p>
          </div>

          <div className="py-[5px]">
            <h3 className="text-[16px] md:text-[18px] font-bold">
              What are the benefits of having commercial office space for rent
              in Vasant Vihar, Delhi?
            </h3>

            <p className="py-[5px] font-light text-[12px] leading-relaxed">
              The perks of having commercial office space for rent in Vasant
              Vihar, Delhi are networking opportunities, an increase in
              creativity, smooth operations, better flexibility and discounts.
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
