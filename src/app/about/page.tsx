export default function AboutPage() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start p-10 max-w-6xl mx-auto space-y-10 lg:space-y-0">
      <div className="lg:w-1/2 w-full p-4">
        <img
          src="https://i.imgur.com/nYqbmoF.png"
          alt="Profile Picture"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2 w-full p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-xl">
        <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
        <p className="text-xl text-gray-300 mb-6">
          Welcome to my portfolio! I am a passionate and dedicated developer with a focus on creating engaging and user-friendly web applications.
        </p>
        <h3 className="text-3xl font-semibold text-white mt-8 mb-4">Skills</h3>
        <ul className="list-disc list-inside text-xl text-gray-300 space-y-2">
          <li>JavaScript, TypeScript</li>
          <li>Angular, React</li>
          <li>Python (Data Science)</li>
          <li>Java, Kotlin</li>
          <li>PostgreSQL</li>
        </ul>
        <h3 className="text-3xl font-semibold text-white mt-8 mb-4">Future Developments</h3>
        <p className="text-xl text-gray-300 mb-6">
        I am continuously working on my current projects; you can find more information in that section. Additionally, I am developing a new project: a statistics and information page for Pokémon, aimed at helping competitive players with valuable insights and data.        </p>
      </div>
    </section>
  );
}