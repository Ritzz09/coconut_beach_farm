import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/gallery/3.jpeg";

export default function ThankYou() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ fixed path
    >
      <div className="bg-white/90 p-20 rounded-2xl shadow-2xl text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">Thank you! We've received your request.</h1>
        <p className="text-2xl text-gray-700 mb-6">
        Thank you for choosing Ardent Smiles. We’ll contact you shortly to confirm the
details and look forward to crafting your smile with passion.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-black border-2 font-semibold px-5 py-2 rounded-full hover:scale-110 hover:border-b-6 shadow-md"        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
