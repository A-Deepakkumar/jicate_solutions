'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const services = [
    'Web Development',
    'Web Design',
    'Business Automation',
    'Digital Marketing',
    'WhatsApp Marketing',
    'Application Development',
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#1a1a2e] text-white pb-14 lg:pb-0">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto py-16 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-32 h-12">
                <Image
                  src="/images/jicate-logo.png"
                  alt="JICATE Solutions"
                  fill
                  sizes="128px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              JICATE Solutions is a leading IT company providing innovative technology solutions
              to help businesses grow and succeed in the digital world.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/jicatesolution/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#0066cc] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-current" aria-label="Facebook">
                <svg viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/jicate.solutions/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#0066cc] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-current" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/jicate-solutions/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#0066cc] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-current" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="text-gray-400 transition-colors duration-300 hover:text-[#0066cc] flex items-center gap-2 [&_svg]:w-4 [&_svg]:h-4">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 transition-colors duration-300 hover:text-[#0066cc] flex items-center gap-2 [&_svg]:w-4 [&_svg]:h-4">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0066cc]/20 rounded-lg flex items-center justify-center shrink-0 text-[#0066cc] [&_svg]:w-5 [&_svg]:h-5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <p>Tamil Nadu, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0066cc]/20 rounded-lg flex items-center justify-center shrink-0 text-[#0066cc] [&_svg]:w-5 [&_svg]:h-5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <p>+919943272666</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0066cc]/20 rounded-lg flex items-center justify-center shrink-0 text-[#0066cc] [&_svg]:w-5 [&_svg]:h-5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <p>info@jicate.solutions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0066cc]/20 rounded-lg flex items-center justify-center shrink-0 text-[#0066cc] [&_svg]:w-5 [&_svg]:h-5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-gray-400">
                  <p>Monday - Friday</p>
                  <p>9 AM - 5 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto py-6 px-4 lg:px-8 flex flex-col md:flex-row gap-4 items-center md:justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} JICATE Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-[#0066cc]">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-[#0066cc]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
