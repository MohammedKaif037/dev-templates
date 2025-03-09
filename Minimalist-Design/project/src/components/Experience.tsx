import { Experience } from '../types';

const experiences: Experience[] = [
  {
    company: 'Tech Corp',
    position: 'Senior Full Stack Developer',
    period: '2021 - Present',
    description: 'Led development of multiple web applications using React and Node.js.',
  },
  {
    company: 'Startup Inc',
    position: 'Frontend Developer',
    period: '2019 - 2021',
    description: 'Developed responsive web applications and improved performance metrics.',
  },
  // Add more experiences as needed
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-gray-900 before:rounded-full before:shadow-sm"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}