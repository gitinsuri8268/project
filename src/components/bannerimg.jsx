import React from 'react'
import Image from 'next/image';
const Imagebanner = () => {
  return (
    <div className=''>
      <div className='md:max-w-[1100px] md:h-[45vh] mx-auto  grid grid-cols-1 p-3 md:grid-cols-3 gap-4  py-[10px] md:py-[30px]'>
        <div className="bg-[url('/cd1.png')] bg-cover bg-center grid items-center opacity-70 rounded-[25px]">
          <div className="opacity-100 text-right p-5">
            <h1 className="font-light text-4xl font-serif ">Coworking</h1>
            <span className="font-serif font-bold text-4xl">Space</span>
          </div>
        </div>
        <div className="bg-[url('/cd2.png')] bg-cover bg-center grid items-center opacity-60 rounded-[25px]">
          <div className="opacity-100 text-right p-5">
            <h1 className="font-light text-4xl font-serif ">Coworking</h1>
            <span className="font-serif font-bold text-4xl">Space</span>
          </div>
        </div>
       
        <div className="bg-[url('/cd3.png')] bg-cover bg-center grid items-center opacity-70 rounded-[25px]">
          <div className="opacity-100 text-right p-5">
            <h1 className="font-light text-4xl font-serif ">Coworking</h1>
            <span className="font-serif font-bold text-4xl">Space</span>
          </div>
        </div>
        <div className="bg-[url('/cd4.png')] bg-cover bg-center grid items-center opacity-80 rounded-[25px]">
          <div className="opacity-100 text-right p-5">
            <h1 className="font-light text-4xl font-serif ">Coworking</h1>
            <span className="font-serif font-bold text-4xl">Space</span>
          </div>
        </div>
        <div className="bg-[url('/cd5.png')] bg-cover bg-center grid items-center opacity-80 rounded-[25px]">
          <div className="opacity-100 text-right p-5">
            <h1 className="font-light text-4xl font-serif ">Coworking</h1>
            <span className="font-serif font-bold text-4xl">Space</span>
          </div>
        </div>
        <div className="bg-[url('/cd6.png')] bg-cover bg-center grid items-center opacity-70 rounded-[25px]">
        <div className=" rounded-xl">
          <div className="opacity-100 text-right p-5">
            <h1 className="font-light text-4xl font-serif ">Coworking</h1>
            <span className="font-serif font-bold text-4xl">Space</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Imagebanner;
