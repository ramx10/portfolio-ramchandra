// src/sections/Certifications.jsx
import React from "react";

const certificates = [
  {
    title: "Java Programming",
    issuer: "IIT Bombay",
    image: "/certificates/iit.png",
    link: "https://drive.google.com/file/d/1-aEvZeQTEP29merjTTE2NM_Px_vAkqsK/view?usp=drive_link", // 🔁 Replace this with your real link
  },
  {
    title: "IBM Skill Build – Generative AI",
    issuer: "IBM & AICTE",
    image: "/certificates/IBM.png",
    link: "https://drive.google.com/file/d/1wEkzjNGiDVZq2cipqVdFbRMnp6QzQbkz/view?usp=drive_link",
  },
  {
    title: "OCI Data Science",
    issuer: "Oracle Cloud Infrastructure",
    image: "/certificates/oracle.png",
    link: "https://drive.google.com/file/d/1KqrhvUYtcceCZtiJQs71G5zbgpJBJ_1T/view?usp=drive_link",
  },
  {
    title: "Machine Learning",
    issuer: "Intellipaat",
    image: "/certificates/Intellipaat_Machine.png",
    link: "https://drive.google.com/file/d/13Co6c5dB8618_Jo592c_sOPTXWhsyIL-/view?usp=drive_link",
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
            className="glassmorphism rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-lg mb-4 w-40 h-40 object-cover border border-white/20 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-blue-700 dark:text-yellow-300 mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {cert.issuer}
            </p>

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-yellow-400 dark:text-gray-900 rounded-full hover:opacity-90 transition"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
