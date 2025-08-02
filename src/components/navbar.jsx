import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaHotel, FaImages, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import logo from "../assets/logo.png"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const sections = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "Villas", icon: <FaHotel />, href: "#villas" },
    { name: "Gallery", icon: <FaImages />, href: "#gallery" },
    { name: "Contact", icon: <FaPhone className="rotate-90" />, href: "#contact" },
  ];

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();

    // Animate the navbar itself
    tl.from(navbarRef.current, {
      y: -100,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Animate individual nav items
    tl.from(
      gsap.utils.toArray(".nav-item"),
      {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
      },
      "-=0.5" // start overlapping with navbar animation
    );
  }, navbarRef);

  return () => ctx.revert();
}, []);


  return (
    <nav ref={navbarRef} className="fixed top-0 w-full z-50">
      <div className="bg-transparent">
        <div className="w-full mx-auto px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
  href="#home"
  className="text-3xl font-merienda text-white tracking-wide"
  whileHover={{ scale: 1.1 }}
>
  <img src={logo} className="w-full h-15" alt="Logo" />
</motion.a>

          {/* Menu */}
          <div ref={menuRef} className="hidden md:flex gap-10">
  {sections.map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      className={clsx(
        "nav-item group flex items-center gap-2 text-lg font-semibold transition-colors",
        activeSection === item.name
          ? "text-yellow-300"
          : "text-white hover:text-yellow-300"
      )}
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-xl">{item.icon}</span>
      {item.name}
      <span className="block h-0.5 w-0 group-hover:w-full bg-yellow-300 transition-all duration-300"></span>
    </motion.a>
  ))}
</div>
        </div>
      </div>
    </nav>
  );
}
