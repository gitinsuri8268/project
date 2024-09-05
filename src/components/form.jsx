import React from 'react';
import Image from 'next/image';
const PropertyForm = () => {
  return (
    <div className="flex justify-center items-center bg-white py-[10px]">
      <div className="max-w-[1100px] w-full bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center p-8">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Let us find your perfect Property
          </h2>
          <p className="text-gray-500 mb-6">Connect to a GitinSuri Space Expert now</p>
          
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="p-3 border border-slate-200  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email*"
              className="p-3 border border-slate-200 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className=" md:flex border-slate-200  col-span-2  md:col-span-1 items-center">
              <select className='hidden md:border-slate-200 '
                defaultValue="+91"
              >
                <option value="+91" className='' >+91</option>
               
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                placeholder="Phone*"
                className="p-3 border-slate-200  bg-transparent border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <select
              className="p-3 border border-slate-200  bg-transparent rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-100"
            >
              <option>Type Of Space</option>
              <option>Office Space</option>
              <option>Coworking Space</option>
              {/* Add more space types as needed */}
            </select>
            <select
              className="p-3 border border-slate-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option>Select City*</option>
              <option>South Delhi</option>
              <option>Gurgaon</option>
              {/* Add more cities as needed */}
            </select>
            <button
              type="submit"
              className="col-span-2 md:col-span-1 p-3  bg-yellow-400 rounded-lg text-white font-semibold hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="hidden md:block md:w-1/3 ml-8">
          <div className="mx-20 w-78 h-48 rounded-full overflow-hidden border-4 border-gray-200">
            <Image
              src="/22.png" // Replace with your image path
              width={500}
              height={500}
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;

