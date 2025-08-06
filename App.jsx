import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./src/components/navbar";
import HeroSection from "./src/components/hero";
import AmenitiesSection from "./src/components/amenities";
import ScrollImageReveal from "./src/components/rooms";
import Gallery from "./src/components/gallery";
import Places from "./src/components/places";
import Properties from "./src/components/properties";
// import BlogSlider from "./src/components/blog";
import Footer from "./src/components/footer";
import logo from "./src/assets/mobile_logo.png";

// ✅ Import the SEO component
import LandingPageSEO from "./src/components/landing_pageSEO";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* ✅ SEO only applies here */}
      <LandingPageSEO />

      {loading ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
          style={{
            background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
          }}
        >
          <img
            src={logo}
            alt="Loading..."
            className="w-35 h-35 p-4 border-2 border-dashed border-white/50 rounded-full spin-slow z-100"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AmenitiesSection />
          <ScrollImageReveal />
          <Gallery />
          <Places />
          <Properties />
          {/* <BlogSlider /> */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
