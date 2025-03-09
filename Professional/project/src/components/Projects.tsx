import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    challenges: [
      'Implementing real-time inventory management',
      'Optimizing performance for large product catalogs',
    ],
    solutions: [
      'Used WebSocket for real-time updates',
      'Implemented lazy loading and virtualization',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'A collaborative task management system for remote teams',
    challenges: [
      'Managing complex state across multiple users',
      'Ensuring data consistency',
    ],
    solutions: [
      'Implemented Redux for state management',
      'Used optimistic updates with proper error handling',
    ],
    technologies: ['React', 'Redux', 'PostgreSQL', 'Express'],
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Challenges:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Solutions:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-2" />
                    Source Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;