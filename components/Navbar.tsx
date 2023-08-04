import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed flex flex-1 gap-5 w-full h-auto py-10 text-white/50 uppercase text-sm bg-black/50 z-10 backdrop-blur-sm">
      <Link href="#about" className="hover:text-white duration-150">
        About
      </Link>
      <Link href="#skills" className="hover:text-white duration-150">
        Skills
      </Link>
      <Link href="#projects" className="hover:text-white duration-150">
        Projects
      </Link>
      <Link href="#contact" className="hover:text-white duration-150">
        Contact
      </Link>
    </div>
  );
}
