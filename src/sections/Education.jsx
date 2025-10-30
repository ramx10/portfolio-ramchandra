export default function Education() {
  return (
    <section
      id="education"
      className="
        min-h-screen
        flex flex-col justify-center items-center
        px-4 py-20 mt-16
        bg-gradient-to-br from-lightGradStart to-lightGradEnd
        dark:from-darkGradStart dark:to-darkGradEnd
        transition-colors duration-700
        text-center
      "
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-gray-100">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-6 w-full">
        <div className="glassmorphism p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-300">
            MIT ADT University
          </h3>
          <p className="text-gray-700 dark:text-gray-300">B.Tech IT (2024 – 2027)</p>
        </div>

        <div className="glassmorphism p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-300">
            MIT Polytechnic
          </h3>
          <p className="text-gray-700 dark:text-gray-300">Diploma IT (2022 – 2024)</p>
        </div>

        <div className="glassmorphism p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-300">
            Sheth Jyotiprasad Vidyalaya
          </h3>
          <p className="text-gray-700 dark:text-gray-300">SSC + HSC</p>
        </div>
      </div>
    </section>
  );
}