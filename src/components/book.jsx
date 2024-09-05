import React from 'react';
import Image from 'next/image';
import { MdAppRegistration,MdTungsten,MdLocationOn,MdEmail,MdMeetingRoom} from "react-icons/md";
import { FcServices,FcCallback } from "react-icons/fc";
import Link from 'next/link';
const VirtualOfficeSection = () => {
  return (
    <div className="bg-yellow-50 py-10">
      <div className="max-w-[1100px] mx-auto p-6 rounded-xl bg-white shadow-lg grid grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center p-3 md:p-0">
        {/* Left Side Content bg-[url('/book.jpg')]  opacity-20 inset-0  bg-cover bg-center bg-no-repeat p-8  */} 
        <div 
        >
          <h2 className="text-3xl font-bold text-black">
            Book Your Virtual Office <span className="text-yellow-500">with GitinSuri</span>
          </h2>

          {/* Icon Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 ">
            <div className="flex items-center space-x-2 ">
            <MdAppRegistration size={40} color='green'/>
              <span className="text-gray-600 font-medium w-50">Company Registration</span>
            </div>
            <div className="flex items-center space-x-2">
            <MdTungsten size={40} color='orange'/>
              <span className="text-gray-600 font-medium">GST Registration</span>
            </div>
            <div className="flex items-center space-x-2">
            <MdLocationOn size={40} color='red'/>
              <span className="text-gray-600 font-medium">Business Address</span>
            </div>
            <div className="flex items-center space-x-2">
            <MdEmail size={40} color='orange'/>
              <span className="text-gray-600 font-medium">Mailing Address</span>
            </div>
            <div className="flex items-center space-x-2">
            <FcServices size={40}/>
              <span className="text-gray-600 font-medium">Reception Services</span>
            </div>
            <div className="flex items-center space-x-2">
            <MdMeetingRoom size={40} color='brown'/>
              <span className="text-gray-600 font-medium">Meeting Room Access</span>
            </div>
           
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:flex space-x-6 mt-8 text-gray-600">
            <div className="mx-6 md:mx-0 flex items-center space-x-2">
            <FcCallback size={40} />
            <Link href="tel:+919810150047">+919810150047</Link>
            </div>
            <div className="flex items-center space-x-2">
            <MdEmail size={40} color='orange'/>
            <Link href="mailto:gitin@rpgestate.in">gitin@rpgestate.in</Link>
             
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="rounded-xl overflow-hidden bg-[url('/book.jpg')]  opacity-100 inset-0 w-full h-[220px] bg-cover bg-center bg-no-repeat p-8 ">
         
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficeSection;
