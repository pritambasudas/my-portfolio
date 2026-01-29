"use client";

import { useReveal } from "./useReveal";

export default function Home() {
  const about = useReveal();
  const projects = useReveal();
  const experience = useReveal();
  const contact = useReveal();

  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-sm sm:text-base">
            Pritam
          </span>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Pritam Das
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            I enjoy building thoughtful software, learning continuously, and working on ideas that have real impact.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t border-gray-800" />

      {/* About */}
      <section
        id="about"
        ref={about.ref}
        className={`py-20 px-4 sm:px-6 transition-all duration-700
          ${about.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            About
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I’m a software engineer who enjoys understanding how systems work end to end.
            I like building things carefully, improving them over time, and keeping designs simple.
            This site is a place to share my work, experience, and experiments.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        ref={projects.ref}
        className={`py-20 px-4 sm:px-6 transition-all duration-700
          ${projects.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-10">
            Projects
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-gray-800 rounded-xl p-6
                            transition-all duration-300
                            hover:border-gray-600 hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-medium mb-2">
                Project One
              </h3>
              <p className="text-gray-400 text-sm">
                A short explanation of what this project does and why it’s interesting.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6
                            transition-all duration-300
                            hover:border-gray-600 hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-medium mb-2">
                Project Two
              </h3>
              <p className="text-gray-400 text-sm">
                Another project description that highlights problem and solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        ref={experience.ref}
        className={`py-20 px-4 sm:px-6 transition-all duration-700
          ${experience.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Experience
          </h2>
          <div className="text-gray-400 text-sm sm:text-base">
            <p className="font-medium text-white">
              Software Engineer — Cognizant
            </p>
            <p className="mt-1">
              Building and maintaining backend systems, APIs, and internal tools.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        ref={contact.ref}
        className={`py-24 px-4 sm:px-6 text-center transition-all duration-700
          ${contact.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Contact
          </h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Want to collaborate or just say hi?
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            pritambasudas@example.com
          </p>
        </div>
      </section>

    </main>
  );
}
