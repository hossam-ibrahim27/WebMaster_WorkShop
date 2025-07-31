import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';

export default function BlogSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-1xl ">
      {/* 1. قسم "RECENT POSTS" */}
      <h3 className="text-xl font-bold mb-4 text-left border-b pb-2">Recent Posts</h3>
      <ul className="space-y-4 mb-8">
        <li>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="src/images/blog/blog_recent_1.jpg"
              alt="Recent Post"
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 text-left">But I must explain to you how all this mistaken idea</p>
              <p className="text-xs text-gray-500 text-left mt-1">Jan 10, 2023</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="src/images/blog/blog_recent_2.jpg"
              alt="Recent Post"
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 text-left">The Problem With Typefaces on the Web</p>
              <p className="text-xs text-gray-500 text-left mt-1">Feb 25, 2023</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="src/images/blog/blog_recent_3.jpg"
              alt="Recent Post"
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 text-left">English Breakfast Tea With Tasty Donut Desserts</p>
              <p className="text-xs text-gray-500 text-left mt-1">Mar 01, 2023</p>
            </div>
          </div>
        </li>
      </ul>

      {/* 2. قسم "FOLLOW US" - الأيقونات قبل النص */}
      <h3 className="text-xl font-bold mb-4 text-left border-b pb-2">Follow Us</h3>
      <br/>
 <div className="flex flex-col gap-3 mb-8">
  <button className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white text-base font-semibold cursor-pointer hover:bg-blue-700 transition-colors duration-200">
    <FontAwesomeIcon icon={faFacebookF} className="mr-1" />&nbsp;&nbsp; Facebook
  </button>
  <button className="flex items-center justify-center px-4 py-2 rounded-md bg-sky-500 text-white text-base font-semibold cursor-pointer hover:bg-sky-600 transition-colors duration-200">
    <FontAwesomeIcon icon={faTwitter} className="mr-1" /> &nbsp;&nbsp; Twitter
  </button>
  <button className="flex items-center justify-center px-4 py-2 rounded-md bg-pink-600 text-white text-base font-semibold cursor-pointer hover:bg-pink-700 transition-colors duration-200">
    <FontAwesomeIcon icon={faInstagram} className="mr-1" />&nbsp;&nbsp; Instagram
  </button>
  <button className="flex items-center justify-center px-4 py-2 rounded-md bg-red-600 text-white text-base font-semibold cursor-pointer hover:bg-red-700 transition-colors duration-200">
    <FontAwesomeIcon icon={faYoutube} className="mr-1" />&nbsp;&nbsp; YouTube
  </button>
  <button className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-700 text-white text-base font-semibold cursor-pointer hover:bg-blue-800 transition-colors duration-200">
    <FontAwesomeIcon icon={faPinterestP} className="mr-1" />&nbsp;&nbsp; Pinterest
  </button>
</div>
      {/* 3. قسم "ADVERTISEMENT" */}
      <h3 className="text-xl font-bold mb-4 text-left border-b pb-2">Advertisement</h3>
      <br/>
      <div className="mb-8 flex justify-center">
        <img
          src="src/images/blog/ad_banner.jpg"
          alt="Ad Banner"
          className="w-100 h-auto rounded-md object-cover cursor-pointer"
        />
      </div>

      {/* 4. قسم "TAGS" */}
    
<h3 className="text-3xl font-bold mb-4 text-left border-b pb-2">Tags</h3>
<br/>
<div className="grid grid-cols-3 gap-2 ">
  {[
    "ecommerce", "food", "grocery", "kibtheme", "organic",
    "shop", "shopify", "store", "drink"
  ].map((tag, index) => (
    <span
      key={index}
      className="px-5 py-1 bg-gray-200 text-gray-700 text-base rounded-md text-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
    >
      {tag}
    </span>
  ))}
</div>
<br/>
    </div>
  );
}
