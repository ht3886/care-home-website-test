import React from 'react';
import { Clock, Heart, Activity, Shield, Smile, Mail } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive care services designed to meet the unique needs of each resident with dignity and respect
            </p>
          </div>

          {/* Featured 24/7 Care Card */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 md:p-10 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-3">24/7 Care</h3>
                  <p className="text-lg text-teal-50 leading-relaxed">
                    Residents have access to a call button anytime, and our staff are awake at night to respond immediately. Compassionate care is always available, day and night.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Card Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-cream-100 rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-cream-300">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Activities & Programs
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Arts & Crafts, Music & Entertainment, Gentle Exercise & Wellness, Games & Puzzles, Social & Community Events. Every activity is tailored to residents' abilities and interests.
              </p>
            </div>

            <div className="bg-cream-100 rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-cream-300">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Personal Care
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We provide gentle, individualized support with daily tasks to help residents live comfortably and with dignity. Our caring staff assist with bathing, grooming, dressing, mobility, toileting, and mealtime needs.
              </p>
            </div>

            <div className="bg-cream-100 rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-cream-300">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Safety and Security
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Resident safety is our top priority. Our home features key fob entry and exit, cameras in all common areas, and grab bars and non-slip flooring throughout for added protection. Staff perform frequent checks, including hourly and overnight rounds, ensuring residents are always monitored and supported.
              </p>
            </div>

            <div className="bg-cream-100 rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-cream-300">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Smile className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Companionship
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We provide friendly, one-on-one companionship to help residents feel supported, engaged, and valued. Our caregivers spend quality time with residents, offering conversation, emotional support, and participation in activities.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-slate-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Have Questions About Our Services?</h3>
            <p className="text-xl text-cream-200 mb-6">
              Our team is here to answer all your questions and help you make the best decision for your loved one
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@broadwaycare.ca"
                className="inline-flex items-center justify-center space-x-2 bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-teal-600 transition shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-cream-50 transition shadow-lg"
              >
                <span>Send a Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
