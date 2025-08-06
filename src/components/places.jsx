    import React, { useEffect } from "react";
    import { motion, useAnimation } from "framer-motion";
    import { useInView } from "react-intersection-observer";

    import img1 from "../assets/places/places-to-visit-1.jpg";
    import img2 from "../assets/places/places-to-visit-2.jpg";
    import img3 from "../assets/places/places-to-visit-3.jpg";
    import img4 from "../assets/places/places-to-visit-4.jpg";
    import img5 from "../assets/places/places-to-visit-6.jpg";
    import img6 from "../assets/places/places-to-visit-7.jpg";

    export default function TourCategories() {
    const tours = [
        { title: "Kashid Beach", image: img1 },
        { title: "Kulaba Fort Alibaug", image: img2 },
        { title: "Kundalika Rafting Camps, Kolad", image: img3 },
        { title: "Murud-Janjira Fort", image: img4 },
        { title: "Raigadh Ropeway", image: img5 },
        { title: "Korlai Fort", image: img6 },
    ];

    return (
        <div id="places" style={{
                background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
            }} className="relative">
        {/* Top Slanted Divider */}
        <svg
            className="absolute top-0 left-0 w-full h-12 md:h-24 rotate-180 z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <polygon fill="white" points="100,100 0,100 0,0" />
        </svg>

        {/* SECTION with overlay */}
        <div className="relative w-full px-6 md:px-24 py-12 md:py-44 overflow-hidden">
            {/* Background Particles */}
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

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-0" />


            {/* Content */}
            <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            {/* LEFT: Heading + Paragraph */}
            <motion.div
                className="w-full md:w-1/3 text-center md:text-left"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.h1
                className="md:text-5xl text-3xl font-merienda leading-tight bg-gradient-to-tr from-[#dceff5] via-[#5bc7eb] to-[#dceff5] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                >
                Places to visit <br /> <span className="text-white">Nearby</span>
                </motion.h1>

                <motion.p
                className="hidden md:block text-2xl font-cinzel mt-8 text-white/70"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                >
                Discover some of the most captivating destinations just around the
                corner. Whether you're in the mood for a peaceful beach escape, an
                inspiring museum stroll, or an adventurous hike through scenic
                landscapes, there's something nearby for everyone. These handpicked
                tours offer the perfect mix of relaxation, culture, and exploration —
                all within easy reach. Start your journey today and uncover the hidden
                gems waiting just outside your doorstep.
                </motion.p>
            </motion.div>

            {/* RIGHT: Cards */}
            <motion.div
                className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                hidden: {},
                visible: {
                    transition: {
                    staggerChildren: 0.3,
                    },
                },
                }}
            >
                {tours.map((tour, index) => {
                const controls = useAnimation();
                const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

                useEffect(() => {
                    if (inView) {
                    controls.start({
                        opacity: 1,
                        y: 0,
                        transition: {
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "easeOut",
                        },
                    });
                    } else {
                    controls.start({ opacity: 0, y: 50 });
                    }
                }, [inView, controls]);

                return (
                    <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className="flex flex-col items-center text-center"
                    >
                   <div className="relative w-[300px] h-[200px] md:w-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-md transform transition-transform duration-700 ease-in-out hover:scale-110 border-l-4 border-b-4 border-amber-50 folded-corner">
  <img
    src={tour.image}
    alt={tour.title}
    className="object-cover w-full h-full"
    loading="lazy"
  />
</div>

                    <h3 className="text-white/80 mt-4 font-fred font-extrabold text-xl">
                        {tour.title}
                    </h3>
                    </motion.div>
                );
                })}
                <div className="hidden md:flex" />
            </motion.div>
            </div>
        </div>

        {/* Bottom Slanted Divider */}
        <svg
            className="absolute bottom-0 left-0 w-full h-12 md:h-24 rotate-180 z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <polygon fill="white" points="0,0 100,100 100,0" />
        </svg>
        </div>
    );
    }
