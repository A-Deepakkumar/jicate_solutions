'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Turn your visions into tangible reality through our proficient web development services, crafting innovative, customized, responsive, websites.',
    image: '/images/services/services-1.jpg',
    icon: 'code',
    link: '#',
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Should my business have a web application? This is a common question that arises among many budding entrepreneurs and business professionals.',
    image: '/images/services/services-2.jpg',
    icon: 'design',
    link: '#',
  },
  {
    id: 3,
    title: 'Business Automation',
    description: 'Automate your business processes for efficiency and scalability, streamlining operations and maximizing productivity.',
    image: '/images/services/services-3.jpg',
    icon: 'automation',
    link: '#',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Boost your online presence with our tailored digital marketing solutions, reaching your target audience effectively and driving growth for your business.',
    image: '/images/services/services-4.jpg',
    icon: 'marketing',
    link: '#',
  },
  {
    id: 5,
    title: 'WhatsApp Marketing',
    description: 'WhatsApp marketing enables businesses to engage with customers directly, fostering personal connections and driving conversions.',
    image: '/images/services/services-5.jpg',
    icon: 'whatsapp',
    link: '#',
  },
  {
    id: 6,
    title: 'Social Media Marketing',
    description: 'Unlock your brand\'s potential with our expert Social Media Marketing services! Engage, grow, and succeed with tailored strategies for your unique audience.',
    image: '/images/services/services-6.jpg',
    icon: 'social',
    link: '#',
  },
  {
    id: 7,
    title: 'Application Development',
    description: 'Application development involves designing and building software solutions tailored to meet specific needs and requirements.',
    image: '/images/services/services-7.jpg',
    icon: 'app',
    link: '#',
  },
];

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
}

const ServiceCard = ({ service, slidesToShow }: { service: Service; slidesToShow: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="service-card"
      style={{ width: `${100 / slidesToShow}%` }}
    >
      <div className={`service-card-inner ${isExpanded ? 'service-card-inner--expanded' : ''}`}>
        {/* Background Image */}
        <div className="service-card-bg">
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="service-card-overlay" />
        </div>

        {/* Content */}
        <div className="service-card-content">
          <div className="service-card-icon">
            <ServiceIcon type={service.icon} />
          </div>
          <h4 className="service-card-title">
            {service.title}
          </h4>
          <p className={`service-card-description ${isExpanded ? 'service-card-description--expanded' : ''}`}>
            {service.description}
          </p>
          <button onClick={toggleExpand} className="service-card-link">
            {isExpanded ? 'Show Less' : 'Show More'}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={isExpanded ? 'service-card-link-icon--rotated' : ''}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'code':
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'design':
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      );
    case 'automation':
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'marketing':
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'social':
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'app':
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - slidesToShow);

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch/Mouse drag handlers for smooth finger scrolling
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    setScrollLeft(currentIndex);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const containerWidth = sliderWrapperRef.current?.offsetWidth || 1;
    // Calculate drag distance as percentage with higher sensitivity for smoother visible scrolling
    const dragPercentage = (startX - pageX) / containerWidth;
    const scrollSensitivity = 2.5; // Increased for more responsive scrolling
    const newIndex = scrollLeft + (dragPercentage * slidesToShow * scrollSensitivity);
    // Clamp to valid range but allow decimal values for smooth animation
    const clampedIndex = Math.max(0, Math.min(maxIndex, newIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Snap to nearest card with smooth transition
    setCurrentIndex(Math.round(currentIndex));
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services"
    >
      <div className="services-container">
        {/* Section Header */}
        <div className={`services-header ${isVisible ? 'services-header--visible' : 'services-header--hidden'}`}>
          <div className="services-header-content">
            <span className="services-subtitle">Our Solutions</span>
            <h2 className="services-title">Popular Services</h2>
          </div>
          <div className="services-header-arrows">
            <button
              className="services-arrow services-arrow--prev"
              onClick={goToPrev}
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="services-arrow services-arrow--next"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Slider */}
        <div
          ref={sliderWrapperRef}
          className={`services-slider-wrapper ${isVisible ? 'services-slider--visible' : 'services-slider--hidden'} ${isDragging ? 'services-slider--dragging' : ''}`}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={sliderRef}
            className="services-slider"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              transition: isDragging ? 'none' : 'transform 0.5s ease',
            }}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                slidesToShow={slidesToShow}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
