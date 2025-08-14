import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { GiTreeSwing } from "react-icons/gi";

import { 
  ArrowRight, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  Coffee, 
  Shield, 
  Award,
  Wind, 
  Tv, 
  Phone, 
  Waves,
  Bath,
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn,
  Send, 
  Calendar, 
  Mail, 
  MapPin,
  Refrigerator,
  AirVent,
  MonitorSpeaker,
  Fan
} from 'lucide-react';

// Your image imports...
import img1 from "../rooms/SuperDeluxeRoom/12.webp";
import img2 from "../rooms/SuperDeluxeRoom/1.webp";
import img3 from "../rooms/SuperDeluxeRoom/3.webp";
import img4 from "../rooms/SuperDeluxeRoom/4.webp";
import img5 from "../rooms/SuperDeluxeRoom/5.webp";
import img6 from "../rooms/SuperDeluxeRoom/6.webp";
import img7 from "../rooms/SuperDeluxeRoom/7.webp";
import img8 from "../rooms/SuperDeluxeRoom/8.webp";
import img9 from "../rooms/SuperDeluxeRoom/9.webp";
import img10 from "../rooms/SuperDeluxeRoom/10.webp";
import img11 from "../rooms/SuperDeluxeRoom/11.webp";
import img12 from "../rooms/SuperDeluxeRoom/13.webp";
import img13 from "../rooms/SuperDeluxeRoom/14.webp";
import img14 from "../rooms/SuperDeluxeRoom/15.webp";
import img15 from "../rooms/SuperDeluxeRoom/16.webp";
import img16 from "../rooms/SuperDeluxeRoom/17.webp";
import img17 from "../rooms/SuperDeluxeRoom/18.webp";
import img18 from "../rooms/SuperDeluxeRoom/19.webp";

gsap.registerPlugin(ScrollTrigger);

