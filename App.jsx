// src/App.jsx
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./src/components/navbar";
import HeroSection from "./src/components/hero";
import AmenitiesSection from "./src/components/amenities";
import ScrollImageReveal from "./src/components/rooms";
import Gallery from "./src/components/gallery";
import Places from "./src/components/places";
import Properties from "./src/components/properties";
// import BlogSlider from "./src/components/blog";
import Footer from "./src/components/footer";



function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,  // animation duration in ms
    once: true       // whether animation should happen only once
  });
}, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <AmenitiesSection />
      <ScrollImageReveal />
      <Gallery />
      <Places />
      <Properties/>
      {/* <BlogSlider /> */}

      <Footer />
    </>
  );
}

export default App;
