export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
        {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map(
          (link) => (
            <a
              key={link}
              href="#"
              className="text-[#629550] text-sm sm:text-base hover:text-[#4a6e3b] transition-colors duration-200"
            >
              {link}
            </a>
          )
        )}
      </div>
      <p className="mt-6 sm:mt-8 text-[#629550] text-xs sm:text-sm">
        ©2024 TechFix Academy. All rights reserved.
      </p>
    </footer>
  );
}
