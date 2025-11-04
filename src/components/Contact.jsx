import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Feel free to drop a message - I'll get back soon!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
              placeholder="Ask me anything! 😃"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-gray-200 flex justify-center gap-6">
          <a
            href="https://github.com/hyungminoh2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/hyungminoh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hyungoh@umich.edu"
            className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
