import React, { useState } from 'react';
import { Phone, Mail, MapPin, Heart, Users, Clock, Home, Utensils, Activity, Menu, X } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import Logo from '../public/broadway-logo.jpeg';  

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={Logo}  alt="Broadway Care Homes" className="w-12 h-12 mr-2 object-contain                    rounded-full" />
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Broadway Care Homes</h1>
                <p className="text-sm text-slate-500">Because You Deserve the Best</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-teal-500 transition font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-charcoal-500 hover:text-teal-500 transition">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="text-charcoal-500 hover:text-teal-500 transition">
                Our Services
              </button>
              <button onClick={() => scrollToSection('facilities')} className="text-charcoal-500 hover:text-teal-500 transition">
                Facilities
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-charcoal-500 hover:text-teal-500 transition">
                Contact
              </button>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-2 text-slate-700">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@broadwaycare.ca" className="font-semibold text-lg hover:text-teal-500 transition">
                info@broadwaycare.ca
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left text-charcoal-500 hover:text-teal-500 transition py-2">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-charcoal-500 hover:text-teal-500 transition py-2">
                  About Us
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-charcoal-500 hover:text-teal-500 transition py-2">
                  Our Services
                </button>
                <button onClick={() => scrollToSection('facilities')} className="text-left text-charcoal-500 hover:text-teal-500 transition py-2">
                  Facilities
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-charcoal-500 hover:text-teal-500 transition py-2">
                  Contact
                </button>
                <a href="mailto:info@broadwaycare.ca" className="flex items-center space-x-2 text-slate-700 font-semibold py-2">
                  <Mail className="w-5 h-5" />
                  <span>info@broadwaycare.ca</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Facilities />
        <ContactForm />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
