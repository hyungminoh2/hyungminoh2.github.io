import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import solvend1 from "../images/solvend1.png";
import solvend2 from "../images/solvend2.png";
import solvend3 from "../images/solvend3.png";
import natours1 from "../images/natours1.png";
import natours2 from "../images/natours2.png";
import natours3 from "../images/natours3.png";
import natours4 from "../images/natours4.png";
import recipeapi from "../images/recipeapi.png";
import medivault from "../images/medivault.jpg";

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check if project has multiple images
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
      <div className="relative overflow-hidden h-48 bg-gray-200">
        <img
          src={images[currentImageIndex]}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Slideshow controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="text-gray-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="text-gray-900" />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-4"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-sm text-blue-600 font-medium mb-3">
            {project.subtitle}
          </p>
        )}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gray-900 text-white text-center rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border-2 border-gray-900 text-gray-900 text-center rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {project.links.docs && (
            <a
              href={project.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 text-center rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium"
            >
              Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Solvend",
      subtitle: "MHacks 2025 (3rd Place, Most Creative Solana MCP)",
      description:
        "Built a full-stack application using Next.js, Flask, and Gemini AI, powering personalized crypto insights and automated email delivery. Collaborated on Solana integration with Vybe & Jupiter Dev API for real-time market queries.",
      tags: [
        "Next.js",
        "Flask",
        "Gemini AI",
        "Solana",
        "Vybe API",
        "Jupiter Dev API",
      ],
      image: [solvend1, solvend2, solvend3],
      links: {
        github: "https://github.com/hyungminoh2/Solvend-mhacks2025",
        docs: "https://devpost.com/software/solvend#updates",
      },
    },
    {
      title: "Natours",
      subtitle: "Tour Booking Platform",
      description:
        "Developed and deployed full-stack tour booking API with 40+ endpoints, geospatial queries, and advanced MongoDB aggregation pipelines. Implemented secure authentication (JWT), role-based authorization, Stripe payment integration, and Brevo email service.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "JWT",
        "Mapbox",
        "Brevo",
      ],
      image: [natours1, natours2, natours3, natours4],
      links: {
        live: "https://natours-2s7j.onrender.com/",
        github: "https://github.com/hyungminoh2/natours",
        docs: "https://documenter.getpostman.com/view/25780937/2sB3HqJyvj",
      },
    },
    {
      title: "Recipe API",
      subtitle: "Backend Web Application",
      description:
        "Built RESTful API with advanced querying (filtering, sorting, pagination), MVC architecture, and MongoDB data models with validation and relationships. Implemented JWT authentication, password encryption, and role-based access control.",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      image: recipeapi,
      links: {
        docs: "https://documenter.getpostman.com/view/25780937/2sB3QCSDPD",
      },
    },
    {
      title: "Medi-Vault",
      subtitle: "MHacks 2024",
      description:
        "Developed an iOS application for offline medical equipment tracking system using Swift, integrating seamless OCR functionality with Apple's built-in text recognition tools. Collaborated with Flask/MariaDB backend team for efficient data handling.",
      tags: ["Swift", "iOS", "OCR", "Flask", "MariaDB"],
      image: medivault,
      links: {
        github: "https://github.com/hawonc/Medi-Vault",
      },
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Recent Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
