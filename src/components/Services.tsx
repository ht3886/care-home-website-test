import React from 'react';
import { Clock, Heart, Activity, Shield, Smile } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: '24/7 Care',
      description: 'Residents have access to a call button anytime, and our staff are awake at night to respond immediately. Compassionate care is always available, day and night.'
    },
    {
      icon: Activity,
      title: 'Activities & Programs',
      description: 'Arts & Crafts, Music & Entertainment, Gentle Exercise & Wellness, Games & Puzzles, Social & Community Events. Every activity is tailored to residents\' abilities and interests.'
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'We provide gentle, individualized support with daily tasks to help residents live comfortably and with dignity. Our caring staff assist with bathing, grooming, dressing, mobility, toileting, and mealtime needs.'
    },
    {
      icon: Shield,
      title: 'Safety and Security',
      description: 'Resident safety is our top priority. Our home features key fob entry and exit, cameras in all common areas, and grab bars and non-slip flooring throughout for added protection.'
    },
    {
      icon: Smile,
      title: 'Companionship',
      description: 'We provide friendly, one-on-one companionship to help residents feel supported, engaged, and valued. Our caregivers spend quality time with residents, offering conversation, emotional support, and participation in activities.'
    }
  ];

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-cream-100 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-cream-300"
                >
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-slate-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Have Questions About Our Services?</h3>
            <p className="text-xl text-cream-200 mb-6">
              Our team is here to answer all your questions and help you make the best decision for your loved one
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13069798468"
                className="inline-flex items-center justify-center space-x-2 bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-teal-600 transition"
              >
                <Clock className="w-5 h-5" />
                <span>Call Us: (306) 979-8468</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-cream-50 transition"
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
