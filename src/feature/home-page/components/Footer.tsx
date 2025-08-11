import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
        {[
          { name: "Courses", path: "/courses" },
          { name: "About Us", path: "/about-us" },
          { name: "Contact", path: "/contact-us" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-[#629550] text-sm sm:text-base hover:text-[#4a6e3b] transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="mt-6 sm:mt-8 text-[#629550] text-xs sm:text-sm">
        ©2024 TechFix Academy. All rights reserved.
      </p>
    </footer>
  );
}
