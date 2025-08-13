import React, { useEffect, useState } from "react";
import AOS from "aos";
import { FaArrowUp, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import Navbar from "./src/components/navbar";
import HeroSection from "./src/components/hero";
import AmenitiesSection from "./src/components/amenities";
import ScrollImageReveal from "./src/components/rooms";
import Gallery from "./src/components/gallery";
import Places from "./src/components/places";
import Properties from "./src/components/properties";
import Footer from "./src/components/footer";
import logo from "./src/assets/mobile_logo.png";
import { Routes, Route } from "react-router-dom";
import ThankYou from "./src/pages/thankyou";
import LandingPageSEO from "./src/components/landing_pageSEO";
import SuperDeluxeRooms from "./src/pages/SuperDeluxePage";
import DeluxeACRooms from "./src/pages/DeluxeACRooms";
import TreeHouse from "./src/pages/TreeHouse";
import BoatHouse from "./src/pages/BoatHouse";
import TriangleRoom from "./src/pages/TriangleRoom";

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        data-aos="zoom-out"
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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl"></div>
      </div>
    );
  }

  return (
    <>
      <LandingPageSEO />
      <Routes>
        <Route
          path="/"
          element={
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

              {/* Scroll to Top Button */}
              {showScroll && (
                <button
                  onClick={scrollToTop}
                  className="fixed md:bottom-6 md:right-6 bottom-3 right-3 bg-slate-950 rounded-full border-2 border-sky-200 text-sky-200 p-3 shadow-lg hover:bg-white/60 transition z-50"
                >
                  <FaArrowUp size={30} />
                </button>
              )}

              {/* Floating Phone & WhatsApp Buttons */}
              <div className="fixed md:bottom-6 md:left-6 bottom-3 left-3 flex flex-col space-y-3 z-[999] rounded-full">
                <a
                  href="tel:+917276862000"
                  className="bg-slate-950 border-2 border-sky-200 text-sky-200 p-3 shadow-lg hover:bg-white/60 transition rounded-full"
                >
                  <FaPhoneAlt size={30} />
                </a>
                <a
                  href="https://wa.me/7276862000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-950 border-2 border-sky-200 text-sky-200 p-3 shadow-lg hover:bg-white/60 transition rounded-full"
                >
                  <FaWhatsapp size={30} />
                </a>
              </div>
            </>
          }
        />

        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/SuperDeluxePage" element={<SuperDeluxeRooms />} />
        <Route path="/DeluxeACRooms" element={<DeluxeACRooms/>} />
        <Route path="/TreeHouse" element={<TreeHouse />} />
        <Route path="/BoatHouse" element={<BoatHouse/>} />
        <Route path="/TriangleRoom" element={<TriangleRoom />} />
      </Routes>
    </>
  );
}

export default App;
