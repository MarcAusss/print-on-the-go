import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed w-full top-0 left-0">
      <div className="justify-between flex items-center max-w-7xl mx-auto py-2">
        <Image
          src="/images/logo.jpg"
          width={50}
          height={50}
          className="rounded-full"
          alt=""
        />
        <nav className="flex items-center h-full gap-17">
          <Link href="">Contact us</Link>
          <Link
            href="/admin"
            className="border border-black rounded-md px-5 py-2"
          >
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
}
