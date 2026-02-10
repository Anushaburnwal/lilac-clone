"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full h-20
          flex justify-between items-center
          px-6 md:px-12
          bg-[#FCF5EE] z-50
          transition-transform duration-300
          ${showNav ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Title */}
        <h1 className="font-medium text-lg md:text-3xl text-black">
          Dr. Maya Reynolds, PsyD
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-xl text-black">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[70%]
          bg-[#FCF5EE]
          shadow-lg z-40
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex flex-col mt-28 gap-8 text-xl px-8 text-black">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
