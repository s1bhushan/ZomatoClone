import React, { useState } from "react";
import { PhoneCall, MapPin, Star } from "lucide-react";
import Footer from "../utility/Footer";

const categories = [
  "Tandoori Starters (8)",
  "Veg Curries (10)",
  "Non-Veg Curries (12)",
  "Biryani & Rice (9)",
  "Indian Breads (7)",
  "Chinese (10)",
  "Rolls & Wraps (6)",
  "Soups & Salads (5)",
  "Desserts (6)",
  "Beverages (8)"
];


const DesiSpice = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tandoori Starters (8)");

  return (
    <div>
      <div className="p-4 max-w-6xl mx-auto pt-40">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Desi Spice Hotel</h1>
          <p className="text-gray-600">North Indian, Chinese, Mughlai, Beverages</p>
          <p className="text-gray-500 text-sm">
            145 JM Road, Near Deccan Gymkhana, Pune
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-green-600 font-semibold">Open now</span>
            <span className="text-sm text-gray-600">11am – 11:30pm (Today)</span>
            <a href="tel:+919812345678" className="text-blue-600 flex items-center">
              <PhoneCall size={16} className="mr-1" /> +91 9812345678
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mb-6">
          <button className="text-sm border px-3 py-1 rounded-lg flex items-center">
            <MapPin className="mr-2 h-4 w-4" /> Direction
          </button>
          <button className="text-sm border px-3 py-1 rounded-lg">Share</button>
          <button className="text-sm border px-3 py-1 rounded-lg">Reviews</button>
        </div>

        {/* Images */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <img
            src="https://source.unsplash.com/featured/?mughlai"
            alt="DesiSpice1"
            className="rounded-xl h-40 object-cover"
          />
          <img
            src="https://source.unsplash.com/featured/?indianrestaurant"
            alt="DesiSpice2"
            className="rounded-xl h-40 object-cover"
          />
          <img
            src="https://source.unsplash.com/featured/?northindianfood"
            alt="DesiSpice3"
            className="rounded-xl h-40 object-cover"
          />
          <img
            src="https://source.unsplash.com/featured/?biryani"
            alt="DesiSpice4"
            className="rounded-xl h-40 object-cover"
          />
        </div>

        {/* Ratings */}
        <div className="flex gap-8 mb-6">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star fill="currentColor" size={18} /> <span>4.1</span>
            <span className="text-gray-600">(856 Dining Ratings)</span>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <Star fill="currentColor" size={18} /> <span>4.3</span>
            <span className="text-gray-600">(4,219 Delivery Ratings)</span>
          </div>
        </div>

        {/* Tabs */}
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

        {/* Content */}
        <div className="flex">
          {/* Sidebar */}
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

          {/* Menu Items */}
          <div className="w-3/4">
            <h2 className="text-lg font-semibold mb-4">{selectedCategory}</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Chicken Tikka</p>
                <p className="text-sm text-gray-600">₹279</p>
                <p className="text-xs text-gray-500">
                  Boneless chicken chunks marinated in spices and grilled to perfection.
                </p>
              </div>
              <div>
                <p className="font-medium">Hara Bhara Kebab</p>
                <p className="text-sm text-gray-600">₹189</p>
                <p className="text-xs text-gray-500">
                  Veg kebabs made with spinach, peas and potatoes — served with mint chutney.
                </p>
              </div>
              <div>
                <p className="font-medium">Mutton Seekh Kebab</p>
                <p className="text-sm text-gray-600">₹299</p>
                <p className="text-xs text-gray-500">
                  Minced mutton blended with spices and grilled on skewers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* App Banner */}
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
      <Footer />
    </div>
  );
};

export default DesiSpice;
