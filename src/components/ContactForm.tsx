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
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* ... your existing JSX until the form section ... */}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="from_name" className="block text-gray-700 font-semibold mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"          // Changed from "name"
            required
            value={formData.from_name} // Changed from formData.name
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
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
            name="from_email"          // Changed from "email"
            required
            value={formData.from_email} // Changed from formData.email
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
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
            name="phone"              // Keep as is
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="321-438-1919"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"            // Keep as is
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            placeholder="Tell us about your needs or ask any questions..."
          ></textarea>
        </div>

        {/* Rest of your form JSX remains the same */}
      </form>

      {/* Rest of your component JSX remains the same */}
    </section>
  );
};

export default ContactForm;
