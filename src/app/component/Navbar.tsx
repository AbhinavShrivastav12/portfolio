'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 py-6 bg-white shadow-md mb-12 sticky top-0 z-50">
      <Link href="/">
        <a className="font-semibold text-lg hover:text-blue-600">Home</a>
      </Link>
      <Link href="#projects">
        <a className="font-semibold text-lg hover:text-blue-600">Projects</a>
      </Link>
      <Link href="#contact">
        <a className="font-semibold text-lg hover:text-blue-600">Contact</a>
      </Link>
    </nav>
  );
}
