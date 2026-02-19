'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Adiya Properties',
    category: 'Web Development',
    description: 'A comprehensive real estate website showcasing property listings with advanced search functionality.',
    image: '/images/portfolio/adiya-properties.jpg',
    link: 'https://adiyaproperties.com',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Unibox',
    category: 'Web Application',
    description: 'A full-featured web application with real-time features and user management system.',
    image: '/images/portfolio/unibox.jpg',
    link: 'https://unibox.live',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Electwin',
    category: 'E-Commerce',
    description: 'An e-commerce platform for electronics with payment integration and inventory management.',
    image: '/images/portfolio/electwin.jpg',
    link: '#',
    tags: ['WooCommerce', 'WordPress', 'PHP'],
  },
  {
    id: 4,
    title: 'SK Paints',
    category: 'Business Website',
    description: 'A professional business website showcasing paint products and services with a modern design.',
    image: '/images/portfolio/sk-paints.jpg',
    link: 'https://skpaints.co.in',
    tags: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
  },
];

const categories = ['All', 'Web Development', 'Web Application', 'E-Commerce', 'Business Website'];

const WorksPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
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

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Introduction */}
        <div className={`text-center max-w-[800px] mx-auto mb-12 transition-all duration-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a2e] mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 leading-[1.7]">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their digital goals.
            Each project represents our commitment to quality and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-[600ms] delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2.5 px-5 border-2 rounded-[50px] font-medium text-[0.9375rem] cursor-pointer transition-all duration-300 font-[inherit] ${activeCategory === category ? 'bg-[#2e8bc9] border-[#2e8bc9] text-white' : 'border-gray-200 bg-white text-gray-600 hover:border-[#2e8bc9] hover:text-[#2e8bc9]'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 md:grid-cols-2 transition-opacity duration-[600ms] delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.95)] via-[rgba(26,26,46,0.7)] to-transparent flex items-end p-8 transition-all duration-300 group-hover:from-[rgba(46,139,201,0.95)] group-hover:via-[rgba(46,139,201,0.8)] group-hover:to-[rgba(46,139,201,0.4)]">
                  <div className="text-white">
                    <span className="inline-block bg-white/20 py-1 px-3 rounded-[50px] text-xs font-medium uppercase tracking-[0.05em] mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-[0.9375rem] text-white/85 leading-[1.5] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/15 py-1 px-2 rounded text-xs">{tag}</span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 font-semibold text-[0.9375rem] opacity-0 translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 [&_svg]:w-5 [&_svg]:h-5">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Project
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 py-16 px-8 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl transition-all duration-[600ms] delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          <h3 className="text-[1.75rem] md:text-[2.25rem] font-bold text-white mb-4">Have a Project in Mind?</h3>
          <p className="text-lg text-white/80 max-w-[600px] mx-auto mb-8">
            Let&apos;s work together to bring your vision to life. Contact us today to discuss your project.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#2e8bc9] text-white py-4 px-8 rounded-[50px] font-semibold text-base transition-all duration-300 hover:bg-[#2579b0] hover:gap-3 [&_svg]:w-5 [&_svg]:h-5">
            Start Your Project
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
