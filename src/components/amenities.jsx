import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaSwimmingPool, FaUmbrellaBeach, FaBed, FaWifi, FaUtensils,
  FaTv, FaBaby, FaCarBattery, FaParking, FaBroom, FaPhone,
  FaMusic, FaFirstAid, FaDog, FaFire, FaLeaf, FaSpa
} from 'react-icons/fa';
import { MdOutlineRestaurant, MdOutdoorGrill, MdGames, MdSecurity } from 'react-icons/md';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";



gsap.registerPlugin(ScrollTrigger);


const amenities = [
  { name: "Swimming Pool", icon: <FaSwimmingPool /> },
  { name: "Deck chair & umbrella", icon: <FaUmbrellaBeach /> },
  { name: "Air Conditioned Rooms", icon: <FaBed /> },
  { name: "Children Play Area", icon: <FaBaby /> },
  { name: "In House Kitchen", icon: <FaUtensils /> },
  { name: "Music System", icon: <FaMusic /> },
  { name: "Doctor On Call", icon: <FaFirstAid /> },
  { name: "Indoor Games: Carrom, Chess", icon: <MdGames /> },
  { name: "Power Back-Up", icon: <FaCarBattery /> },
  { name: "Hammock", icon: <FaSpa /> },
  { name: "Free Wifi", icon: <FaWifi /> },
  { name: "Breakfast Complimentary", icon: <FaUtensils /> },
  { name: "Free Parking", icon: <FaParking /> },
  { name: "Housekeeping", icon: <FaBroom /> },
  { name: "Restaurant", icon: <MdOutlineRestaurant /> },
  { name: "Intercom Facility", icon: <FaPhone /> },
  { name: "TV", icon: <FaTv /> },
  { name: "First Aid Kit", icon: <FaFirstAid /> },
  { name: "Outdoor Games", icon: <MdGames /> },
  { name: "CCTV", icon: <MdSecurity /> },
  { name: "Barbeque", icon: <MdOutdoorGrill /> },
  { name: "Bonfire", icon: <FaFire /> },
  { name: "Garden Dining", icon: <FaLeaf /> },
  { name: "Pet Friendly", icon: <FaDog /> },
];

const slideChunks = [];
for (let i = 0; i < amenities.length; i += 8) {
  slideChunks.push(amenities.slice(i, i + 8));
}


export default function AmenitiesSection() {

    const headingRef = useRef(null);
    const boxRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    headingRef.current,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%", // when h2 top hits 80% of viewport height
        scrub:2,
        toggleActions: "play none none none",
      },
    }
  );

   gsap.fromTo(
    boxRef.current,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 100%", // when h2 top hits 80% of viewport height
        scrub:2,
        toggleActions: "play none none none",
      },
    }
  );
}, []);

  return (
    <section id="amenities"
      className="md:p-10 p-6"
      style={{
        background: "linear-gradient(360deg, rgba(220,239,245,1) 0%, rgba(184,236,255,1) 24%, rgba(255,255,255,1) 100%)",
      }}
    >
      <h2  ref={headingRef} className="text-4xl font-merienda font-extrabold text-center mb-10 text-gray-800">
        Amenities & Facilities
      </h2>

      {/* Desktop View */}
      <div ref={boxRef} className="hidden md:block relative z-10 max-w-[90%] mx-auto">
  <div
    className="relative py-16 px-4 sm:px-6 lg:px-14 bg-cover bg-center rounded-3xl"
    style={{
    background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
  }}
  >
    <div className="absolute inset-0 rounded-3xl bg-black/30 z-0 backdrop-blur-sm" />

    {/* Navigation Buttons */}
    <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 text-[#00bcd4] hover:text-[#0284c7] rounded-full p-2 shadow-md text-2xl transition-transform duration-300 hover:scale-110">
      <HiChevronLeft />
    </button>
    <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 text-[#00bcd4] hover:text-[#0284c7] rounded-full p-2 shadow-md text-2xl transition-transform duration-300 hover:scale-110">
      <HiChevronRight />
    </button>

    {/* Animated Heading */}


    {/* Swiper */}
    <div className="relative z-10">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
        }}
        spaceBetween={30}
      >
        {slideChunks.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-4 gap-6">
              {group.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <AmenityCard icon={item.icon} name={item.name} />
                </motion.div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Swipe hint for mobile */}
    <div className="text-white text-center mt-4 md:hidden animate-pulse text-sm">
      ← Swipe →
    </div>
  </div>
</div>


      {/* Mobile Scroll */}
    {/* Mobile View Swiper: 2x2 layout */}
<div className="md:hidden px-2 py-4">
  <Swiper
   
    spaceBetween={20}
    slidesPerView={1}
  >
    {Array.from({ length: Math.ceil(amenities.length / 4) }, (_, idx) => (
      <SwiperSlide key={idx}>
        <div className="grid grid-cols-2 gap-4">
          {amenities.slice(idx * 4, idx * 4 + 4).map((item, i) => (
            <AmenityCard key={i} icon={item.icon} name={item.name} mobile={true} />
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <p className="text-black text-sm mt-2 text-center opacity-60">← Swipe for more amenities →</p>
</div>


    </section>
  );
}


function AmenityCard({ icon, name, mobile = false }) {
  return (
    <div
      className={`min-w-[150px] ${mobile ? "w-[160px] flex-shrink-0" : ""}
        md:bg-white/10 bg-slate-900/20 backdrop-blur-lg border border-white/20 
        rounded-xl md:p-5 p-3 md:text-white text-slate-900 shadow-md transition-all 
        hover:scale-105 hover:shadow-xl flex items-center gap-3`}
    >
      <div className="md:text-2xl text-lg md:text-[#00d4ff] text-slate-950">{icon}</div>
      <p className="font-semibold text-sm">{name}</p>
    </div>
  );
}
