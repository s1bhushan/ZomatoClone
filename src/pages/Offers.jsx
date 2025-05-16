
import React, { useEffect, useState } from 'react';
import data from '../components/jsonfile/collections.json'; 
import { Link } from 'react-router-dom'
import Footer from '../utility/Footer';



export default function Offers() {

      const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(data);
  }, []);


  return (
    <div className="pt-20">

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
    

     <h2 className="text-2xl font-semibold mb-2">Collections</h2>
      <p className="text-gray-500 mb-4">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {collections.map((item, idx) => (
            <Link to={item.link} key={idx}>
          <div key={idx} className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-3 bg-white">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.places} Places</p>
            </div>
          </div>
          </Link>
        ))}
      </div>

      <Footer/>
    </div>
  )
}
