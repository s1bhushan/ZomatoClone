import React from "react";
import config from "../components/jsonfile/ZomatoCards.json";
import ZomatoCard from "../utility/ZomatoCard ";


export default function FoodlogInfo() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
        
      {config.map((item, index) => (
        <ZomatoCard
          key={index}
          image={item.image}
          title={item.title}
          category={item.category}
          price={item.price}
          rating={item.rating}
          location={item.location}
          offer={item.offer}
          link={item.link}
        />
      ))}



    </div>

    
  );
}
