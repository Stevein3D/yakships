import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Projects from '@/components/Projects';
import Tools from '@/components/Tools';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { ContactCTA, Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <Tools />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}
