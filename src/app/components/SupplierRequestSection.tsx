"use client";
import React from 'react';

const SupplierRequestSection = () => {
  return (
    <div className="mb-12">
      <div className="relative rounded-md overflow-hidden">
          <div className="space-y-2 absolute inset-0">
          <img 
            src="/maskgroup.png" 
            alt="Headphones and laptop" 
            className="md:block absolute right-0 bottom-0 w-full h-full object-cover"
            />
          </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">An easy way to send requests to all suppliers</h2>
            <p className="text-blue-100 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          
          <div className="bg-white p-6 m-4 rounded-md">
            <h3 className="font-medium mb-4">Send quote to suppliers</h3>
            
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="What item you need?" 
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
              />
              
              <textarea 
                placeholder="Type more details" 
                rows={4}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-sm mb-1">Quantity</label>
                <input 
                  type="text" 
                  placeholder="Quantity" 
                  className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div className="w-1/2 pl-2">
                <label className="block text-sm mb-1">Pcs</label>
                <select className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Pcs</option>
                </select>
              </div>
            </div>
            
            <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierRequestSection;