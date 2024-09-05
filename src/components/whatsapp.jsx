"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Whatsapp = () => {
  return (
    <div className='fixed bottom-6 right-6'>
      <Link href="https://wa.me/+919810150047" target="_blank">
        <Image 
          src="/Whatsapp.png" 
          width={50} 
          height={50} 
          alt="WhatsApp"
          className="whatsapp_img cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Whatsapp;
