import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesPage from './ServicesPage';

export const metadata: Metadata = {
  title: 'Our Services - JICATE Solutions',
  description: 'Explore our comprehensive IT services including Web Development, Web Design, Digital Marketing, Business Automation, and more.',
};

export default function Services() {
  return (
    <>
      <Header />
      <main className="pt-[100px] sm:pt-[116px] lg:pt-[124px]">
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
