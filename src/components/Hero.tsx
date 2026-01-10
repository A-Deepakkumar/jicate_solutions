'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './Hero.css';

const slides = [
  {
    id: 1,
    subtitle: 'Welcome Our Company',
    title: 'We Provide Truly Prominent IT Solutions',
    image: '/images/banner-1.jpg',
  },
  {
    id: 2,
    subtitle: 'Welcome Our Company',
    title: 'Consulting Business can transform quickly',
    image: '/images/banner-2.jpg',
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
    <section id="home" className="hero">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'hero-slide--active' : 'hero-slide--inactive'}`}
        >
          {/* Background Image */}
          <div className="hero-bg-image">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
          {/* Overlay */}
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div
            className={`hero-content-animated ${isAnimating ? 'hero-content-animated--visible' : 'hero-content-animated--hidden'}`}
          >
            <span className="hero-subtitle">
              {slides[currentSlide].subtitle}
            </span>
            <h1 className="hero-title">
              {slides[currentSlide].title}
            </h1>
            <div className="hero-button-wrapper">
              <a href="#works" className="hero-btn">
                Let&apos;s Recent Works
                <svg className="hero-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="hero-arrow hero-arrow--prev"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="hero-arrow hero-arrow--next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
