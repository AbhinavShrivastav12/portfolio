'use client';

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
  return (
    <div className="space-y-16">
      {/* Intro Section */}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="mb-4">
          Feel free to reach out via email or through social media!
        </p>
        <a
          href="mailto:abhinav@example.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          abhinav@example.com
        </a>
        <div className="mt-6 flex justify-center space-x-6 text-blue-600">
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
