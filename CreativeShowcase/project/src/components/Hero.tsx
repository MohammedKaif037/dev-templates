import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            John Doe
            <span className="block text-2xl text-blue-400 mt-2">Full Stack Developer</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Crafting digital experiences through elegant code and innovative solutions
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}