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
            className="md:py-10  "
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
            <div ref={boxRef} className="hidden md:block relative z-10 max-w-[95%] mx-auto md:mb-[150px] ">

                <div className="relative py-16 px-4 sm:px-6 lg:px-14 bg-cover bg-center rounded-3xl">

                    <div className="relative z-10">
                        <motion.div
                            className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
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
                                        className="w-full h-full object-cover rounded-2xl border-5 border-[#E5F4FA]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-950/70 to-transparent rounded-2xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h1 className="text-[#BCDCE8] text-4xl md:text-6xl font-bold text-center p-4">
                                            {["Golden Dreams", "Sai Bungalow", "Golden Bells", "Madhuban Bungalow"][i]}
                                        </h1>
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <p className="text-white text-2xl font-semibold">
                                            {["A luxury", "experience", "like", "no other"][i]}
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
            <div className="md:hidden relative z-10 px-4 pb-20 mb-[200px]  ">
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
                                        {["A luxury", "experience", "like", "no other"][index]}
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

                    {/* Contact Form  */}

            <div id="contact" className="absolute left-1/2 transform -translate-x-1/2 z-40 
                lg:h-[600px] h-[550px] w-[90%] md:w-[80%] lg:w-[50%] 
                bg-slate-950/80 backdrop-blur-md shadow-2xl border-2 border-white/10 
                rounded-2xl lg:p-6 p-4 text-white transition-transform duration-500 ease-in-out md:mt-[-100px] mt-[-200px]" data-aos="zoom-in">
                 <div className="w-full border-t-8 border-dotted border-[#dceff5] mb-4"></div>
                <h2 className="text-3xl font-merienda text-[#dceff5] font-bold mb-6 text-center" data-aos="zoom-in" data-aos-delay="300">Get in Touch</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2  border border-white/20 rounded-md  placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition" data-aos="zoom-in" data-aos-delay="400"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-2  border border-white/20 rounded-md  placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition" data-aos="zoom-in" data-aos-delay="500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2  border border-white/20 rounded-md  placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition" data-aos="zoom-in" data-aos-delay="600"
                            />
                            <select
                                className="w-full px-4 py-2  border border-white/20 rounded-md  placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition" data-aos="zoom-in" data-aos-delay="700"
                            >
                                <option className="text-slate-900" value="">Choose Location</option>
                                <option className="text-slate-900" value="alibaug">Alibaug</option>
                                <option className="text-slate-900" value="panchgani">Panchgani</option>
                                <option className="text-slate-900" value="lonavala">Lonavala</option>
                            </select>
                            <input
                                type="message"
                                placeholder="Your message"
                                className="w-full h-32 px-4 py-2  border border-white/20 rounded-md  placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition" data-aos="zoom-in" data-aos-delay="800"
                            />
                            <div className="text-center">
                                <button
                                    type="submit"
                                    data-aos="zoom-in" data-aos-delay="900"
                                    className="bg-[#0F0D1D] hover:bg-[#dceff5] hover:text-[#0F0D1D] text-[#dceff5] border-1 border-white/10 font-semibold py-3 px-8 rounded-full transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>

                        <div className="w-full h-full rounded-4xl border-2 border-white/10 p-5 md:block hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.7661704452694!2d72.9017083!3d18.613075599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a9fa94d3c07%3A0x5b4b17ff34289dc4!2sCoconut%20Beach%20Farm%20Resorts%20in%20Alibaug%20Beach%20Maharashtra!5e1!3m2!1sen!2sin!4v1754425136387!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowFullScreen="true"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className=" rounded-4xl "
                            ></iframe>
                        </div>



                    </div>
                                     

                </form>
                <div className="hidden md:block w-full border-b-8 border-dotted border-[#0F0D1D] mt-9 "></div>
            </div>




        </section>

    );
}



