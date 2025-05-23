import React from "react";

import CozyCafes from "../utility/CozyCafes";
import Cozyconfig from "../components/jsonfile/CozyCafes.json";

export default function Cozy() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      

{/* Cozycafes */}


        {Cozyconfig.map((item, index) => (
        <CozyCafes
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
