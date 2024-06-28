"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AngularPage() {
  const router = useRouter();
  return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8 min-h-screen overflow-auto">
        <div className="flex items-center mb-12">
          <button onClick={() => router.push('/projects')} className="mr-4 text-white hover:text-gray-300 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="m-20 text-4xl font-bold text-white">Angular Projects</h1>
        </div>
        
        <div className="border border-gray-600 shadow-inner shadow-lg p-4 bg-gray-800">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 w-full">
            <div className="transform transition duration-500 hover:scale-105 w-full md:w-1/3">
              <a href="https://lostlofi.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/images/logo.jpg"
                  alt="LostLofi Mindfulness Logo"
                  layout="responsive"
                  width={400}
                  height={200}
                  className="w-full object-contain filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                />
              </a>
            </div>
            <div className="transform transition duration-500 hover:scale-105 w-full md:w-1/3">
              <a href="https://lostlofimindfulness.web.app/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/images/logo mindfulness.jpg"
                  alt="LostLofi Mindfulness Logo"
                  layout="responsive"
                  width={400}
                  height={200}
                  className="w-full object-contain filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                />
              </a>
            </div>
            <div className="transform transition duration-500 hover:scale-105 w-full md:w-1/3">
              <a href="https://lostlofitasks.web.app/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/images/logo tasks.jpg"
                  alt="LostLofi Tasks Logo"
                  layout="responsive"
                  width={400}
                  height={200}
                  className="w-full object-contain filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}