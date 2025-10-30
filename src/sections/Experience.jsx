export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex flex-col justify-center items-center
                 px-4 py-20 bg-gradient-to-br from-lightGradStart to-lightGradEnd
                 dark:from-darkGradStart dark:to-darkGradEnd
                 transition-colors duration-700 text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="glassmorphism p-6">
          <h3 className="text-xl font-semibold">AI/ML Virtual Internship</h3>
          <p>Google + AICTE | 2025</p>
        </div>

        <div className="glassmorphism p-6">
          <h3 className="text-xl font-semibold">Web Development Internship</h3>
          <p>Python Django | 2023</p>
        </div>
      </div>
    </section>
  );
}
