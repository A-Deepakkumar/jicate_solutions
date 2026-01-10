'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './ServicesPage.css';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Turn your visions into tangible reality through our proficient web development services, crafting innovative, customized, responsive, websites. We use the latest technologies and frameworks to build scalable, secure, and high-performance web solutions that drive business growth.',
    image: '/images/services/services-1.jpg',
    icon: 'code',
    features: ['Custom Web Applications', 'E-Commerce Solutions', 'CMS Development', 'API Integration'],
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Should my business have a web application? This is a common question that arises among many budding entrepreneurs and business professionals. Our creative designers craft stunning, user-friendly interfaces that captivate your audience and enhance user experience.',
    image: '/images/services/services-2.jpg',
    icon: 'design',
    features: ['UI/UX Design', 'Responsive Design', 'Brand Identity', 'Prototype Development'],
  },
  {
    id: 3,
    title: 'Business Automation',
    description: 'Automate your business processes for efficiency and scalability, streamlining operations and maximizing productivity. We help businesses reduce manual tasks, minimize errors, and improve operational efficiency through smart automation solutions.',
    image: '/images/services/services-3.jpg',
    icon: 'automation',
    features: ['Workflow Automation', 'CRM Integration', 'Process Optimization', 'Custom Software'],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Boost your online presence with our tailored digital marketing solutions, reaching your target audience effectively and driving growth for your business. Our data-driven strategies ensure maximum ROI for your marketing investments.',
    image: '/images/services/services-4.jpg',
    icon: 'marketing',
    features: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing', 'Analytics & Reporting'],
  },
  {
    id: 5,
    title: 'WhatsApp Marketing',
    description: 'WhatsApp marketing enables businesses to engage with customers directly, fostering personal connections and driving conversions. Reach your customers where they are most active with personalized messaging campaigns.',
    image: '/images/services/services-5.jpg',
    icon: 'whatsapp',
    features: ['Bulk Messaging', 'Automated Responses', 'Campaign Management', 'Customer Support'],
  },
  {
    id: 6,
    title: 'Social Media Marketing',
    description: "Unlock your brand's potential with our expert Social Media Marketing services! Engage, grow, and succeed with tailored strategies for your unique audience. Build a strong social presence across all major platforms.",
    image: '/images/services/services-6.jpg',
    icon: 'social',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Influencer Marketing'],
  },
  {
    id: 7,
    title: 'Application Development',
    description: 'Application development involves designing and building software solutions tailored to meet specific needs and requirements. From mobile apps to enterprise software, we deliver solutions that transform your business.',
    image: '/images/services/services-7.jpg',
    icon: 'app',
    features: ['Mobile Apps (iOS/Android)', 'Enterprise Solutions', 'Cloud Applications', 'Maintenance & Support'],
  },
];

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

const ServicesPage = () => {
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
    <section ref={sectionRef} className="services-page">
      <div className="services-page-container">
        {/* Introduction */}
        <div className={`services-page-intro ${isVisible ? 'services-page-intro--visible' : ''}`}>
          <h2 className="services-page-intro-title">What We Offer</h2>
          <p className="services-page-intro-text">
            At JICATE Solutions, we provide comprehensive IT services designed to help your business thrive in the digital age.
            With over 12 years of experience, our team delivers innovative solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services List */}
        <div className="services-page-list">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`services-page-item ${isVisible ? 'services-page-item--visible' : ''} ${index % 2 === 1 ? 'services-page-item--reverse' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="services-page-item-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="services-page-item-image-overlay" />
              </div>

              {/* Content */}
              <div className="services-page-item-content">
                <div className="services-page-item-icon">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="services-page-item-title">{service.title}</h3>
                <p className="services-page-item-description">{service.description}</p>

                {/* Features */}
                <ul className="services-page-item-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="services-page-item-btn">
                  Get Started
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
