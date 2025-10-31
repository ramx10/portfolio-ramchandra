import React from "react";
import college1Logo from "../assets/adt.jpeg";   // Replace with actual filename
import college2Logo from "../assets/wpu.png";   // Replace with actual filename
import schoolLogo from "../assets/school.png";       // Replace with actual filename

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology (B.Tech)",
      institution: "Your Current College Name",
      logo: college1Logo,
      year: "2022 - Present",
      description:
        "Pursuing B.Tech in Computer Science with a strong foundation in programming, web development, and AI technologies.",
    },
    {
      title: "Diploma in Computer Engineering",
      institution: "Your Diploma College Name",
      logo: college2Logo,
      year: "2019 - 2022",
      description:
        "Completed a diploma focused on computer systems, software engineering, and project-based learning.",
    },
    {
      title: "Higher Secondary Education (10th)",
      institution: "Your School Name",
      logo: schoolLogo,
      year: "2018 - 2019",
      description:
        "Completed secondary education with an emphasis on science and mathematics.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-lightGradEnd to-lightGradStart dark:from-darkGradEnd dark:to-darkGradStart px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Education
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Logo Section */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-20 h-20 object-contain rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
              />
            </div>

            {/* Details Section */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-300">
                {edu.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {edu.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
