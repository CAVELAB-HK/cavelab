import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Problem from '@/components/Problem';
import Approach from '@/components/Approach';
import Products from '@/components/Products';
import Roadmap from '@/components/Roadmap';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Vision />
      <Problem />
      <Approach />
      <Products />
      <Roadmap />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
