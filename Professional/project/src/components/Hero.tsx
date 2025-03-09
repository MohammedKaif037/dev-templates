import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">John Doe</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              I craft exceptional digital experiences with modern technologies.
              Specializing in building scalable web applications and solving complex problems.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Professional headshot"
              className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;