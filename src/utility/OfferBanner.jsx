// OfferBanner.js
import React from "react";

export default function OfferBanner() {
  return (
    <div className="relative w-full bg-black text-white rounded-xl overflow-hidden flex justify-between items-center p-6 mt-6 mx-6">
      <div className="z-10">
        <h2 className="text-3xl font-bold">Get up to</h2>
        <h1 className="text-5xl font-extrabold text-red-500">50% OFF</h1>
        <p className="mt-2 text-sm">on your dining bills with Zomato</p>
        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
          Check out all the restaurants
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1485686531765-ba63b07845a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxjYWZlfGVufDB8fDB8fHww"
        alt="Offer Food"
        className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-40"
      />
    </div>
  );
}
