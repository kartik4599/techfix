"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <header className="relative border-b border-[#eaf3e8] px-4 sm:px-6 lg:px-10 py-3">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-4 text-[#111b0e]">
          <div className="size-4">
            {/* Logo SVG */}
            <svg viewBox="0 0 48 48" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.24 24L24 47.24 0.76 24 24 0.76 47.24 24ZM12.24 21h23.52L24 9.24 12.24 21Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold">TechFix Academy</h2>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button className="bg-[#a1ee87] text-[#111b0e] rounded-full font-bold">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#eaf3e8] lg:hidden z-50">
          <nav className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#a1ee87] text-[#111b0e] rounded-full font-bold mt-2">
              Enroll Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
