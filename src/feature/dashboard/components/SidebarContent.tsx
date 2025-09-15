import Link from "next/link";
import { Home, BookOpen, Heart, Award, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

const sidebarItems = [
  { icon: Home, label: "Overview", href: "/dashboard" },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
  { icon: Heart, label: "Wishlist", href: "/dashboard/wishlist" },
  { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
  { icon: Settings, label: "Profile Settings", href: "/dashboard/settings" },
];

const SidebarContent = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b border-sidebar-border px-4 lg:h-[60px] lg:px-6">
        <Link
          href="/dashboard"
          className="flex items-center text-2xl font-mono gap-2 font-semibold"
        >
          <span className="text-[#E63946]">AR</span> <span>EDUCATION</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : ""
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <SignOutButton>
          <Button
            variant="outline"
            className="w-full justify-start gap-2 bg-transparent"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default SidebarContent;
