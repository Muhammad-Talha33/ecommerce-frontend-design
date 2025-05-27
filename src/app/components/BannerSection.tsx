"use client";
import Link from "next/link";
import React from "react";

const BannerSection: React.FC = () => {
  return (
    <div className=" rounded-md overflow-hidden mb-8 lg:py-4">
      <div className="flex flex-col md:flex-row justify-center">
        {/* Left Categories Column */}
        <div className="hidden lg:block md:block w-full md:w-1/4 bg-white p-3">
          <ul className="space-y-4 mt-3 text-gray-700 lg:ml-5">
            <li className="font-medium text-sm lg:text-base text-[#1C1C1C] rounded-md hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Automobiles
            </li>
            <li className="text-[#505050] text-sm lg:text-base hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Clothes and wear
            </li>
            <li className="text-[#505050] text-sm lg:text-base hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Home interiors
            </li>
            <li className="text-[#505050] text-sm lg:text-base hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Computer and tech
            </li>
            <li className="text-[#505050] text-sm lg:text-base hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Tools, equipment
            </li>
            <li className="text-[#505050] text-sm lg:text-base hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Sports and outdoor
            </li>
            <li className="text-[#505050] text-sm lg:text-base hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Animal and pets
            </li>
            <li className="text-[#505050] text-sm lg:text-base hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              Machinery tools
            </li>
            <li className="font-medium text-sm lg:text-base text-[#505050] hover:bg-[#E5F1FF] cursor-pointer lg:px-4">
              More category
            </li>
          </ul>
        </div>

        {/* Center Banner */}
        <div className="relative w-full md:w-2/4 p-6 flex flex-col justify-center lg:justify-start">
          <div className="space-y-2 absolute inset-0">
            <img
              src="/banner.png"
              alt="Headphones and laptop"
              className="md:block absolute right-0 bottom-0 w-full h-full lg:w-[665px] lg:h-[360px] object-cover"
            />
          </div>

          <div className="relative z-10 lg:my-10">
            <p className="lg:text-[28px] font-medium text-gray-700">
              Latest trending
            </p>
            <h2 className="lg:text-[32px] font-bold text-gray-900">
              Electronic items
            </h2>
            <Link href="/products">
            <button className="mt-4 bg-white text-[#0D6EFD] md:text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50">
              Learn more
            </button>
            </Link>
          </div>
        </div>

        {/* Right User Login Section */}
        <div className="w-full md:w-1/4 bg-white p-4 ">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-md flex items-center justify-center text-gray-500">
              {/* <User className="w-5 h-5" /> */}
              <img src="Avatar.png" alt="" />
            </div>
            <div className="ml-2">
              <p className="text-xs font-medium">Hi, user</p>
              <p className="text-xs text-gray-500">let&apos;s get started</p>
            </div>
          </div>

          <button className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-md mb-2 hover:bg-blue-600">
            Join now
          </button>

          <button className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-medium py-2 rounded-md mb-4">
            Log in
          </button>

          <div className="bg-[#F38332] p-3 rounded-md mb-2 lg:w-[200px] lg:h-[95px]">
            <p className="text-[16px] text-white font-normal">
              Get US $10 off <br /> with a new supplier
            </p>
          </div>

          <div className="bg-[#55BDC3] p-3 rounded-md lg:w-[200px] lg:h-[95px]">
            <p className="text-[16px] font-normal text-white">
              Send quotes with supplier preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
