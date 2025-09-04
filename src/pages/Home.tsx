import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '../components/TypewriterText';
import { GlowCard } from '../components/GlowCard';
import { 
  Github, 
  Linkedin, 
  FileText, 
  Server, 
  Database, 
  Code, 
  Brain,
  GitBranch,
  Layers,
  Cpu,
  Gamepad2,
  Monitor,
  Cloud,
  BarChart3,
} from 'lucide-react';

export const Home: React.FC = () => {
  const skillSections = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: Code, color: 'text-blue-400' },
        { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
        { name: 'Java', icon: Code, color: 'text-red-400' },
        { name: 'C++', icon: Code, color: 'text-purple-400' },
        { name: 'C', icon: Code, color: 'text-gray-400' },
        { name: 'Rust', icon: Code, color: 'text-orange-400' },
        { name: 'Go', icon: Code, color: 'text-cyan-400' },
        { name: 'SQL', icon: Database, color: 'text-green-400' },
        { name: 'HTML/CSS', icon: Code, color: 'text-pink-400' },
      ]
    },
    {
      title: 'Interests',
      skills: [
        { name: 'Machine Learning', icon: Brain, color: 'text-pink-400' },
        { name: 'System Architecture', icon: Layers, color: 'text-purple-400' },
        { name: 'Backend Development', icon: Server, color: 'text-green-400' },
        { name: 'Game Development', icon: Gamepad2, color: 'text-yellow-400' },
      ]
    },
    {
      title: 'Tools and Frameworks',
      skills: [
        { name: 'Git', icon: GitBranch, color: 'text-orange-400' },
        { name: 'Node.js', icon: Server, color: 'text-green-400' },
        { name: 'React', icon: Code, color: 'text-cyan-400' },
        { name: 'VS Code', icon: Monitor, color: 'text-blue-400' },
        { name: 'Docker', icon: Cpu, color: 'text-blue-400' },
        { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
        { name: 'MongoDB', icon: Database, color: 'text-green-400' },
        { name: 'NumPy', icon: BarChart3, color: 'text-purple-400' },
        { name: 'TensorFlow', icon: Brain, color: 'text-yellow-400' },
      ]
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
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-terminal-green mb-4">
              <TypewriterText 
                text="$ whoami" 
                delay={500}
                className="text-lg"
                showCursor={false}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-terminal-green via-terminal-blue to-terminal-purple bg-clip-text text-transparent">
              Deepak Lekhak
            </h1>
            <div className="font-mono text-xl md:text-2xl text-terminal-muted mb-8">
              <TypewriterText 
                text="Backend Developer | Machine Learning Dabbler | Coffee Enthusiast"
                delay={1500}
                speed={80}
              />
            </div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="flex justify-center space-x-6 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Deep03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-terminal-surface border border-terminal-border rounded-lg hover:border-terminal-green transition-colors group"
              >
                <Github className="w-6 h-6 text-terminal-muted group-hover:text-terminal-green" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/dlekhak/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-terminal-surface border border-terminal-border rounded-lg hover:border-terminal-blue transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-terminal-muted group-hover:text-terminal-blue" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="/Deep-lekhak-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-terminal-surface border border-terminal-border rounded-lg hover:border-terminal-purple transition-colors group"
              >
                <FileText className="w-6 h-6 text-terminal-muted group-hover:text-terminal-purple" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-terminal-green">
                $ cat about.txt
              </h2>
            </motion.div>
{/* 
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div variants={itemVariants}>
                <GlowCard>
                  <h3 className="text-xl font-semibold mb-4 text-terminal-green font-mono">
                    The Journey
                  </h3>
                  <p className="text-terminal-muted leading-relaxed">
                    Am I am student? Am I am coder? Am I interested in machine learning? Am I just a backend developer?
                    Turns out,...I am all of them.
                  </p>
                  <p className="text-terminal-muted leading-relaxed">I am an engineer.</p>
                </GlowCard>
              </motion.div>

              <motion.div variants={itemVariants}>
                <GlowCard>
                  <h3 className="text-xl font-semibold mb-4 text-terminal-blue font-mono">
                    The Mission
                  </h3>
                  <p className="text-terminal-muted leading-relaxed">
                    Buckle up, Adventurer, and join me on this epic quest to bridge 
                    the gap between imagination and reality. Building scalable systems 
                    that power the digital world.
                  </p>
                </GlowCard>
              </motion.div>
            </div> */}

{/* <div className="grid md:grid-cols-2 justify-center mb-16">
                    <motion.div variants={itemVariants}>
                    <GlowCard>
                      <h3 className="text-xl font-semibold mb-4 text-terminal-green font-mono">
                        The Journey
                      </h3>
                      <p className="text-terminal-muted leading-relaxed">
                        Am I am student? Am I am coder? Am I interested in machine learning? Am I just a backend developer?
                        Turns out,...I am all of them.
                      </p>
                      <p className="text-terminal-muted leading-relaxed">I am an engineer.</p>
                    </GlowCard>
                  </motion.div>
                </div> */}
                <div className="mb-16 flex justify-center">
  <div className="w-full md:w-1/2">
    <motion.div variants={itemVariants}>
      <GlowCard>
        <h3 className="text-xl font-semibold mb-4 text-terminal-green font-mono">
          about.txt
        </h3>
        <p className="text-terminal-muted leading-relaxed">
          Am I am student? Am I am coder? Am I interested in machine learning? Am I just a backend developer?
          Turns out,...I am all of them.
        </p>
        <p className="text-terminal-muted leading-relaxed">I am an engineer.</p>
      </GlowCard>
    </motion.div>
  </div>
</div>



            {/* Skills Sections */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8 text-center font-mono text-terminal-purple">
                $ ls skills/
              </h3>
              
              <div className="space-y-12">
                {skillSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-bold mb-6 text-terminal-green font-mono text-center">
                      {section.title}
                    </h4>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {section.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: (sectionIndex * 0.2) + (index * 0.1) }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-terminal-surface border border-terminal-border rounded-lg p-3 text-center hover:border-terminal-green/50 transition-all duration-300 group"
                        >
                          <skill.icon className={`w-5 h-5 mx-auto mb-2 ${skill.color} group-hover:animate-pulse`} />
                          <span className="text-xs font-mono text-terminal-muted group-hover:text-terminal-text">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};