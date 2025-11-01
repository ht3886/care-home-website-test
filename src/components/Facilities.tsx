import React from 'react';
import { Home, Armchair, Trees, Users, Utensils, Tv, Flower2, Sun } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Home,
      title: 'Private & Semi-Private Rooms',
      description: 'Comfortable, well-appointed rooms designed to feel like home with personalized touches.'
    },
    {
      icon: Armchair,
      title: 'Common Living Areas',
      description: 'Spacious, welcoming common rooms for socializing, activities, and family visits.'
    },
    {
      icon: Utensils,
      title: 'Dining Room',
      description: 'Bright, inviting dining area where residents enjoy nutritious meals together.'
    },
    {
      icon: Trees,
      title: 'Outdoor Spaces',
      description: 'Beautiful outdoor areas with gardens and seating for fresh air and relaxation.'
    },
    {
      icon: Users,
      title: 'Activity Rooms',
      description: 'Dedicated spaces for recreation, crafts, games, and social gatherings.'
    },
    {
      icon: Tv,
      title: 'Entertainment Areas',
      description: 'Cozy spaces with entertainment options for movies, music, and group activities.'
    },
    {
      icon: Sun,
      title: 'Bright & Airy',
      description: 'Natural lighting throughout the facility creates a warm, uplifting atmosphere.'
    },
    {
      icon: Flower2,
      title: 'Beautiful Decor',
      description: 'Tastefully decorated spaces that feel welcoming and home-like, not institutional.'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Facilities
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comfortable, safe environment designed with your loved one's comfort and happiness in mind
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Location Info */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Conveniently Located in Saskatoon</h3>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Our care home is situated in a peaceful neighborhood at 123 Prince Street, Saskatoon, SK. Easy to visit and close to amenities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 mt-1">
                      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">123 Prince Street</p>
                      <p className="text-blue-100">Saskatoon, SK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">Schedule Your Visit</h4>
                <p className="text-blue-100 mb-6">
                  We welcome you to tour our facility and see firsthand the warm, caring environment we provide.
                </p>
                <a
                  href="tel:+13069798468"
                  className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition shadow-lg"
                >
                  Call to Book: (306) 979-8468
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
