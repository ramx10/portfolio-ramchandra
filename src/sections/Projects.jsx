// src/sections/Projects.jsx
import React from "react";

const projects = [
  {
    title: "AI Travel Buddy",
    description:
      "Android app that provides smart travel recommendations and manages trip expenses with AI integration.",
    image: "/projects/AI_Travel_Buddy_Andr.png",
    github: "https://github.com/shipalkarram/ai-travel-buddy",
  },
  {
    title: "CNN Image Classification",
    description:
      "Deep learning project using Convolutional Neural Networks to classify and detect objects from image datasets.",
    image: "/projects/CNN_Image_Classifica.png",
    github: "https://github.com/shipalkarram/cnn-model",
  },
  {
    title: "Django Full‑Stack Web Apps",
    description:
      "Multiple full‑stack web applications created with Django and MySQL, focusing on business‑logic automation.",
    image: "/projects/Multiple_full‑stack.png",
    github: "https://github.com/shipalkarram/django-web",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-lightGradStart to-lightGradEnd dark:from-darkGradStart dark:to-darkGradEnd px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="glassmorphism rounded-xl p-5 hover:scale-105 transition transform duration-300 shadow-lg"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-300 mb-2">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {proj.description}
            </p>
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}