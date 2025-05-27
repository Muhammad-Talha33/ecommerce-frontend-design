"use client";
import React from 'react';

const ServicesSection = () => {
  const services = [
    { title: "Source from Industry Hubs", img: "/image108.png",},
    { title: "Customize Your Products", img: "/image104.png" },
    { title: "Fast, reliable shipping by ocean or air", img: "/image106.png" },
    { title: "Product monitoring and inspection", img: "/image107.png" }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6">Our extra services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div key={index} className="relative bg-white border border-gray-200 rounded-md overflow-hidden lg:w-[280px] lg:h-[200px] hover:shadow-md transition-shadow">
            <div className="relative flex items-end">
            <img src={service.img} alt={service.title} className="h-full w-full object-contain" />                
            </div>
            <div className='w-[175px] h-[44px] mx-5 my-2'>
           <p className='text-[16px] text-[#1C1C1C] font-medium leading-[22px]'>{service.title} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;