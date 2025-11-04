function Timeline() {
  const experiences = [
    {
      year: "Sep 2022 - Present",
      title: "Bachelor of Science in Computer Science",
      company: "University of Michigan",
      location: "Ann Arbor, MI",
      description:
        "GPA: 3.3/4.0 | Relevant Courses: Data Structures and Algorithms, Web Systems, Database Management Systems, User Interface Development, Computer Organization, and Foundations of Computer Science.",
      type: "education",
    },
    {
      year: "10/2022 - 08/2025",
      title: "Library Assistant",
      company: "Hatcher Library - Southeast Asia Department",
      location: "University of Michigan",
      description:
        "Verified accuracy of incoming book shipments using OCLC Connexion, a global cataloging system. Cataloged and exported over 3,000 books from OCLC Connexion to Alma, a leading library management system.",
      type: "work",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "education":
        return "bg-blue-600";
      case "work":
        return "bg-green-600";
      default:
        return "bg-gray-900";
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "education":
        return "Education";
      case "work":
        return "Work";
      default:
        return "";
    }
  };

  return (
    <section id="timeline" className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience & Timeline
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-gray-300 last:border-transparent"
            >
              <div
                className={`absolute left-0 top-0 w-4 h-4 ${getTypeColor(
                  exp.type
                )} rounded-full -translate-x-[9px]`}
              ></div>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500">{exp.year}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full text-white ${getTypeColor(
                      exp.type
                    )}`}
                  >
                    {getTypeLabel(exp.type)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <div className="text-gray-600 font-medium mb-1">
                  {exp.company}
                </div>
                {exp.location && (
                  <div className="text-sm text-gray-500 mb-3">
                    {exp.location}
                  </div>
                )}
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
