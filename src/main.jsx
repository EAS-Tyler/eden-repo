import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './pages/components/Header.jsx';
import Home2 from './pages/components/tys-new/Home2.jsx'
import ContactUs from './pages/components/tys-new/ContactUs.jsx'
import Chalets from './pages/components/tys-new/Chalets.jsx'


import Gala from './pages/components/tys-new/Chalets/Gala.jsx';
import Braeburn from './pages/components/tys-new/Chalets/Braeburn.jsx';
import Honeycrisp from './pages/components/tys-new/Chalets/Honeycrisp.jsx';
import LocalInfo from './pages/components/tys-new/LocalInfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <Header />  
      <Routes>
        <Route index element={<App />} />
        <Route path="/home" element={<Home2/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/chalets" element={<Chalets/>} />
        <Route path="/localinfo" element={<LocalInfo/>} />
        <Route path="/gala" element={<Gala/>} />
        <Route path="/honeycrisp" element={<Honeycrisp/>} />
        <Route path="/braeburn" element={<Braeburn/>} />

      </Routes>
    </Router>
  </React.StrictMode>,

)
