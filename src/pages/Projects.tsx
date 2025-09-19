import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Users, Lock, StickyNote, Headphones, PenTool, Server, Book, BarChart, Code, Heart, Clock, Trophy,  ExternalLink, Github, Shield, Share2, Brain, Gamepad2, Chrome, BarChart3, Code2, Cloud, Mail, BookOpen, Music, Sticker } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'RSA Implementation',
      description: 'A comprehensive implementation of the RSA encryption algorithm built with Java. This project served as a deep dive into cryptography fundamentals and secure data transmission protocols.',
      tech: ['Java', 'Cryptography', 'Security'],
      icon: Shield,
      github: 'https://github.com/lekhak03/RSA-Algorithm',
      link: null,
      color: 'from-red-500 to-orange-500',
      status: 'Complete',
      featured: false
    },
        {
      title: 'Sketch App',
      description: 'A web-based sketching app with real-time cross-site rendering using Firebase Realtime Database. Supports multiple users collaborating simultaneously.',
      tech: ['TypeScript', 'Firebase', 'Web App', 'Real-time Collaboration'],
      icon: PenTool,
      github: 'https://github.com/lekhak03/sketch-app',
      link: 'https://sketch-app-dl.vercel.app/',
      color: 'from-pink-500 to-purple-500',
      status: 'Complete',
      featured: true
    },

        {
  title: 'Transformers Implementation',
  description: 'An end-to-end implementation of a Transformer model demonstrating sequence-to-sequence tasks, including tokenization, positional encoding, multi-head attention, and encoder-decoder architecture.',
  tech: ['Python', 'PyTorch', 'Machine Learning', 'NLP'],
  icon: Brain,
  github: 'https://github.com/lekhak03/transformers',
  link: null,
  color: 'from-blue-500 to-indigo-500',
  status: 'Complete',
  featured: true
},

    {
      title: 'Peer Circle',
      description: 'A secure peer-to-peer file sharing web application enabling users to send, receive, and download files through direct connections. Built with Node.js backend and React frontend.',
      tech: ['Node.js', 'React', 'P2P', 'WebRTC'],
      icon: Share2,
      github: 'https://github.com/lekhak03/p2pmessaging',
      link: null,
      color: 'from-blue-500 to-cyan-500',
      status: 'Complete',
      featured: false
    },
    {
      title: 'FaceNet Implementation',
      description: 'An implementation of FaceNet for face recognition and clustering using TensorFlow. Focuses on secure user authentication through advanced facial recognition algorithms.',
      tech: ['TensorFlow', 'Python', 'Machine Learning', 'Computer Vision'],
      icon: Brain,
      github: 'https://github.com/lekhak03/transformers',
      link: null,
      color: 'from-purple-500 to-pink-500',
      status: 'Complete',
      featured: true
    },
    {
      title: 'FlappyBird Game',
      description: 'A faithful recreation of the beloved mobile game using Java Swing. Features smooth gameplay mechanics, collision detection, and score tracking with a desktop-optimized interface.',
      tech: ['Java', 'Swing', 'Game Development'],
      icon: Gamepad2,
      github: 'https://github.com/lekhak03/termux-music-app',
      link: null,
      color: 'from-green-500 to-emerald-500',
      status: 'Complete',
      featured: false
    },
    {
      title: "Pundit's StatBook",
      description: 'A backend application for sports statistics management built with Node.js and Express. Provides RESTful APIs for data management without relying on client-side frameworks.',
      tech: ['Node.js', 'Express', 'REST API', 'Database'],
      icon: BarChart3,
      github: 'https://github.com/lekhak03/pundit-statbook',
      link: 'https://pundit-statbook.vercel.app/',
      color: 'from-yellow-500 to-orange-500',
      status: 'WIP',
      featured: true
    },
    {
      title: 'Delete History',
      description: 'A lightweight Chrome extension designed to help users quickly and efficiently delete their browsing history. Built as a learning exercise in browser extension development.',
      tech: ['JavaScript', 'Chrome API', 'Web Extensions'],
      icon: Chrome,
      github: 'https://github.com/lekhak03/NoteDown',
      link: null,
      color: 'from-gray-500 to-slate-500',
      status: 'Complete',
      featured: false
    },
    {
      title: 'Sticky Notes Extension',
      description: 'A Chrome extension for creating, editing, and saving sticky notes directly in the browser. Built to improve productivity and note-taking.',
      tech: ['TypeScript', 'Chrome API', 'Web Extensions'],
      icon: StickyNote,
      github: 'https://github.com/lekhak03/sticky-notes',
      link: 'https://chromewebstore.google.com/detail/sticky-notes/jedbkbllbacineokgmgagdndjkedfkhf',
      color: 'from-yellow-400 to-yellow-600',
      status: 'Complete',
      featured: true
    },
    {
      title: 'Read Along',
      description: 'An Android app where users can click a picture of a book page and ask questions about it. Built using Dart for interactive educational purposes.',
      tech: ['Dart', 'Android', 'Computer Vision', 'NLP'],
      icon: BookOpen,
      github: 'https://github.com/lekhak03/read_along',
      link: null,
      color: 'from-green-400 to-teal-500',
      status: 'Complete',
      featured: true
    },
    {
      title: 'Audiobook-NP',
      description: 'A Python project for processing and interacting with audiobooks. Includes features for audio analysis and playback management.',
      tech: ['Python', 'Audio Processing'],
      icon: Headphones,
      github: 'https://github.com/lekhak03/audiobook-np',
      link: null,
      color: 'from-indigo-400 to-blue-500',
      status: 'WIP',
      featured: false
    },
    {
      title: 'Churn Model',
      description: 'Employee churn prediction model built in Python using Jupyter Notebook. Analyzes employee data to predict turnover risks.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      icon: Users,
      github: 'https://github.com/lekhak03/churn-model',
      link: 'https://lookerstudio.google.com/u/0/reporting/ccd1a1d0-0082-4ebe-b0e5-f26e3d55207e/page/dzhWF',
      color: 'from-red-400 to-red-600',
      status: 'Complete',
      featured: true
    },
    {
      title: 'Power BI Project',
      description: 'A Power BI dashboard project demonstrating data visualization, analysis, and reporting skills using real datasets.',
      tech: ['Power BI', 'Data Analysis', 'Visualization'],
      icon: BarChart,
      github: 'https://github.com/lekhak03/powerBI-project',
      link: null,
      color: 'from-blue-400 to-blue-600',
      status: 'Complete',
      featured: false
    },
    {
      title: 'Python Translation',
      description: 'A project creating a subset translation tool in Python, designed for understanding programming language concepts and compiler construction.',
      tech: ['Python', 'Language Processing'],
      icon: Code,
      github: 'https://github.com/lekhak03/pythonTranslation',
      link: null,
      color: 'from-purple-400 to-purple-600',
      status: 'WIP',
      featured: false
    },
    {
      title: 'Cancer Risk Assessment',
      description: 'A TypeScript project analyzing medical data to assess cancer risk factors, aiming to provide insights for preventive care.',
      tech: ['TypeScript', 'Data Analysis', 'Healthcare'],
      icon: Heart,
      github: 'https://github.com/lekhak03/cancer-risk-assessment',
      link: 'https://cancer-risk-assessment.vercel.app/',
      color: 'from-red-400 to-pink-500',
      status: 'Complete',
      featured: true
    },
    {
      title: 'HTTP Server',
      description: 'A basic HTTP server implemented in Python using socket programming. Built as a learning exercise to understand networking and web servers.',
      tech: ['Python', 'Networking', 'Server'],
      icon: Server,
      github: 'https://github.com/lekhak03/http-server',
      link: null,
      color: 'from-gray-500 to-gray-700',
      status: 'Complete',
      featured: false
    },
    {
      title: 'Chord Flow',
      description: 'A TypeScript project for music composition and chord progression visualization. Helps users experiment with musical ideas interactively.',
      tech: ['TypeScript', 'Music', 'Visualization'],
      icon: Music,
      github: 'https://github.com/lekhak03/chord-flow',
      link: null,
      color: 'from-purple-500 to-pink-500',
      status: 'WIP',
      featured: false
    },
    {
      title: 'Password Manager',
      description: 'A macOS-based password manager built with TypeScript. Manages secure storage, encryption, and retrieval of user credentials.',
      tech: ['TypeScript', 'Security', 'macOS'],
      icon: Lock,
      github: 'https://github.com/lekhak03/PasswordManager',
      link: 'https://password-manager-zeta-three.vercel.app/',
      color: 'from-blue-500 to-indigo-500',
      status: 'Complete',
      featured: false
    },
    {
      title: 'Email Sorter',
      description: 'A Python automation tool to sort Gmail emails by label using the Gmail API and Firebase backend, designed to improve productivity.',
      tech: ['Python', 'Gmail API', 'Automation'],
      icon: Mail,
      github: 'https://github.com/lekhak03/email-sorter',
      link: null,
      color: 'from-cyan-500 to-blue-500',
      status: 'Complete',
      featured: false
    },
    {
      title: 'NoteDown',
      description: 'A React-Vite based Chrome extension for taking and managing notes efficiently inside the browser.',
      tech: ['TypeScript', 'React', 'Chrome API', 'Web Extension'],
      icon: Edit2,
      github: 'https://github.com/lekhak03/NoteDown',
      link: 'https://note-down-z87z.vercel.app/',
      color: 'from-yellow-400 to-yellow-600',
      status: 'Complete',
      featured: true
    },
    {
      title: 'Pomodoro App',
      description: 'A Flutter app for time management using the Pomodoro technique. Allows users to track work intervals and breaks effectively.',
      tech: ['Dart', 'Flutter', 'Productivity'],
      icon: Clock,
      github: 'https://github.com/lekhak03/pomodoro-app',
      link: null,
      color: 'from-red-400 to-red-600',
      status: 'Complete',
      featured: false
    },
    {
      title: 'LeetCode Leaderboard',
      description: 'A JavaScript web application that tracks and ranks users based on LeetCode problem-solving performance, enabling friendly competition and skill improvement.',
      tech: ['JavaScript', 'Web App', 'API'],
      icon: Trophy,
      github: 'https://github.com/lekhak03/leetcode-leaderboard',
      link: 'https://leetcode-leaderboard-rankings.vercel.app/',
      color: 'from-purple-400 to-indigo-500',
      status: 'Complete',
      featured: true
    },
    {
      title: 'Music App CLI',
      description: 'A forked Termux app to run a CLI-based music player for Android. Focused on lightweight and terminal-driven audio experience.',
      tech: ['Java', 'Android', 'CLI'],
      icon: Headphones,
      github: 'https://github.com/lekhak03/termux-music-app',
      link: null,
      color: 'from-green-400 to-teal-500',
      status: 'WIP',
      featured: false
    }
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
      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-12">
        {/* Header */}
        <section className="py-20">
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
        </section>

        {/* Featured Projects */}
        <section className="pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-terminal-text font-mono mb-8 border-l-4 border-terminal-green pl-4">
              Featured Projects
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 w-full"
          >
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div 
                key={project.title} 
                variants={itemVariants}
                id={`project-${index}`}
                className="scroll-mt-20"
              >
                <div className="w-full bg-terminal-bg/30 border border-terminal-border rounded-lg hover:border-terminal-green/50 transition-all duration-300">
                  <div className="p-4">
                    {/* First Row: Icon, Title, Status, and Actions */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        {/* Project Icon */}
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20 flex-shrink-0`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Title and Status */}
                        <div className="flex items-center space-x-4">
                          <h3 className="text-xl font-bold text-terminal-text font-mono">
                            {project.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                            project.status === 'Complete' 
                              ? 'bg-terminal-green/20 text-terminal-green' 
                              : 'bg-terminal-orange/20 text-terminal-orange'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 flex-shrink-0">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-3 py-2 bg-terminal-bg border border-terminal-border rounded-lg hover:border-terminal-green transition-colors group font-mono text-sm"
                        >
                          <Github className="w-4 h-4 text-terminal-muted group-hover:text-terminal-green" />
                          <span className="text-terminal-muted group-hover:text-terminal-green">Code</span>
                        </motion.a>
                        
                        {project.link && project.link.trim() !== '' && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-3 py-2 bg-terminal-green/10 border border-terminal-green rounded-lg hover:bg-terminal-green/20 transition-colors group font-mono text-sm"
                          >
                            <ExternalLink className="w-4 h-4 text-terminal-green" />
                            <span className="text-terminal-green">Live</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Second Row: Description */}
                    <div className="mb-3 pl-10">
                      <p className="text-terminal-muted leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Third Row: Tech Stack */}
                    <div className="pl-10">
                      <div className="flex items-center space-x-4">
                        <Code2 className="w-4 h-4 text-terminal-muted flex-shrink-0" />
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* All Projects Section */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-terminal-text font-mono mb-8 border-l-4 border-terminal-blue pl-4">
              All Projects
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 w-full"
          >
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div 
                key={project.title} 
                variants={itemVariants}
                id={`all-project-${index}`}
                className="scroll-mt-20"
              >
                <div className="w-full bg-terminal-bg/30 border border-terminal-border rounded-lg hover:border-terminal-blue/50 transition-all duration-300">
                  <div className="p-4">
                    {/* First Row: Icon, Title, Status, and Actions */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        {/* Project Icon */}
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20 flex-shrink-0`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Title and Status */}
                        <div className="flex items-center space-x-4">
                          <h3 className="text-xl font-bold text-terminal-text font-mono">
                            {project.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                            project.status === 'Complete' 
                              ? 'bg-terminal-green/20 text-terminal-green' 
                              : 'bg-terminal-orange/20 text-terminal-orange'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3 flex-shrink-0">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-3 py-2 bg-terminal-bg border border-terminal-border rounded-lg hover:border-terminal-green transition-colors group font-mono text-sm"
                        >
                          <Github className="w-4 h-4 text-terminal-muted group-hover:text-terminal-green" />
                          <span className="text-terminal-muted group-hover:text-terminal-green">Code</span>
                        </motion.a>
                        
                        {project.link && project.link.trim() !== '' && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-3 py-2 bg-terminal-green/10 border border-terminal-green rounded-lg hover:bg-terminal-green/20 transition-colors group font-mono text-sm"
                          >
                            <ExternalLink className="w-4 h-4 text-terminal-green" />
                            <span className="text-terminal-green">Live</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Second Row: Description */}
                    <div className="mb-3 pl-10">
                      <p className="text-terminal-muted leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Third Row: Tech Stack */}
                    <div className="pl-10">
                      <div className="flex items-center space-x-4">
                        <Code2 className="w-4 h-4 text-terminal-muted flex-shrink-0" />
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};