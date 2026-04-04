"use client";

import { navLinks, socialLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`border-b border-[#525252] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="wrapper flex justify-between items-center gap-4 h-28 py-8!">
          <div className="flex gap-20 items-center sm:justify-between w-full md:w-fit">
            <div className="font-bold shrink-0">
              <span className="text-white text-[1.8rem]">
                {"{"}
                <a
                  href="/"
                  className="text-red-600 p-4"
                  title="Solana Smart Contract Developer"
                >
                  Mercy
                </a>
                {"}"}
              </span>
            </div>
            <ul className="hidden sm:flex items-center justify-center gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${pathname === href && "text-white!"} ? } relative px-4 py-2 text-[#b6aeaa] hover:text-white transition-colors duration-200 group`}
                  >
                    {label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-red-500 group-hover:w-4/5 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-1 border border-white/15 px-4 py-2 rounded-full bg-white/3 hover:bg-white/6 transition-colors duration-200">
            {socialLinks.map(({ href, title, icon }) => (
              <a
                key={title}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 p-1.5 text-[#cccccc] hover:text-white transition-colors duration-200 rounded-md hover:bg-white/10"
                dangerouslySetInnerHTML={{ __html: icon }}
              ></a>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
          >
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-28 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-[#1b1a18] backdrop-blur-md">
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {navLinks.map(({ href, label }, i) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-2 py-3.5 text-white/70 hover:text-white text-sm border-b border-white/5 last:border-0 transition-colors duration-200 group"
                  style={{
                    transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-30 sm:hidden bg-[#1b1a18]/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="h-30" />
    </>
  );
}
