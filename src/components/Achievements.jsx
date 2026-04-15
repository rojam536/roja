import React from 'react';
import { Award, Star, Zap, Users, Database, Code } from 'lucide-react';

const Achievements = () => {
  const accomplishments = [
    { title: "IBM - Enterprise Design Thinking Practitioner", icon: <Award size={20} className="text-primary-400" /> },
    { title: "ComedKares Workshop", icon: <Star size={20} className="text-yellow-400" /> },
    { title: "VTricks - Java & SQL", icon: <Code size={20} className="text-accent-400" /> },
    { title: "VTricks - Database Design", icon: <Database size={20} className="text-primary-400" /> }
  ];

  const involvement = [
    { title: "Smart India Hackathon (SIH) 2024 - Phase 1", detail: "Active Participation", icon: <Zap size={20} className="text-orange-400" /> },
    { title: "Ideathons by Microsoft & IBM", detail: "Collaboration and Innovation", icon: <Users size={20} className="text-blue-400" /> },
    { title: "SHE Innovates - VTU VRIF", detail: "Empowering Innovation", icon: <Award size={20} className="text-pink-400" /> }
  ];

  return (
    <section id="achievements" className="section-padding bg-dark-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Involvement</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Accomplishments */}
          <div className="animate-on-scroll">
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              <span className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Award size={20} className="text-primary-400" />
              </span>
              Accomplishments
            </h3>
            <div className="space-y-4">
              {accomplishments.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-5 group flex items-center gap-4 hover-lift"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Involvement */}
          <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              <span className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                <Zap size={20} className="text-accent-400" />
              </span>
              Involvement
            </h3>
            <div className="space-y-4">
              {involvement.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-5 group hover-lift"
                  style={{ transitionDelay: `${(index + 4) * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/20 group-hover:scale-110 transition-transform mt-0.5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-0.5 group-hover:text-accent-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
