// ContactForm.jsx
import React from "react";

export default function ContactForm() {
  return (
    <div className="absolute right-2 -top-32 md:-top-40 z-30 w-[90%] md:w-[60%] bg-white rounded-2xl shadow-2xl p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Get in Touch</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
