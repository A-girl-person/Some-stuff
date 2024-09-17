import Link from "next/link";
import { Categories } from "./categories";
import React from "react";

function Header() {
  return (
    <header className="bg-black">
      <nav>
        <h1>
          <Link href="http://localhost:3000" className="color-white">
            Home
          </Link>
          <Categories />
        </h1>
      </nav>
    </header>
  );
}

export default Header;
