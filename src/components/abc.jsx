import React from 'react'
import Image from 'next/image'
const abc = () => {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden ">
    {/* Image */}
    <Image
      src="/26.png"
      alt="Gurugram Millennium City"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-2xl font-semibold">South Delhi</h2>
        <p className="text-sm">Lajpat Nagar</p>
      </div>
    </div>
  </div>
  )
}

export default abc
