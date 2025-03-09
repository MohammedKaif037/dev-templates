import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application using React and Firebase',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export function Projects() {
  return (
    <section className="py-20 bg-gray-800/50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Project+Image';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}