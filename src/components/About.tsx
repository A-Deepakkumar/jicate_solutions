'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066cc]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00a8e8]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-20">
          {/* Left side - Images */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/Jicate - About Company.png"
                    alt="About JICATE"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Secondary image */}
              <div className="hidden md:block absolute -bottom-8 -right-8 w-2/3 z-20 rounded-2xl overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] border-4 border-white">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/Jicate - Our Team.png"
                    alt="Our Team"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Experience badge */}
              <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 bg-[#0066cc] text-white rounded-2xl p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] z-30">
                <div className="text-5xl font-bold">{count}+</div>
                <div className="text-sm mt-1">Years<br />Experience</div>
              </div>

              {/* Decorative shape */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#0066cc]/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className={isVisible ? 'animate-fade-in-right' : 'opacity-0'}>
            <span className="inline-flex items-center gap-3 text-[#0066cc] font-semibold text-sm uppercase tracking-[0.05em] before:content-[''] before:block before:w-12 before:h-[2px] before:bg-[#0066cc] before:[box-shadow:0_6px_0_#0066cc]">
              About Company
            </span>
            <h2 className="text-[1.875rem] md:text-[2.25rem] lg:text-[3rem] font-bold text-[#1a1a2e] mt-3 mb-6 leading-[1.1]">
              Powerful digital experiences driven by{' '}
              <span className="text-[#0066cc]">Innovation</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              JICATE Solutions is a leading IT company dedicated to delivering innovative technology solutions.
              With over 12 years of experience, we have helped businesses transform their digital presence
              and achieve remarkable growth.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of skilled professionals is committed to providing top-quality services,
              from web development and design to digital marketing and business automation.
              We believe in building lasting relationships with our clients through trust,
              transparency, and exceptional results.
            </p>

            {/* Features */}
            <div className="mb-8">
              <div className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center shrink-0 text-[#0066cc] [&_svg]:w-6 [&_svg]:h-6">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {/* <a href="#contact" className="inline-flex items-center gap-2 bg-[#0066cc] text-white py-4 px-8 rounded-full font-semibold transition-colors duration-300 hover:bg-[#0055aa] [&_svg]:w-5 [&_svg]:h-5">
              Learn More About Us
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
