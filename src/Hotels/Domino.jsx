import React, { useState } from "react";
import { PhoneCall, MapPin, Star } from "lucide-react";
import Footer from "../utility/Footer";

const categories = [
  "Best in Pizza (10)",
  "Today's Exclusive Dishes (3)",
  "Big Big Pizza (2)",
  "Cheese Burst - 3 New Flavours (22)",
  "Chicken Feast (20)",
  "Cheese Volcano (8)",
  "Party Combo (11)",
  "Value Meals (19)",
  "Dominos Classics (14)",
  "Loaded Pizza (9)",
  "Flavours of India (5)",
  "Gourmet Pizza Range (5)",
  "Pizza Mania (10)",
  "Garlic Breads & More (24)",
  "Desserts (4)",
  "Drinks (Beverages) (6)",
  "Pizza & More (1)"
];

const Domino= () => {
  const [selectedCategory, setSelectedCategory] = useState("Best in Pizza (10)");

  return (
    <div>
    <div className="p-4 max-w-6xl mx-auto pt-40">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Domino's Pizza</h1>
        <p className="text-gray-600">Pizza, Fast Food, Beverages</p>
        <p className="text-gray-500 text-sm">
          Ground Floor, Desai Building, Wing A, CTC 328, 329, 330, 363A, Near KEM Hospital, Rasta Peth, Pune
        </p>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-red-500 font-semibold">Open now</span>
          <span className="text-sm text-gray-600">11am – 10:45pm (Today)</span>
          <a href="tel:+917066005878" className="text-blue-600 flex items-center">
            <PhoneCall size={16} className="mr-1" /> +91 7066005878
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
          src="https://b.zmtcdn.com/data/pictures/chains/6/10506/1adb116d088669540c89150836d668f9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="Dish 1"
          className="rounded-xl h-40 object-cover"
        />
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/6/10506/2781ab2c532b711ecd401571cdd87eb9.jpg?fit=around|300:273&crop=300:273;*,*"
          alt="Dish 2"
          className="rounded-xl h-40 object-cover"
        />
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/6/10506/5ba610384e59e9f69e718b106b2d28c2.jpg?fit=around|300:273&crop=300:273;*,*"
          alt="Dish 3"
          className="rounded-xl h-40 object-cover"
        />
      </div>

      {/* Rating Section */}
      <div className="flex gap-8 mb-6">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star fill="currentColor" size={18} /> <span>2.7</span>
          <span className="text-gray-600">(25 Dining Ratings)</span>
        </div>
        <div className="flex items-center gap-1 text-green-600">
          <Star fill="currentColor" size={18} /> <span>3.6</span>
          <span className="text-gray-600">(2,509 Delivery Ratings)</span>
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
                className={`cursor-pointer hover:text-red-600 ${
                  selectedCategory === category ? "text-red-600 font-semibold" : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Sample Item List */}
        <div className="w-3/4">
          <h2 className="text-lg font-semibold mb-4">{selectedCategory}</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Chicken Dominator Pizza</p>
              <p className="text-sm text-gray-600">₹369</p>
            </div>
            <div>
              <p className="font-medium">Veg Extravaganza Pizza</p>
              <p className="text-sm text-gray-600">₹319</p>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="https://b.zmtcdn.com/data/dish_photos/8a0/25fa8e24f504ffb35d3e8753fb0bf8a0.jpeg?fit=around|130:130&crop=130:130;*,*"
                alt="Paneer Pizza"
                className="h-20 w-20 object-cover rounded"
              />
              <div>
                <p className="font-medium">Indi Tandoori Paneer Pizza</p>
                <p className="text-sm text-gray-600">₹319</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Message */}
      <div className="pt-20">
        <div className="flex items-center p-4 bg-black text-white rounded-xl shadow-lg">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Zomato App"
            className="h-10 mr-4"
          />
          <div>
            <p className="font-semibold text-white">
              Online ordering is only supported on the mobile app
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2">
              Download the App
            </button>
          </div>
        </div>
      </div>
      </div>
       <Footer/>
    </div>

    
  );
};

export default Domino;
