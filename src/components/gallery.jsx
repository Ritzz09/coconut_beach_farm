import React from "react";
import { motion, useAnimation } from "framer-motion";
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

const row1Images = [img1, img2, img3, img1, img2, img3];
const row2Images = [img5, img6, img7, img1, img2, img3];
const row3Images = [img9, img4, img8, img1, img2, img3];

const Gallery = () => {
  const allRows = [row1Images, row2Images, row3Images];

  // Create animation controllers per row
  const controlsArray = allRows.map(() => useAnimation());

  React.useEffect(() => {
    controlsArray.forEach((controls, index) => {
      const direction = index % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"];
      controls.start({
        x: direction,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        },
      });
    });
  }, []);

  const handleHover = (index, hover) => {
    if (hover) {
      controlsArray[index].stop(); // pause on hover
    } else {
      const direction = index % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"];
      controlsArray[index].start({
        x: direction,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        },
      });
    }
  };

  return (
    <div id="gallery" className={styles.galleryWrapper}>
      <h1 className={styles.heading}>Gallery</h1>

      <div className={styles.rowWrapper}>
        {allRows.map((rowImages, rowIndex) => (
          <div
            key={rowIndex}
            className={styles.overflow}
            onMouseEnter={() => handleHover(rowIndex, true)}
            onMouseLeave={() => handleHover(rowIndex, false)}
          >
            <motion.div className={styles.row} animate={controlsArray[rowIndex]}>
              {[...rowImages, ...rowImages].map((img, i) => (
                <div
                  key={`${rowIndex}-${i}`}
                  className={styles.image}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
