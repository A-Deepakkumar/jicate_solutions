'use client';

import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && count < 12) {
      const timer = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  const features = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Services',
      description: 'Delivering excellence in every project',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Expert Team',
      description: 'Skilled professionals dedicated to your success',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about"
    >
      {/* Background decorations */}
      <div className="about-bg-top" />
      <div className="about-bg-bottom" />

      <div className="about-container">
        <div className="about-grid">
          {/* Left side - Images */}
          <div className={`about-images ${isVisible ? 'about-images--visible' : 'about-images--hidden'}`}>
            <div className="about-images-wrapper">
              {/* Main image placeholder */}
              <div className="about-main-image">
                <div className="about-main-image-inner">
                  <div className="about-main-image-content">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>About JICATE</span>
                  </div>
                </div>
              </div>

              {/* Secondary image placeholder */}
              <div className="about-secondary-image">
                <div className="about-secondary-image-inner">
                  <div className="about-secondary-image-content">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Our Team</span>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="about-experience-badge">
                <div className="about-experience-badge-number">{count}+</div>
                <div className="about-experience-badge-text">Years<br />Experience</div>
              </div>

              {/* Decorative shape */}
              <div className="about-decorative-shape" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className={isVisible ? 'about-content--visible' : 'about-content--hidden'}>
            <span className="about-subtitle">
              About Company
            </span>
            <h2 className="about-title">
              Powerful digital experiences driven by{' '}
              <span className="about-title-highlight">Innovation</span>
            </h2>
            <p className="about-text">
              JICATE Solutions is a leading IT company dedicated to delivering innovative technology solutions.
              With over 12 years of experience, we have helped businesses transform their digital presence
              and achieve remarkable growth.
            </p>
            <p className="about-text-secondary">
              Our team of skilled professionals is committed to providing top-quality services,
              from web development and design to digital marketing and business automation.
              We believe in building lasting relationships with our clients through trust,
              transparency, and exceptional results.
            </p>

            {/* Features */}
            <div className="about-features">
              <div className="about-features-list">
                {features.map((feature, index) => (
                  <div key={index} className="about-feature">
                    <div className="about-feature-icon">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="about-feature-title">{feature.title}</h4>
                      <p className="about-feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a href="#contact" className="btn-primary about-btn">
              Learn More About Us
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
