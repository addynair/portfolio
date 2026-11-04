import './index.css';
import Navbar from './components/navBar';
import Hero from './components/hero';
import NowSection from './components/nowSection';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <NowSection />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}