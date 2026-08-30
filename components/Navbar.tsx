import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <Link href="/" className="text-xl font-bold">
          Adeeb.
        </Link>

        <div className="flex gap-6 text-sm text-zinc-400">

          <Link href="/#about" className="hover:text-white">
            About
          </Link>

          <Link href="/#skills" className="hover:text-white">
            Skills
          </Link>

          <Link href="/#experience" className="hover:text-white">
            Experience
          </Link>

          <Link href="/#projects" className="hover:text-white">
            Projects
          </Link>

          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>

          <Link href="/#contact" className="hover:text-white">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}