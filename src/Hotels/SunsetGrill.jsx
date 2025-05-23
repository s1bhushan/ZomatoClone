
import React, { useState } from "react";
import { PhoneCall, MapPin, Star } from "lucide-react";
import Footer from "../utility/Footer";

const categories = [
  "Starters (10)",
  "Main Course Veg (12)",
  "Main Course Non-Veg (14)",
  "Biryani & Rice (8)",
  "Indian Breads (6)",
  "Salads & Soups (5)",
  "Desserts (7)",
  "Beverages (9)",
  "Combos (4)"
];

const SunsetGrill = () => {
  const [selectedCategory, setSelectedCategory] = useState("Starters (10)");

  return (
    <div>
      <div className="p-4 max-w-6xl mx-auto pt-40">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">SunsetGrill Hotel</h1>
          <p className="text-gray-600">North Indian, Chinese, Grill, Beverages</p>
          <p className="text-gray-500 text-sm">
            Baner Road, Near Symbiosis College, Pune
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-green-600 font-semibold">Open now</span>
            <span className="text-sm text-gray-600">11am – 11pm (Today)</span>
            <a href="tel:+919876543210" className="text-blue-600 flex items-center">
              <PhoneCall size={16} className="mr-1" /> +91 9876543210
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
            src="https://b.zmtcdn.com/data/pictures/chains/1/70481/46c12b79495866c5f46d443e4398f7fe.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
            alt="SunsetGrill1"
            className="rounded-xl h-40 object-cover"
          />
          <img
            src="https://b.zmtcdn.com/data/pictures/1/70481/a7b5c89574ee368ecde666d509af9186.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
            alt="SunsetGrill2"
            className="rounded-xl h-40 object-cover"
          />
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/1/70481/e1a11037cb3aef8ecbe05b6d3dcc6203.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
            alt="SunsetGrill3"
            className="rounded-xl h-40 object-cover"
          />
          <img
            src="https://b.zmtcdn.com/data/reviews_photos/738/c283aee565b70e5368f63634d46f7738_1487874240.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
            alt="SunsetGrill4"
            className="rounded-xl h-40 object-cover"
          />
        </div>

        {/* Ratings */}
        <div className="flex gap-8 mb-6">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star fill="currentColor" size={18} /> <span>4.2</span>
            <span className="text-gray-600">(1,204 Dining Ratings)</span>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <Star fill="currentColor" size={18} /> <span>4.5</span>
            <span className="text-gray-600">(3,821 Delivery Ratings)</span>
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
                <p className="font-medium">Tandoori Chicken (Half)</p>
                <p className="text-sm text-gray-600">₹279</p>
                <p className="text-xs text-gray-500">
                  Juicy chicken marinated in tandoori spices and grilled to perfection.
                </p>
              </div>
              <div>
                <p className="font-medium">Paneer Tikka</p>
                <p className="text-sm text-gray-600">₹249</p>
                <p className="text-xs text-gray-500">
                  Cottage cheese chunks marinated and grilled with veggies.
                </p>
              </div>
              <div>
                <p className="font-medium">Chicken Malai Kebab</p>
                <p className="text-sm text-gray-600">₹299</p>
                <p className="text-xs text-gray-500">
                  Creamy, melt-in-the-mouth chicken skewers with subtle spices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* App Notice */}
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

export default SunsetGrill;
