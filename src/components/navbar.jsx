import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaHotel, FaImages, FaMonument, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/mobile_logo.png";


export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const sections = [
    { name: "Rooms", icon: <FaHotel />, href: "#rooms" },
    { name: "Gallery", icon: <FaImages />, href: "#gallery" },
    { name: "Places to visit", icon: <FaMonument />, href: "#places" },
      { name: "Properties", icon: <FaHome />, href: "#properties" },
    { name: "contact", icon: <FaPhoneAlt  />, href: "#contact" },
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

  const scrollToSection = (href, name) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(name);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        "fixed top-0 left-0 w-full z-150 transition-all duration-300",
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
          <img src={logo1} className="md:hidden block  w-20  h-14" alt="Logo" />
          <img src={logo} className="hidden md:block md:w-full w-50 md:h-15 h-8" alt="Logo" />

        </motion.a>

        {/* Desktop Menu */}
        <div ref={menuRef} className="hidden md:flex gap-10">
          {sections.map((item, index) => (
            <motion.a
  key={index}
  onClick={() => scrollToSection(item.href, item.name)}
  className={clsx(
    "nav-item group flex items-center gap-2 text-lg font-semibold transition-colors whitespace-nowrap",
    activeSection === item.name
      ? "text-sky-300"
      : "text-white hover:text-sky-300"
  )}
  whileHover={{ scale: 1.05 }}
>
  <span className="text-xl">{item.icon}</span>
  <span>{item.name}</span>
  <span className="block h-0.5 w-0 group-hover:w-full bg-sky-300 transition-all duration-300"></span>
</motion.a>

          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white/80 py-10 gap-6 shadow-md text-black">
          {sections.map((item, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(item.href, item.name)}
              className={clsx(
                "flex items-center gap-2 text-lg font-semibold cursor-pointer",
                activeSection === item.name ? "text-sky-500" : "hover:text-sky-500"
              )}
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
