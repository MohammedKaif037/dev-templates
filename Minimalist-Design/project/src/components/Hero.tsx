import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Profile Image
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full Stack Developer
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Building beautiful, functional, and scalable web applications with modern technologies.
        </p>
        <a
          href="#about"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
        >
          Learn More
          <ArrowDown className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
}