import React from 'react';
import { User, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 rounded-2xl bg-primary-500/10 border border-primary-500/20 shrink-0">
              <User size={40} className="text-primary-400" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">M Roja — Full Stack Web Developer</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Motivated Full Stack Web Developer and Software Engineer with strong skills in front-end and back-end technologies. Focused on building efficient, high-quality applications and improving user experience.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently pursuing a B.E. in Information Technology at Sambhram Institute of Technology, Bangalore, I am passionate about solving complex problems through clean code and creative design.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['React', 'JavaScript', 'HTML & CSS', 'Java', 'SQL', 'Database Design'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 text-sm font-medium rounded-full glass-card border-primary-500/30 text-primary-300 hover:bg-primary-500/10 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
