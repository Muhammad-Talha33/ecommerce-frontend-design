"use client";
import React from 'react';
import recommendedItems from '@/data/recommendedItems';

const RecommendedItems = () => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-6">Recommended items</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {recommendedItems.map((item, index) => (
          <div key={index} className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-md overflow-hidden lg:h-[310px] lg:w-[220px]  hover:shadow-md transition-shadow">
            <div className="overflow-hidden">
              <img src={item.img} alt={item.name} className="h-full w-full object-contain" />
            </div>
            <div className="p-3">
              <p className="font-medium text-[16px] text-[#1C1C1C]  ">${item.price}</p>
              <p className="text-[16px] font-normal text-[#8B96A5]">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
