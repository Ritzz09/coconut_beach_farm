import React, { useState, useEffect } from "react";
import { FaHome, FaHotel, FaImages, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [showShadow, setShowShadow] = useState(false);

  const sections = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "Villas", icon: <FaHotel />, href: "#villas" },
    { name: "Gallery", icon: <FaImages />, href: "#gallery" },
    { name: "Contact", icon: <FaPhone />, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowShadow(scrollY > 20);

      const scrollPosition = scrollY + 150;
      sections.forEach((section) => {
        const element = document.querySelector(section.href);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.name);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        showShadow ? "shadow-lg" : ""
      )}
    >
      <div className="bg-transparent ">
        <div className="w-full mx-auto px-20 py-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-3xl font-merienda text-white tracking-wide"
            whileHover={{ scale: 1.1 }}
          >
            🌴 Weekend Homes
          </motion.a>

          {/* Menu */}
          <div className="hidden md:flex gap-10">
            {sections.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={clsx(
                  "group flex items-center gap-2 text-lg font-semibold transition-colors",
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

          {/* Floating Contact Button */}
         
        </div>
      </div>
    </motion.nav>
  );
}
