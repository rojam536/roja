import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'rojam7007@gmail.com',
      href: 'mailto:rojam7007@gmail.com',
      icon: <Mail size={22} className="text-primary-400" />
    },
    {
      label: 'Phone',
      value: '9880933959',
      href: 'tel:9880933959',
      icon: <Phone size={22} className="text-accent-400" />
    },
    {
      label: 'Location',
      value: 'Raichur, Karnataka 584143',
      href: null,
      icon: <MapPin size={22} className="text-pink-400" />
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/roja-m-a72668353',
      href: 'https://linkedin.com/in/roja-m-a72668353',
      icon: <Linkedin size={22} className="text-blue-400" />
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-900/10 rounded-tr-[120px] blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">I'm open to opportunities. Feel free to reach out — I'll respond as soon as possible!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="space-y-5 animate-on-scroll">
            {contactInfo.map((item, index) => (
              <div key={index} className="glass-card p-5 group hover-lift flex items-center gap-5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-gray-200 hover:text-primary-400 font-medium transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-200 font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                <CheckCircle size={64} className="text-green-400" />
                <h3 className="text-2xl font-bold text-white font-heading">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-600/30 active:scale-95"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
