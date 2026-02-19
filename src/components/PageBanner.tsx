'use client';

import Link from 'next/link';

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <section
      className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(26, 26, 46, 0.7) 0%, rgba(22, 33, 62, 0.7) 100%), url('/images/about-banner.jpg') center/cover no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4 w-full flex items-center justify-center">
        <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:2.5px_white] lg:[-webkit-text-stroke:3px_white] m-0 p-0 tracking-[0.05em] leading-[1]">
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
