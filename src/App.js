import './App.css';
import Navbar from './components/Navbar';
import { AuthProvider } from "../src/context/AuthContext";

import { Route, BrowserRouter as Router,Routes } from "react-router-dom";

import ProtectedRoute from "../src/context/ProtectedRoute";


import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Info from '../src/pages/Info';
import Contact from '../src/pages/Contact';
import Offers from '../src/pages/Offers';
import Restaurants from '../src/pages/Restaurants';
import CDock from '../src/Hotels/CDock';
import Domino from '../src/Hotels/Domino';

import SunsetGrill from '../src/Hotels/SunsetGrill';
import Delivery from '../src/pages/Delivery';
import DesiSpice from '../src/Hotels/DesiSpice';
import Admin from '../src/pages/Admin';
import Profile from '../src/pages/Profile';
import SearchResults from './context/SearchResults';
import User from './pages/User';
import UnauthorizedPage from './pages/UnauthorizedPage';

function App() {
  return (
     <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
                      <Route path="/" element = {<Home/>}/>
                       <Route path="/login" element = {<Login/>}/>
                       <Route path="/register" element = {<Register/>}/>
                       <Route path="/info" element ={<Info/>}/>
                       <Route path="/contact" element={<Contact/>}/>
                       <Route path="/offer" element={<Offers/>}/>
                       <Route path="/restaurants" element={<Restaurants/>}/>
                       <Route path="/cdock" element={<CDock/>}/>
                       <Route path="/domino" element={<Domino/>}/>
                       <Route path="/sunset" element={<SunsetGrill/>}/>
                       <Route path="/desispice" element={<DesiSpice/>}/>
                       <Route path="/delivery" element={<Delivery/>}/>
                       <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly={true}>
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user"
        element={
          <ProtectedRoute userOnly={true}>
            <User />
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<UnauthorizedPage />} />


                       <Route path="/profile" element={<Profile />} />
                       <Route path="/search" element={<SearchResults />} />

                  </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
