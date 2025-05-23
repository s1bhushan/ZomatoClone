import React, { useEffect, useState } from 'react';
import data from '../components/jsonfile/collections.json'; // Adjust the path if needed
import { Link } from 'react-router-dom'

export default function ZomatoUIClone() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(data);
  }, []);

  return (
    <div className="p-4 font-sans">
      {/* Top Menu */}
      <div className="flex gap-8 text-lg font-medium border-b pb-2 mb-4">
        <span className="text-red-500 border-b-2 border-red-500">Dining Out</span>
       <Link to='/delivery'> <span className="text-gray-500 hover:text-red-500 cursor-pointer">Delivery</span></Link>
        <span className="text-gray-500 hover:text-red-500 cursor-pointer">Nightlife</span>
      </div>

      {/* Collections */}
      <h2 className="text-2xl font-semibold mb-2">Collections</h2>
      <p className="text-gray-500 mb-4">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
      </p>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {collections.map((item, idx) => (
            <Link to={item.link} key={idx}>
          <div className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-3 bg-white">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.places} Places</p>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Bottom Filters */}
      <div className="flex flex-wrap gap-2">
        {["Filters", "Offers", "Rating: 4.5+", "Pet friendly", "Outdoor seating", "Serves Alcohol", "Open Now"].map((filter, idx) => (
          <button key={idx} className="border px-3 py-1 rounded-full text-sm bg-gray-50 hover:bg-red-100 transition">
            {filter}
          </button>
        ))}
      </div>
      
    </div>
  );
}
