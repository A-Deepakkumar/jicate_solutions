import { Metadata } from 'next';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
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
      <main>
        <PageBanner title="About Us" breadcrumb="About Us" />
        <About />
      </main>
      <Footer />
    </>
  );
}
