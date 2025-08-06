import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/mobile_logo.png";

export default function Footer() {
    return (
        <footer
            className="relative text-white pb-10 "
            style={{
                background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
            }}
        >
            {/* Top Wave */}
            <div className="relative z-30">
                <svg
                    className="w-full h-auto"
                    viewBox="0 0 1440 220"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="rgba(220,239,245,1)"
                        d="M0,160 C120,120 240,200 360,180 C480,160 600,80 720,96 C840,112 960,192 1080,192 C1200,192 1320,128 1440,160 L1440,0 L0,0 Z"
                    ></path>
                </svg>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-20"></div>

            {/* Footer Content */}
            <div className="relative z-30 container mx-auto px-6 md:px-12 lg:px-10 lg:mt-[280px] mt-[300px]">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-20 text-white text-base">
                    {/* Column 1: Company Info */}
                    <div className="flex flex-col justify-center items-center text-center px-2" data-aos="fade-up" >
                        <h2 className="text-2xl font-merienda font-bold mb-4">Coconut Beach Farm</h2>
                        <p className="text-gray-300 text-xl font-cinzel">
                            A serene getaway nestled on the shores of nature. Enjoy peaceful
                            vibes, fresh coconuts, and unforgettable experiences.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="hidden md:flex flex-col justify-center items-center text-center px-2" data-aos="zoom-in" data-aos-delay="100">
                        <h3 className="text-2xl font-merienda font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-xl font-cinzel text-gray-300">
                            <li className=" hover:scale-105"><a href="#about" className="  hover:underline">About Us</a></li>
                            <li className=" hover:scale-105"><a href="#stay" className=" hover:scale-105 hover:underline">Stay</a></li>
                            <li className=" hover:scale-105"><a href="#gallery" className=" hover:scale-105 hover:underline">Gallery</a></li>
                            <li className=" hover:scale-105"><a href="#contact" className=" hover:scale-105 hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Center Logo */}
                    <div className="flex flex-col justify-center items-center text-center px-2" data-aos="zoom-in" data-aos-delay="200">
                        <div className="border-2 border-dashed border-white/60 p-2 rounded-full hover:scale-110 spin-slow">
                            <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />
                        </div>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col justify-center items-center text-center px-2" data-aos="zoom-in" data-aos-delay="300">
                        <h3 className="text-2xl font-merienda font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-xl font-cinzel text-gray-300">
                            <li className="flex items-center justify-center gap-2">
                                <FaPhoneAlt /> +91 98765 43210
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <a href="mailto:seexpert111@gmail.com" className="flex items-center gap-2">
                                    <MdEmail /> info@digital.com
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Column 5: Location Map */}
                    <div className="flex flex-col justify-center items-center text-center px-2" data-aos="zoom-in" data-aos-delay="400">
                        <h3 className="text-2xl font-merienda font-semibold mb-4">Location</h3>
                        <div className="w-full h-full">
                            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.7661704452694!2d72.9017083!3d18.613075599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a9fa94d3c07%3A0x5b4b17ff34289dc4!2sCoconut%20Beach%20Farm%20Resorts%20in%20Alibaug%20Beach%20Maharashtra!5e1!3m2!1sen!2sin!4v1754425136387!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen="true"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
                        </div>
                    </div>
                </div>


                {/* Social Icons */}
                <div className="mt-10 flex items-center justify-center gap-6 text-xl text-white " data-aos="zoom-in" data-aos-delay="500">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-center text-gray-500 text-sm border-dashed border-t border-white/70 pt-4 overflow-hidden" >
                    © {new Date().getFullYear()} Coconut Beach Farm. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
