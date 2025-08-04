import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/properties/2.jpeg"
import img2 from "../assets/properties/3.jpeg"
import img3 from "../assets/properties/4.jpeg"
import img4 from "../assets/properties/5.jpeg"
import gsap from "gsap";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";



gsap.registerPlugin(ScrollTrigger);


const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};



export default function Properties() {

    const headingRef = useRef(null);
    const boxRef = useRef(null);

    const { ref: staggerRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

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
                    start: "top 100%", // when h2 top hits 80% of viewport height
                    scrub: 2,
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section id="properties"
            className="md:py-10 "
            style={{
                background: "linear-gradient(360deg, rgba(220,239,245,1) 0%, rgba(184,236,255,1) 24%, rgba(255,255,255,1) 100%)",
            }}
        >
            <motion.h2
                className="text-4xl font-merienda font-extrabold text-center mb-10 text-gray-800"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }} // <== animation triggers every time it enters view
            >
                Our other Properties
            </motion.h2>


            {/* Desktop View */}
            <div ref={boxRef} className="hidden md:block relative z-10 max-w-[95%] mx-auto">

                <div className="relative py-16 px-4 sm:px-6 lg:px-14 bg-cover bg-center rounded-3xl">

                    <div className="relative z-10">
                        <motion.div
                            className="grid grid-cols-4 gap-6"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }} // <== makes it repeat
                        >
                            {[img1, img2, img3, img4].map((img, i) => (
                                <motion.div
                                    key={i}
                                    variants={cardVariant}
                                    className="relative h-[500px] w-full z-10"
                                >
                                    <img
                                        src={img}
                                        alt={`Property ${i + 1}`}
                                        className="w-full h-full object-cover rounded-2xl border-5 border-white/70"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-950/70 to-transparent rounded-2xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                                            {["Golden Dreams", "Sai Bungalow", "Golden Bells", "Madhuban Bungalow"][i]}
                                        </h1>
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <p className="text-white text-lg md:text-xl font-medium">
                                            A luxury experience like no other
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>





                    </div>
                </div>
                <motion.div className="relative w-full flex justify-center"
                             initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}>
                    <a
                        href="https://weekendhome.in/index.php"

                        className="bg-gradient-to-r from-[#16222A] via-[#2e4856] to-[#16222A]
               bg-[length:200%_auto] hover:bg-[position:right_center]
               transition-all duration-500
               text-white text-sm md:text-base font-semibold uppercase
               px-8 py-4 rounded-xl shadow-lg tracking-wider"
                    >
                        Discover All Properties
                    </a>
                </motion.div>

            </div>
            {/* Mobile View */}
            <div className="md:hidden relative z-10 px-4 pb-20">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="relative w-full"
                >
                    {[img1, img2, img3, img4].map((image, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative h-[500px] w-full rounded-2xl overflow-hidden"
                            >
                                {/* Image */}
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover border-4 border-white/70 rounded-2xl"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0c29]/70 to-transparent rounded-2xl"></div>

                                {/* Heading (centered) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h1 className="text-white text-4xl font-bold text-center">
                                        {["Golden Dreams", "Sai Bungalow", "Golden Bells", "Madhuban Bungalow"][index]}
                                    </h1>
                                </div>

                                {/* Subheading (bottom-left) */}
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-white text-lg font-medium">
                                        A luxury experience like no other
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}

                    <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 text-[#00bcd4] hover:text-[#0284c7] rounded-full p-2 shadow-md text-2xl transition-transform duration-300 hover:scale-110">
                        <HiChevronLeft />
                    </button>
                    <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 text-[#00bcd4] hover:text-[#0284c7] rounded-full p-2 shadow-md text-2xl transition-transform duration-300 hover:scale-110">
                        <HiChevronRight />
                    </button>

                </Swiper>


                <div className="relative w-full flex justify-center mt-5">
                    <a
                        href="https://weekendhome.in/index.php"

                        className="bg-gradient-to-r from-[#16222A] via-[#2e4856] to-[#16222A]
               bg-[length:200%_auto] hover:bg-[position:right_center]
               transition-all duration-500
               text-white text-sm md:text-base font-semibold uppercase
               px-8 py-4 rounded-xl shadow-lg tracking-wider"
                    >
                        Discover All Properties
                    </a>
                </div>
            </div>





        </section>

    );
}



