// src/sections/Certifications.jsx
import React from "react";

const certificates = [
  {
    title: "Java Programming",
    issuer: "IIT Bombay",
    image: "/certificates/java-iitb.jpg",
  },
  {
    title: "IBM Skill Build – Generative AI",
    issuer: "IBM & AICTE",
    image: "/certificates/ibm-genai.jpg",
  },
  {
    title: "OCI Data Science",
    issuer: "Oracle Cloud Infrastructure",
    image: "/certificates/oci-data.jpg",
  },
  {
    title: "Machine Learning",
    issuer: "Intellipaat",
    image: "/certificates/intellipaat-ml.jpg",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-gradient-to-br from-lightGradEnd to-lightGradStart dark:from-darkGradEnd dark:to-darkGradStart px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Certifications
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="glassmorphism rounded-xl p-4 flex flex-col items-center hover:scale-105 transition transform duration-300 shadow-md"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-lg mb-4 w-40 h-40 object-cover border border-white/20"
            />
            <h3 className="text-lg font-semibold text-blue-700 dark:text-yellow-300">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}