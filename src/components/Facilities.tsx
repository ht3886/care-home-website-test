import React from 'react';
import { Home, Utensils, Trees, BookOpen } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Home,
      title: 'Private Rooms',
      description: 'Experience true comfort and peace of mind in your own private sanctuary. Each resident enjoys a spacious, thoughtfully-designed room—crafted for rest, privacy, and relaxation. Discover a place that feels uniquely yours, where you can unwind and feel at home every day.'
    },
    {
      icon: Utensils,
      title: 'Dining Room',
      description: 'At Broadway Care Homes mealtime is a comfortable and social experience. Our dining room features cushioned chairs, supportive armchairs, and raised seats designed for easy sitting and standing.'
    },
    {
      icon: Trees,
      title: 'Outdoor Area',
      description: 'Our residents can enjoy a beautiful and serene outdoor environment. The grounds feature a water fountain, lush plants, and garden spaces, providing a peaceful setting to relax, socialize, or enjoy light gardening activities.'
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Our personal care home features a library with books and magazines for residents to browse and explore. The shelves are filled with a variety of reading materials that encourage mental stimulation, lifelong learning, and the enjoyment of discovering new stories and topics.'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Facilities
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comfortable, safe environment designed with your loved one's comfort and happiness in mind
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-cream-300 rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Location Info */}
          <div className="bg-teal-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Conveniently Located in Saskatoon</h3>
                <p className="text-xl text-teal-50 mb-6 leading-relaxed">
                  Our care home is situated in a peaceful neighborhood at 103 Ells Crescent, Saskatoon, SK. Easy to visit and close to amenities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 mt-1">
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">103 Ells Crescent</p>
                      <p className="text-teal-50">Saskatoon, SK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">Schedule Your Visit</h4>
                <p className="text-teal-50 mb-6">
                  We welcome you to tour our facility and see firsthand the warm, caring environment we provide.
                </p>
                <a
                  href="mailto:info@broadwaycare.ca"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-cream-100 transition shadow-lg"
                >
                  Email to Book a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
