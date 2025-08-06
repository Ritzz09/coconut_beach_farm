import React, {useEffect, useState, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogs = [
  {
    category: "Web Solution",
    title: "Make a better website solution for your product.",
    image: "https://source.unsplash.com/400x300/?laptop,technology",
    link: "#",
  },
  {
    category: "UI Interface",
    title: "The Science of Color Contrast – An Expert Designer",
    image: "https://source.unsplash.com/400x300/?art,color",
    link: "#",
  },
  {
    category: "Web Interface",
    title: "SEO Made Simple: A Step by Step Guide for 2020",
    image: "https://source.unsplash.com/400x300/?seo,people",
    link: "#",
  },
  {
    category: "Interface Design",
    title: "Make a better website solution for your product.",
    image: "https://source.unsplash.com/400x300/?design,abstract",
    link: "#",
  },
];

export default function BlogSlider() {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // Run animation every time in view
  });

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef(null);

  useEffect(() => {
    
    const prev = document.querySelector(".custom-swiper-prev");
    const next = document.querySelector(".custom-swiper-next");
    if (prev && next) {
      prev.classList.remove("swiper-button-disabled");
      next.classList.remove("swiper-button-disabled");
    }
     if (inView) {
    controls.start("visible");
  } else {
    controls.start("hidden"); // reset when out of view
  }
}, [inView, controls]);

    const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const leftArrowVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const rightArrowVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };
  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut", // fast-out, slow-in

    },
  },
};

  return (
   <section
  className="relative"
  style={{
    background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
  }}
>
   <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(200)].map((_, i) => (
                <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: "3px",
                    height: "3px",
                    animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
                }}
                />
            ))}
            </div>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Top wave */}
  <div className="relative z-10">
    <svg
      className="w-full h-auto"
      viewBox="0 0 1440 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="rgba(220,239,245,1)"
        fillOpacity="1"
        d="M0,160 C120,120 240,200 360,180 C480,160 600,80 720,96 C840,112 960,192 1080,192 C1200,192 1320,128 1440,160 L1440,0 L0,0 Z"
      ></path>
    </svg>
  </div>

  {/* Main content */}
  <div className="w-full md:px-20 mx-auto px-4 relative z-10">
      <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center mb-10"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-bold font-merienda leading-snug bg-gradient-to-tr from-[#dceff5] via-[#5bc7eb] to-[#dceff5] bg-clip-text text-transparent"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        Our Latest Blogs
      </motion.h2>

      {/* Animated Arrows */}
      <div className="flex gap-20 mt-6">
        <motion.div
          className={`custom-swiper-prev ${
            isBeginning
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 hover:text-slate-900"
          } bg-transparent border border-white text-white w-14 h-14 flex items-center justify-center rounded-full transition cursor-pointer`}
          initial="hidden"
          animate={controls}
          variants={leftArrowVariants}
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </motion.div>

        <motion.div
          className={`custom-swiper-next ${
            isEnd
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 hover:text-slate-900"
          } bg-transparent border border-white text-white w-14 h-14 flex items-center justify-center rounded-full transition cursor-pointer`}
          initial="hidden"
          animate={controls}
          variants={rightArrowVariants}
        >
          <ChevronRightIcon className="w-7 h-7" />
        </motion.div>
      </div>
    </div>
    <motion.div
  ref={ref}
  variants={containerVariants}
  initial="hidden"
  animate={controls}
>
    <Swiper
   
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        pagination={{ el: ".custom-pagination", clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
      {blogs.map((blog, idx) => (
        <SwiperSlide key={idx}>
  <motion.div
    variants={cardVariants}
  
    className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
  >
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-60 object-cover"
      loading="lazy"
    />
    <div className="p-5">
      <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {blog.title}
      </h3>
      <a
        href={blog.link}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
      >
        Read Blog →
      </a>
    </div>
  </motion.div>
</SwiperSlide>

      ))}
    </Swiper>
    </motion.div>

    <div className="custom-pagination mt-10 flex justify-center gap-2"></div>
  </div>

  {/* Bottom wave */}
  <div className="relative z-10">
    <svg
      className="w-full h-auto rotate-180"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#DBEFF5"
        fillOpacity="1"
        d="M0,160 C120,120 240,200 360,180 C480,160 600,80 720,96 C840,112 960,192 1080,192 C1200,192 1320,128 1440,160 L1440,0 L0,0 Z"
      ></path>
    </svg>
  </div>
</section>

  );
}
