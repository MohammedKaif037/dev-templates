import React from 'react';
import type { Experience } from '../types';

const experienceData: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    duration: '2021 - Present',
    achievements: [
      'Led a team of 5 developers in building a microservices architecture',
      'Reduced application load time by 40% through optimization',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    id: '2',
    company: 'Digital Innovations Ltd.',
    position: 'Full Stack Developer',
    duration: '2019 - 2021',
    achievements: [
      'Developed and maintained multiple client projects using React and Node.js',
      'Mentored junior developers and conducted code reviews',
      'Implemented automated testing increasing code coverage to 85%',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-600"
            >
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="mb-2">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;