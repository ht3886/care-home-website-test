import React from 'react';
import { Clock, Heart, Pill, Utensils, Activity, Users, Shield, Smile } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: '24-Hour Care',
      description: 'Round-the-clock professional care and supervision to ensure safety and comfort at all times.'
    },
    {
      icon: Pill,
      title: 'Medication Management',
      description: 'Careful administration and monitoring of medications by trained healthcare professionals.'
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Delicious, well-balanced meals prepared daily to meet dietary needs and preferences.'
    },
    {
      icon: Activity,
      title: 'Activities & Recreation',
      description: 'Engaging activities and social programs designed to promote physical and mental well-being.'
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Assistance with daily activities including bathing, dressing, and grooming with dignity and respect.'
    },
    {
      icon: Users,
      title: 'Social Support',
      description: 'Creating meaningful connections through group activities and community engagement.'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Secure environment with emergency response systems and trained staff on-site 24/7.'
    },
    {
      icon: Smile,
      title: 'Companion Care',
      description: 'Emotional support and companionship to ensure residents feel valued and connected.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-700 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-charcoal-400 max-w-3xl mx-auto">
              Comprehensive care services designed to meet the unique needs of each resident
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
                  <h3 className="text-lg font-bold text-charcoal-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-charcoal-700 rounded-2xl p-8 md:p-12 text-white">
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
                className="inline-flex items-center justify-center space-x-2 bg-white text-charcoal-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-cream-100 transition"
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
