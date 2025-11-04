import { useState, useEffect } from "react";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
import about4 from "../images/about4.jpg";
import about5 from "../images/about5.jpg";
import about6 from "../images/about6.jpg";

function About() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "react",
        "javascript",
        "typescript",
        "tailwindcss",
        "html",
        "css",
      ],
    },
    {
      category: "Backend",
      items: ["nodejs", "express", "mongodb", "postgresql"],
    },
    {
      category: "Tools",
      items: ["git", "docker", "aws", "figma"],
    },
  ];

  const images = [about1, about2, about3, about4, about5, about6];
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About Me
        </h2>

        {/* TEXT + SLIDES side by side */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT — Text */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Hi there! I am a junior at the University of Michigan studying
              Computer Science. I have a passion for web development and enjoy
              solving complex problems through creativity and innovation. I'm
              actively pursuing a career in front-end and full-stack
              development, aiming to create impactful and user-friendly
              applications.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              When I'm not coding, you can usually find me watching soccer,
              gaming with friends, reading Korean web novels, or looking out for
              the best eats in town (I'm a bit of a foodie!) 😋
            </p>
          </div>

          {/* RIGHT — Slideshow */}
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`About ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* TOOLS SECTION */}
        <h3 className="text-center text-2xl font-semibold mb-10">
          🛠️ Some tools I use!
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {skillSet.category}
              </h4>

              <div className="flex flex-wrap justify-center gap-5">
                {skillSet.items.map((skillId) => (
                  <div
                    key={skillId}
                    className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skillId}&theme=light`}
                      alt={skillId}
                      className="w-12 h-12 mb-1"
                    />
                    <p className="text-xs text-gray-600 group-hover:text-gray-900 capitalize">
                      {skillId}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
