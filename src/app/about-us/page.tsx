import { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us - JICATE Solutions',
  description: 'Learn about JICATE Solutions - a leading IT company with 12+ years of experience delivering innovative technology solutions.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] sm:pt-[116px] lg:pt-[124px]">
        <About />
      </main>
      <Footer />
    </>
  );
}
