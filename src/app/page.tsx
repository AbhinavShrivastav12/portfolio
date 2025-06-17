'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const techStack = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'PostgreSQL',
];

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with Next.js and Tailwind CSS.',
    link: 'https://github.com/username/portfolio',
  },
  {
    title: 'E-commerce Store',
    description: 'A fully functional e-commerce app using React and Node.js.',
    link: 'https://github.com/username/ecommerce-store',
  },
  {
    title: 'Chat App',
    description: 'Real-time chat app built with Socket.io and Next.js API routes.',
    link: 'https://github.com/username/chat-app',
  },
];

const socials = [
  { name: 'GitHub', url: 'https://github.com/username' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username' },
  { name: 'Twitter', url: 'https://twitter.com/username' },
];

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-20">
      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I am Abhinav</h1>
        <p className="text-lg max-w-xl mx-auto">
          I’m a full-stack developer passionate about building performant and scalable web apps.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        id="tech"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Tech Stack</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(({ title, description, link }) => (
            <motion.a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
              <p className="mt-4 text-blue-600 underline">View on GitHub</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="mb-4">Feel free to reach out via email or through social media!</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 mt-2">Message sent! Thank you.</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
          )}
        </form>

        <div className="mt-8 flex justify-center space-x-8 text-blue-600">
          {socials.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 font-semibold"
            >
              {name}
            </a>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
