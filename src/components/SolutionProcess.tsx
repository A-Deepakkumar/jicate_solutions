'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Identifying problems',
    description: 'Aenean pretium condimentum ornare. Curabitur',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Research your Problem',
    description: 'Aenean pretium condimentum ornare. Curabitur',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Solutions your Problem',
    description: 'Aenean pretium condimentum ornare. Curabitur',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Consultation with experts',
    description: 'Aenean pretium condimentum ornare. Curabitur',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const SolutionProcess = () => {
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
      className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-3 text-[#0066cc] font-semibold text-sm uppercase tracking-[0.05em] before:content-[''] before:block before:w-12 before:h-[2px] before:bg-[#0066cc] before:[box-shadow:0_10px_0_#0066cc]">
            WORK PROCESS
          </span>
          <h2 className="text-[1.875rem] md:text-[2.25rem] lg:text-[3rem] font-bold text-[#1a1a2e] mt-3 mb-4">
            Our Solution Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-black/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="bg-transparent py-8 px-4 text-center transition-all duration-300">
                  {/* Step Number */}
                  <div className="w-28 h-28 bg-black/[0.02] border-2 border-black/[0.08] rounded-full flex items-center justify-center text-black/[0.15] font-light text-5xl mx-auto mb-8 transition-all duration-300 cursor-pointer hover:bg-[#0066cc] hover:border-[#0066cc] hover:text-white hover:scale-105">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[0.9375rem] leading-relaxed max-w-[16rem] mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-10 z-[1]">
                    <svg className="w-20 h-8 text-[#1a1a2e] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ strokeDasharray: '4 4' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionProcess;
