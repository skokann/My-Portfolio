import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full h-auto py-10 text-white/50 gap-10 uppercase text-sm bg-black/50 z-10 backdrop-blur-sm items-center">
      <Link href="/" className="hover:text-white duration-150">
        About
      </Link>
      <Link href="/" className="hover:text-white duration-150">
        Skills
      </Link>
      <Link href="/" className="hover:text-white duration-150">
        Projects
      </Link>
      <Link href="/" className="hover:text-white duration-150">
        Contact
      </Link>
    </div>
  );
}
