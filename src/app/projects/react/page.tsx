"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProjectPage() {
  const router = useRouter();
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 min-h-screen overflow-auto">
      <div className="flex items-center mb-8 pt-12"> {/* Added pt-12 for padding */}
        <button onClick={() => router.push('/projects')} className="mr-4 text-white hover:text-gray-300 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-white">Project: PokeDeep</h1>
      </div>
      
      <div className="border border-gray-600 shadow-inner shadow-lg p-4 bg-gray-800 rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 w-full">
          <div className="transform transition duration-500 hover:scale-105 w-full md:w-2/3">
            <a href="https://poke-deep.web.app/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://i.imgur.com/H1PN79b.png"
                alt="PokeDeep Logo"
                layout="responsive"
                width={400}
                height={200}
                className="w-full object-contain filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-white mb-4">Project Description</h2>
        <div className="text-lg text-gray-300">
          <h3 className="text-xl font-semibold text-white">PokeDeep:</h3>
          <p className="mt-2">PokeDeep is a web application built using React for the frontend and Flask for the backend. This project integrates a variety of features aimed at enhancing the user experience with Pokémon data management and visualization. Main features:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Comprehensive Pokémon search and filter functionalities based on name, type, or number.</li>
            <li>Detailed Pokémon statistics, including attack, defense, speed, and special attributes.</li>
            <li>User-friendly interface for sorting and filtering Pokémon by various criteria.</li>
            <li>Dynamic visual effects, such as grayscale transitions on hover, to enrich the user interface.</li>
            <li>Integration with Flask backend to manage data retrieval and processing efficiently.</li>
          </ul>
          <p className="mt-4">This application aims to provide Pokémon enthusiasts with a powerful tool to explore and manage their favorite Pokémon efficiently, combining robust functionality with an engaging user experience.</p>
        </div>
      </div>
    </div>
  );
}