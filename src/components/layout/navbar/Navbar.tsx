import { SignInButton } from "@/components/buttons/buttons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white p-5">
      <div>
        <Link href="/" className="no-underline">
        <h1 className="text-lg">NextSpace</h1>

        </Link>
      </div>
      <div>
        <ul className="flex gap-5 list-none">
          <li>
            <Link href="/about" className="no-underline">About</Link>
          </li>
          <li>
            <Link href="/blog" className="no-underline">Blog</Link>
          </li>
          <li>
            <Link href="/users" className="no-underline">Users</Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
