import { Metadata } from 'next';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
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
      <main>
        <PageBanner title="Our Services" breadcrumb="Services" />
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
