import React from 'react'
import Foodlog from '../components/Foodlog'
import Footer from '../utility/Footer'
import FoodlogInfo from '../components/FoodlogInfo'
import OfferBanner from '../utility/OfferBanner'
import DiningCategories from '../utility/DiningCategories'
import ZomatoUIClone from '../utility/ZomatoUIClone'
// import Corosoul from '../components/Corosoul'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="pt-40">
        <ZomatoUIClone />
      </div>

      <main className="flex-grow pt-20 px-4">
        {/* <Carousel /> Uncomment when ready */}
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Best Food in Pune
        </h1>
        <div className="pt-20">
          <Foodlog />
        </div>
      </main>

      <div className="pt-20">
        <div className="bg-gray-100 min-h-screen">
          <DiningCategories />
          <OfferBanner />
        </div>
      </div>

      <div className="pt-20">
        <FoodlogInfo />
      </div>

      <Footer />
    </div>
  )
}
