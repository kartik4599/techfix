import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6">
      <div className="text-2xl font-bold">
        <span className="text-[#E63946]">MOBILE</span>{" "}
        <span className="text-foreground">REPAIRING</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8 font-medium">
        {["Offerings", "About", "Testimonials"].map((item) => (
          <Link
            key={item}
            href="#"
            className="hover:text-[#E63946] transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>
      <Button variant="secondary">Login</Button>
    </header>
  );
}
