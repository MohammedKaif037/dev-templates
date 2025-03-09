import React from 'react';
import { Award as AwardIcon } from 'lucide-react';
import type { Award } from '../types';

const awardsData: Award[] = [
  {
    id: '1',
    title: 'Best Innovation Award',
    issuer: 'Tech Conference 2023',
    date: 'December 2023',
    description: 'Recognized for developing an innovative AI-powered code review system',
  },
  {
    id: '2',
    title: 'Outstanding Contributor',
    issuer: 'Open Source Community',
    date: 'August 2023',
    description: 'Awarded for significant contributions to major open-source projects',
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <AwardIcon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-gray-600 mb-1">{award.issuer}</p>
                  <p className="text-sm text-gray-500 mb-3">{award.date}</p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;