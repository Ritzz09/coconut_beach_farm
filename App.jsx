// src/App.jsx
import React from "react";
import Navbar from "./src/components/navbar";
import HeroSection from "./src/components/hero";
import AmenitiesSection from "./src/components/amenities";
import ScrollImageReveal from "./src/components/rooms";
import Gallery from "./src/components/gallery";
import Places from "./src/components/places";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AmenitiesSection />
      <ScrollImageReveal />
      <Gallery />
      <Places />
    </>
  );
}

export default App;
