'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Turn your visions into tangible reality through our proficient web development services, crafting innovative, customized, responsive, websites.',
    image: '/images/Jicate - Web Development.png',
    icon: 'code',
    link: '#',
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Should my business have a web application? This is a common question that arises among many budding entrepreneurs and business professionals.',
    image: '/images/Jicate - Web Design.png',
    icon: 'design',
    link: '#',
  },
  {
    id: 3,
    title: 'Business Automation',
    description: 'Automate your business processes for efficiency and scalability, streamlining operations and maximizing productivity.',
    image: '/images/Jicate - Business Automation.png',
    icon: 'automation',
    link: '#',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Boost your online presence with our tailored digital marketing solutions, reaching your target audience effectively and driving growth for your business.',
    image: '/images/Jicate - Digital Marketing.png',
    icon: 'marketing',
    link: '#',
  },
  {
    id: 5,
    title: 'WhatsApp Marketing',
    description: 'WhatsApp marketing enables businesses to engage with customers directly, fostering personal connections and driving conversions.',
    image: '/images/Jicate - Whatsapp Marketing.png',
    icon: 'whatsapp',
    link: '#',
  },
  {
    id: 6,
    title: 'Social Media Marketing',
    description: 'Unlock your brand\'s potential with our expert Social Media Marketing services! Engage, grow, and succeed with tailored strategies for your unique audience.',
    image: '/images/Jicate - Social Media Marketing.png',
    icon: 'social',
    link: '#',
  },
  {
    id: 7,
    title: 'Application Development',
    description: 'Application development involves designing and building software solutions tailored to meet specific needs and requirements.',
    image: '/images/Jicate - Application Development.png',
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

const ServiceCard = ({ service, slidesToShow, isDragging }: { service: Service; slidesToShow: number; isDragging: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="flex-shrink-0 px-3"
      style={{ width: `${100 / slidesToShow}%` }}
    >
      <div className={`relative rounded-lg overflow-hidden group flex flex-col justify-end min-h-[450px] md:min-h-[480px] ${isDragging ? 'pointer-events-none' : ''}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.95)] via-[rgba(26,26,46,0.45)] to-[rgba(26,26,46,0.05)]" />
        </div>

        {/* Content */}
        <div className="relative py-8 px-6 text-white z-[1]">
          <div className="w-[70px] h-[70px] bg-[#2e8bc9] rounded-full flex items-center justify-center mb-5 [&_svg]:w-8 [&_svg]:h-8">
            <ServiceIcon type={service.icon} />
          </div>
          <h4 className="text-xl font-bold mb-3">
            {service.title}
          </h4>
          <p className={`text-[0.9375rem] leading-relaxed text-white/85 mb-5 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {service.description}
          </p>
          <button onClick={toggleExpand} className="inline-flex items-center gap-2 text-white font-semibold text-[0.9375rem] transition-all duration-300 bg-transparent border-none p-0 cursor-pointer font-[inherit] hover:text-[#4a9fe8] [&_svg]:w-4 [&_svg]:h-4 [&_svg]:transition-transform [&_svg]:duration-300">
            {isExpanded ? 'Show Less' : 'Show More'}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={isExpanded ? 'rotate-180' : ''}
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
  const isMouseDownRef = useRef(false);

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

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isMouseDownRef.current = true;
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);
    setScrollLeft(currentIndex);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isMouseDownRef.current) return;
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const diff = Math.abs(pageX - startX);
    if (diff > 5) {
      e.preventDefault();
      setIsDragging(true);
      const containerWidth = sliderWrapperRef.current?.offsetWidth || 1;
      const dragPercentage = (startX - pageX) / containerWidth;
      const scrollSensitivity = 2.5;
      const newIndex = scrollLeft + (dragPercentage * slidesToShow * scrollSensitivity);
      const clampedIndex = Math.max(0, Math.min(maxIndex, newIndex));
      setCurrentIndex(clampedIndex);
    }
  };

  const handleDragEnd = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
    setCurrentIndex(Math.round(currentIndex));
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="pt-20 lg:pt-28 bg-gray-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col gap-6 mb-12 sm:flex-row sm:items-end sm:justify-between ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center sm:text-left">
            <span className="inline-flex items-center gap-3 text-[#2e8bc9] font-semibold text-sm uppercase tracking-[0.1em] mb-2 sm:before:content-[''] sm:before:block sm:before:w-12 sm:before:h-[2px] sm:before:bg-[#2e8bc9] sm:before:[box-shadow:0_6px_0_#2e8bc9]">Our Solutions</span>
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-[#1a1a2e] m-0">Popular Services</h2>
          </div>
          <div className="flex gap-3 justify-center sm:justify-end">
            <button
              className="w-[50px] h-[50px] border-2 border-[#1a1a2e] bg-transparent rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 text-[#1a1a2e] hover:bg-[#2e8bc9] hover:border-[#2e8bc9] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed [&_svg]:w-5 [&_svg]:h-5"
              onClick={goToPrev}
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="w-[50px] h-[50px] border-2 border-[#1a1a2e] bg-transparent rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 text-[#1a1a2e] hover:bg-[#2e8bc9] hover:border-[#2e8bc9] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed [&_svg]:w-5 [&_svg]:h-5"
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
          className={`overflow-hidden -mx-3 relative select-none [touch-action:pan-y] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${isVisible ? 'animate-fade-in-up [animation-delay:0.2s]' : 'opacity-0'}`}
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
            className="flex [will-change:transform]"
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
                isDragging={isDragging}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
