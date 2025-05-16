import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";



import categoryData from "../components/jsonfile/DiningCategories.json";

export default function DiningCategories() {
  return (
    
    <div className="px-6 py-6">
         <h2 className="text-2xl font-semibold mb-2">Explore Places In Your City</h2>
      <p className="text-gray-500 mb-4">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
      </p>
      
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categoryData.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition-all duration-300">
              <img
                src={cat.img}
                alt={cat.title}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="text-md font-semibold">{cat.title}</h3>
                <p className="text-sm text-gray-600">{cat.places}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
