import React from 'react'
import Foodlog from '../components/Foodlog'
import Footer from '../utility/Footer'


export default function Delivery() {
  return (
    <div>
        <div className="pt-40">
            
                  <main className="flex-grow pt-20 px-4">
                    {/* <Carousel /> Uncomment when ready */}
                    <h1 className="text-2xl font-semibold mb-4 text-center">
                      Best Food in Pune
                    </h1>
                    <div className="pt-20">
                      <Foodlog/>
                    </div>
                  </main>
                  
                  <Footer/>

              </div>
        


    </div>
  )
}
