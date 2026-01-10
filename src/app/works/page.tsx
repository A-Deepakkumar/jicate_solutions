import { Metadata } from 'next';
import Header from '@/components/Header';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import './works.css';

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
        <section className="coming-soon">
          <div className="coming-soon-container">
            <h1 className="coming-soon-title">COMING SOON</h1>
            <p className="coming-soon-subtitle">We are under construction and will be back soon .</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
