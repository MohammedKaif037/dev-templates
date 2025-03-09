import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            With over 5 years of experience in full-stack development, I specialize in
            building scalable web applications using modern technologies. My journey in
            tech started with a Computer Science degree, and I've since worked with
            various startups and established companies.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I'm passionate about creating efficient, maintainable code and solving
            complex problems. My expertise includes React, Node.js, and cloud
            technologies, with a strong focus on performance and user experience.
          </p>
          <p className="text-lg text-gray-600">
            When I'm not coding, I contribute to open-source projects and share my
            knowledge through technical blog posts and community meetups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;