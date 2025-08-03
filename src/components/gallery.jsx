import React from "react";
import { motion } from "framer-motion";
import styles from "./gallery.module.css";

import img1 from "../assets/gallery/1.jpeg";
import img2 from "../assets/gallery/2.jpeg";
import img3 from "../assets/gallery/3.jpeg";
import img4 from "../assets/gallery/4.jpeg";
import img5 from "../assets/gallery/5.jpeg";
import img6 from "../assets/gallery/6.jpeg";
import img7 from "../assets/gallery/7.jpeg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  return (
    <div className={styles.galleryWrapper}>
      <h1 className={styles.heading}>Gallery</h1>

      <div className={styles.rowWrapper}>
        {[0, 1, 2].map((rowIndex) => {
          const direction = rowIndex % 2 === 0 ? "left" : "right";
          const xValues = direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];

          return (
            <div key={rowIndex} className={styles.overflow}>
              <motion.div
                className={styles.row}
                animate={{ x: xValues }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20,
                }}
              >
                {[...images, ...images].map((img, i) => (
                  <div
                    key={`${rowIndex}-${i}`}
                    className={styles.image}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
