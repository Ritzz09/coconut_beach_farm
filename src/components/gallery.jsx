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
import img10 from "../assets/gallery/10.jpeg";
import img11 from "../assets/gallery/11.jpeg";
import img12 from "../assets/gallery/12.jpeg";
import img13 from "../assets/gallery/13.jpeg";
import img14 from "../assets/gallery/14.jpeg";
import img15 from "../assets/gallery/15.jpeg";
import img16 from "../assets/gallery/16.jpeg";
import img17 from "../assets/gallery/17.jpeg";
import img18 from "../assets/gallery/18.jpeg";

const row1Images = [img1, img2, img3, img4, img5, img6];
const row2Images = [img7, img8, img9, img10, img11, img12];
const row3Images = [img13, img14, img15, img16, img17, img18];

// Custom hook to detect if screen width is mobile size
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const Gallery = () => {
  const isMobile = useIsMobile();
  const allRows = [row1Images, row2Images, row3Images];

  // Create animation controllers for each row
  const controlsArray = allRows.map(() => useAnimation());

  React.useEffect(() => {
    const duration = isMobile ? 10 : 20; // Faster on mobile

    controlsArray.forEach((controls, index) => {
      const direction = index % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"];
      controls.start({
        x: direction,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration,
        },
      });
    });
  }, [isMobile, controlsArray]);

  const handleHover = (index, hover) => {
    if (hover) {
      controlsArray[index].stop(); // pause on hover
    } else {
      const duration = isMobile ? 10 : 20;
      const direction = index % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"];
      controlsArray[index].start({
        x: direction,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration,
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
