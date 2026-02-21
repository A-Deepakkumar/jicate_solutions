'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    subtitle: 'Welcome Our Company',
    title: 'We Provide Truly Prominent IT Solutions',
    image: '/images/jicate_group_photo.jpg',
  },
  {
    id: 2,
    subtitle: 'Welcome Our Company',
    title: 'Consulting Business can transform quickly',
    image: '/images/jicate_group_photo.jpg',
  },
  {
    id: 3,
    subtitle: 'Meet Our Team',
    title: 'Together We Build Innovation and Success',
    image: '/images/jicate_group_photo.jpg',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(true);
      }, 100);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(true);
    }, 100);
  };

  const goToNext = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(true);
    }, 100);
  };

  return (
    <section id="home" className="relative h-screen min-h-[560px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center justify-center">
        <div className="text-center w-full max-w-[900px] pt-20">
          <div
            className={`transition-all duration-700 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block text-[#4a9fe8] text-sm sm:text-base md:text-lg font-medium italic mb-4 tracking-[0.05em]">
              {slides[currentSlide].subtitle}
            </span>
            <h1 className="text-[1.625rem] min-[400px]:text-[1.875rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.15] mb-6 md:mb-8 [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] break-words">
              {slides[currentSlide].title}
            </h1>
            <div className="flex justify-center">
              <a
                href="/services"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#2e8bc9] text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full font-semibold text-sm sm:text-[0.9375rem] uppercase tracking-[0.05em] transition-all duration-300 hover:bg-[#2579b0] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(46,139,201,0.4)]"
              >
                Let&apos;s Recent Works
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 -translate-y-1/2 z-20 left-2 sm:left-4 md:left-8 lg:left-12 w-10 h-10 sm:w-[50px] sm:h-[50px] lg:w-[55px] lg:h-[55px] bg-black/20 hover:bg-black/40 border border-white/30 rounded-full text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 z-20 right-2 sm:right-4 md:right-8 lg:right-12 w-10 h-10 sm:w-[50px] sm:h-[50px] lg:w-[55px] lg:h-[55px] bg-black/20 hover:bg-black/40 border border-white/30 rounded-full text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
