export default function Home() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex flex-col justify-center items-center
        px-4 py-20 text-center
        bg-gradient-to-br from-lightGradStart to-lightGradEnd
        dark:from-darkGradStart dark:to-darkGradEnd
        transition-colors duration-700
      "
    >
      <h1 className="text-5xl font-bold text-yellow-400 mb-4">
        Hi, I'm Ramchandra Shipalkar
      </h1>

      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        B.Tech IT Student | AI/ML & Web Developer
      </p>

      <a
        href="/Ramchandra_Shipalkar_Resume.pdf"
        download
        className="
          bg-blue-600 hover:bg-blue-500
          text-white px-6 py-3 rounded-lg
          font-semibold shadow-md transition
        "
      >
        Download Resume
      </a>
    </section>
  );
}