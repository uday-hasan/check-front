import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url("/hero-bg.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="hero-content relative text-center px-4 sm:px-6 py-12 md:py-0 flex flex-col justify-center items-center h-full">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge/Tagline */}
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white/90 font-medium flex items-center justify-center gap-2">
              Trusted by 50,000+ customers
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight ">
            Your Health, <span className="text-primary-content block mt-2">Our Priority</span>
          </h1>
          
          {/* Subheading */}
          <p className="mb-10 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Order your medicines online and get them delivered to your doorstep, 
            <span className="block mt-2 font-medium">fast, safely, and hassle-free.</span>
          </p>
          
          {/* Button Group */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 ">
            <Link href="/shop">
              <button className="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-0">
              Shop Now
              
            </button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 animate-fade-in animation-delay-500">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Pharmacist Support</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">15 min</div>
              <div className="text-sm">Average Delivery</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Secure Packaging</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
