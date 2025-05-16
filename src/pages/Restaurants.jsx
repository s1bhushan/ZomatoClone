import React from 'react'
import Cozy from '../components/Cozy'
import Footer from '../utility/Footer'

export default function Restaurants() {
  return (
    <div className="pt-40 p-4 font-sans">

<h2 className="text-2xl font-semibold mb-2">Restaurants Near Me</h2>
      <p className="text-gray-500 mb-4">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
      </p>


<Cozy/>


      <Footer/>

    </div>
  )
}
