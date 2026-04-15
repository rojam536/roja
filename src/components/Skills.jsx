import React, { useEffect, useRef } from 'react';
import { Code2, Settings, Terminal, Database, Server, Layout, FileJson } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skill-animate');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const skillsData = [
    { name: 'Front-end Development', icon: <Layout className="text-primary-400" size={32} /> },
    { name: 'HTML & CSS', icon: <FileJson className="text-accent-400" size={32} /> },
    { name: 'JavaScript', icon: <Terminal className="text-yellow-400" size={32} /> },
    { name: 'Java Programming', icon: <Server className="text-orange-400" size={32} /> },
  ];

  return (
    <section id="skills" className="section-padding relative" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary-900/10 rounded-bl-[100px] blur-[80px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 skill-animate animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Technical <span className="gradient-text">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover-lift flex flex-col items-center justify-center text-center group skill-animate animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-dark-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
