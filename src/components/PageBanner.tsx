'use client';

import Link from 'next/link';
import './PageBanner.css';

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay" />
      <div className="page-banner-content">
        <h1 className="page-banner-title">{title}</h1>
        <div className="page-banner-breadcrumb">
          <Link href="/" className="page-banner-breadcrumb-link">Home</Link>
          <span className="page-banner-breadcrumb-separator">/</span>
          <span className="page-banner-breadcrumb-current">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
