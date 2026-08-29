import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />


      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-28">

        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Engineering · Technology · Development
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Building practical solutions through
          <span className="text-zinc-500"> engineering and technology.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I&apos;m Adeeb, an engineering professional exploring software
          development, automation, technology, and modern web development.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="https://github.com/YOUR-USERNAME" /*Replace*/
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN" /*Replace*/
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500"
          >
            Resume
          </a>
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800 bg-zinc-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            About
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Engineering mindset. Always learning.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            My background is in engineering, and I enjoy solving technical
            problems, learning new technologies, and building useful projects.
            This portfolio documents the projects and skills I develop along
            the way.
          </p>

        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Technologies & Tools
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">

            {[
              "Engineering",
              "Git & GitHub",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}

          </div>

        </div>
      </section>
      {/* Experience */}
      <section
        id="experience"
        className="border-t border-zinc-800 bg-zinc-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Professional Experience
          </h2>

          <div className="mt-12 space-y-6">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>
                  <h3 className="text-xl font-semibold">
                    Electrical Designer
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    Powerhaus
                  </p>
                </div>

                <p className="text-sm text-zinc-500">
                  Ontario, Canada
                </p>

              </div>

              <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                Electrical design and engineering work involving technical
                drawings, design documentation, coordination, and engineering
                problem solving.
              </p>
            </div>


            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>
                  <h3 className="text-xl font-semibold">
                    Engineering / Technical Experience
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    Savage Arms
                  </p>
                </div>

                <p className="text-sm text-zinc-500">
                  Ontario, Canada
                </p>

              </div>

              <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                Technical and manufacturing experience involving quality,
                engineering processes, technical documentation, and
                performance analysis.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-y border-zinc-800 bg-zinc-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Things I&apos;m Building
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">

              <p className="text-sm text-emerald-400">
                Web Development
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Git Learning Hub
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                An interactive website designed to help beginners learn Git
                through explanations, commands, examples, and practice.
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                Next.js · TypeScript · Tailwind CSS
              </p>

            </div>

            <div className="rounded-2xl border border-dashed border-zinc-700 p-8">

              <p className="text-sm text-zinc-500">
                More coming soon
              </p>

              <h3 className="mt-3 text-2xl font-bold text-zinc-400">
                Next Project
              </h3>

              <p className="mt-4 text-zinc-500">
                New engineering and software projects will be added here.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let&apos;s connect.
          </h2>

          <p className="mt-5 max-w-xl text-zinc-400">
            Interested in my work or want to discuss a project? Feel free to
            reach out.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-500">
          © 2026 Adeeb. Built with Next.js.
        </div>
      </footer>

    </main>
  );
}
