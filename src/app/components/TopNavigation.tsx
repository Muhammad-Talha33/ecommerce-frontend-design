"use client";
import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const TopNavigationMenu: React.FC = () => {
  return (
    <div className="w-full mb-6 bg-white border-b border-gray-200 hidden lg:inline-block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center text-sm">
        <div className="flex space-x-6 overflow-x-auto whitespace-nowrap pb-1">
            <a href="/products">
          <div className="flex items-center">
            <Menu className="w-4 h-4 mr-1" />
            <span className="font-medium">All category</span>
          </div>
          </a>

          <a href="">
          <span>Hot offers</span>
          </a>

          <a href="">
          <span>Gift boxes</span>
          </a>
          
          <a href="">
          <span>Projects</span>
          </a>

          <a href="">
          <span>Menu item</span>
          </a>
          
          <div className="flex items-center">
            <span>Help</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="flex items-center">
            <span>English, USD</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
          <div className="flex items-center">
            <span>Ship to</span>
            <span className="mx-1"><img src="/flags/germany.png" alt="" height="16px" width="16px"/></span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationMenu;
