import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Curriculum from './components/Curriculum';
//import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="app">
        <Header isScrolled={isScrolled} />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Curriculum />
          {/* 후기 섹션은 추후 받으면 오픈 */}
          {/* <Testimonials /> */}
          <FAQ />
          <Register />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
