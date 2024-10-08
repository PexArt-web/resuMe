const Skills = () => {
  //
  return (
    <section className=" bg-gray-800 p-8 shadow-md max-w-3xl mx-auto rounded-b-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
        Skills
      </h2>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
          Technical Skills
        </h3>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {[
            "JavaScript (ES6+)",
            "React.js",
            "Node.js & Express.js",
            "MongoDB",
            "Tailwind CSS",
            "RESTful APIs",
            "Firebase Authentication",
            "Version Control (Git & GitHub)",
          ].map((skill, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-blue-500  mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              <span className="text-sm md:text-base">{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className=" bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-xl md:text-2xl font-semibold  text-gray-100">
          Non-Technical Skills
        </h3>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {[
            "Teamwork",
            "Communication",
            "Problem-Solving",
            "Adaptability",
            "Time Management",
            "Critical Thinking",
            "Attention to Detail",
            "Leadership",
          ].map((skill, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-500  mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              <span className="text-sm md:text-base">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
