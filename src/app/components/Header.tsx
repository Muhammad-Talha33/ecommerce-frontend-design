"use client";
import {
  Archive,
  Building,
  Globe,
  Headphones,
  Heart,
  Home,
  List,
  Menu,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className=" bg-gray-50">
      <header className="sticky top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm overflow-hidden">
        <div className="hidden md:hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  src="/logo-colored.png"
                  alt="Logo"
                  width="130"
                  height="80"
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="w-full max-w-2xl">
              <div className="flex w-full h-12">
                {/* Input Field */}
                <input
                  type="text"
                  className="flex-grow text-gray-500 border border-gray-300 rounded-l-md px-4 h-full focus:outline-none"
                  placeholder="Search"
                  readOnly
                />

                {/* Dropdown */}
                <select className="text-sm border-t border-b border-gray-300 outline-none px-4 h-full">
                  <option value="">All Category</option>
                  <option value="">Electronics</option>
                  <option value="">Clothing</option>
                </select>

                {/* Search Button */}
                <button className="bg-[#0067FF] text-white px-6 h-full rounded-r-md">
                  Search
                </button>
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4 flex-nowrap flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="text-gray-500">
                  <img src="/Vector.png" alt="Profile" />
                </div>
                <span className="mt-1 text-xs text-gray-500">Profile</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-gray-500">
                  <img src="/Vector2.png" alt="Message" />
                </div>
                <span className="mt-1 text-xs text-gray-500">Message</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-gray-500">
                  <img src="/Vector3.png" alt="Orders" />
                </div>
                <span className="mt-1 text-xs text-gray-500">Orders</span>
              </div>

              <Link href="/cart" className="flex flex-col items-center">
                <div className="text-gray-500">
                  <img src="/Vector4.png" alt="Cart" />
                </div>
                <span className="mt-1 text-xs text-gray-500">My Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden px-4 py-3">
          <div className="flex items-center justify-between w-full ">
            {/* Left Side: Menu Icon */}
            <div
              className="text-gray-500 p-2 cursor-pointer"
              onClick={toggleSidebar}
            >
              <Menu className="w-8 h-8" />
            </div>

            {/* Center: Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  src="/logo-colored.png"
                  alt="Logo"
                  width="130"
                  height="80"
                />
              </Link>
            </div>

            {/* Right Side: Icons */}
            <div className="flex items-center space-x-4 ml-auto">
              <Link href="/cart">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
              </Link>
              <Link href="" onClick={toggleSidebar}>
                <User className="w-6 h-6 text-gray-600" />
              </Link>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white shadow-md z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="bg-gray-200">
              <div className="w-10 h-10 bg-gray-200 rounded-full mx-6 pt-2 pb-2">
                <img src="/Avatar (1).png" alt="" />
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
              <div className="flex items-center space-x-3">
                <p className="text-[#1C1C1C] text-base ">
                  Sign in <span>|</span> Register
                </p>
              </div>
              <X
                className="w-6 h-6 text-gray-500 cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>

            <div className="space-y-4 p-4 text-sm ">
              <Link
                href="/"
                className="flex items-center text-[#1C1C1C] text-base  space-x-3 hover:text-blue-500"
              >
                <Home className="w-5 h-5 text-[#8B96A5]" />
                <span>Home</span>
              </Link>

              <Link
                href="/products"
                className="flex items-center text-[#1C1C1C] text-base  space-x-3 hover:text-blue-500"
              >
                <List className="w-5 h-5 text-[#8B96A5]" />
                <span>Categories</span>
              </Link>

              <Link
                href="/products"
                className="flex items-center text-[#1C1C1C] text-base space-x-3 hover:text-blue-500"
              >
                <Heart className="w-5 h-5 text-[#8B96A5]" />
                <span>Favorites</span>
              </Link>

              <Link
                href="/cart"
                className="flex items-center pb-2 text-[#1C1C1C] text-base space-x-3 hover:text-blue-500"
              >
                <Archive className="w-5 h-5 text-[#8B96A5]" />
                <span>My orders</span>
              </Link>

              <div className="border-t-1 border-[#DEE2E7] my-4" />

              <Link
                href="/"
                className="flex items-center text-[#1C1C1C] text-base space-x-3 hover:text-blue-500"
              >
                <Globe className="w-5 h-5 text-[#8B96A5]" />
                <span>English | USD</span>
              </Link>

              <Link
                href="/"
                className="flex items-center text-[#1C1C1C] text-base space-x-3 hover:text-blue-500"
              >
                <Headphones className="w-5 h-5 text-[#8B96A5]" />
                <span>Contact us</span>
              </Link>

              <Link
                href="/"
                className="flex items-center text-[#1C1C1C] text-base space-x-3 hover:text-blue-500"
              >
                <Building className="w-5 h-5 text-[#8B96A5]" />
                <span>About</span>
              </Link>

              <div className="border-t-1 border-[#DEE2E7] text-[#1C1C1C] text-[15px] ">
                <p className="ml-10 mt-4">User agreement</p>
                <p className="ml-10 mt-4">Partnership</p>
                <p className="ml-10 mt-4">Privacy policy</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-3">
            <div className="flex">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none"
                placeholder="Search"
                readOnly
              />
              <div className="bg-[#0067FF] text-white px-4 py-2 rounded-r-md"></div>
            </div>

            <div className="flex overflow-x-auto gap-2 md:hidden mt-4 lg:hidden">
              <button className="w-[87px] h-[36px] rounded-md bg-gray-200 text-[#0D6EFD] text-base font-normal">
                Tablets
              </button>
              <button className="w-[87px] h-[36px] rounded-md bg-gray-200 text-[#0D6EFD] text-base font-normal">
                Phones
              </button>
              <button className="w-[87px] h-[36px] rounded-md bg-gray-200 text-[#0D6EFD] text-base font-normal">
                Ipads
              </button>
              <button className="w-[87px] h-[36px] rounded-md bg-gray-200 text-[#0D6EFD] text-base font-normal">
                Ipod
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
