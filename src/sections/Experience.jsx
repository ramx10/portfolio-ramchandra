import React from "react";

const experiences = [
  {
    title: "AI/ML Virtual Internship",
    company: "Google + AICTE",
    year: "2025",
  },
  {
    title: "Web Development Internship",
    company: "Python Django",
    year: "2023",
  },
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
        Experience
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {exp.company} | {exp.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
