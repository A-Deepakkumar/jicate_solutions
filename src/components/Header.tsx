'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.163 5.545c1.32 1.612 2.137 3.64 2.195 5.846-1.416-.282-3.126-.453-5.01-.336-.353-.851-.722-1.67-1.117-2.449 2.164-.92 3.323-1.96 3.932-3.061zM12 1.844c2.498 0 4.787.895 6.574 2.374-.495.932-1.513 1.89-3.48 2.727-1.147-2.078-2.39-3.792-3.555-5.04.151-.013.305-.02.461-.061zm-2.39.195c1.19 1.223 2.46 2.94 3.635 5.048-2.554.86-5.598 1.287-8.693 1.25 1.02-2.774 3.172-4.988 5.058-6.298zM1.844 12l.001-.144c.393.01.791.019 1.193.019 3.276 0 6.424-.507 9.185-1.497.342.669.663 1.37.957 2.097-4.122 1.262-7.224 4.13-8.834 6.328-1.597-1.753-2.502-4.065-2.502-6.803zm4.252 8.432c1.386-2.047 4.241-4.66 8.064-5.847.827 2.184 1.441 4.627 1.688 7.231-1.214.44-2.525.69-3.893.69-2.23 0-4.292-.733-5.859-2.074zm7.935 1.683c-.263-2.397-.834-4.633-1.586-6.655 1.604-.195 3.082-.062 4.307.179-.49 2.8-1.61 5.182-2.721 6.476z"/>
        </svg>
      ),
    },
    {
      name: 'Behance',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM6.545 9.64c.56 0 1.01-.13 1.36-.403.345-.272.52-.69.52-1.26 0-.31-.06-.57-.17-.78-.11-.21-.26-.38-.45-.51-.19-.13-.42-.22-.67-.277-.252-.06-.53-.09-.82-.09H3.38v3.32h3.165zm.18 5.87c.32 0 .62-.03.9-.09.28-.06.53-.16.74-.3.21-.137.385-.328.51-.567.124-.24.186-.54.186-.91 0-.72-.21-1.24-.64-1.55-.424-.31-.985-.465-1.68-.465H3.38v3.88h3.345zm10.498-3.29c.21.65.51 1.19.91 1.62.4.43.89.76 1.455.98.57.22 1.19.33 1.86.33.89 0 1.64-.17 2.24-.51.6-.33 1.07-.82 1.39-1.46l2.7.99c-.56 1.05-1.36 1.88-2.4 2.48-1.04.6-2.25.9-3.63.9-1.07 0-2.06-.17-2.95-.51-.9-.34-1.68-.82-2.32-1.45-.65-.63-1.16-1.39-1.52-2.29-.36-.9-.54-1.9-.54-3.01 0-1.06.18-2.04.54-2.93.36-.9.86-1.67 1.51-2.32.65-.65 1.42-1.16 2.31-1.52.9-.36 1.88-.54 2.94-.54 1.19 0 2.24.21 3.13.64.9.42 1.65.99 2.26 1.7.61.7 1.07 1.53 1.38 2.47.31.94.45 1.93.42 2.96h-9.63c-.01.86.14 1.57.35 2.21v.03h.02zm6.19-4.77c-.27-.55-.63-1.02-1.08-1.39-.45-.37-.98-.65-1.59-.83-.6-.18-1.25-.27-1.94-.27-.66 0-1.28.1-1.85.29-.58.19-1.09.47-1.53.83-.44.36-.81.82-1.1 1.38-.23.43-.38.93-.47 1.5h9.6c-.06-.58-.22-1.08-.47-1.51h.43zM15.5 4.57h6.09v1.7H15.5v-1.7z"/>
        </svg>
      ),
    },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="header-topbar-container">
          <div className="header-topbar-left">
            <svg className="header-topbar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="header-topbar-text">Working Hours : Monday - Friday 9 AM - 5 PM</span>
          </div>
          <div className="header-topbar-right">
            <ul className="header-topbar-social">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a href={social.href} className="header-topbar-social-link" aria-label={social.name}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-main-container">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <div className="header-logo-image">
              <Image
                src="/images/jicate-logo.png"
                alt="JICATE Solutions"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="header-nav-link"
              >
                {item.name}
                <span className="header-nav-plus">+</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="header-mobile-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="header-mobile-nav">
            <div className="header-mobile-nav-container">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="header-mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="header-nav-plus">+</span>
                </Link>
              ))}
              <div className="header-mobile-social">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} className="header-mobile-social-link" aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
