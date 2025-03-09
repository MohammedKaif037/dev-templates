import React from 'react';
import { Award } from 'lucide-react';

const awards = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
    description: 'Professional certification for AWS cloud architecture',
  },
  {
    title: 'Best Tech Innovation Award',
    issuer: 'TechCon 2022',
    year: '2022',
    description: 'Recognition for innovative contribution to open source',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google',
    year: '2022',
    description: 'Advanced certification for Google Cloud Platform',
  },
];

export function Awards() {
  return (
    <section className="py-20 bg-gray-900" id="awards">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Awards & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{award.title}</h3>
              <div className="text-center text-gray-400 mb-2">
                <p>{award.issuer}</p>
                <p>{award.year}</p>
              </div>
              <p className="text-gray-300 text-center">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}