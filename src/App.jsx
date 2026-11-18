import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Testimonials from './components/Testimonials.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
