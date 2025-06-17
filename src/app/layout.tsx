'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

 const metadata = {
  title: 'Developer Portfolio - Abhinav',
  description: 'Portfolio showcasing tech stack, projects, and contact info.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add more SEO tags like Open Graph if you want */}
      </Head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
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
