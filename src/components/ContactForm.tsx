import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',    // Changed from 'name'
    from_email: '',   // Changed from 'email'
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', phone: '', message: '' }); // Updated

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-700 to-slate-600">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              We're here to answer your questions and help you find the perfect care solution for your loved one
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-500 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-cream-200 text-sm mb-1">Email</p>
                      <a href="mailto:info@broadwaycare.ca" className="text-white text-lg font-bold hover:text-teal-300 transition break-all">
                        info@broadwaycare.ca
                      </a>
                      <p className="text-cream-300 text-sm mt-1">Best way to reach us</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-500 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-cream-200 text-sm mb-1">Address</p>
                      <p className="text-white text-lg font-semibold">103 Ells Crescent</p>
                      <p className="text-cream-300">Saskatoon, SK</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-500 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-cream-200 text-sm mb-1">Phone</p>
                      <a href="tel:+13069798468" className="text-white text-lg font-semibold hover:text-teal-300 transition">
                        (306) 979-8468
                      </a>
                      <p className="text-cream-300 text-sm mt-1">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Ready to Visit?</h3>
                <p className="text-lg mb-4">
                  Schedule a tour of our facility and meet our caring team in person. We'd love to show you around!
                </p>
                <a
                  href="mailto:info@broadwaycare.ca"
                  className="inline-flex items-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-bold hover:bg-cream-100 transition"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email to Book a Tour</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold">Something went wrong. Please try calling us instead.</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-slate-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    value={formData.from_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    placeholder="(306) 979-8468"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your needs or ask any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-teal-600 transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-slate-600 text-sm text-center mt-4">
                Prefer to email? Reach us at <a href="mailto:info@broadwaycare.ca" className="text-teal-600 font-semibold hover:underline">info@broadwaycare.ca</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
