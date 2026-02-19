import { Metadata } from 'next';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Works - JICATE Solutions',
  description: 'Explore our portfolio of successful projects including web development, e-commerce, and business websites.',
};

export default function Works() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="Works" breadcrumb="Works" />
        <section className="py-24 lg:py-32 bg-gray-50 flex items-center justify-center min-h-[400px]">
          <div className="text-center px-4">
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold text-[#1a1a2e] tracking-[0.1em] mb-6">COMING SOON</h1>
            <p className="text-lg md:text-xl text-gray-600">We are under construction and will be back soon .</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
