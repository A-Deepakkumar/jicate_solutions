'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Adiya Properties',
    category: 'Web Development',
    image: '/images/portfolio/adiya-properties.jpg',
    link: 'https://adiyaproperties.com',
  },
  {
    id: 2,
    title: 'Unibox',
    category: 'Web Application',
    image: '/images/portfolio/unibox.jpg',
    link: 'https://unibox.live',
  },
  {
    id: 3,
    title: 'Electwin',
    category: 'E-Commerce',
    image: '/images/portfolio/electwin.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'SK Paints',
    category: 'Business Website',
    image: '/images/portfolio/sk-paints.jpg',
    link: 'https://skpaints.co.in',
  },
];

const Portfolio = () => {
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
      id="works"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-3 text-[#0066cc] font-semibold text-sm uppercase tracking-[0.05em] before:content-[''] before:block before:w-12 before:h-[2px] before:bg-[#0066cc] before:[box-shadow:0_6px_0_#0066cc]">
            Our Portfolio
          </span>
          <h2 className="text-[1.625rem] sm:text-[1.875rem] md:text-[2.25rem] lg:text-[3rem] font-bold text-[#1a1a2e] mt-3 mb-4">
            Recent Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their goals
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] block group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0066cc] [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-110">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-[#0066cc] text-sm font-medium mb-1 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    {project.title}
                  </h3>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#0066cc] rounded-full flex items-center justify-center opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-white">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <a href="#" className="inline-flex items-center gap-2 bg-[#0066cc] text-white py-4 px-8 rounded-full font-semibold transition-colors duration-300 hover:bg-[#0055aa] [&_svg]:w-5 [&_svg]:h-5">
            View All Projects
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
