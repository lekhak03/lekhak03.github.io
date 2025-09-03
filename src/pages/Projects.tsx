import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '../components/GlowCard';
import { ExternalLink, Github, Shield, Share2, Brain, Gamepad2, Chrome, BarChart3 } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'RSA Implementation',
      description: 'A comprehensive implementation of the RSA encryption algorithm built with Java. This project served as a deep dive into cryptography fundamentals and secure data transmission protocols.',
      tech: ['Java', 'Cryptography', 'Security'],
      icon: Shield,
      github: 'https://github.com/lekhak03/RSA-Algorithm',
      color: 'from-red-500 to-orange-500',
      status: 'Complete'
    },
    {
      title: 'Peer Circle',
      description: 'A secure peer-to-peer file sharing web application enabling users to send, receive, and download files through direct connections. Built with Node.js backend and React frontend.',
      tech: ['Node.js', 'React', 'P2P', 'WebRTC'],
      icon: Share2,
      github: 'https://github.com/lekhak03/Peer-Circle',
      color: 'from-blue-500 to-cyan-500',
      status: 'Complete'
    },
    {
      title: 'FaceNet Implementation',
      description: 'An implementation of FaceNet for face recognition and clustering using TensorFlow. Focuses on secure user authentication through advanced facial recognition algorithms.',
      tech: ['TensorFlow', 'Python', 'Machine Learning', 'Computer Vision'],
      icon: Brain,
      github: 'https://github.com/lekhak03/FaceDetect',
      color: 'from-purple-500 to-pink-500',
      status: 'WIP'
    },
    {
      title: 'FlappyBird Game',
      description: 'A faithful recreation of the beloved mobile game using Java Swing. Features smooth gameplay mechanics, collision detection, and score tracking with a desktop-optimized interface.',
      tech: ['Java', 'Swing', 'Game Development'],
      icon: Gamepad2,
      github: 'https://github.com/lekhak03/Flappybird-game',
      color: 'from-green-500 to-emerald-500',
      status: 'Complete'
    },
    {
      title: "Pundit's StatBook",
      description: 'A backend application for sports statistics management built with Node.js and Express. Provides RESTful APIs for data management without relying on client-side frameworks.',
      tech: ['Node.js', 'Express', 'REST API', 'Database'],
      icon: BarChart3,
      github: 'https://github.com/lekhak03/Pundits-StatBook',
      color: 'from-yellow-500 to-orange-500',
      status: 'WIP'
    },
    {
      title: 'Delete History',
      description: 'A lightweight Chrome extension designed to help users quickly and efficiently delete their browsing history. Built as a learning exercise in browser extension development.',
      tech: ['JavaScript', 'Chrome API', 'Web Extensions'],
      icon: Chrome,
      github: 'https://github.com/lekhak03/deleteHis',
      color: 'from-gray-500 to-slate-500',
      status: 'Complete'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-terminal-green via-terminal-blue to-terminal-purple bg-clip-text text-transparent font-mono">
              $ ls projects/
            </h1>
            <p className="text-xl text-terminal-muted max-w-3xl mx-auto font-mono">
              A collection of projects showcasing backend development, system architecture, and problem-solving skills.
              Each repository tells a story of learning, building, and iterating.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <GlowCard className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Project Icon & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                        project.status === 'Complete' 
                          ? 'bg-terminal-green/20 text-terminal-green' 
                          : 'bg-terminal-orange/20 text-terminal-orange'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-3 text-terminal-text font-mono">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-terminal-muted leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-terminal-bg border border-terminal-border rounded-md text-terminal-green font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-3 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-terminal-bg border border-terminal-border rounded-lg hover:border-terminal-green transition-colors group font-mono text-sm"
                      >
                        <Github className="w-4 h-4 text-terminal-muted group-hover:text-terminal-green" />
                        <span className="text-terminal-muted group-hover:text-terminal-green">Code</span>
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-terminal-green/10 border border-terminal-green rounded-lg hover:bg-terminal-green/20 transition-colors group font-mono text-sm"
                      >
                        <ExternalLink className="w-4 h-4 text-terminal-green" />
                        <span className="text-terminal-green">Learn More</span>
                      </motion.a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};