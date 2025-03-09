import React from 'react';

export function About() {
  return (
    <section className="py-20 bg-gray-800/50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert">
            <p className="text-lg leading-relaxed mb-6">
              With over 5 years of experience in web development, I've had the privilege of working
              with cutting-edge technologies and brilliant teams across various industries.
              My passion lies in creating efficient, scalable solutions that make a real impact.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects,
              mentoring aspiring developers, and exploring new technologies.
              I believe in continuous learning and pushing the boundaries of what's possible in tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}