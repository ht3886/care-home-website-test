import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Brightest Days Are Waiting!
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Experience compassionate care in a warm, welcoming environment at Broadway Care Homes
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13069798468"
              className="inline-flex items-center space-x-3 bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-6 h-6" />
              <span>Call for a Tour: (306) 979-8468</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <Phone className="w-8 h-8 mb-3 mx-auto" />
              <p className="text-sm text-blue-100 mb-1">Call Us</p>
              <a href="tel:+13069798468" className="text-2xl font-bold hover:text-yellow-400 transition">
                (306) 979-8468
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <div className="w-8 h-8 mb-3 mx-auto">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <p className="text-sm text-blue-100 mb-1">Visit Us</p>
              <p className="text-lg font-semibold">123 Prince Street</p>
              <p className="text-sm text-blue-100">Saskatoon, SK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
