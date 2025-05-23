import React, { useState } from "react";
import { PhoneCall, MapPin, Star } from "lucide-react";
import Footer from "../utility/Footer";

const categories = [
  "All-New Juicylicious Pizzas & More! (20)",
  "Veg Pizza (13)",
  "Non Veg Pizza (11)",
  "Thin n Crispy Pizzas (6)",
  "Flavour Fun Range (13)",
  "Party Combo (2)",
  "Garlic Bread (3)",
  "Pasta (10)",
  "Appetizer (11)",
  "Drinks & Desserts (7)",
  "MELTS - Crispy. Cheesy. Loaded. (12)",
  "Meals And Deals : Better With Pepsi (6)",
  "Flash Sale Pizza (2)",
  "Flat 129 (5)",
  "Flat 199 (6)",
  "Flat 269 (5)",
  "Flat 349 (8)"
];

const PizzaHutPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All-New Juicylicious Pizzas & More! (20)");

  return (
    <div>
    <div className="p-4 max-w-6xl mx-auto pt-40">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Pizza Hut</h1>
        <p className="text-gray-600">Pizza, Pasta, Fast Food, Beverages</p>
        <p className="text-gray-500 text-sm">
          1216/2/1216/3, Millennium Plaza, Opposite F C College, Near FC Road, Pune
        </p>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-red-500 font-semibold">Open now</span>
          <span className="text-sm text-gray-600">12midnight – 3am, 10am – 12midnight (Today)</span>
          <a href="tel:+918655616021" className="text-blue-600 flex items-center">
            <PhoneCall size={16} className="mr-1" /> +91 8655616021
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
      <div className="grid grid-cols-4 gap-4 mb-6">
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/3/10503/8825db90e0b3e0013bffefdd596eaf58.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="PizzaHut1"
          className="rounded-xl h-40 object-cover"
        />
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/3/10503/4f4440d6f4e39151f92a850c27ac13f7.jpg?fit=around|300:273&crop=300:273;*,*"
          alt="PizzaHut2"
          className="rounded-xl h-40 object-cover"
        />
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/3/10503/6d4d04396c5d7f59c760fceeaed5693f.jpg?fit=around|300:273&crop=300:273;*,*"
          alt="PizzaHut3"
          className="rounded-xl h-40 object-cover"
        />
        <img
          src="https://b.zmtcdn.com/data/pictures/9/18429319/05e91ca602dab56651f9e8d8956b4514.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
          alt="PizzaHut4"
          className="rounded-xl h-40 object-cover"
        />
      </div>

      {/* Rating Section */}
      <div className="flex gap-8 mb-6">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star fill="currentColor" size={18} /> <span>3.7</span>
          <span className="text-gray-600">(528 Dining Ratings)</span>
        </div>
        <div className="flex items-center gap-1 text-green-600">
          <Star fill="currentColor" size={18} /> <span>4.0</span>
          <span className="text-gray-600">(7,839 Delivery Ratings)</span>
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
              <p className="font-medium">Baked Southern Fiery Chicken Wings 6pc</p>
              <p className="text-sm text-gray-600">₹259</p>
              <p className="text-xs text-gray-500">
                New | Chicken wings baked in a fiery sauce, bursting with traditional southern flavors.
              </p>
            </div>
            <div>
              <p className="font-medium">Baked Royal Spice Chicken Wings 4pc</p>
              <p className="text-sm text-gray-600">₹219</p>
              <p className="text-xs text-gray-500">
                New | Chicken wings baked in a sauce full of rich, aromatic spices.
              </p>
            </div>
            <div>
              <p className="font-medium">Baked Royal Spice Chicken Wings 6pc</p>
              <p className="text-sm text-gray-600">₹259</p>
              <p className="text-xs text-gray-500">
                New | Chicken wings baked in a sauce full of rich, aromatic spices.
              </p>
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

export default PizzaHutPage;
