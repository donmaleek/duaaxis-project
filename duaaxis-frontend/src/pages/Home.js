import React from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import Features from '../sections/Features';
import ProblemSolution from '../sections/ProblemSolution';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="pt-16"> {/* Add padding to account for fixed header */}
      <Hero />
      <Stats />
      <About />
      <Features />
      <ProblemSolution />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;