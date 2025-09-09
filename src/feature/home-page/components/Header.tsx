import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 md:py-6">
      <div className="text-xl sm:text-2xl font-bold font-poppins">
        <span className="text-[#E63946]">AR</span> <span>EDUCATION</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
        <Link className="hover:text-[#E63946] transition-colors" href="/">
          Home
        </Link>
        <Link className="hover:text-[#E63946] transition-colors" href="/tools">
          Our Tools
        </Link>
        <Link
          className="hover:text-[#E63946] transition-colors"
          href="/courses/software-fundamentals"
        >
          Software Masterclass
        </Link>
        <Link
          className="hover:text-[#E63946] transition-colors"
          href="/courses/emmc-ufs-mastery"
        >
          eMMC & UFS Masterclass
        </Link>
        <Link
          className="hover:text-[#E63946] transition-colors"
          href="/courses"
        >
          Power of Three
        </Link>
        <Link className="hover:text-[#E63946] transition-colors" href="/videos">
          Video Guides
        </Link>
        <Link
          className="hover:text-[#E63946] transition-colors"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <Button className="bg-white text-black rounded-md px-4 py-2 md:px-6 md:py-3 font-bold hover:bg-gray-200 transition-colors text-sm md:text-base">
        Login
      </Button>
    </header>
  );
}
