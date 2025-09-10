import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 md:py-6">
      <Link className="text-xl sm:text-2xl font-bold font-poppins" href="/">
        <span className="text-[#E63946]">AR</span> <span>EDUCATION</span>
      </Link>
      <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 font-medium">
        <Link className="hover:text-[#E63946] transition-colors" href="/">
          Home
        </Link>
        <Link
          className="hover:text-[#E63946] transition-colors"
          href="#courses"
        >
          Courses
        </Link>
        <Link
          className="hover:text-[#E63946] transition-colors"
          href="#testimonials"
        >
          Testimonials
        </Link>
        <Link
          className="hover:text-[#E63946] transition-colors"
          href="#instructor"
        >
          Instructor
        </Link>
        {/* <Link
          className="hover:text-[#E63946] transition-colors"
          href="/contact"
        >
          Contact
        </Link> */}
      </nav>
      <div className="flex gap-2">
        <SignedOut>
          <SignInButton>
            <Button className="bg-white text-black rounded-md px-3 py-1 font-bold hover:bg-gray-200 transition-colors text-sm ">
              Login
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="bg-transparent text-[#E63946] border-2 border-[#E63946] rounded-md px-3 py-1 font-bold hover:bg-[#E63946]/10 transition-colors text-sm ">
              Create Account
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
