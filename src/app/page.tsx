import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import SolutionProcess from '@/components/SolutionProcess';
import PremiumServices from '@/components/PremiumServices';
// import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <SolutionProcess />
        <PremiumServices />
        {/* <Team /> */}
      </main>
      <Footer />
    </>
  );
}
