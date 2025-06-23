import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/Mode">
                  <p>Models</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Research</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Science</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>About</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;