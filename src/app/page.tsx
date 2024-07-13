"use client";

import Image from 'next/image';
import Link from 'next/link';
import useTypedText from './../Hooks/useTypedText';

export default function Home() {
  const typedText = useTypedText(['Web Developer', 'Angular/React', 'Data Analyst'], 100);

  return (
    <div className="pt-16 overflow-hidden max-h-screen">
      <section className="text-center bg-gradient-to-br from-gray-800 via-gray-700 to-black p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 min-h-screen max-h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
        <Image
          src="/assets/images/YO.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="mx-auto rounded-full border-4 border-white shadow-md mb-6"
        />
        <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Hi! I&apos;m Daniel Jiménez Hesselinsg</h2>
        <div className="text-2xl text-gray-300 mb-6">
          {typedText}
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/contact" passHref>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600">
              Get in touch!
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1HQWO-ZdiWYBpVHHLhuvRoqwT1zAWoNjR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:bg-red-600"
          >
            Get Resume
          </a>
        </div>
      </section>
    </div>
  );
}