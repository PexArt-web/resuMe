const Education = () => {
  return (
    <section className="bg-gray-800 text-gray-200 p-8 shadow-md max-w-3xl mx-auto rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
        Education
      </h2>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
          B.Sc. Computer Science
        </h3>
        <p className="text-gray-400">Ekiti State University, Ado-Ekiti</p>
        <div className="flex items-center text-gray-500 mt-2">
          <svg
            className="w-5 h-5 text-blue-400 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c0-2.21-.895-4-2-4s-2 1.79-2 4 .895 4 2 4 2-1.79 2-4zM6.998 15h10.004M6.998 7h10.004M12 17v2m-7 2a2 2 0 01-2-2m18 0a2 2 0 01-2-2m2 0a9 9 0 11-18 0m2 0a2 2 0 002-2m0 0a2 2 0 012-2m4 0a2 2 0 012-2m4 0a2 2 0 002 2m0 0a2 2 0 002-2"
            />
          </svg>
          <span>November 6, 2017 - February 2022</span>
        </div>
        <p className="text-gray-300 mt-2">
          Graduated with a Bachelor's degree in Computer Science, where I
          developed a solid foundation in programming, software development, and
          data structures. This period equipped me with critical thinking skills
          and a deep understanding of the technology landscape, fueling my
          passion for building innovative solutions.
        </p>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-100">
          Coding Training Program
        </h3>
        <p className="text-gray-400">SQI ICT Academy</p>
        <div className="flex items-center text-gray-500 mt-2">
          <svg
            className="w-5 h-5 text-green-400 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.654 0-3 .895-3 2s1.346 2 3 2 3-.895 3-2-1.346-2-3-2zM9 16h6M9 6h6M12 20v2m-7 2a2 2 0 01-2-2m18 0a2 2 0 01-2-2m2 0a9 9 0 11-18 0m2 0a2 2 0 002-2m0 0a2 2 0 012-2m4 0a2 2 0 012-2m0 0a2 2 0 002-2"
            />
          </svg>
          <span>2023 - 2024</span>
        </div>
        <p className="text-gray-300 mt-2">
          Completed a comprehensive coding program at SQI ICT Academy, where I
          kickstarted my journey into software development. This experience
          enabled me to master essential programming languages, frameworks, and
          best practices, laying a strong foundation for my career as a frontend
          developer.
        </p>
      </div>
    </section>
  );
};

export default Education;
