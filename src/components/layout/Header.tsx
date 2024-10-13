import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-16 px-4 sm:px-6 sm:w-[80%] mx-auto flex items-center justify-between flex-wrap bg-slate-200">
      <h1 className="text-2xl sm:text-3xl font-bold mx-auto sm:mx-0">Logo</h1>
      <ul className="flex gap-3 sm:gap-6 items-center">
        <li className="text-lg font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="text-lg font-medium">
          <Link href="/#about">About</Link>
        </li>
        <li className="text-lg font-medium">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
