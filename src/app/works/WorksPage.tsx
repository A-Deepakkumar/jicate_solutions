'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './WorksPage.css';

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
    <section ref={sectionRef} className="works-page">
      <div className="works-page-container">
        {/* Introduction */}
        <div className={`works-page-intro ${isVisible ? 'works-page-intro--visible' : ''}`}>
          <h2 className="works-page-intro-title">Our Portfolio</h2>
          <p className="works-page-intro-text">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their digital goals.
            Each project represents our commitment to quality and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`works-page-filter ${isVisible ? 'works-page-filter--visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              className={`works-page-filter-btn ${activeCategory === category ? 'works-page-filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`works-page-grid ${isVisible ? 'works-page-grid--visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="works-page-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="works-page-item-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="works-page-item-overlay">
                  <div className="works-page-item-overlay-content">
                    <span className="works-page-item-category">{project.category}</span>
                    <h3 className="works-page-item-title">{project.title}</h3>
                    <p className="works-page-item-description">{project.description}</p>
                    <div className="works-page-item-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="works-page-item-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="works-page-item-link">
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
        <div className={`works-page-cta ${isVisible ? 'works-page-cta--visible' : ''}`}>
          <h3 className="works-page-cta-title">Have a Project in Mind?</h3>
          <p className="works-page-cta-text">
            Let&apos;s work together to bring your vision to life. Contact us today to discuss your project.
          </p>
          <a href="/contact" className="works-page-cta-btn">
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
