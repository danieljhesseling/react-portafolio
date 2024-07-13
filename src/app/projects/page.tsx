"use client";

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState('');

  const handleButtonClick = (type: string) => {
    setAnimationType(type);
    setIsAnimating(true);
    setTimeout(() => {
      router.push(`/projects/${type}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Projects</title>
      </Head>
      <section className="p-4">
        <h1 className="text-5xl font-bold text-white mb-12">Projects</h1>
        <div
          className={`relative bg-gray-900 p-10 rounded-lg shadow-2xl flex justify-center items-center space-x-8 transition-transform duration-1000 mt-12 mb-12 ${isAnimating && animationType === 'angular' ? 'transform rotate-12 scale-110' : ''} ${isAnimating && animationType === 'react' ? 'transform -rotate-12 scale-110' : ''}`}
        >
          <div className="transform transition duration-500 hover:scale-105">
            <button onClick={() => handleButtonClick('angular')}>
              <Image 
                src="/assets/images/angular-logo.png" 
                alt="Angular Logo" 
                width={150} 
                height={150} 
                className="filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
              />
            </button>
          </div>
          <div className="transform transition duration-500 hover:scale-105">
            <button onClick={() => handleButtonClick('react')}>
              <Image 
                src="/assets/images/react-logo.png" 
                alt="React Logo" 
                width={150} 
                height={150} 
                className="filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
