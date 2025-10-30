export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "PHP", "MySQL",
    "Python", "Machine Learning", "Deep Learning", "TensorFlow"
  ];
  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((item) => (
          <span
            key={item}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}