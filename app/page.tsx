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

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Things I&apos;m Building
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            A collection of software, engineering, automation, and technology
            projects I&apos;m building while expanding my technical skills.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* Git Learning Hub */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-700">

              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-emerald-400">
                  Web Development
                </p>

                <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500">
                  In Progress
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Git Learning Hub
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                An interactive learning platform designed to help beginners
                understand Git through simple explanations, useful commands,
                examples, visual demonstrations, and hands-on exercises.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind CSS", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <span className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black">
                  Live Demo Soon
                </span>

                <span className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-400">
                  Repository Soon
                </span>
              </div>

            </article>


            {/* Future project */}
            <article className="rounded-2xl border border-dashed border-zinc-700 p-8">

              <p className="text-sm font-medium text-zinc-500">
                Next Project
              </p>

              <h3 className="mt-5 text-2xl font-bold text-zinc-400">
                More coming soon.
              </h3>

              <p className="mt-4 leading-7 text-zinc-500">
                Future projects involving engineering, electronics, automation,
                software development, and AI will appear here.
              </p>

            </article>

          </div>

        </div>
      </section>

      {/* Blog */}
      <section id="blog">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Blog
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Notes, Ideas & Visual Explainers
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            Articles exploring engineering, electronics, embedded systems,
            artificial intelligence, markets, software, and other technologies —
            supported by diagrams, animations, and interactive visualizations.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Electronics */}
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:border-zinc-700">

              <div className="mb-8 flex h-40 items-center justify-center rounded-xl bg-zinc-950">
                <span className="text-5xl">⚡</span>
              </div>

              <p className="text-sm font-medium text-emerald-400">
                Electronics
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Visual Electronics
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Understand electronic circuits and components through visual
                explanations and animations.
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                Articles coming soon →
              </p>

            </article>


            {/* Embedded Systems */}
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:border-zinc-700">

              <div className="mb-8 flex h-40 items-center justify-center rounded-xl bg-zinc-950">
                <span className="text-5xl">🔧</span>
              </div>

              <p className="text-sm font-medium text-emerald-400">
                Embedded Systems
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Hardware Meets Software
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Microcontrollers, sensors, communication protocols, firmware,
                and embedded development explained visually.
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                Articles coming soon →
              </p>

            </article>


            {/* AI */}
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:border-zinc-700">

              <div className="mb-8 flex h-40 items-center justify-center rounded-xl bg-zinc-950">
                <span className="text-5xl">🧠</span>
              </div>

              <p className="text-sm font-medium text-emerald-400">
                AI & Technology
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Understanding AI
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Exploring artificial intelligence, machine learning, modern
                software, and emerging technologies.
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                Articles coming soon →
              </p>

            </article>

          </div>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7">

            <p className="text-sm font-medium text-emerald-400">
              Markets & Trading
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Markets Through Visuals
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
              Educational explanations of market concepts, chart behavior,
              technical concepts, risk, and trading systems using visual
              examples and interactive animations.
            </p>

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
