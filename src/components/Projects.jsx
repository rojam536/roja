import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: "Student Performance Tracker",
      description: "A comprehensive tool to monitor and analyze student academic progress. Built with a focus on data visualization and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden group hover-lift animate-on-scroll"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-dark-800 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-accent-600/20 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Code className="text-primary-500/30 group-hover:scale-110 transition-transform duration-500" size={64} />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} className="p-2 rounded-lg bg-dark-900/80 text-white hover:text-primary-400 border border-white/10">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="p-2 rounded-lg bg-dark-900/80 text-white hover:text-primary-400 border border-white/10">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors uppercase font-heading tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Placeholder for more projects */}
          <div className="glass-card flex flex-col items-center justify-center p-8 border-dashed border-2 border-white/10 bg-transparent opacity-50 group hover:opacity-100 transition-opacity animate-on-scroll">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer">
              <span className="text-2xl text-gray-400">+</span>
            </div>
            <p className="text-gray-400 font-medium">Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
