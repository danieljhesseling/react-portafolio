"use client"

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <Link href="/">
            <Image
              width={42}
              height={42}
              src="/assets/images/White-Logo.png"
              className="w-8 md:w-9"
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-lg text-white">
        <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/projects">
            Projects
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black text-white`}>
        <Link href="/about" className="block px-4 py-2">About</Link>
        <Link href="/projects" className="block px-4 py-2">Projects</Link>
        <Link href="/contact" className="block px-4 py-2">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
