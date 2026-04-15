import React from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-accent-600/20 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Image/Avatar Section */}
          <div className="w-48 h-48 md:w-80 md:h-80 relative flex-shrink-0 animate-fade-in group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-3xl rotate-6 opacity-70 group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-dark-800 rounded-3xl -rotate-3 border border-white/10 overflow-hidden group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
              {/* Fallback to initials if image is not supplied, but user may want to replace this later */}
              <div className="w-full h-full bg-dark-700 flex flex-col items-center justify-center">
                <span className="text-6xl font-bold text-white/20">MR</span>
                <p className="text-xs text-white/40 mt-4 px-4 text-center">Place portrait here</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary-500/30 text-primary-300 text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              Available for Opportunities
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hi, I'm <span className="gradient-text">M Roja</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Full Stack Web Developer & Software Engineer
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto md:mx-0 mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Motivated professional with strong skills in front-end and back-end technologies. Focused on building efficient, high-quality applications and improving user experience.
            </p>

            {/* Contact Info Chips */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm">
                <MapPin size={16} className="text-primary-400" />
                Raichur, Karnataka 584143
              </div>
              <a href="tel:9880933959" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors">
                <Phone size={16} className="text-primary-400" />
                9880933959
              </a>
              <a href="mailto:rojam7007@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors">
                <Mail size={16} className="text-primary-400" />
                rojam7007@gmail.com
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="#contact" className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-primary-600/30 flex items-center gap-2">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://linkedin.com/in/roja-m-a72668353" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl glass-card hover:bg-white/10 text-white font-medium transition-all group flex items-center gap-2">
                <Linkedin size={20} className="text-blue-400" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
