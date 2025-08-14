import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaHotel, FaImages, FaMonument, FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaBed, FaUsers, FaCrown } from "react-icons/fa";
import {FaTree, FaShip, FaShapes } from 'react-icons/fa';

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/mobile_logo.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [mobileRoomsDropdownOpen, setMobileRoomsDropdownOpen] = useState(false);

  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Room types for dropdown - Updated with correct paths
const roomTypes = [
  { name: "Super Deluxe Rooms", icon: <FaBed />, href: "/room/super-deluxe", isPage: true },
  { name: "Duplex A/C Rooms", icon: <FaHome />, href: "/room/deluxe-ac-room", isPage: true },
  { name: "Tree House", icon: <FaTree />, href: "/room/tree-house", isPage: true },
  { name: "Boat House", icon: <FaShip />, href: "/room/boat-house", isPage: true },
  { name: "Triangle Room", icon: <FaShapes />, href: "/room/triangle-room", isPage: true },
];

  const sections = [
    { name: "Rooms", icon: <FaHotel />, href: "#rooms", hasDropdown: true },
    { name: "Gallery", icon: <FaImages />, href: "#gallery" },
    { name: "Places to visit", icon: <FaMonument />, href: "#places" },
    { name: "Properties", icon: <FaHome />, href: "#properties" },
    { name: "Contact", icon: <FaPhoneAlt />, href: "#contact" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(navbarRef.current, {
        y: -100,
        autoAlpha: 0,
        duration: 1,
        ease: "power2.out",
      });
      tl.from(
        gsap.utils.toArray(".nav-item"),
        {
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.3,
        },
        "-=0.5"
      );
    }, navbarRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setRoomsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Updated function to handle both page navigation and section scrolling
  const handleNavigation = (href, name, isPage = false) => {
    if (isPage) {
      // Navigate to a different page
      window.location.href = href;
    } else {
      // Scroll to section on current page
      const id = href.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    setActiveSection(name);
    setIsMobileMenuOpen(false);
    setRoomsDropdownOpen(false);
    setMobileRoomsDropdownOpen(false);
  };

  // Keep the original function for backward compatibility
  const scrollToSection = (href, name) => {
    handleNavigation(href, name, false);
  };

  const handleRoomsClick = () => {
    setRoomsDropdownOpen(!roomsDropdownOpen);
  };

  const handleMobileRoomsClick = () => {
    setMobileRoomsDropdownOpen(!mobileRoomsDropdownOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        "fixed top-0 left-0 w-full md:z-150 z-100 transition-all duration-300",
        scrolled ? "bg-slate-950/40 shadow-md" : "bg-transparent"
      )}
    >
      <div className="w-full mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-3xl font-merienda text-white tracking-wide"
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("#home", "Home")}
        >
          <img src={logo1} className="md:hidden block w-20 h-14" alt="Logo" loading="lazy" />
          <img src={logo} className="hidden md:block md:w-full w-50 md:h-15 h-8" alt="Logo" loading="lazy" />
        </motion.a>

        {/* Desktop Menu */}
        <div ref={menuRef} className="hidden md:flex gap-10">
          {sections.map((item, index) => (
            <div key={index} className="relative" ref={item.name === "Rooms" ? dropdownRef : null}>
              <motion.div
                onClick={() => item.hasDropdown ? handleRoomsClick() : scrollToSection(item.href, item.name)}
                className={clsx(
                  "nav-item group flex items-center gap-2 text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer",
                  activeSection === item.name
                    ? "text-sky-300"
                    : "text-white hover:text-sky-300"
                )}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <motion.span
                    className="text-sm"
                    animate={{ rotate: roomsDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown />
                  </motion.span>
                )}
                <span className="block h-0.5 w-0 group-hover:w-full bg-sky-300 transition-all duration-300"></span>
              </motion.div>

              {/* Desktop Dropdown Menu */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {roomsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    >
                      {roomTypes.map((room, roomIndex) => (
                        <motion.div
                          key={roomIndex}
                          onClick={() => handleNavigation(room.href, room.name, room.isPage)}
                          className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-sky-50 hover:text-sky-600 cursor-pointer transition-colors"
                          whileHover={{ backgroundColor: "rgba(14, 165, 233, 0.1)" }}
                        >
                          <span className="text-lg">{room.icon}</span>
                          <span className="font-medium">{room.name}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center bg-white/90 backdrop-blur-sm py-6 shadow-lg"
          >
            {sections.map((item, index) => (
              <div key={index} className="w-full flex flex-col items-center">
                <motion.div
                  onClick={() => item.hasDropdown ? handleMobileRoomsClick() : scrollToSection(item.href, item.name)}
                  className={clsx(
                    "flex items-center gap-2 text-lg font-semibold cursor-pointer py-3 transition-colors",
                    activeSection === item.name ? "text-sky-500" : "text-gray-800 hover:text-sky-500"
                  )}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <motion.span
                      className="text-sm ml-1"
                      animate={{ rotate: mobileRoomsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown />
                    </motion.span>
                  )}
                </motion.div>

                {/* Mobile Rooms Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {mobileRoomsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full flex flex-col items-center bg-gray-50/80 rounded-lg mx-4 mb-2 overflow-hidden"
                      >
                        {roomTypes.map((room, roomIndex) => (
                          <motion.div
                            key={roomIndex}
                            onClick={() => handleNavigation(room.href, room.name, room.isPage)}
                            className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-sky-500 hover:bg-sky-50 cursor-pointer py-3 px-6 w-full transition-colors"
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-base">{room.icon}</span>
                            <span>{room.name}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
