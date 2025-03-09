import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Awards />
      <Contact />
    </div>
  );
}