import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import profilePic from "../images/profile-pic.jpg";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer & Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Hyungmin Oh
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8 h-10">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Hello, I'm Hyungmin Oh. A passionate Full Stack Developer based in
            Ann Arbor, Michigan.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/hyungminoh2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/hyungminoh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* Right side - Profile picture */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={profilePic}
              alt="Hyungmin Oh"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
