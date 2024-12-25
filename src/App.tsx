import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;