import React from "react";
import heroVideo from "../assets/hero.mp4";
import brushStroke from "../assets/brush1.png";

export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-merienda text-white mb-4">
            Welcome to Weekend Homes Resort
          </h1>

          <p className="text-lg font-cinzel md:text-2xl text-gray-200">
            Your luxury escape into nature 🌴
          </p>

          <a
            href="#contact"
            className="mt-8 relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition duration-300 ease-out border-2 border-white rounded-full group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Book Now
            </span>
            <span className="relative invisible">Book Now</span>
          </a>
        </div>
      </div>
      <div className="absolute left-0 bottom-[0] z-50">
  <svg
    preserveAspectRatio="xMidYMax meet"
    viewBox="0 0 1600 200"
    className="w-full h-[300px] block"
  >
    <path
      fill="#fff"
      d="M-16,129.803C28.268,129.803,43.874,86,74.839,86 c26.605,0,15.874,35.884-0.894,27.723c8.831,0,8.943-12.52,0.894-12.52c-12.967,0-9.167,38.455,26.829,38.455s1.409,0,1.409,0 v16.097H-16V129.803z"
    />
    <path
      fill="#fff"
      d="M-114,123.448C-17.538,133.448,16.468,38,83.943,38 c57.974,0,34.59,78.192-1.949,60.41c19.244,0,19.487-27.282,1.949-27.282c-28.256,0-19.974,83.795,58.462,83.795s3.071,0,3.071,0 V180H-114V123.448z"
    />
    <path
      fill="#fff"
      d="M158,172.749C238.596,172.749,267.01,93,323.386,93 c48.439,0,28.901,65.332-1.628,50.474c16.079,0,16.282-22.795,1.628-22.795c-23.609,0-16.689,70.013,48.846,70.013s2.566,0,2.566,0 L158,192V172.749z"
    />
    <path
      fill="#fff"
      d="M156,160.626c53.515,0,72.381-52.953,109.815-52.953 c32.163,0,19.19,43.38-1.081,33.514c10.676,0,10.811-15.136,1.081-15.136c-15.676,0-11.081,46.488,32.433,46.488s1.704,0,1.704,0 V192H156V160.626z"
    />
    <path
      fill="#fff"
      d="M-108.04,114.107c68.046,0,92.035-67.331,139.634-67.331 c40.897,0,24.4,55.159-1.375,42.615c13.575,0,13.747-19.245,1.375-19.245c-19.933,0-14.09,59.111,41.24,59.111s2.166,0,2.166,0V154 h-183.04V114.107z"
    />
   <path
  fill="#fff"
  d="
    M-4,142.333
    C121.654,142.333,165.952,18,253.846,18
    c75.519,0,45.058,101.856-2.538,78.692
    c25.067,0,25.385-35.538,2.538-35.538
    c-36.808,0-26.019,109.154,76.154,109.154
    s10,30,40,30
    V216
    H-4
    V142.333
    z"
/>

  </svg>
  
  
</div>
    

    
    </>
  );
}
