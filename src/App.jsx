import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// function About() {
//   const skills = [
//     {
//       category: "Frontend",
//       items: ["react", "js", "ts", "tailwindcss", "html", "css"],
//     },
//     {
//       category: "Backend",
//       items: ["nodejs", "express", "mongodb", "postgresql"],
//     },
//     {
//       category: "Tools",
//       items: ["git", "docker", "aws", "figma"],
//     },
//   ];

//   return (
//     <section id="about" className="min-h-screen bg-white py-24 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         {/* Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           About Me
//         </h2>

//         {/* Description */}
//         <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
//           Hi there! I’m a junior at the University of Michigan studying Computer
//           Science. I have a deep passion for web development and love
//           transforming complex problems into clean, elegant, and efficient
//           solutions. I’m currently focused on building full-stack applications
//           with modern tools and frameworks.
//         </p>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {skills.map((skillSet, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//                 {skillSet.category}
//               </h3>

//               {/* Icons */}
//               <div className="flex flex-wrap justify-center gap-5">
//                 {skillSet.items.map((skillId) => (
//                   <div
//                     key={skillId}
//                     className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={`https://skillicons.dev/icons?i=${skillId}&theme=light`}
//                       alt={skillId}
//                       className="w-12 h-12 mb-1"
//                     />
//                     <p className="text-xs text-gray-600 group-hover:text-gray-900 capitalize">
//                       {skillId}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
