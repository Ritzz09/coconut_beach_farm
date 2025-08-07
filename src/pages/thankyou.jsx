import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/gallery/1.jpeg";

export default function ThankYou() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center z-0"
            style={{ backgroundImage: `url(${bgImage})` }} // ✅ fixed path
        >
            <div className="bg-slate-950/80 p-20 rounded-2xl shadow-2xl text-center max-w-2xl z-10 border-2 border-white/30 ">
                <h1 className="text-4xl font-bold text-sky-200 mb-4">Thank you! We've received your request.</h1>
                <p className="text-2xl text-white mb-6">
                    Thank you for choosing Coconut Beach Farm, your serene escape by the sea! <br/>
                    We’ve received your request and our team will get in touch with you shortly to confirm the details.
                </p>
                <Link
                    to="/"
                     className="hero-button opacity-100  mt-8 relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition duration-300 ease-out border-2 border-white rounded-full group">
                   
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white/30 group-hover:translate-x-0 ease">
                            <svg
                                className="w-8 h-8 text-sky-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        Home
                        </span>
                        <span className="relative invisible">Home</span>
                 
                </Link>
            </div>
            <div className="absolute inset-0 bg-black/30 z-1"></div>

        </div>
    );
}
