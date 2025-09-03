import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlowCard } from '../components/GlowCard';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  // Blog posts metadata - this will be where you manage your blog posts
  const blogPosts = [ {
      id: 1,
      slug: 'rsa-encryption-from-scratch',
      title: 'Building RSA Encryption from Scratch in Java',
      excerpt: 'A deep dive into implementing RSA encryption from first principles in Java — including prime generation, key persistence, modular arithmetic, and encryption logic.',
      date: '2025-06-28',
      readTime: '7 min read',
      tags: ['Java', 'Cryptography', 'Security'],
      featured: false,
    },
      {
    id: 2,
    slug: 'facenet-model-implementation',
    title: 'FaceNet Implementation From Scratch',
    excerpt: 'A full walkthrough of how I implemented FaceNet using TensorFlow and triplet loss to build a real-time face authentication system from scratch.',
    date: '2024-04-12',
    readTime: '8 min read',
    tags: ['Deep Learning', 'TensorFlow', 'Face Recognition'],
    featured: true
  },
  {
  id: 3,
  slug: 'simple-python-http-server',
  title: 'A Simple HTTP Server to Understand the Basics of Networking',
  excerpt: 'A low-level TCP server-client implementation in Python using sockets. Learn the basics of networking and how real servers handle data under the hood.',
  date: '2024-04-20',
  readTime: '5 min read',
  tags: ['Networking', 'Python', 'Sockets'],
  featured: false
},
{
  id: 4,
  slug: 'automate-spotify-playlist-downloads-python',
  title: 'Automate Spotify Playlist Downloads Using YouTube and Python',
  excerpt: 'A Python script that converts Spotify playlists into local MP3 files by searching YouTube, downloading videos, extracting audio, and tagging metadata.',
  date: '2024-04-20',
  readTime: '9 min read',
  tags: ['Python', 'Spotify', 'YouTube', 'Automation', 'Audio Processing'],
  featured: false
},
{
  id: 5,
  slug: 'automating-email-sorting-gmail-api',
  title: 'Automating Email Sorting with Gmail API and Python',
  excerpt: 'Build a complete email classification pipeline using Gmail API and Python. Automatically fetch, clean, and label emails with custom logic.',
  date: '2025-07-14',
  readTime: '8 min read',
  tags: ['Email', 'Gmail API', 'Python', 'Automation'],
  featured: false
}
, {
  id: 6,
  slug: 'peer-circle',
  title: 'Building a Secure File Transfer Web App with React, Node.js, and PeerJS',
  excerpt: 'A full-stack web application that enables users to send and receive files over peer-to-peer connections using WebRTC. Built with React and Node.js, and secured by user authentication via MongoDB.',
  date: '2025-07-14',
  readTime: '10 min read',
  tags: ["File Sharing", "Peer-to-Peer", "React", "Node.js", "MongoDB"],
  featured: true
}, {
  id: 6,
  slug: 'sketch-app',
  title: 'Building a Real-Time Collaborative Sketch App with React and Firebase',
  excerpt: 'A collaborative drawing web app built with React and Firebase. Explore drawing sync, export functionality, and client-specific stroke tracking in real-time.',
  date: '2025-07-14',
  readTime: '9 min read',
  tags: ['Collaboration', 'React', 'Firebase', 'Canvas API'],
  featured: true
}


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
              $ cat blog/
            </h1>
            <p className="text-xl text-terminal-muted max-w-3xl mx-auto font-mono">
              Thoughts on backend development, system architecture, and the ever-evolving world of technology.
              Documenting the journey from code to production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-terminal-green font-mono"
          >
            $ grep -i "featured" posts/*
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {blogPosts
              .filter(post => post.featured)
              .map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <Link to={`/blog/${post.slug}`}>
                    <GlowCard className="h-full cursor-pointer group">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 text-xs bg-terminal-green/20 text-terminal-green rounded-full font-mono">
                            Featured
                          </span>
                          <div className="flex items-center text-terminal-muted text-sm font-mono">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-terminal-text group-hover:text-terminal-green transition-colors font-mono">
                          {post.title}
                        </h3>

                        <p className="text-terminal-muted leading-relaxed mb-6 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center text-terminal-muted text-sm font-mono">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(post.date)}
                          </div>
                          <ArrowRight className="w-4 h-4 text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center px-2 py-1 text-xs bg-terminal-bg border border-terminal-border rounded-md text-terminal-blue font-mono"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlowCard>
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-terminal-blue font-mono"
          >
            $ ls -la posts/
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link to={`/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-terminal-surface border border-terminal-border rounded-lg p-6 hover:border-terminal-green/50 transition-all duration-300 cursor-pointer group h-full flex flex-col"
                  >
                    {post.featured && (
                      <span className="inline-block px-2 py-1 text-xs bg-terminal-green/20 text-terminal-green rounded-full font-mono mb-3 w-fit">
                        Featured
                      </span>
                    )}

                    <h3 className="text-lg font-bold mb-3 text-terminal-text group-hover:text-terminal-green transition-colors font-mono line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-terminal-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-terminal-muted font-mono mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-terminal-bg border border-terminal-border rounded-md text-terminal-blue font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-terminal-bg border border-terminal-border rounded-md text-terminal-muted font-mono">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};