"use client";
import React from "react";

interface ProductItem {
  name: string;
  price: number;
  img: string;
}

interface ProductGridProps {
  title: string;
  items: ProductItem[];
}

const ProductGrid2: React.FC<ProductGridProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:gap-[164px]">
        <div className="relative lg:bg-gray-50 rounded-[1px] col-span-1 p-6 lg:p-4 flex flex-col justify-start lg:min-w-[230px] lg:h-auto xl:w-[280px] xl:h-[257px]">
          <div className="space-y-2 absolute inset-0 hidden md:inline-block">
            <img
              src="/image98.png"
              alt="Headphones and laptop"
              className="md:block absolute right-0 bottom-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:relative md:z-10 hidden md:inline-block">
            <h3 className="text-[20px] font-semibold mb-2 leading-[26px]">
              {title}
            </h3>
            <a href="/products">
            <button className="bg-white text-sm cursor-pointer px-4 py-2 rounded-md w-max hidden md:inline-block">
              Source now
            </button>
            </a>
          </div>
        </div>

        <div className="col-span-4 md:hidden grid-cols-2 md:grid-cols-4 gap-4 hidden lg:inline-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-3 flex items-center hover:shadow-md transition-shadow"
            >
              <div className="w-1/1 lg:3/5">
                <h3 className="text-[16px] font-normal leading-[100%]">
                  {item.name}
                </h3>
                <p className="text-[13px] text-[#8B96A5] mt-1">From</p>
                <p className="text-[13px] text-[#8B96A5] font-medium">
                  USD {item.price}
                </p>
              </div>
              <div className="w-1/1 lg:w-2/5">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-16 w-16 object-cover ml-auto"
                />
              </div>
            </div>
          ))}
          <button className="bg-white text-[#0D6EFD] text-sm px-4 py-2 rounded-md w-max md:hidden">
            Source now
          </button>
        </div>

        {/* Mobile Carousel Style for Small Screens */}
        <div className="block md:hidden lg:hidden">
          <h3 className="text-xl font-semibold mb-2 text-[#1C1C1C] leading-[100%]">Consumer electronics</h3>
          <div className="flex overflow-x-auto space-x-3 scrollbar-hide border-t-1 border-b-1 border-[#DEE2E7]">
            {items.map((item, index) => (
              <div
                key={index}
                className="min-w-[140px] min-h-[180px] bg-white border-r-1 border-[#DEE2E7] p-2 flex flex-col items-center text-center flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-cover mb-2"
                />
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-[13px] text-[#8B96A5] mt-0.5">
                  From USD {item.price}
                </p>
              </div>
            ))}
          </div>
          <a href="/products">
          <button className="mt-3 text-[#0D6EFD] text-base font-medium rounded-md bg-white w-[141px] h-[40px]">
            Source now →
          </button>
          </a>
        </div>

        {/* Grid for Medium & Up Screens */}
        <div className="hidden lg:hidden md:grid col-span-4 grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-3 flex items-center"
            >
              <div className="w-1/1 lg:3/5">
                <h3 className="text-[16px] font-normal leading-[100%]">
                  {item.name}
                </h3>
                <p className="text-[13px] text-[#8B96A5] mt-1">From</p>
                <p className="text-[13px] text-[#8B96A5] font-medium">
                  USD {item.price}
                </p>
              </div>
              <div className="w-1/1 lg:w-2/5">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-16 w-16 object-cover ml-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid2;
