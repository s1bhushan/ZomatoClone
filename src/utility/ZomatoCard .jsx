import React from "react";
import { Link } from 'react-router-dom'

export default function ZomatoCard({
  image,
  title,
  category,
  price,
  rating,
  location,
  offer,
  link,
  
}) {
  return (
    <Link to={link}>
    <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        
      <div className="relative">
        {/* Restaurant Image */}
        <img src={image} alt={title} className="h-44 w-full object-cover rounded-t-lg" />
        
        {/* Offer badge */}
        {offer && (
          <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" fill="none" 
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
            <span>{offer}</span>
          </div>
        )}

        {/* Rating bubble */}
        <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1 select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current text-white"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.785.57-1.838-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.037 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
          </svg>
          <span>{rating}</span>
        </div>
      </div>

      {/* Details below image */}
      <div className="p-4 space-y-1">
        <h3 className="text-base font-semibold text-gray-900 leading-tight">{title}</h3>
        <p className="text-gray-500 text-sm truncate">{category}</p>
        <div className="flex justify-between text-gray-700 text-sm mt-1">
          <span>₹{price} for two</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}
