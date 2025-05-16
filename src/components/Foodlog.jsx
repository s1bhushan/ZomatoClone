import React from "react";
import config from "../components/jsonfile/FoodComp.json";

export default function FoodlogInfo() {
  let cardArr = config;
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      
      {cardArr.map((eachCard, index) => (
        <div
          key={index}
          className="relative grid h-80 w-80 flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl hover:scale-105 transform transition-shadow transition-transform duration-300"
          style={{
            backgroundImage: `url(${eachCard.Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center text-white">
            <h2 className="mb-2 text-2xl font-semibold">{eachCard.Title}</h2>
            <h5 className="mb-4 text-lg font-medium text-slate-300">
              {eachCard.Info}
            </h5>
            {/* Use a separate avatar image if available */}
            <img
              alt={eachCard.Title}
              src={eachCard.AvatarImg || eachCard.Img}
              className="inline-block h-32 w-32 rounded-full border-4 border-white object-cover"
            />
          </div>
          {/* Example badge for rating */}
          {eachCard.Rating && (
            <div className="absolute top-3 right-3 rounded bg-green-600 px-2 py-1 text-sm font-semibold text-white">
              {eachCard.Rating}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
