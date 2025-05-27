"use client";

import React, { useState } from "react";
import TopNavigationMenu from '../components/TopNavigation';
import { AlignJustify, ChevronLeft, ChevronRight, ChevronUp, FunnelPlus, FunnelX, Heart, LayoutGrid} from "lucide-react";
import Link from "next/link";
import products from "@/data/products";

export default function ProductListingPage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isGridView, setIsGridView] = useState(false);

  return (
    <>
      <TopNavigationMenu />
      <div className="bg-gray-50 min-h-screen py-6 px-4 md:px-10">
        <div className="text-base text-[#8B96A5] mb-4 hidden lg:inline-flex">
          Home <ChevronRight className="w-[20px] h-[20px]" /> Clothings{" "}
          <ChevronRight className="w-[20px] h-[20px]" /> Men&apos;s wear{" "}
          <ChevronRight className="w-[20px] h-[20px]" />
          <span className="font-medium">Summer clothing</span>
        </div>
        {/* Toggle buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          {showSidebar && (
            <aside className="w-full md:w-64 bg-white border border-gray-200 rounded p-4 space-y-6">
              <div className="grid grid-cols-2 ">
                <h3 className="font-semibold mb-2">Category</h3>
                 <ChevronUp className="lg:ml-20 ml-24"/> 
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>Mobile accessory</li>
                  <li>Electronics</li>
                  <li>Smartphones</li>
                  <li>Modern tech</li>
                  <li className="text-blue-500 cursor-pointer">See all</li>
                </ul> 
              </div>

              <div className="grid grid-cols-2 ">
              <h3 className="font-semibold mb-2">Brands</h3>
              <ChevronUp className="lg:ml-20 ml-24"/> 
              <div className="space-y-1 text-sm">
                {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
                  <div key={brand}>
                    <input type="checkbox" id={brand} className="mr-2" />
                    <label htmlFor={brand}>{brand}</label>
                  </div>
                ))}
                <div className="text-blue-500 cursor-pointer">See all</div>
              </div>
            </div>

            <div className="grid grid-cols-2 ">
              <h3 className="font-semibold mb-2">Features</h3>
              <ChevronUp className="lg:ml-20 ml-24"/> 
              <div className="space-y-1 text-sm">
                {["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"].map((feature) => (
                  <div key={feature}>
                    <input type="checkbox" id={feature} className="mr-2" />
                    <label htmlFor={feature}>{feature}</label>
                  </div>
                ))}
                <div className="text-blue-500 cursor-pointer">See all</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Price range</h3>
              <div className="flex items-center space-x-2 mb-2">
                <input className="bg-white shadow-sm w-[100px] h-[40px] border-1 border-[#DEE2E7] p-1 rounded-md text-base font-normal text-[#BDC4CD]" placeholder="0" />
                <span>-</span>
                <input className="bg-white shadow-sm w-[100px] h-[40px] border-1 border-[#DEE2E7] p-1 rounded-md text-base font-normal text-[#BDC4CD]" placeholder="999999" />
              </div>
              <button className="bg-white border-1 border-[#DEE2E7] shadow-sm text-[#0D6EFD] px-4 py-1 text-sm rounded-md w-[228px] h-[40px]">Apply</button>
            </div>

            <div className="grid grid-cols-2 ">
              <h3 className="font-semibold mb-2">Condition</h3>
              <ChevronUp className="lg:ml-20 ml-24"/> 
              <div className="space-y-1 text-sm">
                {["Any", "Refurbished", "Brand new", "Old items"].map((cond) => (
                  <div key={cond}>
                    <input type="radio" name="condition" id={cond} className="mr-2" />
                    <label htmlFor={cond}>{cond}</label>
                  </div>
                ))}
              </div>
            </div>
                
            <div className="grid grid-cols-2 ">
              <h3 className="font-semibold mb-2">Ratings</h3>
              <ChevronUp className="lg:ml-20 ml-24"/> 
              <div className="space-y-1">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="text-orange-400">
                    <input type="checkbox" name="" id="" />
                    {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                  </div>
                ))}
              </div>
            </div>
              
            </aside>
          )}

          {/* Main Products Section */}
          <main className="flex-1">
            <div className="lg:flex justify-between items-center mb-4 ">

              <div className="hidden lg:inline-block">
                <span className="font-semibold text-gray-700">12,911 items</span> in{" "}
                <span className="font-medium">Mobile accessory</span>
              </div>

              <div className="lg:flex gap-2 items-center ">
                <input type="checkbox" className="mr-1 hidden lg:inline-block" /> <span className="hidden lg:inline">Verified only</span> 
                <select className="border p-1 text-sm rounded hidden lg:inline-block"> 
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
          <div className="flex justify-center gap-2 w-auto h-auto">
          
          <button onClick={() => setShowSidebar((prev) => !prev)}
            className="px-3 py-1 border-1 border-gray-300 rounded-md text-sm text-[#1C1C1C] lg:hidden">
            Sort: Newest 
          </button>

          <button onClick={() => setShowSidebar((prev) => !prev)}
            className="px-3 py-1 border-1 border-gray-300 rounded-md text-sm text-[#1C1C1C] lg:hidden">
            Filter: (3)
          </button>

          <button
            onClick={() => setIsGridView((prev) => !prev)}
            className="px-3 py-1 rounded-md text-sm border-1 border-gray-300 text-black bg-whit"
          >
            {isGridView ?  <AlignJustify /> : <LayoutGrid />}
          </button>
          <button
            onClick={() => setShowSidebar((prev) => !prev)}
            className=" border-1 border-gray-300 text-black px-3 py-1 rounded-md text-sm hidden lg:inline-block"
          >
            {showSidebar ? <FunnelX className=""/> : <FunnelPlus />}
          </button>

          </div>
              </div>
            </div>

            {/* Product Cards */}
            <div
              className={`${
                isGridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"
              }`}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow ${
                    isGridView ? "" : "lg:flex lg:items-start gap-4 grid-cols-2 hover:shadow-md transition-shadow"
                  }`}
                >
                  <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`${
                      isGridView
                        ? "w-full h-[200px] object-contain mb-2 hover:duration-600 hover:scale-105 transition-transform ease-in-out"
                        : "lg:w-[184px] lg:h-[184px] xl:w-[184px] xl:h-[184px] w-24 h-24 object-contain rounded hover:duration-600 hover:scale-105 transition-transform ease-in-out"
                    }`}
                  />     
                  </Link>
                  <div className="flex-1">
                     <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                      </Link>
                    <div className="flex gap-2">
                      <p className="text-[20px] font-semibold text-[#1C1C1C]">{product.price}</p>
                      {product.oldPrice && (
                        <p className="text-base text-[#8B96A5] font-semibold line-through mt-1">
                          {product.oldPrice}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm mb-1">
                      <span className="text-orange-500">
                        ★★★★<span className="text-gray-300">★</span> {product.rating}
                      </span>
                      <span className="text-gray-500">· {product.orders} orders</span>
                      <span className="text-green-600 font-semibold">· {product.shipping}</span>
                    </div>

                    <p className="text-sm text-gray-500 mb-1">{product.description}</p>
                    <Link href={`/product/${product.id}`} className="text-blue-500 text-sm font-medium"> 
                      View details
                   </Link>
                  </div>
                  
                  {!isGridView && (
                    <div className="w-[40px] h-[40px] border-1 border-[#DEE2E7] text-blue-500 rounded-md bg-white shadow-sm">
                      <Heart className="font-bold w-9 mt-2 hover:fill-black hover:text-black" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="lg:flex lg:justify-end gap-2 lg:items-center mt-6 text-sm grid-cols-1 grid">
              <div>
                <select className="ml-2 border-[#DEE2E7] border-1 p-1 rounded-md w-[125px] h-[40px]">
                  <option>Show 10</option>
                  <option>Show 20</option>
                  <option>Show 50</option>
                </select>
              </div>

              <div className="flex justify-center items-center border-1 border-[#DEE2E7] rounded-md">
                <div className="bg-white w-[44px] h-[40px] border-r-1 border-[#DEE2E7] rounded-md px-2 py-2">
                  <ChevronLeft className="text-[#8B96A5]" />
                </div>

                <div className="bg-white text-base font-medium hover:text-[#8B96A5] w-[44px] h-[40px] hover:bg-[#EFF2F4] rounded-md border-r-1 border-[#DEE2E7] py-2 px-4">
                  1
                </div>

                <div className="bg-white text-base font-medium hover:bg-[#EFF2F4] hover:text-[#8B96A5] w-[44px] h-[40px] border-r-1 border-[#DEE2E7] rounded-md text-[#1C1C1C] py-2 px-4">
                  2
                </div>

                <div className="bg-white text-base font-medium hover:bg-[#EFF2F4] hover:text-[#8B96A5] w-[44px] h-[40px] border-r-1 border-[#DEE2E7] rounded-md text-[#1C1C1C] py-2 px-4">
                  3
                </div>

                <div className="bg-white w-[44px] h-[40px] rounded-md py-2 px-2">
                  <ChevronRight className="text-[#1C1C1C]" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
