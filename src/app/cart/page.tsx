import React from "react";
import { cartItems, savedItems } from "@/data/cartItems";
import Link from "next/link";

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 60.0;
  const tax = 14.0;
  const total = subtotal - discount + tax;

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">
          My cart ({cartItems.length})
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4 lg:space-y-0 lg:bg-white lg:divide-y-1  lg:divide-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded shadow-sm flex flex-col md:flex-row gap-4 items-start"
              >
                <img
                  src={item.image}
                  alt="product"
                  className="w-full lg:w-[80px] lg:h-[80px] md:w-28 h-full object-cover rounded border-1 border-[#E0E0E0] bg-[#E0E0E0]"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    Size: medium, Color: blue, Material: Plastic <br /> Seller:{" "}
                    {item.seller}
                  </p>
                  <div className="flex gap-2 text-sm">
                    <button className="text-[#FA3434] hover:bg-gray-200  border px-2 py-1 rounded-md border-gray-300 shadow-sm">
                      Remove
                    </button>
                    <button className="text-[#0D6EFD] border px-2 py-1 hover:bg-gray-200 rounded-md border-gray-300 shadow-sm">
                      Save for later
                    </button>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end justify-between h-full">
                  <p className="text-lg font-semibold">
                    ${item.price.toFixed(2)}
                  </p>
                  <select className="border px-2 py-1 rounded text-sm">
                    {[...Array(10)].map((_, i) => (
                      <option key={i}>Qty: {i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            <div className="hidden lg:flex lg:justify-between lg:items-start md:flex md:justify-between md:items-start bg-white py-2.5 px-2.5 lg:border-b-1 lg:border-gray-200">
              <Link href="/">
              <button className="mt-2 px-4 py-2 rounded-md text-base bg-[#0067FF] text-white hover:bg-blue-700 cursor-pointer">
                ← Back to shop
              </button>
              </Link>
              <button className="mt-2 px-4 py-2 border-1 rounded-md text-base border-gray-300 text-[#0D6EFD] hover:bg-gray-100 cursor-pointer">
                Remove all
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-4 rounded shadow-sm w-full lg:w-[280px] lg:h-[412px] space-y-4 hidden md:block">
            <h3 className="text-lg font-semibold">Have a coupon?</h3>
            <div className="flex">
              <input
                className="border-1 border-[#E0E0E0] p-2 flex-1 rounded-l text-sm"
                placeholder="Add coupon"
              />
              <button className="text-[#0D6EFD] hover:bg-gray-100 px-4 rounded-r text-sm border-1 border-[#E0E0E0]">
                Apply
              </button>
            </div>
            <div className="pt-4 space-y-2 text-sm drop-shadow">
              <div className="flex justify-between">
                <span className="text-[#505050]">Subtotal:</span>{" "}
                <span className="text-[#505050]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#FA3434]">
                <span className="text-[#505050]">Discount:</span> <span>− ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#00B517]">
                <span className="text-[#505050]">Tax:</span> <span>+ ${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span> <span>${total.toFixed(2)}</span>
              </div>
              <Link href="/">
              <button className="w-full bg-[#00B517] hover:bg-green-600 text-white py-2 rounded mt-2 mb-2 font-semibold">
                Checkout
              </button>
              </Link>
              <div className="flex justify-center gap-2 mt-1">
                <img src="/payment.png" alt="Visa" className="h-5" />
                <img src="/mastercard.png" alt="Mastercard" className="h-5" />
                <img src="/paypal.png" alt="PayPal" className="h-5" />
                <img src="/visa.png" alt="PayPal" className="h-5" />
                <img src="/applepay.png" alt="ApplePay" className="h-5" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[#8B96A5] md:hidden">
              <span>Items (3):</span>{" "}
              <span className="text-[#1C1C1C] font-medium text-base">
                ${discount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[#8B96A5] md:hidden">
              <span>Shipping:</span>{" "}
              <span className="text-[#1C1C1C] font-medium text-base">
                ${tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[#8B96A5] md:hidden">
              <span>Tax:</span>{" "}
              <span className="text-[#1C1C1C] font-medium text-base">
                ${tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[#1C1C1C] font-semibold text-lg pt-2 md:hidden">
              <span>Total:</span> <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#00B517] text-white py-2 text-base rounded mt-2 font-medium md:hidden">
              Checkout (3 items)
            </button>
          </div>
        </div>

        <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-600 mt-10 hidden">
          <div className="flex justify-start gap-2">
            <img src="/icon.png" alt="" />
            <div>
              <p className="font-semibold text-left">Secure payment</p>
              <p>Have you ever finally just</p>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <img src="/icon (1).png" alt="" />
            <div>
              <p className="font-semibold text-left">Customer support</p>
              <p>Have you ever finally just</p>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <img src="/icon (2).png" alt="" />
            <div>
              <p className="font-semibold text-left">Free delivery</p>
              <p>Have you ever finally just</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Saved for later</h3>
          <div className="flex flex-col gap-3 md:grid md:grid-cols-4 lg:grid-cols-4 md:gap-4">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white px-3 py-3 rounded shadow-sm flex items-center gap-3 md:flex-col md:text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[70px] h-[70px] lg:w-full lg:h-full object-covers rounded bg-gray-100 hover:duration-600 hover:scale-105 transition-transform ease-in-out"
                />
                <div className="flex flex-col text-left md:text-center">
                  <p className="font-semibold text-sm leading-tight lg:hidden">
                    {item.name}
                  </p>
                  <p className="text-base text-[#333333] font-semibold lg:text-[#1C1C1C] lg:text-left">
                    {item.price}
                  </p>
                  <p className="font-semibold text-base leading-tight lg:leading-6 text-[#606060] lg:font-normal lg:text-left hidden lg:inline-block">
                    {item.name}
                  </p>
                  <div className="flex gap-2 mt-1">
                    <button className="text-[#0D6EFD] text-[13px] lg:text-base font-medium border-1 border-[#DEE2E7] px-2 py-1 rounded lg:inline-flex gap-2 hover:bg-gray-200 hover:duration-100  transition-transform ease-in-out">
                      <img
                        src="/Vector5.png"
                        alt=""
                        className="hidden lg:inline-block"
                      />
                      Move to cart
                    </button>
                    <button className="text-[#FA3434] text-xs border border-gray-300 px-2 py-1 rounded lg:hidden ">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-500 text-white text-center py-6 mt-10 rounded">
          <h4 className="font-semibold text-lg">
            Super discount on more than 100 USD
          </h4>
          <p>Have you ever finally just write dummy info</p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 mt-2 rounded">
            Shop now
          </button>
        </div>
      </main>
    </div>
  );
}
