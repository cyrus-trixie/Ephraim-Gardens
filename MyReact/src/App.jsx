import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 

import HomePage from './pages/HomePage'; 
import ContactPage from './pages/ContactPage'; 
import GalleryPage from './pages/GalleryPage'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar /> {/* The navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* You can add more routes here for other pages */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;