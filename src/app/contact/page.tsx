import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us - JICATE Solutions',
  description: 'Get in touch with JICATE Solutions. Contact us for web development, digital marketing, and IT solutions.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] sm:pt-[116px] lg:pt-[124px]">
        <Contact />
        {/* Map Section */}
        <section className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6247707855876!2d77.7311642!3d11.4438507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9681da53f49cb%3A0xa6ea1576fd356dc2!2sJKKN%20College%20of%20Education!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JICATE Solutions Location"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
