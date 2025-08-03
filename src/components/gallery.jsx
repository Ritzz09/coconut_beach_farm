import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
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

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

const imageUrls = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  const containerRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    // Lenis scroll setup (can be skipped if already globally applied)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Ensure ScrollTrigger is refreshed after layout is complete
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Show/hide heading when gallery is in view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setShowHeading(true),
      onLeave: () => setShowHeading(false),
      onEnterBack: () => setShowHeading(true),
      onLeaveBack: () => setShowHeading(false),
    });

    // Animate each image on scroll
    const targets = gsap.utils.toArray(`.${styles.img}`);
    targets.forEach((img) => {
      gsap.fromTo(
        img,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.galleryWrapper}>
      <div className={styles.container}>
        {showHeading && <h1 className={styles.heading}>Gallery</h1>}
        <section className={styles.gallerySection}>
          {imageUrls.map((url, i) => (
            <div
              key={i}
              className={styles.img}
              style={{ backgroundImage: `url(${url})` }}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Gallery;
