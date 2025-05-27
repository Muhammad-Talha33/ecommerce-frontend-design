"use client";
import React, { useState } from 'react'
import youMayLike from '@/data/youMayLike';

export default function Tab() {
const [activeTab, setActiveTab] = useState("description");
  return (
             <div className="mt-8 hidden md:block ">
            <div className="border-b">
              <nav className="flex space-x-8">
                {["Description", "Reviews", "Shipping", "About seller"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() =>
                        setActiveTab(tab.toLowerCase().replace(" ", ""))
                      }
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.toLowerCase().replace(" ", "")
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </nav>
            </div>

            <div className="py-6">
              {activeTab === "description" && (
                <div className="md:inline-grid grid-cols-1 lg:grid-cols-2 gap-8 hidden">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="text-gray-700">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 lg:w-[280px] lg:h-[360px] lg:ml-44 xl:ml-72">
                    <h3 className="font-medium mb-4">You may like</h3>
                    <div className="space-y-3">
                      {youMayLike.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-end gap-3"
                        >
                          <div
                            className='w-12 h-12 rounded ${item.image} flex-shrink-0 border-1 border-[#E0E0E0]'
                          >
                            <img src={item.image} alt="" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
  )
}
