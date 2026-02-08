import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed w-full top-0 left-0 bg-white shadow z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            width={50}
            height={50}
            className="rounded-full"
            alt="Logo"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8 text-sm md:text-base">
          <Link
            href="#contact"
            className="hover:text-red-600 transition-colors"
          >
            Contact Us
          </Link>

          <Link
            href="/admin"
            className="border border-black rounded-md px-4 md:px-5 py-2 hover:bg-black hover:text-white transition-colors"
          >
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
}
