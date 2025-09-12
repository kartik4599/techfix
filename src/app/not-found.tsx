"use client";

import Link from "next/link";

// app/not-found.jsx
export default function NotFound() {
  return (
    <div className="bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1A1A1A] text-white font-inter min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#E63946] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF3B3F] rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Logo */}
        <div className="mb-12">
          <div className="text-4xl sm:text-5xl font-bold font-poppins inline-flex items-center gap-3 justify-center group">
            <span className="text-[#E63946] transform transition-transform group-hover:scale-110 duration-300">
              AR
            </span>
            <span className="transform transition-transform group-hover:scale-105 duration-300">
              EDUCATION
            </span>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E63946] to-[#FF3B3F] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-[#1C1C1C]/80 to-[#2A2A2A]/60 backdrop-blur-xl p-8 sm:p-16 rounded-3xl shadow-2xl border border-gray-700/30 mb-12 relative">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E63946]/20 via-transparent to-[#FF3B3F]/20 rounded-3xl blur-xl"></div>

          <div className="relative">
            {/* 404 Number with enhanced styling */}
            <div className="relative mb-8">
              <div className="text-9xl sm:text-[12rem] font-black mb-4 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-none">
                404
              </div>
              <div className="absolute inset-0 text-9xl sm:text-[12rem] font-black mb-4 text-[#E63946]/20 blur-sm leading-none">
                404
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#E63946] to-[#FF3B3F] bg-clip-text text-transparent">
                Oops! Page Not Found
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                {`The page you're looking for seems to have vanished into the
                digital void. Don't worry, even the best explorers sometimes
                take a wrong turn.`}
              </p>
            </div>

            {/* Status Bar */}
            <div className="bg-[#0F0F0F]/60 rounded-xl p-4 mb-8 border border-gray-700/50">
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-[#E63946] flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#E63946] rounded-full animate-pulse"></div>
                  ERROR: 404_PAGE_NOT_FOUND
                </span>
                <span className="text-gray-400">
                  {new Date().toLocaleString()}
                </span>
              </div>
              <div className="mt-3">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#E63946] to-[#FF3B3F] rounded-full animate-pulse"
                    style={{ width: "0%" }}
                  >
                    <div className="h-full bg-white/30 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/dashboard"
                className="group bg-gradient-to-r from-[#E63946] to-[#FF3B3F] hover:from-[#FF3B3F] hover:to-[#E63946] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#E63946]/30 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Dashboard
              </Link>
              <Link
                href="/courses"
                className="group border-2 border-[#E63946]/50 text-[#E63946] hover:bg-[#E63946] hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5 transform group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Explore Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Home",
              href: "/",
              icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            },
            {
              title: "Contact Support",
              href: "/support",
              icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.458c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 19.084c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z",
            },
            {
              title: "Help Center",
              href: "/help",
              icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group bg-gradient-to-br from-[#1C1C1C]/60 to-[#2A2A2A]/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30 hover:border-[#E63946]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E63946]/10 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-[#E63946]/20 rounded-xl group-hover:bg-[#E63946]/30 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#E63946]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={link.icon}
                    />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                  {link.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-10 w-4 h-4 bg-[#E63946] rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-1/3 right-16 w-3 h-3 bg-[#FF3B3F] rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-20 w-2 h-2 bg-white rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-10 w-5 h-5 border-2 border-[#E63946] rounded-full opacity-20 animate-ping"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        {/* Footer */}
        <div className="text-gray-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>
            &copy; {new Date().getFullYear()} AR Education. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/privacy"
              className="hover:text-[#E63946] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/terms"
              className="hover:text-[#E63946] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
