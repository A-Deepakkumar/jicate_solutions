'use client';

import Link from 'next/link';

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <section
      className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[450px] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(26, 26, 46, 0.7) 0%, rgba(22, 33, 62, 0.7) 100%), url('/images/about-banner.jpg') center/cover no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4 sm:px-8 w-full flex items-center justify-center">
        <h1
          className="font-bold text-transparent m-0 p-0 tracking-[0.04em] leading-[1.1] break-words w-full"
          style={{
            fontSize: 'clamp(2rem, 7vw, 5rem)',
            WebkitTextStroke: 'clamp(1.5px, 0.3vw, 3px) white',
          }}
        >
          {title}
        </h1>
      </div>
      <div className="hidden">
        <Link href="/" className="page-banner-breadcrumb-link">Home</Link>
        <span>/</span>
        <span>{breadcrumb}</span>
      </div>
    </section>
  );
};

export default PageBanner;
