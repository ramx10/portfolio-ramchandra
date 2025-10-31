import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { SiMysql, SiTensorflow, SiPytorch } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 80 },
  { name: "React", icon: <FaReact className="text-cyan-400" />, level: 75 },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" />, level: 70 },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: 80 },
  { name: "Python", icon: <FaPython className="text-green-500" />, level: 85 },
  {
    name: "Machine Learning",
    icon: <SiPytorch className="text-red-400" />,
    level: 70,
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow className="text-orange-400" />,
    level: 65,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20
                 bg-gradient-to-br from-lightGradStart to-lightGradEnd
                 dark:from-darkGradStart dark:to-darkGradEnd transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 w-full max-w-5xl">
        {skills.map((skill, i) => (
          <div key={i} className="w-full">
            {/* Skill Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100 font-medium">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                {skill.level}%
              </span>
            </div>

            {/* Skill Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
