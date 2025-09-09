import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] p-6 sm:p-8 md:p-10 rounded-2xl mt-12 sm:mt-16 md:mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
        <p className="font-semibold text-sm sm:text-base">
          &copy; 2025 AR Education. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link
            href="https://www.youtube.com/@AR_Education_1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E63946] transition-colors text-sm sm:text-base"
          >
            YouTube
          </Link>
          <Link
            href="https://www.facebook.com/people/AR-Education/61559961613637/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E63946] transition-colors text-sm sm:text-base"
          >
            Facebook
          </Link>
          <Link
            href="https://wa.me/918484020424"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E63946] transition-colors text-sm sm:text-base"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
}
