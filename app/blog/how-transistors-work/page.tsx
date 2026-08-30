import BlogPostLayout from "@/components/blog/BlogPostLayout";

export default function HowTransistorsWork() {
  return (
    <BlogPostLayout
      title="How Transistors Work"
      description="A visual introduction to one of the most important building blocks in modern electronics."
      category="Electronics"
      date="Coming Soon"
    >

      <section>
        <h2 className="text-3xl font-bold text-white">
          What is a transistor?
        </h2>

        <p className="mt-4">
          A transistor is a semiconductor device that can control the flow
          of electrical current. It can be used as a switch, an amplifier,
          and as a fundamental building block of digital electronics.
        </p>
      </section>


      <section>
        <h2 className="text-3xl font-bold text-white">
          Why are transistors important?
        </h2>

        <p className="mt-4">
          Modern processors contain billions of transistors. By switching
          electrical signals on and off extremely quickly, these devices
          allow computers to perform calculations and process information.
        </p>
      </section>


      <section>
        <h2 className="text-3xl font-bold text-white">
          Interactive visualization
        </h2>

        <div className="mt-6 flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900">

          <p className="text-zinc-500">
            Interactive transistor animation coming here.
          </p>

        </div>
      </section>

    </BlogPostLayout>
  );
}