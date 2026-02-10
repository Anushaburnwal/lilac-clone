"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full h-20
        flex justify-between items-center px-12
        bg-[#FCF5EE] z-50
        transition-transform duration-300
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <h1 className="font-lilac font-medium text-4xl text-black">
        Dr. Maya Reynolds, PsyD
      </h1>

      <div className="font-lilac text-xl flex gap-8 text-black">
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
