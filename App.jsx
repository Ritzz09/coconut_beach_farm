// src/App.jsx
import React from "react";
import Navbar from "./src/components/navbar";
import HeroSection from "./src/components/hero";
import AmenitiesSection from "./src/components/amenities";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <AmenitiesSection />
    </>
  );
}

export default App;
