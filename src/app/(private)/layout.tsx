"use client";

import SidebarContent from "@/feature/dashboard/components/SidebarContent";
import MobileHeader from "@/feature/dashboard/components/MobileHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen w-full">
      {/* Desktop Sidebar */}
      <div className="hidden border-r border-sidebar-border bg-sidebar md:fixed md:inset-y-0 md:left-0 md:z-10 md:block md:w-[220px] lg:w-[280px]">
        <SidebarContent />
      </div>

      <div className="flex flex-col md:pl-[220px] lg:pl-[280px]">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
