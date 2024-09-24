"use client";
import Link from "next/link";
import { Categories } from "../categories/categories";
import React from "react";
import Cart from "@/components/Cart";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="bg-black">
      <nav>
        <h1>
          <Link href="http://localhost:3000" className="color-white">
            Home
          </Link>
          <Categories />
        </h1>
        <button onClick={() => setShow(!show)}>
          <Image src={"/images.png"} width={18} height={18} alt="cart" />
        </button>
        <div
          className="cart fixed z-20 top-0 h-screen w-[250px] bg-slate-300 duration-300 p-10 shadow-md"
          style={{ right: show ? "0px" : "-250px" }}
        >
          <button onClick={() => setShow(!show)}>X</button>
          <h3>Your cart:</h3>
          <Cart />
        </div>
        <div>
          <p>Login</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
