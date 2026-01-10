'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './PremiumServices.css';

const PremiumServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="premium-services"
    >
      <div className="premium-services-container">
        <div className="premium-services-grid">
          {/* Illustration */}
          <div className={`premium-services-illustration ${isVisible ? 'premium-services-illustration--visible' : 'premium-services-illustration--hidden'}`}>
            <div className="premium-services-image-wrapper">
              <Image
                src="/images/premium-services-illustration.svg"
                alt="Developer working at computer"
                width={600}
                height={500}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className={`premium-services-content ${isVisible ? 'premium-services-content--visible' : 'premium-services-content--hidden'}`}>
            <span className="premium-services-subtitle">Premium Services</span>
            <h2 className="premium-services-title">
              Sharing expertise<br />
              Building relationships
            </h2>
            <p className="premium-services-description">
              At JICATE Solutions, we believe in the power of collaboration. Our
              expertise fuels your success, and our relationships drive
              innovation. Together, we create lasting value and impactful digital
              experiences.
            </p>
            <Link href="/contact" className="premium-services-btn">
              <span>CONTACT US</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        className="premium-services-scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </section>
  );
};

export default PremiumServices;
