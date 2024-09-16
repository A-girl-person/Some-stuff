import Link from "next/link";

function Header() {
  return (
    <header className="bg-black">
      <nav>
        <h1>
          <Link href="http://localhost:3000" className="color-white">
            Home
          </Link>
        </h1>
      </nav>
    </header>
  );
}

export default Header;
