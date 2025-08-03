import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import room1 from "../assets/superDeluxe.jpg";
import room2 from "../assets/duplexAC.jpeg";
import room3 from "../assets/treeHouse.jpeg";
import room4 from "../assets/boatHouse.jpeg";
import room5 from "../assets/royalTent.jpeg";
import room from "../assets/rooms.jpg"

const ImageBlock = ({ title, image }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"], // starts and ends when section hits center
  });

  const maskX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.95, 1]);

  return (
    <section
      ref={ref}
      className="md:min-h-[70vh] min-h-[50vh] flex items-center justify-center  px-6"
    >

      <div className="w-full md:px-30 flex items-center md:gap-10 gap-2">
        <motion.div
          className="md:w-[40%] w-[30%] text-3xl md:text-5xl font-bold tracking-tight"
          style={{ scale, opacity }}
        >
          <h1 className="font-fred bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight drop-shadow-md">
            {title}
          </h1>
        </motion.div>

        <motion.div
          className="md:w-[60%] w-[70%] h-[350px] relative overflow-hidden rounded-xl shadow-xl"
          style={{ scale, opacity }}
        >
          {/* Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* Brush Mask */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-neutral-950 z-10"
            style={{ x: maskX }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const FramerScrollReveal = () => {
  const data = [
    { id: 1, image: room1, title: "Super Deluxe Rooms" },
    { id: 2, image: room2, title: "Duplex A/C Rooms" },
    { id: 3, image: room3, title: "Tree House" },
    { id: 4, image: room4, title: "Boat House" },
    { id: 5, image: room5, title: "Royal Tent" },
  ];

  return (
    <main className="relative bg-neutral-950 text-white overflow-hidden">

  {/* Top Blob Divider */}
  <div className="relative z-30">
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

  {/* Heading Block (fixed) */}
  <div className="relative z-30">
    <motion.div
      className="text-3xl text-center md:text-4xl font-bold tracking-tight"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className=" py-5 md:py-0 font-merienda bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent leading-tight drop-shadow-md">
        Rooms Available
      </h1>
    </motion.div>
  </div>

  {/* Background Image */}

  <div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{
    background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
  }}
/>

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

  {/* Foreground Content */}
  <div className="relative z-20">
    {data.map((room) => (
      <ImageBlock key={room.id} title={room.title} image={room.image} />
    ))}
  </div>

  {/* Bottom Blob Divider */}
  <div className="relative z-30">
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
</main>


  );
};

export default FramerScrollReveal;
