import React, { useState } from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-800/50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mb-12">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}