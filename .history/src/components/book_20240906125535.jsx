import React from 'react';
import Image from 'next/image';
import { MdAppRegistration, MdTungsten, MdLocationOn, MdEmail, MdMeetingRoom } from "react-icons/md";
import { FcServices, FcCallback } from "react-icons/fc";
import Link from 'next/link';

const VirtualOfficeSection = () => {
  return (
    <div className="bg-yellow-50 py-10">
      <div className="max-w-[1100px] mx-auto p-6 rounded-xl bg-white shadow-lg grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
        
        {/* Left Side Content */}
        <div>
          <h2 className="text-3xl font-bold text-black">
            Book Your Virtual Office <span className="text-yellow-500">with GitinSuri</span>
          </h2>

          {/* Icon Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <div className="flex items-center space-x-2">
              <MdAppRegistration size={40} className="text-green-500"/>
              <span className="text-gray-700 font-medium">Company Registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdTungsten size={40} className="text-orange-500"/>
              <span className="text-gray-700 font-medium">GST Registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdLocationOn size={40} className="text-red-500"/>
              <span className="text-gray-700 font-medium">Business Address</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail size={40} className="text-orange-500"/>
              <span className="text-gray-700 font-medium">Mailing Address</span>
            </div>
            <div className="flex items-center space-x-2">
              <FcServices size={40}/>
              <span className="text-gray-700 font-medium">Reception Services</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdMeetingRoom size={40} className="text-brown-500"/>
              <span className="text-gray-700 font-medium">Meeting Room Access</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 mt-8 text-gray-700">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FcCallback size={40} />
              <Link href="tel:+919810150047" className="hover:text-yellow-500">+919810150047</Link>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail size={40} className="text-orange-500"/>
              <Link href="mailto:gitin@rpgestate.in" className="hover:text-yellow-500">gitin@rpgestate.in</Link>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg">
          <Image src="/5.png" alt="Virtual Office" layout="fill" objectFit="cover" className="opacity-90"/>
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficeSection;
