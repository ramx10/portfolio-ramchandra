import React from "react";
import profile from "../assets/formal1.jpg"; // Make sure the image path is correct

const Home = () => {
  // Smooth scroll function
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">Ramchandra</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          A passionate developer who loves building clean, modern, and responsive web experiences.
        </p>

        {/* Button with working smooth scroll */}
        <button
          onClick={handleScrollToProjects}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          View My Work
        </button>
      </div>

      {/* Profile Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-blue-100 dark:border-gray-700 transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Home;
