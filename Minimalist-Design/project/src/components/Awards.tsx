import { Award } from '../types';

const awards: Award[] = [
  {
    title: 'Best Web Application Award',
    issuer: 'Tech Conference 2023',
    date: 'December 2023',
    description: 'Awarded for innovative use of modern web technologies.',
  },
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'June 2023',
    description: 'Professional certification for AWS architecture.',
  },
  // Add more awards as needed
];

export default function Awards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Awards & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {award.title}
              </h3>
              <p className="text-gray-600 mb-2">{award.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{award.date}</p>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}