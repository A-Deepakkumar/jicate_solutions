'use client';

import { useEffect, useRef, useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Rahul Raj',
    role: 'Web Developer',
    initials: 'JD',
    gradientClass: 'bg-gradient-to-br from-blue-600 to-purple-600',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:john@jicate.solutions',
    },
  },
  {
    id: 2,
    name: 'Roja',
    role: 'Automation Tester',
    initials: 'JS',
    gradientClass: 'bg-gradient-to-br from-green-500 to-teal-600',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:jane@jicate.solutions',
    },
  },
  {
    id: 3,
    name: 'Ramesh',
    role: 'Marketer',
    initials: 'MJ',
    gradientClass: 'bg-gradient-to-br from-orange-500 to-red-600',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:mike@jicate.solutions',
    },
  },
];

const Team = () => {
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
      className="py-20 lg:py-28 bg-gray-50"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-3 text-[#0066cc] font-semibold text-sm uppercase tracking-[0.05em] before:content-[''] before:block before:w-12 before:h-[2px] before:bg-[#0066cc] before:[box-shadow:0_6px_0_#0066cc]">
            Our Team
          </span>
          <h2 className="text-[1.875rem] md:text-[2.25rem] lg:text-[3rem] font-bold text-[#1a1a2e] mt-3 mb-4">
            Meet Our Experts
          </h2>
          <p className="text-gray-600 text-lg">
            Dedicated professionals committed to delivering exceptional results
          </p>
        </div>

        {/* Team Grid */}
        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[64rem] mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group-hover:-translate-y-2">
                {/* Image placeholder */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square relative">
                    <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${member.gradientClass}`}>
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-4xl font-bold">{member.initials}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0066cc] transition-all duration-300 hover:bg-[#0066cc] hover:text-white [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-current">
                        <svg viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0066cc] transition-all duration-300 hover:bg-[#0066cc] hover:text-white [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-current">
                        <svg viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href={member.social.email} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0066cc] transition-all duration-300 hover:bg-[#0066cc] hover:text-white [&_svg]:w-5 [&_svg]:h-5">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-1 transition-colors duration-300 group-hover:text-[#0066cc]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
