import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Sambhram Institute of Technology, Bangalore",
      degree: "B.E. Information Technology",
      period: "Expected: Aug 2027",
      grade: "GPA: 8.73",
      icon: <GraduationCap size={24} className="text-primary-400" />
    },
    {
      institution: "Patil PU College Sindhanur",
      degree: "PUC",
      period: "",
      grade: "80.16%",
      icon: <Award size={24} className="text-secondary-400" />
    },
    {
      institution: "Sneha Jyothi High School, Raichur",
      degree: "SSLC",
      period: "",
      grade: "87.68%",
      icon: <Award size={24} className="text-accent-400" />
    }
  ];

  return (
    <section id="education" className="section-padding bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover-lift group animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-4 rounded-2xl bg-dark-700 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {edu.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white font-heading">{edu.institution}</h3>
                  {edu.period && (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
                <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-accent-400">
                  {edu.grade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