const SuperDeluxeRooms = () => {
  const navigate = useNavigate();
  
  // Form state using your logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomtype: "",
    message: "",
  });

  // Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // Form handlers using your logic
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        navigate("/thankyou");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending appointment. Try again.");
    }
  };

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const amenitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  // Gallery state
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // INJECT CSS STYLES
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      .mobile-slider {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
        gap: 1rem;
        padding: 0 1rem;
      }
      
      .mobile-slider::-webkit-scrollbar {
        display: none;
      }
      
      .mobile-slide {
        flex: 0 0 85%;
        scroll-snap-align: center;
      }
      
      @media (min-width: 768px) {
        .mobile-slider {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          overflow-x: visible;
          scroll-snap-type: none;
          gap: 1.5rem;
          padding: 0;
        }
      }
      
      @media (min-width: 1024px) {
        .mobile-slider {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      
      @media (min-width: 768px) {
        .mobile-slide {
          flex: none;
        }
      }

      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
    `;
    
    document.head.appendChild(styleSheet);
    
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  // Handle booking click to open popup
  const handleBookingClick = () => {
    setIsPopupOpen(true);
    if (!prefersReducedMotion) {
      setTimeout(() => {
        gsap.fromTo('.popup-form', 
          { opacity: 0, scale: 0.8, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
      }, 10);
    }
  };

  // Close popup function
  const closePopup = () => {
    if (!prefersReducedMotion) {
      gsap.to('.popup-form', {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setIsPopupOpen(false)
      });
    } else {
      setIsPopupOpen(false);
    }
  };

  // Close popup on ESC key and prevent body scroll
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  // Your data arrays...
  const images = [
    { src: img1, category: 'suite' },
    { src: img2, category: 'amenity' },
    { src: img3, category: 'suite' },
    { src: img4, category: 'suite' },
    { src: img5, category: 'suite' },
    { src: img6, category: 'suite' },
    { src: img7, category: 'suite' },
    { src: img8, category: 'amenity' },
    { src: img9, category: 'suite' },
    { src: img10, category: 'suite' },
    { src: img11, category: 'suite' },
    { src: img12, category: 'amenity' },
    { src: img13, category: 'suite' },
    { src: img14, category: 'suite' },
    { src: img15, category: 'bathroom' },
    { src: img16, category: 'bathroom' },
    { src: img17, category: 'bathroom' },
    { src: img18, category: 'bathroom' },
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'suite', label: 'Suite' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'amenity', label: 'Amenities' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const features = [
    { icon: Award, text: '6 Exclusive Rooms' },
    { icon: Users, text: 'Up to 4 guests' },
    { icon: Wifi, text: 'Free Wi-Fi' },
    { icon: Car, text: 'Free Onsite Parking' },
    { icon: Coffee, text: '24/7 room service' },
    { icon: Shield, text: 'Attached Washroom' },
  ];

  const stats = [
    { number: '10+', label: 'Years of Hospitality' },
    { number: '05 Min', label: 'Walk to Beach' },
    { number: '24/7', label: 'Reception' },
    { number: '100% ', label: 'Secure Zones' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      values: [
        { text: "+91 72768 62000", link: "tel:+917276862000" },
        { text: "+91 96040 37000", link: "tel:+919604037000" } // new phone, next line
      ]
    },
    {
      icon: Mail,
      label: "Email",
      values: [
        { text: "rameshdeshmukh9@gmail.com", link: "mailto:rameshdeshmukh9@gmail.com" }
      ]
    },
    {
      icon: MapPin,
      label: "Address",
      values: [
        { text: "Grampanchayat Office, Thakur Ali, Shivaji Chowk, near Annpurna Hotel, Nagaon, Alibag, Maharashtra 402201" }
      ]
    }
  ];

  const amenities = [
    { icon: Refrigerator, title: 'Mini Refrigerator' },
    { icon: AirVent, title: 'Air Conditioning' },
    { icon: Tv, title: 'Flat-Screen Television' },
    { icon: Bath, title: 'Ensuite Bathroom ' },
    { icon: Fan, title: 'Ceiling Fan' },
    { icon: Phone, title: 'Telephone (Landline)' },
    { icon: Coffee, title: 'Electric Kettle (on request)' },
    { icon: GiTreeSwing, title: 'Swing' }
  ];


  // GSAP Animations
  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      gsap.set(['.hero-content', '.about-content', '.amenity-card', '.gallery-item', '.contact-content'], { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Hero Animations
      const heroTl = gsap.timeline();
      
      gsap.fromTo('.hero-bg', 
        { scale: 1.1 }, 
        { 
          scale: 1, 
          duration: 2, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );

      heroTl.fromTo('.hero-badge', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.hero-title', 
        { y: 80, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 
        '-=0.4'
      )
      .fromTo('.hero-subtitle', 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 
        '-=0.6'
      )
      .fromTo('.hero-buttons .btn', 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out' }, 
        '-=0.4'
      );

      gsap.to('.hero-stars', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      // About Animations
      gsap.fromTo('.about-image', 
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-text-left', 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-text-left',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-text-right', 
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-text-right',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.stat-item', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Amenities Animations
      gsap.fromTo('.amenity-card', 
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.amenities-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Gallery Animations
      gsap.fromTo('.gallery-item', 
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0 },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Contact Animations
      gsap.fromTo('.contact-content', 
        { opacity: 0, filter: 'blur(10px)', y: 50 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.form-field', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Gallery functions
  const openLightbox = (index) => {
    setSelectedImage(index);
    if (!prefersReducedMotion) {
      gsap.fromTo('.lightbox', 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  };

  const closeLightbox = () => {
    if (!prefersReducedMotion) {
      gsap.to('.lightbox', {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setSelectedImage(null)
      });
    } else {
      setSelectedImage(null);
    }
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="super-deluxe-rooms">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(360deg, rgba(220,239,245,1) 0%, rgba(184,236,255,1) 24%, rgba(255,255,255,1) 100%)' }}
      >
        <div 
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)' }}
        />
        
        <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-badge inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="hero-stars flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">5-Star Luxury</span>
          </div>
               <button
           onClick={handleBookingClick}
          className="fixed md:top-1/2 top-3/4 right-0 z-100 bg-slate-900 border-2 border-white border-r-0 text-xl md:text-2xl  text-white md:px-4 md:py-4 px-2 py-2 font-cinzel rounded-3xl rounded-r-none shadow-md transform -translate-y-1/2 hover:bg-white/70 hover:text-slate-900 transition"
        >
          Contact Us
        </button>
          <h1 
            className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Super Deluxe
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay in one of our 6 SuperDeluxeRooms, each with a mini fridge, TV, AC, and attached washroom. Blending rustic beach charm with modern comfort, they offer a peaceful retreat under coconut palms, just minutes from Alibaug's shores.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              className="btn group px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
                color: 'white',
                border: 'none'
              }}
              onClick={handleBookingClick}
            >
              Book Your Stay
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="relative py-20 lg:py-32"
        style={{ background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' }}
      >
        {/* Stars Background */}
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
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content - wrapped in relative z-20 to appear above overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">
              Ultimate Luxury
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SuperDeluxeRoom – Your Coastal Hideaway in Alibaug
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="about-image overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={img6}
                alt="Luxurious Super Deluxe suite interior with ocean view"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-8">
              <div className="about-text-left">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Wake up to the gentle sound of rustling coconut palms and the fresh coastal breeze in our SuperDeluxeRooms. Designed for those who seek a perfect blend of rustic beach charm and modern comfort, each of our six exclusive rooms offers a cozy escape just minutes away from Alibaug's golden sands.
                </p>
              </div>

              <div className="about-text-right">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Inside, you'll find:
                  <br />
                  • A comfy double bed with fresh linen for restful sleep
                  <br />
                  • Air-conditioning to keep you cool on warm tropical days
                  <br />
                  • A mini fridge for chilled drinks and snacks anytime
                  <br />
                  • A TV for relaxed evenings indoors
                  <br />
                  • An attached private washroom with modern fittings for convenience
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <feature.icon 
                        className="w-5 h-5 flex-shrink-0"
                        style={{
                          background: 'linear-gradient(to right, white, #93c5fd)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="stats-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
       <section
              ref={amenitiesRef}
              className="py-20 lg:py-32"
              style={{ background: 'linear-gradient(360deg, rgba(220,239,245,1) 0%, rgba(184,236,255,1) 24%, rgba(255,255,255,1) 100%)' }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl md:text-6xl font-bold mb-6"
                    style={{
                      background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Premium Amenities
                  </h2>
      
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Every luxury amenity you could desire, thoughtfully curated for your ultimate comfort and convenience.
                  </p>
                </div>
      
                <div className="amenities-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="amenity-card bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 cursor-pointer transition-all hover:scale-105 hover:-translate-y-2"
                      onMouseEnter={(e) => {
                        if (!prefersReducedMotion) {
                          const icon = e.currentTarget.querySelector('.amenity-icon');
                          gsap.to(icon, { scale: 1.2, rotate: 5, duration: 0.3, ease: 'power2.out' });
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!prefersReducedMotion) {
                          const icon = e.currentTarget.querySelector('.amenity-icon');
                          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' });
                        }
                      }}
                    >
                      <div className="amenity-icon mb-4">
                        <amenity.icon
                          className="w-12 h-12"
                          style={{
                            background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {amenity.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      

      {/* Gallery Section */}
      <section 
        ref={galleryRef}
        className="relative py-20 lg:py-32"
        style={{ background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' }}
      >
        {/* Stars Background */}
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
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">
              Suite Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step inside our most luxurious accommodations and experience the breathtaking beauty of coastal elegance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-blue-300 text-gray-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Mobile Slider / Desktop Grid */}
          <div className="mobile-slider">
            {filteredImages.map((image, index) => (
              <div 
                key={`${image.src}-${index}`}
                className="mobile-slide gallery-item group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="block md:hidden text-center mt-6">
            <p className="text-white/70 text-sm">
              Swipe to explore more photos
            </p>
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="lightbox fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-[90vh] w-full">
                <img 
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt || `Gallery image ${selectedImage + 1}`}
                  className="w-full h-full object-contain"
                />
                
                <button 
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>

                {filteredImages.length > 1 && (
                  <>
                    <button 
                      onClick={() => navigateImage('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={() => navigateImage('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white">
                  {selectedImage + 1} of {filteredImages.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
  <section
        ref={contactRef}
        className="py-12 lg:py-16"
        style={{ background: 'linear-gradient(360deg, rgba(220,239,245,1) 0%, rgba(184,236,255,1) 24%, rgba(255,255,255,1) 100%)' }}
        id="contact"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-content">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl font-bold mb-4"
                style={{
                  background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Reserve Your Stay
              </h2>

              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Ready to experience ultimate luxury? <br />Contact our reservations team for booking.
              </p>
            </div>

            {/* Centered content */}
            <div className="max-w-full mx-auto">
              <div className="text-center space-y-8">
                <div>
                  <h3
                    className="text-4xl font-bold mb-8"
                    style={{
                      background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Get In Touch
                  </h3>

                  {/* Optimized contact info - icon and label on same line */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mb-8">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="w-full lg:w-1/3 text-center sm:text-left lg:text-center"
                      >
                        {/* Icon and Label on same line */}
                        <div className="flex items-center justify-center sm:justify-start lg:justify-center mb-2 lg:mb-3">
                          <div className="w-10 h-10 lg:w-15 lg:h-15 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-2 lg:mr-3">
                            <info.icon className="w-7 h-7 lg:w-8 lg:h-8 text-emerald-600" />
                          </div>
                          <div className="font-bold text-gray-900 text-xl lg:text-2xl">
                            {info.label}
                          </div>
                        </div>

                        {/* Value on separate line */}
                        <div
                          className="text-black text-xl lg:text-xl leading-relaxed lg:leading-normal px-2 space-y-1"
                          style={{
                            wordBreak: 'break-word',
                            hyphens: 'auto',
                            maxWidth: '100%'
                          }}
                        >
                          {info.values.map((val, i) =>
                            val.link ? (
                              <a
                                key={i}
                                href={val.link}
                                className="block text-black hover:underline"
                              >
                                {val.text}
                              </a>
                            ) : (
                              <span key={i} className="block">{val.text}</span>
                            )
                          )}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Centered Send Inquiry Button */}
                <button
                  onClick={handleBookingClick}
                  className="px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                  style={{
                    background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)"
                  }}
                >
                  <Send className="inline-block mr-2 w-5 h-5" />
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="popup-form relative w-full max-w-6xl max-h-[90vh] overflow-y-auto mx-4">
            <div className="relative bg-slate-950/80 backdrop-blur-md shadow-2xl border-2 border-white/10 
                rounded-2xl lg:p-6 p-4 text-white transition-transform duration-500 ease-in-out" >
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Form Content */}
              <div className="w-full border-t-8 border-dotted border-[#dceff5] mb-4"></div>
              <h2 className="text-3xl font-bold text-[#dceff5] mb-6 text-center">Get in Touch</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      required
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      required
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition"
                    />
                    <select
                      name="roomtype"
                      onChange={handleChange}
                      value={formData.roomtype}
                      className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition"
                    >
                      <option className="text-white" value="">Choose Room Type</option>
                      <option className="text-white" value="superdeluxe">Super Deluxe</option>
                      <option className="text-white" value="duplex">Duplex Room</option>
                      <option className="text-white" value="treehouse">Tree House</option>
                      <option className="text-white" value="boathouse">Boat House</option>
                      <option className="text-white" value="trianglehouse">Triangle House</option>
                    </select>
                    <textarea
                      placeholder="Your message"
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                      rows="4"
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition resize-none"
                    />
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-[#0F0D1D] hover:bg-[#dceff5] hover:text-[#0F0D1D] text-[#dceff5] border border-white/10 font-semibold py-3 px-8 rounded-full transition duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>

                  {/* Map Section */}
                  <div className="w-full h-64 lg:h-full rounded-xl border-2 border-white/10 p-2 overflow-hidden hidden md:block">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.7661704452694!2d72.9017083!3d18.613075599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87a9fa94d3c07%3A0x5b4b17ff34289dc4!2sCoconut%20Beach%20Farm%20Resorts%20in%20Alibaug%20Beach%20Maharashtra!5e1!3m2!1sen!2sin!4v1754425136387!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </form>
              
              <div className="w-full border-b-8 border-dotted border-[#0F0D1D] mt-6"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperDeluxeRooms;
