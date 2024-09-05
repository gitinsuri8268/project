"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandingSlider = () => {
  const logos = [
    { src: '/path/to/credable-logo.png', alt: 'Credable' },
    { src: '/path/to/hector-logo.png', alt: 'Hector Beverages' },
    { src: '/path/to/purple-logo.png', alt: 'Purple' },
    { src: '/path/to/fyp-logo.png', alt: 'Fyp' },
    { src: '/path/to/easebuzz-logo.png', alt: 'Easebuzz' },
    { src: '/path/to/zingbus-logo.png', alt: 'Zingbus' },
    { src: '/path/to/zingbus-logo.png', alt: 'Zingbus' },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,           // Enable auto slide
    autoplaySpeed: 2000,      // Slide every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden max-w-[1100px] mx-auto">
      <h2 className="text-center text-2xl font-semibold mt-8">
        GitinSuri Tenants
      </h2>
      <Slider {...settings} className="mt-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo.src} alt={logo.alt} className="h-16 w-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandingSlider;
