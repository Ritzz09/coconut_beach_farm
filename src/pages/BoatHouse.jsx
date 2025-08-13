import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom'; // Add this import
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
  // Add these new imports for the updated amenities
  Refrigerator,
  AirVent,
  MonitorSpeaker,
  Fan
} from 'lucide-react';

import img1 from "../pages/rooms/BoatHouse/1.webp";
import img2 from "../pages/rooms/BoatHouse/2.webp";
import img3 from "../pages/rooms/BoatHouse/3.webp";
import img4 from "../pages/rooms/BoatHouse/4.webp";
import img8 from "../pages/rooms/SuperDeluxeRoom/8.webp";
import img15 from "../pages/rooms/SuperDeluxeRoom/16.webp";
import img16 from "../pages/rooms/SuperDeluxeRoom/17.webp";



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BoatHouse = () => {
  const navigate = useNavigate(); // Add this hook

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const amenitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  // Gallery state
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Add this function for booking navigation
  const handleBookingClick = () => {
    // Navigate to home page
    navigate('/');
    
    // Optional: Scroll to contact section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Gallery images
  const images = [
    { src: img1,  category: 'suite' },
    { src: img2, category: 'amenity' },
    { src: img3, category: 'suite' },
    { src: img4, category: 'suite' },
        { src: img15, category: 'bathroom' },
        { src: img16,  category: 'bathroom' },
         { src: img8, category: 'amenity' },
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
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Mail, label: 'Email', value: 'reservations@coconutbeachfarm.com' },
    { icon: MapPin, label: 'Address', value: '123 Beach Paradise, Tropical Island' }
  ];

  const amenities = [
    { icon: Refrigerator, title: 'Mini Refrigerator' },
    { icon: AirVent, title: 'Air Conditioning' },
    { icon: MonitorSpeaker, title: 'Flat-Screen Television' },
    { icon: Bath, title: 'Ensuite Bathroom (with hot water on request)' },
    { icon: Fan, title: 'Ceiling Fan' },
    { icon: Phone, title: 'Telephone (Landline)' },
    { icon: Coffee, title: 'Electric Kettle (on request)' },
    { icon: Waves, title: 'Hammock' }
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
  }, [prefersReducedMotion, filteredImages]);

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

  // Form functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (e) => {
    if (!prefersReducedMotion) {
      const label = e.target.previousElementSibling;
      if (label) {
        gsap.to(label, {
          y: -25,
          fontSize: '0.75rem',
          color: '#10b981',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  };

  const handleBlur = (e) => {
    if (!e.target.value && !prefersReducedMotion) {
      const label = e.target.previousElementSibling;
      if (label) {
        gsap.to(label, {
          y: 0,
          fontSize: '1rem',
          color: '#6b7280',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';

    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    if (!prefersReducedMotion) {
      gsap.to('.submit-btn', {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    }

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
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

          <h1 
            className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Boat House
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay in our charming Boat House, a rare gem at Coconut Beach Farm where rustic coastal style meets a touch of nautical flair. With soothing water views and a warm, inviting interior, it offers a tranquil retreat just a short walk from Alibaug’s shore.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              className="btn group px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
                color: 'white',
                border: 'none'
              }}
              onClick={handleBookingClick} // Add this onClick handler
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
          {[...Array(500)].map((_, i) => (
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
              Aqua Bliss
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Boat House – A Nautical Nook in Alibaug
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="about-image overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={img1}
                alt="Luxurious Super Deluxe suite interior with ocean view"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-8">
              <div className="about-text-left">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Start your mornings with the sight of shimmering water and the scent of salty air. The Boat House is crafted for guests who love character, comfort, and a hint of adventure in their stay. From lazy afternoons indoors to breezy evenings outdoors, every moment here feels like an escape from the ordinary.
                </p>
              </div>

              <div className="about-text-right">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Inside, you'll find:
                  <br />
                  • A plush king-size bed dressed in crisp, fresh linen
                  <br />
                  • Air-conditioning plus a ceiling fan for year-round comfort
                  <br />
                  • A flat-screen TV for leisurely downtime
                  <br />
                  • A stocked mini fridge for chilled refreshments
                  <br />
                  • A private bathroom with hot water available on request
                  <br />
                  • A landline for quick and easy service access
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

          <div className="amenities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

          <div className="text-center mt-16">
            <button 
              className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)"
              }}
            >
              Explore Full Amenity List
            </button>
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
          {[...Array(500)].map((_, i) => (
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

          <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={`${image.src}-${index}`}
                className="gallery-item group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
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

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="lightbox fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-[90vh] w-full">
                <img 
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
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
                Ready to experience ultimate luxury? Contact our reservations team to book your Super Deluxe Ocean Suite.
              </p>
            </div>

            {/* Centered content */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-6">
                <div>
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{
                      background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Get In Touch
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our dedicated reservations team is available 24/7 to assist you with booking 
                    your perfect getaway. We're here to make your stay unforgettable.
                  </p>

                  {/* Horizontal contact info */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 md:gap-6 mb-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2 w-full sm:w-auto justify-center text-center sm:text-left"
                      >
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0">
                          <info.icon className="w-8 h-8 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-l">{info.label}</div>
                          <div className="text-gray-600 text-l">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Centered Send Inquiry Button */}
                <button
                  type="button"
                  className="submit-btn text-white px-12 py-4 rounded-lg font-semibold text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
                  style={{
                    background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)"
                  }}
                  onClick={handleBookingClick} // Add this onClick handler
                >
                  Book Your Stay
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BoatHouse;
