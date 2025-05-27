"use client";
import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-100 p-8 lg:py-20 rounded-md lg:mb-[-25px] w-full h-full">
      <h2 className="text-xl font-semibold mb-2 text-center">Subscribe on our newsletter</h2>
      <p className="text-sm text-gray-500 text-center mb-6">Get daily news on upcoming offers from many suppliers all over the world</p>
      
      <div className="flex flex-col md:flex-row justify-center max-w-lg mx-auto lg:w-[392px] lg:h-[40px] gap-2">
        <input
          type="email" 
          placeholder="Email" 
          className="border-1 border-gray-300 rounded-md bg-white py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2 md:mb-0"
        />
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;