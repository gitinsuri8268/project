"use client"
import React from 'react';
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import Image from 'next/image';
// import "./styles.css";
const Coworkingoffice = () => {
  return (
    <div className='bg-[#f8f9f] p-0'>
      <div className='py-[10px] md:max-w-[1100px] mx-auto p-3 md:p-0  '>
        <div className='text-xl  md:m-0  '>
          <h1 className='grid  items-center text-center  text-[18px] font-medium py-[15px] md:my-[20px]'> Office Space</h1>
          <Swiper watchSlidesProgress={true}
            slidesPerView={4}
            spaceBetween={10}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            breakpoints={{
              // when window width is >= 320px
              320: {
                padding: "20px",
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="mySwiper" >
            {/* <SwiperSlide>
        <Image
      src="/banner1.jpg"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }} // optional
    />
        </SwiperSlide> */}
        
            <SwiperSlide>
            <div className="relative w-full h-[28vh]  rounded-[20px]  overflow-hidden">
              <Image  className=" absolute inset-0" width={0} height={0}
                sizes="100vw"
                style={{ width: '100%', height: '28vh' }} src="/13.png" 
                   alt="Gurugram Millennium City"
                  objectFit="cover"
                
                />
                
                
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end hover:items-center justify-center transition-all duration-300 ease-in-out">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-semibold">Lajpat Nagar</h2>
                    <p className="text-sm">Delhi</p>
                  </div>
                </div>
              
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative w-full h-[28vh] rounded-[20px]  overflow-hidden">
              <Image className=" absolute inset-0" width={0} height={0}
                sizes="100vw"
                style={{ width: '100%', height: '28vh' }} src="/14.png" 
                    alt="Gurugram Millennium City"
                  objectFit="cover"
                />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end hover:items-center justify-center transition-all duration-300 ease-in-out">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-semibold">Nehru Place</h2>
                    <p className="text-sm">Delhi</p>
                  </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative w-full h-[28vh] rounded-[20px]  overflow-hidden">
              <Image className=" absolute inset-0" width={0} height={0}
                sizes="100vw"
                style={{ width: '100%', height: '28vh' }} src="/15.png" 
                 alt="Gurugram Millennium City"
                  objectFit="cover"
                
                />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end hover:items-center justify-center transition-all duration-300 ease-in-out">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-semibold">Green Park</h2>
                    <p className="text-sm">Delhi</p>
                  </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative w-full h-[28vh] rounded-[20px]  overflow-hidden">
              <Image className=" absolute inset-0" width={0} height={0}
                sizes="100vw"
                style={{ width: '100%', height: '28vh' }} src="/16.png"
                alt="Gurugram Millennium City"
                  objectFit="cover"
                />
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end hover:items-center justify-center transition-all duration-300 ease-in-out">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-semibold">Vasant vihar</h2>
                    <p className="text-sm">Delhi</p>
                  </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="relative w-full h-[28vh] rounded-[20px]  overflow-hidden">
              <Image className=" absolute inset-0" width={0} height={0}
                sizes="100vw"
                style={{ width: '100%', height: '28vh' }} src="/17.png"
                 alt="Gurugram Millennium City"
                  objectFit="cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 flex items-end hover:items-center justify-center transition-all duration-300 ease-in-out">
                  <div className="text-center text-white">
                    <h2 className="text-2xl font-semibold"> Hauz khas </h2>
                    <p className="text-sm">Delhi</p>
                  </div>
                </div>
                </div>
            </SwiperSlide>
           


          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Coworkingoffice;
