import React from 'react'
import { Route, BrowserRouter as Router,Routes,Link } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Info from '../pages/Info';
import Contact from '../pages/Contact';
import Offers from '../pages/Offers';
import Restaurants from '../pages/Restaurants';
import HotelSandeepPage from '../Hotels/HotelSandeepPage';


export default function Navbar() {
  return (
    <Router>
    <div className="fixed top-0 left-0 w-full bg-red-400 z-50 shadow-md" >
        
        <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
  <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    <Link to='/' className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
      Zomato
    </Link>
 
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {/* Home  */}

       <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6 text-slate-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9.75L12 3l9 6.75M4.5 10.5V19.5a1.5 1.5 0 001.5 1.5h3.75v-6.75H14.25V21h3.75a1.5 1.5 0 001.5-1.5V10.5"
    />
  </svg>

  <Link to="/" className="flex items-center">
    Home
  </Link>
</li>


        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600"/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
 
          <Link to='/login' className="flex items-center">
            Account
          </Link>

          {/* Contact  */}
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6 text-slate-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15a.75.75 0 0 0 .75-.75v-3.472a.75.75 0 0 0-.517-.714l-3.013-.945a.75.75 0 0 0-.877.273l-.917 1.278a11.25 11.25 0 0 1-5.377-5.377l1.278-.917a.75.75 0 0 0 .273-.877l-.945-3.013a.75.75 0 0 0-.714-.517H3a.75.75 0 0 0-.75.75z"
    />
  </svg>

  <Link to="/contact" className="flex items-center">
    Contact Us
  </Link>
</li>

        {/* Offer */}
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6 text-slate-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5h.01M21 13.255V7.5a2.25 2.25 0 00-2.25-2.25H14.25a.75.75 0 00-.53.22l-9 9a2.121 2.121 0 003 3l9-9a.75.75 0 00.22-.53V7.5"
    />
  </svg>

  <Link to="/offer" className="flex items-center">
    Offers
  </Link>
</li>

      </ul>
    </div>
    <div className="items-center hidden gap-x-2 lg:flex">
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text" className="w-full pl-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
        </div>
      </div>
      <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        Search
      </button>
    </div>
    <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
    </div>

 <Routes>
                      <Route path="/" element = {<Home/>}/>
                       <Route path="/login" element = {<Login/>}/>
                       <Route path="/register" element = {<Register/>}/>
                       <Route path="/info" element ={<Info/>}/>
                       <Route path="/contact" element={<Contact/>}/>
                       <Route path="/offer" element={<Offers/>}/>
                          <Route path="/restaurants" element={<Restaurants/>}/>
                          <Route path="/sandeephotel" element={<HotelSandeepPage/>}/>

                  </Routes>

    </Router>
  )
}
