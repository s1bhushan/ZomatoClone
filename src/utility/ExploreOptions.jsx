import React, { useState } from "react";

const ExploreOptions = () => {
  const options = [
    {
      title: "Explore options near me",
      description: "Find top-rated restaurants and cafes around your current location.",
    },
    {
      title: "Popular cuisines near me",
      description: "Discover trending cuisines like North Indian, Chinese, South Indian, and more near you.",
    },
    {
      title: "Popular restaurant types near me",
      description: "Explore restaurants by type – casual dining, cafes, quick bites, and more.",
    },
    {
      title: "Explore Dining Cities at Zomato",
      description: "Browse popular cities known for exceptional dining experiences on Zomato.",
    },
    {
      title: "Restaurants in Popular Locations",
      description: "Find restaurants in popular areas and neighborhoods across your city.",
    },
  ];

  const [selected, setSelected] = useState("");

  const selectedOption = options.find((item) => item.title === selected);

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover More</h2>

        {/* Dropdown */}
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an option</option>
          {options.map((item, index) => (
            <option key={index} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>

        

        {/* Display selected option */}
        {selectedOption && (
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {selectedOption.title}
            </h3>
            <p className="text-gray-500 text-sm">{selectedOption.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreOptions;
