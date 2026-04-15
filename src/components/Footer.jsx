import React from 'react';
import { Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-heading font-bold text-2xl tracking-tight">
              <span className="text-white">M</span>
              <span className="gradient-text"> ROJA</span>
            </span>
            <p className="text-gray-500 text-sm mt-1">Full Stack Web Developer</p>
          </div>
          
          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social + Back to top */}
          <div className="flex items-center gap-4">
            <a href="mailto:rojam7007@gmail.com" className="p-2.5 rounded-xl glass-card hover:bg-primary-500/20 hover:border-primary-500/40 transition-all group">
              <Mail size={18} className="text-gray-400 group-hover:text-primary-400" />
            </a>
            <a href="tel:9880933959" className="p-2.5 rounded-xl glass-card hover:bg-accent-500/20 hover:border-accent-500/40 transition-all group">
              <Phone size={18} className="text-gray-400 group-hover:text-accent-400" />
            </a>
            <a href="https://linkedin.com/in/roja-m-a72668353" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass-card hover:bg-blue-500/20 hover:border-blue-500/40 transition-all group">
              <Linkedin size={18} className="text-gray-400 group-hover:text-blue-400" />
            </a>
            <button onClick={scrollToTop} className="p-2.5 rounded-xl glass-card hover:bg-white/10 transition-all group ml-2">
              <ArrowUp size={18} className="text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-1.5">
            Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> by M Roja &mdash; &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
