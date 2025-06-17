'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Navbar from './component/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abhinav - Developer Portfolio',
  description: 'Portfolio showcasing tech stack, projects, and contact information.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="/og-image.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen max-w-5xl mx-auto p-6"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
