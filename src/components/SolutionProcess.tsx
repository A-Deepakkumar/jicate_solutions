'use client';

import { useEffect, useRef, useState } from 'react';
import './SolutionProcess.css';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Identifying problems',
    description: 'We analyze your business challenges and identify key areas that need improvement.',
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
    description: 'Our team conducts thorough research to understand the root cause of issues.',
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
    description: 'We develop customized solutions tailored to address your specific needs.',
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
    description: 'Get guidance from our industry experts to ensure successful implementation.',
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
      className="solution-process"
    >
      {/* Background decorations */}
      <div className="solution-process-bg">
        <div className="solution-process-glow-blue" />
        <div className="solution-process-glow-cyan" />
      </div>

      <div className="solution-process-container">
        {/* Section Header */}
        <div className={`solution-process-header ${isVisible ? 'solution-process-header--visible' : 'solution-process-header--hidden'}`}>
          <span className="solution-process-subtitle">
            How We Work
          </span>
          <h2 className="solution-process-title">
            Our Solution Process
          </h2>
          <p className="solution-process-description">
            A systematic approach to delivering exceptional results for your business
          </p>
        </div>

        {/* Process Steps */}
        <div className={`solution-process-content ${isVisible ? 'solution-process-content--visible' : 'solution-process-content--hidden'}`}>
          {/* Connection Line - Desktop */}
          <div className="solution-process-line" />

          <div className="solution-process-grid">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="process-step"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="process-step-card">
                  {/* Step Number */}
                  <div className="process-step-number">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="process-step-icon">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="process-step-title">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="process-step-description">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="process-step-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
