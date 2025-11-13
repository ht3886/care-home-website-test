import React from 'react';
import { Heart, Users, Award, Home } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-700 mb-4">
              About Broadway Care Homes
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-charcoal-400 max-w-3xl mx-auto">
              Providing exceptional care and creating a warm, nurturing home environment for our residents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-300">
                <Heart className="w-16 h-16 text-teal-500 mb-4" />
                <h3 className="text-2xl font-bold text-charcoal-700 mb-4">Our Mission</h3>
                <p className="text-charcoal-500 leading-relaxed mb-4">
                  At Broadway Care Homes, we are dedicated to providing the highest quality of care in a comfortable, home-like setting. Located at 123 Prince Street in Saskatoon, SK, we believe that every resident deserves to live with dignity, respect, and compassion.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our owners are registered nurses with 15 years of bedside experience in long-term care, medical-surgical units, ICU, and emergency. Our experienced and caring staff are available around the clock to ensure the safety, comfort, and well-being of all our residents. We strive to create an environment where your loved ones can thrive and enjoy their golden years.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-cream-300 rounded-xl p-6 hover:shadow-lg transition">
                <Users className="w-12 h-12 text-teal-500 mb-3" />
                <h4 className="text-xl font-bold text-charcoal-700 mb-2">Experienced Staff</h4>
                <p className="text-charcoal-400">
                  Our compassionate team of healthcare professionals is trained to provide personalized care tailored to each resident's unique needs.
                </p>
              </div>

              <div className="bg-white border-2 border-cream-300 rounded-xl p-6 hover:shadow-lg transition">
                <Home className="w-12 h-12 text-teal-500 mb-3" />
                <h4 className="text-xl font-bold text-charcoal-700 mb-2">Home-Like Environment</h4>
                <p className="text-charcoal-400">
                  We've created a warm, welcoming atmosphere that feels like home, not an institution. Your comfort is our priority.
                </p>
              </div>

              <div className="bg-white border-2 border-cream-300 rounded-xl p-6 hover:shadow-lg transition">
                <Award className="w-12 h-12 text-teal-500 mb-3" />
                <h4 className="text-xl font-bold text-charcoal-700 mb-2">Quality Care</h4>
                <p className="text-charcoal-400">
                  We maintain the highest standards of care, ensuring your loved ones receive the attention and support they deserve.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-teal-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-xl text-teal-50 mb-6">
              Contact us today to schedule a tour of our facility and meet our caring team
            </p>
            <a
              href="mailto:info@broadwaycares.ca"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-cream-100 transition shadow-lg"
            >
              Email Us: info@broadwaycares.ca
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
