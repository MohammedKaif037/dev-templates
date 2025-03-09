import React from 'react';

const experiences = [
  {
    company: 'Tech Corp',
    position: 'Senior Developer',
    period: '2020 - Present',
    description: 'Led development of enterprise applications using React and Node.js',
  },
  {
    company: 'StartUp Inc',
    position: 'Full Stack Developer',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client projects',
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-blue-500 last:pb-0"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
              <div className="mb-1">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}