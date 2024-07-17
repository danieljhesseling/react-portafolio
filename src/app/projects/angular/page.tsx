"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AngularPage() {
  const router = useRouter();
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 min-h-screen overflow-auto">
      <div className="flex items-center mb-12">
        <button onClick={() => router.push('/projects')} className="mr-4 text-white hover:text-gray-300 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="m-12 text-4xl font-bold text-white">Angular Projects</h1>
      </div>
      
      <div className="border border-gray-600 shadow-inner shadow-lg p-4 bg-gray-800">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 w-full">
          <div className="transform transition duration-500 hover:scale-105 w-full md:w-1/3">
            <a href="https://lostlofi.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://i.imgur.com/Csz4tdQ.jpeg"
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
                src="https://i.imgur.com/CBep8DV.jpeg"
                alt="LostLofi Tasks Logo"
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
                src="https://i.imgur.com/JNV2KqU.jpeg"
                alt="LostLofi Mindfulness Logo"
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
        <h2 className="text-3xl font-bold text-white mb-4">Project Descriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-300">
          <div>
            <h3 className="text-2xl font-semibold text-white">LostLofi:</h3>
            <p className="mt-2">The main page of LostLofi features components such as a to-do list, calendar, and pomodoro timer, all accompanied by soothing lofi music. It is designed in a minimalist style to help users manage small tasks and have a relaxing background while they work.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">LostLofi Tasks:</h3>
            <p className="mt-2">Focused on productivity, this secondary page offers a more complex task manager, a text editor, and a pomodoro timer. I am also developing a scrum-style planner to help users organize their work more efficiently.</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white">LostLofi Mindfulness:</h3>
            <p className="mt-2">Geared towards meditation and promoting healthy habits, this page provides meditation music and tools for tracking and maintaining wellness routines.</p>
            <p className="mt-4">All three pages are built with TypeScript and Angular, and they share a common database hosted on Google Firebase.</p>
          </div>
        </div>
      </div>
    </div>
  );
}