import React from 'react';
import { ChevronDown } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo-colored.png" alt="" width="130" height="80" />
            </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Best information about the company goes here but now lorem ipsum is</p>
            <div className="flex space-x-2">
              {/* {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social) => ( */}
                <div className="h-8 w-8 flex items-center justify-center">
                  <span className="text-xs text-gray-500"><img src="/Facebook.png" alt="" /></span>
                </div>
                <div className="h-8 w-8 flex items-center justify-center">
                  <span className="text-xs text-gray-500"><img src="/twitter.png" alt="" /></span>
                </div>
                <div className="h-8 w-8 flex items-center justify-center">
                  <span className="text-xs text-gray-500"><img src="/linkedin.png" alt="" /></span>
                </div>
                <div className="h-8 w-8 flex items-center justify-center">
                  <span className="text-xs text-gray-500"><img src="/instagram.png" alt="" /></span>
                </div>
                <div className="h-8 w-8 flex items-center justify-center">
                  <span className="text-xs text-gray-500"><img src="/youtube.png" alt="" /></span>
                </div>
              {/* ))} */}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-[#1C1C1C] text-base">About</h3>
            <ul className="space-y-1">
              {['About Us', 'Find store', 'Categories', 'Blogs'].map((item) => (
                <li key={item} className="text-base font-normal text-[#8B96A5] hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-[#1C1C1C] text-base">Partnership</h3>
            <ul className="space-y-1">
              {['About Us', 'Find store', 'Categories', 'Blogs'].map((item) => (
                <li key={item} className="text-base font-normal text-[#8B96A5] hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-[#1C1C1C] text-base">Information</h3>
            <ul className="space-y-1">
              {['Help Center', 'Money Refund', 'Shipping', 'Contact us'].map((item) => (
                <li key={item} className="text-base font-normal text-[#8B96A5] hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-[#1C1C1C] text-base">For users</h3>
            <ul className="space-y-1">
              {['Login', 'Register', 'Settings', 'My Orders'].map((item) => (
                <li key={item} className="text-base font-normal text-[#8B96A5] hover:text-blue-500 cursor-pointer">{item}</li>
              ))}
            </ul>            
          </div>
          <div>
            <h3 className="font-medium mb-4 text-[#1C1C1C] text-base">Get app</h3>
            <div className="flex flex-col space-x-2">
              <div className="rounded-md">
                <span className="text-xs"><img src="/google.png" alt="" /></span>
              </div>
              <div className="rounded-md py-1">
                <span className="text-xs"><img src="/apple.png" alt="" /></span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2023 Ecommerce.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-sm text-gray-500 mr-2">English</span>
            <img src="https://flagcdn.com/w20/us.png" alt="English" className="h-4" />
            <ChevronDown size={14} className="ml-1 text-gray-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;