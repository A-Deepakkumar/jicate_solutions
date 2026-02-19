'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      className="bg-gray-50 relative"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-20">
          {/* Illustration */}
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative max-w-[600px] mx-auto">
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
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <span className="inline-flex items-center gap-3 text-[#2e8bc9] font-semibold text-sm uppercase tracking-[0.1em] mb-4 before:content-[''] before:block before:w-12 before:h-[2px] before:bg-[#2e8bc9] before:[box-shadow:0_6px_0_#2e8bc9]">Premium Services</span>
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-[#1a1a2e] leading-[1.2] mb-6">
              Sharing expertise<br />
              Building relationships
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-[1.75] mb-8">
              At JICATE Solutions, we believe in the power of collaboration. Our
              expertise fuels your success, and our relationships drive
              innovation. Together, we create lasting value and impactful digital
              experiences.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-1 text-[#2e8bc9] font-semibold text-sm uppercase tracking-[0.05em] py-4 px-8 border-2 border-[#2e8bc9] rounded-full transition-all duration-300 bg-transparent hover:bg-[#2e8bc9] hover:text-white [&_svg]:w-5 [&_svg]:h-5">
              <span>CONTACT US</span>
              <svg className="ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <svg className="-ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-8 right-8 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-40 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:border-[#2e8bc9] text-gray-600 hover:text-[#2e8bc9] [&_svg]:w-5 [&_svg]:h-5"
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
