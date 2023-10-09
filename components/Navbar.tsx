"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavbarOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center lg:hidden">
      {NavLinks.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 cursor-pointer animation-hover  
          relative text-primary-light  hover:text-primary-light"
        >
          {link.text}
        </Link>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState("Home");
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-opacity-100 bg-[#ffff]">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 mt-1">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-primary-dark font-semibold"
        >
          A.SHUKS
        </Link>

        <div className="hidden md:block md:w-auto">
          <ul className="flex p-4 md:mt-5 md:p-0 md:flex-row md:space-x-8">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`px-4 py-2 mx-2 animation-hover inline-block relative  font-semibold  ${
                  activeLink === link.key
                    ? "text-primary-dark animation-active font-bold cursor-default"
                    : "text-primary-light hover:text-primary-extralight cursor-pointer"
                }`}
                onClick={() => setActiveLink(link.key)}
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-primary-light text-primary-light
               hover:text-primary-light hover:border-primary-light"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-primary-light text-primary-light
               hover:text-primary-light hover:border-primary-light"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen && <NavbarOverlay />}
    </nav>
  );
};

export default Navbar;
