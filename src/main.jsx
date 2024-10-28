import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/about/About.jsx'
import Region from './pages/region/Region.jsx'
import Regions from './pages/regions/Regions.jsx'
import Location from './pages/location/Location.jsx'
import Header from './pages/components/Header.jsx';
import Background from './pages/components/Background.jsx';
import Reviews from './pages/components/Reviews.jsx';
import Facilities from './pages/components/Facilities.jsx';
import Home from './pages/components/Home.jsx'
import LocalInfo from './pages/components/LocalInfo.jsx';
import Chalets from './pages/components/tys-new/Chalets.jsx';
import Gala from './pages/components/tys-new/Chalets/Gala.jsx';
import Braeburn from './pages/components/tys-new/Chalets/Braeburn.jsx';
import Honeycrisp from './pages/components/tys-new/Chalets/Honeycrisp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <Header />  
      <Routes>
        <Route index element={<App />} />
        <Route path="/background" element={<Background/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/facilities" element={<Facilities/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/local%20information" element={<LocalInfo/>} />
        <Route path="/chalets" element={<Chalets/>} />
        
        
        
        <Route path="/gala" element={<Gala/>} />
        <Route path="/honeycrisp" element={<Honeycrisp/>} />
        <Route path="/braeburn" element={<Braeburn/>} />

{/* home, chalets, facilities, local information, reviews */}


        <Route path="/about" element={<About />} />
        <Route path="/region/:region" element={<Region />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/location/:location" element={<Location />} />
      </Routes>
    </Router>
  </React.StrictMode>,

)
