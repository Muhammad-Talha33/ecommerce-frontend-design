"use client";
import React from 'react';
import { dealItems, mobileItems } from '@/data/dealItems';

const DealsSection: React.FC = () => {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Deals and offers</h2>
        <p className="text-sm] text-gray-500">Hygiene equipments</p>
      </div>

      {/* Mobile Carousel */}
      <div className="flex md:hidden overflow-x-auto space-x-3 scrollbar-hide border-t-1 border-b-1 border-[#DEE2E7]">
        {mobileItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[140px] min-h-[180px] bg-white border-r-1 border-[#DEE2E7]  p-3 text-center flex-shrink-0"
          >
            <img
              src={item.img}
              alt={item.name || "Product"}
              className="w-24 h-24 object-contain mx-auto mb-2"
            />
            <p className="text-sm font-medium">{item.name}</p>
            <span className="mt-1 px-2 py-1 bg-red-100 text-red-500 text-xs rounded-[29px] inline-block">
              -{item.discount}
            </span>
          </div>
        ))}
      </div>

          <a href="/products">
          <button className="mt-3 text-[#0D6EFD] text-base font-medium rounded-md bg-white w-[141px] h-[40px] md:hidden">
            Source now →
          </button>
          </a>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
        {dealItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-4 flex flex-col items-center ">
              <img
                src={item.img}
                alt={item.name || "Product"}
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-gray-800 text-sm font-medium">
                {item.name || "Unnamed"}
              </p>
              <span className="mt-1 px-2 py-1 bg-red-100 text-red-500 text-xs rounded">
                -{item.discount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
