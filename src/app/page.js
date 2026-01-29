export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Pritam Das
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          I enjoy building thoughtful software, learning continuously, and working on ideas that have real impact.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-gray-800" />

      {/* About */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-2xl font-semibold mb-6">
          About
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          I’m a software engineer who enjoys understanding how systems work end to end. 
          I like building things carefully, improving them over time, and keeping designs simple.
          This site is a place to share my work, experience, and experiments.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-2xl font-semibold mb-10">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
            <h3 className="text-lg font-medium mb-2">Project One</h3>
            <p className="text-gray-400 text-sm">
              A short explanation of what this project does and why it’s interesting.
            </p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
            <h3 className="text-lg font-medium mb-2">Project Two</h3>
            <p className="text-gray-400 text-sm">
              Another project description that highlights problem and solution.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-2xl font-semibold mb-6">
          Experience
        </h2>
        <div className="text-gray-400 max-w-3xl">
          <p className="font-medium text-white">
            Software Engineer — Company Name
          </p>
          <p className="text-sm mt-1">
            Building and maintaining backend systems, APIs, and internal tools.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Contact
        </h2>
        <p className="text-gray-400 mb-6">
          Want to collaborate or just say hi?
        </p>
        <p className="text-gray-300">
          pritambasudas@example.com
        </p>
      </section>

    </main>
  );
}
