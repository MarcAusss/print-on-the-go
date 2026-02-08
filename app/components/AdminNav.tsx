import Image from "next/image";
import Link from "next/link";

export default function AdminNav() {
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
          <Link
            href="/"
            className="border border-black rounded-md px-5 py-2"
          >
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
}
