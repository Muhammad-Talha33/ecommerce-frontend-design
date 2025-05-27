"use client";
import React, { useState } from "react";
import { Star, Heart, Check, Globe, ShieldCheck } from "lucide-react";
import Tab from "@/app/components/Tab";
import relatedProducts from "@/data/relatedProducts";
import recommendedItems from "@/data/recommendedItems";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    "/cloth/8.png",
    "/cloth/9.png",
    "/cloth/10.png",
    "/cloth/11.png",
    "/cloth/12.png",
    "/cloth/8.png",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Images */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <img
                  src={productImages[selectedImage]}
                  alt="Product"
                  className="w-full h-full md:h-96 object-cover rounded-lg md:border-1 border-[#DEE2E7]"
                />
              </div>
              <div className="gap-2 flex-wrap hidden md:inline-flex">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 border-2 rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              {/* Mobile Carousel for Thumbnails */}
              <div className="block md:hidden">
                <div className="flex overflow-x-auto gap-2 scrollbar-hide mt-2">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`min-w-[64px] min-h-[64px] border-2 rounded-lg overflow-hidden flex-shrink-0 ${
                        selectedImage === index
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className=" flex items-center gap-2 mb-4 md:hidden lg:hidden">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">9.3</span>
              <span className="text-sm text-blue-600">32 reviews</span>
              <span className="text-sm text-gray-600">154 sold</span>
            </div>

            {/* Product Information */}
            <div className="lg:col-span-1">
              <div className="items-center gap-2 mb-2 hidden md:inline-flex">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  ✓ In stock
                </span>
              </div>

              <h1 className="text-xl font-semibold text-gray-900 mb-4">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h1>
              <h1 className="text-base font-semibold text-[#FA3434] mb-4 md:hidden">
                $129.95{" "}
                <span className="text-[#8B96A5] text-[13px]">(50-100 pcs)</span>
              </h1>
              <div className="flex items-center justify-between gap-4 md:hidden">
                <button className="w-[280px] h-[40px] bg-[#0067FF] px-12 rounded-md text-white">
                  Send Inquiry
                </button>
                <div className="w-[40px] h-[40px] border-1 border-gray-300 rounded-md">
                  <Heart className="font-bold w-9 mt-2 hover:fill-black text-[#0D6EFD] hover:text-black" />
                </div>
              </div>

              <div className=" items-center gap-2 mb-4 hidden md:inline-flex">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <span className="text-sm text-gray-600">9.3</span>
                <span className="text-sm text-blue-600">32 reviews</span>
                <span className="text-sm text-gray-600">154 sold</span>
              </div>

              {/* Pricing */}
              <div className="hidden md:inline-flex items-center justify-between gap-4 mb-6 bg-[#FFF0DF] w-auto h-auto xl:w-[390px] xl:h-16 ">
                <div className="text-center border-r-1 border-gray-400 px-2 xl:px-5">
                  <div className="text-2xl font-bold text-red-500">$98.00</div>
                  <div className="text-xs text-gray-500">50-100 pcs</div>
                </div>
                <div className="text-center border-r-1 border-gray-400 px-2 xl:px-5">
                  <div className="text-2xl font-bold text-gray-900">$90.00</div>
                  <div className="text-xs text-gray-500">100-700 pcs</div>
                </div>
                <div className="text-center px-2 xl:px-5">
                  <div className="text-2xl font-bold text-gray-900">$78.00</div>
                  <div className="text-xs text-gray-500">700+ pcs</div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y- hidden md:block">
                <div className="flex gap-10 border-b-1 border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Price:</span>
                  <span className="text-[#505050]">Negotiable</span>
                </div>
                <div className="flex gap-10  border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Type:</span>
                  <span className="text-[#505050]">Classic shoes</span>
                </div>
                <div className="flex gap-5  border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Material:</span>
                  <span className="text-[#505050]">Plastic material</span>
                </div>
                <div className="flex gap-7 border-b-1 border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Design:</span>
                  <span className="text-[#505050]">Modern nice</span>
                </div>
                <div className="flex gap-3  border-gray-200 py-1">
                  <span className="text-[#8B96A5]">Customization:</span>
                  <span className="text-[#505050]">
                    Customized logo and design custom packages
                  </span>
                </div>
                <div className="flex gap-5  border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Protection:</span>
                  <span className="text-[#505050]">Refund Policy</span>
                </div>
                <div className="flex gap-5 border-b-1 border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Warranty:</span>
                  <span className="text-[#505050]">2 years full warranty</span>
                </div>
              </div>

              <div className="mt-6 md:hidden">
                <div className="flex gap-5 border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Condition</span>
                  <span className="text-[#505050]">Brand new</span>
                </div>

                <div className="flex gap-8 border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Material</span>
                  <span className="text-[#505050]">Plastic</span>
                </div>

                <div className="flex gap-6 border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Category</span>
                  <span className="text-[#505050]">Electronics, gadgets</span>
                </div>

                <div className="flex gap-5 border-gray-200 py-2">
                  <span className="text-[#8B96A5]">Item num</span>
                  <span className="text-[#505050]">23421</span>
                </div>
                <p className="text-[#505050]">
                  Info about edu item is an ideal companion for anyone engaged
                  in learning. The drone provides precise and ...
                </p>
                <p className="text-[#0D6EFD] text-base mt-4">Read more</p>
              </div>
            </div>

            {/* Supplier Information */}
            <div className="lg:col-span-1 lg:w-[280px] lg:h-[325px] ml-6 xl:ml-[106px] hidden md:block">
              <div className="border-1 border-[#DEE2E7] rounded-lg p-4 mb-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-[4px] flex items-center justify-center">
                    <span className="text-teal-600 font-bold">R</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Supplier</div>
                    <div className="font-medium">Guanjoi Trading LLC</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3">
                      <img src="/flags/germany.png" alt="" />
                    </div>
                    <span>Germany, Berlin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gray-400" />
                    <span>Verified Seller</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="">
                      <Globe className="w-4 h-4 rounded-full text-gray-400" />
                    </div>
                    <span>Worldwide shipping</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4  mt-4 font-medium hover:bg-blue-700 transition-colors rounded-md">
                  Send inquiry
                </button>

                <button className="w-full text-blue-600 py-2 px-4 mt-2 font-medium hover:bg-blue-50 transition-colors border-1 border-[#DEE2E7] rounded-md">
                  Seller&apos;s profile
                </button>
              </div>
              <button className="flex items-center justify-center gap-2 w-full text-[#0D6EFD] py-2 px-4 mt-2 text-base font-medium cursor-pointer transition-colors">
                <Heart className="w-4 h-4 text-[#0D6EFD]" />
                Save for later
              </button>
            </div>
          </div>
          
          <Tab />

          <div className=" hidden md:block ">
            <table className="w-[567px] h-[30px] text-sm">
              <tbody className="space-y-2 border-1 border-[#E0E7E9]">
                <tr className="border-b border-[#E0E7E9]">
                  <td className="py-2 px-4 text-gray-600 bg-[#EFF2F4] border-r-1 border-[#E0E7E9]">
                    Model
                  </td>
                  <td className="py-2 px-4 text-gray-900">#8786867</td>
                </tr>
                <tr className="border-b border-[#E0E7E9]">
                  <td className="py-2 px-4 text-gray-600 bg-[#EFF2F4] border-r-1 border-[#E0E7E9]">
                    Style
                  </td>
                  <td className="py-2 px-4 text-gray-900">Classic style</td>
                </tr>
                <tr className="border-b border-[#E0E7E9]">
                  <td className="py-2 px-4 text-gray-600 bg-[#EFF2F4] border-r-1 border-[#E0E7E9]">
                    Certificate
                  </td>
                  <td className="py-2 px-4 text-gray-900">ISO-88921212</td>
                </tr>
                <tr className="border-b border-[#E0E7E9]">
                  <td className="py-2 px-4 text-gray-600 bg-[#EFF2F4] border-r-1 border-[#E0E7E9]">
                    Size
                  </td>
                  <td className="py-2 px-4 text-gray-900">
                    34mm x 450mm x 19mm
                  </td>
                </tr>
                <tr className="border-b border-[#E0E7E9]">
                  <td className="py-2 px-4 text-gray-600 bg-[#EFF2F4] border-r-1 border-[#E0E7E9]">
                    Memory
                  </td>
                  <td className="py-2 px-4 text-gray-900">36GB RAM</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-[#505050]">
                <Check className="w-4 h-4" />
                <span className="text-sm">Some great feature name here</span>
              </div>
              <div className="flex items-center gap-2 text-[#505050]">
                <Check className="w-4 h-4" />
                <span className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#505050]">
                <Check className="w-4 h-4" />
                <span className="text-sm">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#505050]">
                <Check className="w-4 h-4" />
                <span className="text-sm">Some great feature name here</span>
              </div>
            </div>
          </div>

          {/* Related Products */}
        </div>
        {/* Mobile Supplier Card */}
        <div className="block md:hidden border-1 border-[#DEE2E7] p-4 shadow-sm mt-4 bg-white">
          <div className="flex items-center justify-between">
            {/* Left: Avatar + Info */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 bg-teal-100 text-teal-800 font-semibold rounded-md flex items-center justify-center">
                R
              </div>

              {/* Text */}
              <div className="text-sm">
                <p className="text-gray-500 font-medium">Supplier</p>
                <p className="text-[#505050] text-base font-normal leading-tight">
                  Guanjoi Trading LLC
                </p>
              </div>
            </div>

            <div className="text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-3 border-gray-200" />

          {/* Bottom Row: Icons */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <img src="/flags/germany.png" alt="Germany" className="w-5 h-5" />
              <span>Germany</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-gray-400" />
              <span>Verified</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 rounded-full text-gray-400" />
              <span>Shipping</span>
            </div>
          </div>
        </div>

        <div className="mt-8 hidden md:block bg-white px-6 py-6">
          <h2 className="text-lg font-medium mb-6">Related products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((product, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden hover:shadow-md transition-shadow w-[172px] h-[254px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain bg-[#EEEEEE] "
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm text-[#505050] mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#8B96A5]">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Style for Small Screens */}
        <div className="my-10 md:hidden">
          <h2 className="text-xl font-semibold mb-6">Similar Products</h2>

          {/* Wrapper for scroll on mobile */}
          <div className="flex md:grid overflow-x-auto md:overflow-visible gap-4 md:gap-6 md:grid-cols-5 scrollbar-hide">
            {recommendedItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[150px] max-w-[170px] md:min-w-0 md:max-w-none bg-[#FFFFFF] border border-[#E0E0E0] rounded-md overflow-hidden lg:h-[310px] lg:w-[220px] hover:duration-700 hover:scale-105 transition-transform ease-in-out hover:bg-gray-300 flex-shrink-0"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-[16px] text-[#1C1C1C]">
                    ${item.price}
                  </p>
                  <p className="text-[16px] font-normal text-[#8B96A5]">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Index;
