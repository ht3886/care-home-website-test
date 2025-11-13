import React from 'react';
import { Heart, Phone, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-teal-400" />
                <div>
                  <h3 className="text-xl font-bold">Broadway Care Homes</h3>
                  <p className="text-sm text-cream-300">Because You Deserve the Best</p>
                </div>
              </div>
              <p className="text-cream-300 leading-relaxed mb-4">
                Providing exceptional, compassionate care in a warm, home-like environment. Because you deserve the best care possible.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-cream-300 hover:text-teal-400 transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-cream-300 hover:text-teal-400 transition">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-cream-300 hover:text-teal-400 transition">
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('facilities')} className="text-cream-300 hover:text-teal-400 transition">
                    Facilities
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-cream-300 hover:text-teal-400 transition">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:info@broadwaycare.ca" className="text-cream-300 hover:text-teal-400 transition break-all">
                      info@broadwaycare.ca
                    </a>
                    <p className="text-sm text-cream-400">Best way to reach us</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div className="text-cream-300">
                    <p>123 Prince Street</p>
                    <p>Saskatoon, SK</p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+13069798468" className="text-cream-300 hover:text-teal-400 transition">
                      (306) 979-8468
                    </a>
                    <p className="text-sm text-cream-400">Available 24/7</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-cream-400 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Broadway Care Homes. All rights reserved.
              </p>

              <div className="flex items-center space-x-2 text-cream-400 text-sm">
                <Heart className="w-4 h-4 text-teal-400" />
                <span>Caring for your loved ones with compassion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
