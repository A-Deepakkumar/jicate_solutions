'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Portfolio.css';

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
      className="portfolio"
    >
      <div className="portfolio-container">
        {/* Section Header */}
        <div className={`portfolio-header ${isVisible ? 'portfolio-header--visible' : 'portfolio-header--hidden'}`}>
          <span className="portfolio-subtitle">
            Our Portfolio
          </span>
          <h2 className="portfolio-title">
            Recent Works
          </h2>
          <p className="portfolio-description">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their goals
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className={`portfolio-grid ${isVisible ? 'portfolio-grid--visible' : 'portfolio-grid--hidden'}`}>
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="portfolio-item-image">
                <div className="portfolio-item-bg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                  />
                </div>

                {/* Overlay */}
                <div className="portfolio-item-overlay" />

                {/* Content */}
                <div className="portfolio-item-content">
                  <span className="portfolio-item-category">
                    {project.category}
                  </span>
                  <h3 className="portfolio-item-title">
                    {project.title}
                  </h3>

                  {/* Icon */}
                  <div className="portfolio-item-icon">
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
        <div className={`portfolio-footer ${isVisible ? 'portfolio-footer--visible' : 'portfolio-footer--hidden'}`}>
          <a href="#" className="btn-primary portfolio-btn">
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
