import Navbar from "@/components/Navbar";

const categories = [
  {
    title: "Electronics",
    description:
      "Circuits, components, signals, power electronics, and electrical concepts explained visually.",
    icon: "⚡",
  },
  {
    title: "Embedded Systems",
    description:
      "Microcontrollers, sensors, communication protocols, firmware, and hardware-software integration.",
    icon: "🔧",
  },
  {
    title: "AI & Technology",
    description:
      "Artificial intelligence, machine learning, software, automation, and emerging technologies.",
    icon: "🧠",
  },
  {
    title: "Markets & Trading",
    description:
      "Educational visual explanations of markets, trading concepts, charts, risk, and trading systems.",
    icon: "📈",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Blog
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
          Learning through visual explanations.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Articles, experiments, animations, and interactive explanations
          covering engineering, electronics, embedded systems, artificial
          intelligence, software, and financial markets.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:border-zinc-600"
            >
              <div className="text-4xl">{category.icon}</div>

              <h2 className="mt-6 text-2xl font-bold">
                {category.title}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {category.description}
              </p>

              <p className="mt-8 text-sm text-emerald-400">
                Articles coming soon →
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}