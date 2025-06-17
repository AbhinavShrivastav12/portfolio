'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-10 py-6 bg-white shadow-md sticky top-0 z-50">
      <Link href="/">
        <a className="font-semibold text-lg hover:text-blue-600 transition">Home</a>
      </Link>
      <a href="#projects" className="font-semibold text-lg hover:text-blue-600 transition cursor-pointer">
        Projects
      </a>
      <a href="#contact" className="font-semibold text-lg hover:text-blue-600 transition cursor-pointer">
        Contact
      </a>
    </nav>
  );
}
