import React, { useState } from "react";

import { PhoneCall, MapPin, Star } from "lucide-react";



const categories = [
  "Special Menu (32)",
  "Starters (17)",
  "Main Course (38)",
  "Breads (20)",
  "Rice And Biryani (11)",
  "Chinese (28)",
  "Snacks (4)",
  "Soups (15)",
  "Accompaniments (16)",
  "Drinks (Beverages) (8)"
];
const HotelSandeepPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("Special Menu (32)");

  return (
    <div className="p-4 max-w-6xl mx-auto pt-40">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hotel Sandeep</h1>
        <p className="text-gray-600">
          Maharashtrian, North Indian, Chinese, Mughlai
        </p>
        <p className="text-gray-500 text-sm">
          Survey 1204/3, Ghole Road, Near JM Road, Pune
        </p>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-red-500 font-semibold">Open now</span>
          <span className="text-sm text-gray-600">11am - 11pm (Today)</span>
          <a href="tel:+91458460303" className="text-blue-600 flex items-center">
            <PhoneCall size={16} className="mr-1" /> +91 4548460303
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-6">
        <button className="text-sm border px-3 py-1 rounded-lg flex items-center">
          <MapPin className="mr-2 h-4 w-4" /> Direction
        </button>
        <button className="text-sm border px-3 py-1 rounded-lg">Share</button>
        <button className="text-sm border px-3 py-1 rounded-lg">Reviews</button>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <img
          src="https://b.zmtcdn.com/data/pictures/8/19655918/9d5ab2ac6b74c48100c04f99269c447f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="Dish 1"
          className="rounded-xl h-40 object-cover"
        />
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/8/19655918/9d5ab2ac6b74c48100c04f99269c447f.jpg?fit=around|300:273&crop=300:273;*,*"
          alt="Dish 2"
          className="rounded-xl h-40 object-cover"
        />
        <img
          src="https://b.zmtcdn.com/data/pictures/8/19655918/739c814473cf8be859cbbd548f95af73.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          alt="Hotel"
          className="rounded-xl h-40 object-cover"
        />
      </div>

      {/* Rating Section */}
      <div className="flex gap-8 mb-6">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star fill="currentColor" size={18} /> <span>3.1</span>
          <span className="text-gray-600">(127 Dining Ratings)</span>
        </div>
        <div className="flex items-center gap-1 text-green-600">
          <Star fill="currentColor" size={18} /> <span>4.3</span>
          <span className="text-gray-600">(15.1K Delivery Ratings)</span>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-b border-gray-300 mb-4">
        <div className="flex space-x-6 text-sm">
          <button className="border-b-2 border-red-500 pb-2 font-semibold text-red-600">
            Order Online
          </button>
          <button className="text-gray-600">Overview</button>
          <button className="text-gray-600">Reviews</button>
          <button className="text-gray-600">Photos</button>
          <button className="text-gray-600">Menu</button>
        </div>
      </div>

     

      {/* Content Section */}
      <div className="flex">
        {/* Sidebar Categories */}
        <div className="w-1/4 pr-6 text-sm text-gray-700">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer hover:text-red-600 ${selectedCategory === category ? "text-red-600 font-semibold" : ""}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Best in Naan Section */}
        <div className="w-3/4">
          <h2 className="text-lg font-semibold mb-4">Best in Naan</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Cheese Naan</p>
              <p className="text-sm text-gray-600">₹115</p>
            </div>
            <div>
              <p className="font-medium">Garlic Butter Naan</p>
              <p className="text-sm text-gray-600">₹109</p>
            </div>
            <div className="flex items-start gap-4">
              <img src="https://b.zmtcdn.com/data/dish_photos/516/8c74b6e884b8d999d4472efbe33b7516.png?fit=around|130:130&crop=130:130;*,*" alt="Cheese Garlic Naan" className="h-20 w-20 object-cover rounded" />
              <div>
                <p className="font-medium">Cheese Garlic Naan</p>
                <p className="text-sm text-gray-600">₹126</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Message */}
      <div className="pt-20">
      <div className="flex items-center p-4 bg-black text-white rounded-xl shadow-lg">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato App" className="h-10 mr-4" />
        <div>
          <p className="font-semibold text-white">Online ordering is only supported on the mobile app</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2">Download the App</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HotelSandeepPage;
