import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 text-gray-900 font-inter min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="container mx-auto max-w-2xl text-center">
        {/* Logo/Header */}
        <div className="mb-8">
          <div className="text-3xl sm:text-4xl font-bold font-poppins inline-flex items-center gap-2 justify-center">
            <span className="text-[#E63946]">AR</span>
            <span>EDUCATION</span>
          </div>
        </div>

        {/* Under Construction Card */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-200">
          <div className="mb-6">
            <div className="text-6xl mb-4">🚧</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Dashboard Under Construction
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We’re working hard to build your personalized learning dashboard.
              <br />
              Come back soon to track your progress, access courses, and more!
            </p>
          </div>

          {/* Decorative Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-[#E63946] h-3 rounded-full animate-pulse"
              style={{ width: "65%" }}
            ></div>
          </div>

          {/* CTA Button */}
          <Link
            href="/courses"
            className="inline-block bg-[#E63946] hover:bg-[#FF3B3F] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Explore Courses While You Wait
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AR Education. All rights reserved.
        </div>
      </div>
    </div>
  );
}
