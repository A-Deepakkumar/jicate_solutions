'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Turn your visions into tangible reality through our proficient web development services, crafting innovative, customized, responsive, websites. We use the latest technologies and frameworks to build scalable, secure, and high-performance web solutions that drive business growth.',
    image: '/images/Jicate - Web Development.png',
    icon: 'code',
    features: ['Custom Web Applications', 'E-Commerce Solutions', 'CMS Development', 'API Integration'],
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Should my business have a web application? This is a common question that arises among many budding entrepreneurs and business professionals. Our creative designers craft stunning, user-friendly interfaces that captivate your audience and enhance user experience.',
    image: '/images/Jicate - Web Design.png',
    icon: 'design',
    features: ['UI/UX Design', 'Responsive Design', 'Brand Identity', 'Prototype Development'],
  },
  {
    id: 3,
    title: 'Business Automation',
    description: 'Automate your business processes for efficiency and scalability, streamlining operations and maximizing productivity. We help businesses reduce manual tasks, minimize errors, and improve operational efficiency through smart automation solutions.',
    image: '/images/Jicate - Business Automation.png',
    icon: 'automation',
    features: ['Workflow Automation', 'CRM Integration', 'Process Optimization', 'Custom Software'],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Boost your online presence with our tailored digital marketing solutions, reaching your target audience effectively and driving growth for your business. Our data-driven strategies ensure maximum ROI for your marketing investments.',
    image: '/images/Jicate - Digital Marketing.png',
    icon: 'marketing',
    features: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing', 'Analytics & Reporting'],
  },
  {
    id: 5,
    title: 'WhatsApp Marketing',
    description: 'WhatsApp marketing enables businesses to engage with customers directly, fostering personal connections and driving conversions. Reach your customers where they are most active with personalized messaging campaigns.',
    image: '/images/Jicate - Whatsapp Marketing.png',
    icon: 'whatsapp',
    features: ['Bulk Messaging', 'Automated Responses', 'Campaign Management', 'Customer Support'],
  },
  {
    id: 6,
    title: 'Social Media Marketing',
    description: "Unlock your brand's potential with our expert Social Media Marketing services! Engage, grow, and succeed with tailored strategies for your unique audience. Build a strong social presence across all major platforms.",
    image: '/images/Jicate - Social Media Marketing.png',
    icon: 'social',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Influencer Marketing'],
  },
  {
    id: 7,
    title: 'Application Development',
    description: 'Application development involves designing and building software solutions tailored to meet specific needs and requirements. From mobile apps to enterprise software, we deliver solutions that transform your business.',
    image: '/images/Jicate - Application Development.png',
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Introduction */}
        <div className={`text-center max-w-[800px] mx-auto mb-16 transition-all duration-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1a1a2e] mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 leading-[1.7]">
            At JICATE Solutions, we provide comprehensive IT services designed to help your business thrive in the digital age.
            With over 12 years of experience, our team delivers innovative solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid gap-8 items-center lg:grid-cols-2 lg:gap-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden [direction:ltr]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(46,139,201,0.1)] to-transparent" />
              </div>

              {/* Content */}
              <div className="py-4 [direction:ltr]">
                <div className="w-[70px] h-[70px] bg-[#2e8bc9] rounded-full flex items-center justify-center mb-6 text-white [&_svg]:w-8 [&_svg]:h-8">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-[1.75rem] md:text-[2rem] font-bold text-[#1a1a2e] mb-4">{service.title}</h3>
                <p className="text-base text-gray-600 leading-[1.7] mb-6">{service.description}</p>

                {/* Features */}
                <ul className="list-none p-0 m-0 mb-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-[0.9375rem]">
                      <svg className="w-5 h-5 text-[#2e8bc9] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="inline-flex items-center gap-2 bg-[#2e8bc9] text-white py-[0.875rem] px-[1.75rem] rounded-[50px] font-semibold text-[0.9375rem] transition-all duration-300 hover:bg-[#2579b0] hover:gap-3 [&_svg]:w-5 [&_svg]:h-5">
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
