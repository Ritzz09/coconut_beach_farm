import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";

// SEO & logo
import LandingPageSEO from "./src/components/landing_pageSEO";
import logo from "./src/assets/mobile_logo.png";

// All components (shared or homepage)
import Navbar from "./src/components/navbar";
import HeroSection from "./src/components/hero";
import AmenitiesSection from "./src/components/amenities";
import ScrollImageReveal from "./src/components/rooms";
import Gallery from "./src/components/gallery";
import Places from "./src/components/places";
import Properties from "./src/components/properties";
import Footer from "./src/components/footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
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

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AmenitiesSection />
                  <ScrollImageReveal />
                  <Gallery />
                  <Places />
                  <Properties />
                </>
              }
            />

            {/* <Route
              path="/contact"
              element={
                <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
                  Contact Page
                </div>
              }
            /> */}

            {/* You can add more inline routes here */}
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
