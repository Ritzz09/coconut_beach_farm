// src/App.jsx
import React from "react";
import Navbar from "./src/components/navbar";
import HeroSection from "./src/components/hero";
import AmenitiesSection from "./src/components/amenities";
import ScrollImageReveal from "./src/components/rooms";
import Gallery from "./src/components/gallery";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AmenitiesSection />
      <ScrollImageReveal />
      <Gallery />
    </>
  );
}

export default App;
