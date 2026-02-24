import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Works - JICATE Solutions',
  description: 'Explore our portfolio of successful projects including web development, e-commerce, and business websites.',
};

export default function Works() {
  return (
    <>
      <Header />
      <main className="pt-[100px] sm:pt-[116px] lg:pt-[124px]">
        <section className="py-20 sm:py-24 lg:py-32 bg-gray-50 flex items-center justify-center min-h-[400px]">
          <div className="text-center px-4 w-full max-w-[600px] mx-auto">
            <h1 className="text-[1.75rem] min-[400px]:text-[2rem] sm:text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold text-[#1a1a2e] tracking-[0.06em] sm:tracking-[0.1em] mb-4 sm:mb-6 break-words">COMING SOON</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">We are under construction and will be back soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
