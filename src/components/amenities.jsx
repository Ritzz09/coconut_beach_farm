import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaBed,
  FaWifi,
  FaUtensils,
  FaTv,
  FaBaby,
  FaCarBattery,
  FaParking,
  FaBroom,
  FaPhone,
  FaMusic,
  FaFirstAid,
  FaDog,
  FaFire,
  FaLeaf,
  FaSpa,
} from "react-icons/fa";
import {
  MdOutlineRestaurant,
  MdOutdoorGrill,
  MdGames,
  MdSecurity,
} from "react-icons/md";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
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
          scrub: 2,
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
          start: "top 100%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="amenities"
      className="md:p-10 p-6"
      style={{
        background:
          "linear-gradient(360deg, rgba(220,239,245,1) 0%, rgba(184,236,255,1) 24%, rgba(255,255,255,1) 100%)",
      }}
    >
      <h2
        ref={headingRef}
        className="text-4xl font-merienda font-extrabold text-center mb-10 text-gray-800"
      >
        Amenities & Facilities
      </h2>

      {/* Desktop View (UNCHANGED) */}
      <div
        ref={boxRef}
        className="hidden md:block relative z-10 max-w-[90%] mx-auto"
      >
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

      {/* ----- IMPROVED MOBILE Swiper (ONLY MOBILE CHANGES BELOW) ----- */}
      <div className="md:hidden px-1 py-6 max-w-[350px] mx-auto relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom-amenities",
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-custom-active",
          }}
          className="!pb-7"
        >
          {Array.from({ length: Math.ceil(amenities.length / 4) }, (_, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                {amenities
                  .slice(idx * 4, idx * 4 + 4)
                  .map((item, i) => (
                    <motion.div
                      key={i}
                      whileTap={{ scale: 0.92 }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    >
                      <AmenityCard icon={item.icon} name={item.name} mobile={true} />
                    </motion.div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
          {/* Pagination Dots */}
          <div className="swiper-pagination-custom-amenities flex gap-1 justify-center absolute left-0 right-0 bottom-0 mt-4" />
        </Swiper>
        <p className="text-black text-xs mt-4 text-center font-medium animate-pulse">
          ← Swipe for more amenities →
        </p>

        {/* Custom Pagination Styles */}
        <style>{`
          .swiper-pagination-bullet-custom {
            width: 10px;
            height: 10px;
            background: #171531;
            opacity: 0.65;
            border-radius: 9999px;
            margin: 2px 4px !important;
            transition: background 0.2s, opacity 0.2s;
          }
          .swiper-pagination-bullet-custom-active {
            background: white;
            opacity: 1;
          }
        `}</style>
      </div>
    </section>
  );
}

function AmenityCard({ icon, name, mobile = false }) {
  return (
    <div
      className={`${mobile
        ? "w-full flex-shrink-0 bg-white/70 border border-slate-200 text-slate-800 shadow-[0_1px_7px_#b6e8fc95] p-4 rounded-xl flex flex-col items-center justify-center min-h-[86px]"
        : "md:bg-white/10 bg-slate-900/20 backdrop-blur-lg border border-white/20 rounded-xl md:p-5 p-3 md:text-white text-slate-900 shadow-md flex items-center gap-3"
      } transition-transform hover:scale-105 hover:shadow-xl`}
      style={{ overflow: "hidden" }}
    >
      <div className={`${mobile ? "text-2xl text-slate-900 mb-2" : "md:text-2xl text-lg md:text-[#00d4ff] text-slate-950"}`}>
        {icon}
      </div>
      <p
        className={`${
          mobile ? "font-bold text-xs text-center leading-tight whitespace-normal" : "font-semibold text-sm"
        }`}
      >
        {name}
      </p>
    </div>
  );
}
