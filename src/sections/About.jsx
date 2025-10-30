export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen flex flex-col justify-center items-center 
        px-6 py-20 
        bg-gradient-to-br from-lightGradEnd to-lightGradStart
        dark:from-darkGradEnd dark:to-darkGradStart
        transition-colors duration-700 text-center
      "
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I am <b>Ramchandra Shipalkar</b>, a B.Tech IT student passionate about
          Artificial Intelligence, Machine Learning, and Web Development. I enjoy
          designing and building intelligent, elegant digital solutions that make
          life easier for people.
        </p>
      </div>
    </section>
  );
}