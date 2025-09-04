import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import 'highlight.js/styles/github-dark.css';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Blog post metadata - this should match the data in Blog.tsx
  const blogPostsMetadata: Record<string, any> = {
    'rsa-encryption-from-scratch': {
    title: 'Building RSA Encryption from Scratch in Java',
    date: '2025-06-28',
    readTime: '7 min read',
    tags: ['Java', 'Cryptography', 'Security'],
    author: 'Deepak Lekhak'
    },
    'facenet-model-implementation': {
    title: 'Implementing Face Net Model From Scratch',
    date: '2025-06-28',
    readTime: '7 min read',
    tags: ['FaceNet', 'CNN', 'Image Recognition', 'Machine Learning'],
    author: 'Deepak Lekhak'
    },
    'simple-python-http-server': {
    title: 'An Introduction To Building HTTP Server In Python',
    date: '2025-06-28',
    readTime: '5 min read',
    tags: ['Network', 'HTTP', 'Sockets'],
    author: 'Deepak Lekhak'
    },
    'automate-spotify-playlist-downloads-python': {
    title: 'Automate Spotify Playlist Downloads Using YouTube and Python',
    date: '2024-04-20',
    readTime: '9 min read',
    tags: ['Python', 'Spotify', 'YouTube', 'Automation', 'Audio Processing'],
    author: 'Deepak Lekhak'
    },
    'automating-email-sorting-gmail-api': {
  title: 'Automating Email Sorting with Gmail API and Python',
  date: '2025-07-14',
  readTime: '8 min read',
  tags: ['Email', 'Gmail API', 'Python', 'Automation'],
  author: 'Deepak Lekhak'
},
'peer-circle' :{
title: "Building a Secure File Transfer Web App with React, Node.js, and PeerJS",
date: '2025-07-14',
author: "Deepak Lekhak",
readTime: "10 min read",
tags: ["File Sharing", "Peer-to-Peer", "React", "Node.js", "MongoDB"]
},
    'sketch-app': {
      title: 'Building a Real-Time Collaborative Sketch App with React and Firebase',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['Collaboration', 'React', 'Firebase', 'Canvas API'],
      author: 'Deepak Lekhak'
    },
};



  const postMetadata = slug ? blogPostsMetadata[slug] : null;

  useEffect(() => {
    const loadMarkdown = async () => {
      if (!slug) {
        setError('Blog post not found');
        setLoading(false);
        return;
      }

      try {
        // Try to load the markdown file from the public directory
        const response = await fetch(`/blog/${slug}.md`);
        
        if (!response.ok) {
          // If file doesn't exist, show a placeholder
          setContent(`# ${postMetadata?.title || 'Blog Post'}

This blog post is coming soon! 

To add content for this post, create a markdown file at \`public/blog/${slug}.md\`.

## Getting Started

1. Create the file \`public/blog/${slug}.md\`
2. Write your content in Markdown format
3. The content will automatically appear here

## Markdown Features Supported

- **Bold text**
- *Italic text*
- \`Inline code\`
- [Links](https://example.com)
- Lists
- Code blocks with syntax highlighting
- Tables
- And much more!

\`\`\`javascript
// Example code block
function hello() {
  console.log("Hello, World!");
}
\`\`\`

Happy writing! 🚀`);
        } else {
          const text = await response.text();
          setContent(text);
        }
      } catch (err) {
        console.error('Error loading markdown:', err);
        setContent(`# ${postMetadata?.title || 'Blog Post'}

This blog post is coming soon! 

To add content for this post, create a markdown file at \`public/blog/${slug}.md\`.`);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [slug, postMetadata?.title]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: postMetadata?.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-terminal-green font-mono">Loading...</div>
      </div>
    );
  }

  if (error || !postMetadata) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-terminal-text mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-terminal-green hover:underline font-mono">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-terminal-green hover:text-terminal-blue transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>
        </motion.div>

        {/* Article header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terminal-text mb-6 font-mono leading-tight">
            {postMetadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-terminal-muted font-mono text-sm mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(postMetadata.date)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {postMetadata.readTime}
            </div>
            <button
              onClick={sharePost}
              className="flex items-center hover:text-terminal-green transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {postMetadata.tags.map((tag: string) => (
              <span
                key={tag}
                className="flex items-center px-3 py-1 text-xs bg-terminal-surface border border-terminal-border rounded-full text-terminal-blue font-mono"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-green max-w-none"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            className="markdown-content"
          >
            {content}
          </ReactMarkdown>
        </motion.div>

        {/* Author info */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-terminal-border"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-terminal-green to-terminal-blue rounded-full flex items-center justify-center mr-4">
              <span className="text-terminal-bg font-bold font-mono">DL</span>
            </div>
            <div>
              <h3 className="font-bold text-terminal-text font-mono">{postMetadata.author}</h3>
              <p className="text-terminal-muted text-sm font-mono">Backend Developer & Code Crusader</p>
            </div>
          </div>
        </motion.footer>
      </article>
    </div>
  );
};