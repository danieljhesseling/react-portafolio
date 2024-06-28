export default function AboutPage() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start p-10 max-w-6xl mx-auto ">
      <div className="lg:w-1/2 w-full p-4">
        <img
          src="/path-to-your-image.jpg"
          alt="Profile Picture"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="lg:w-1/2 w-full p-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-inner">
        <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
        <p className="text-xl text-gray-300 mb-6">
          I am a Higher Technician in Multiplatform Application Development. I have professional experience developing the ECMs and working on various projects in Angular, React and Kotlin. I have a passion for data science with Python.
        </p>
        <p className="text-xl text-gray-300 mb-6">
          In my spare time, I enjoy developing a game and creating its pixel art.
        </p>
        <h3 className="text-3xl font-semibold text-white mt-8 mb-4">Skills</h3>
        <ul className="list-disc list-inside text-xl text-gray-300 space-y-2">
          <li>Javascript, Typescript</li>
          <li>Angular / React</li>
          <li>Python (Data Science)</li>
          <li>Java, Kotlin</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </section>
  );
}
