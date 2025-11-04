import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "timeline", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left side: Name */}
        <button
          onClick={() => scrollToSection("home")}
          className={`text-xl font-bold transition-colors ${
            activeSection === "home"
              ? "text-gray-900"
              : "text-gray-900 hover:text-blue-600"
          }`}
        >
          Hyungmin Oh
        </button>

        {/* Right side: Navigation links */}
        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className={`text-xm font-bold transition-colors ${
              activeSection === "about"
                ? "text-blue-600"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-xm font-bold transition-colors ${
              activeSection === "projects"
                ? "text-blue-600"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("timeline")}
            className={`text-xm font-bold transition-colors ${
              activeSection === "timeline"
                ? "text-blue-600"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-xm font-bold transition-colors ${
              activeSection === "contact"
                ? "text-blue-600"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
