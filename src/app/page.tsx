import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mobile Repairing Course - Turn Your Skills into a Career in 30 Days",
  description:
    "Learn smartphone repairing from industry experts through practical, hands-on training. Whether you're a beginner or looking to upgrade your skills, become a certified mobile technician in 30 days!",
  keywords: [
    "mobile repairing",
    "smartphone repair course",
    "mobile technician training",
    "phone repair certification",
    "mobile repair business",
    "micro soldering course",
    "screen replacement training",
    "mobile diagnostic course",
  ],
  authors: [{ name: "Mobile Repair Academy" }],
  creator: "Mobile Repair Academy",
  publisher: "Mobile Repair Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Mobile Repair Academy",
    title:
      "Mobile Repairing Course - Turn Your Skills into a Career in 30 Days",
    description:
      "Learn smartphone repairing from industry experts through practical, hands-on training. Become a certified mobile technician and start your repair business.",
    images: [
      {
        url: "https://your-domain.com/mobile-repair-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Repair Academy - Professional Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mobile_repair_academy",
    creator: "@mobile_repair_academy",
    title:
      "Mobile Repairing Course - Turn Your Skills into a Career in 30 Days",
    description:
      "Learn smartphone repairing from industry experts through practical, hands-on training. Become a certified mobile technician in 30 days!",
    images: ["https://your-domain.com/mobile-repair-twitter.jpg"],
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  category: "education",
  classification: "Technical Training",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// app/page.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#111111] text-white font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-4 md:py-6">
          <div className="text-xl sm:text-2xl font-bold font-poppins">
            <span className="text-[#E63946]">MOBILE</span>{" "}
            <span>REPAIRING</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
            <a className="hover:text-[#E63946] transition-colors" href="#">
              Offerings
            </a>
            <a className="hover:text-[#E63946] transition-colors" href="#">
              About
            </a>
            <a className="hover:text-[#E63946] transition-colors" href="#">
              Testimonials
            </a>
          </nav>
          <Button className="bg-white text-black rounded-md px-4 py-2 md:px-6 md:py-3 font-bold hover:bg-gray-200 transition-colors text-sm md:text-base">
            Login
          </Button>
        </header>

        <main>
          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row items-center py-12 sm:py-16 md:py-20 lg:py-24 gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
                Turn Your Skills into a Mobile Repairing Career in 30 Days
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
                Learn smartphone repairing from industry experts through practical, hands-on training.
                Whether you&apos;re a beginner or looking to upgrade your skills, we&apos;ll help you become a certified professional.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Button className="bg-[#E63946] hover:bg-[#FF3B3F] transition-colors rounded-md px-6 sm:px-8 py-3 sm:py-4 font-bold w-full sm:w-auto text-base sm:text-lg">
                  Join the Course
                </Button>
                <Button variant="outline" className="border-2 border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition-all rounded-md px-6 sm:px-8 py-3 sm:py-4 font-bold w-full sm:w-auto text-base sm:text-lg">
                  Watch Intro Video
                </Button>
              </div>
              <div>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">
                  FEATURED BY:
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 items-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">Apple</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">Samsung</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">Xiaomi</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">NDTV</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">TechRadar</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#E63946] to-[#FF3B3F] rounded-2xl flex items-center justify-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white opacity-20">
                  📱🔧
                </div>
              </div>
            </div>
          </section>

          {/* Courses Section */}
          <section className="bg-[#F6E3C3] text-black py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Master the Skills That Matter</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Complete Smartphone Repairing",
                    description: "From basics to advanced repairs for Android and iPhones.",
                    details: "Covers screen replacements, charging port issues, battery replacements, and common faults.",
                    cta: "Get Started",
                  },
                  {
                    title: "Advanced Micro-Soldering & Chip-Level Repair",
                    description: "Learn how to repair and replace micro components using industry-grade tools.",
                    details: "Ideal for professionals upgrading their skills.",
                    cta: "Enroll Now",
                  },
                  {
                    title: "Troubleshooting & Diagnostics Mastery",
                    description: "Master the art of quickly identifying and fixing problems.",
                    details: "Includes software diagnostics, OS repair, and firmware flashing.",
                    cta: "Start Learning",
                  },
                ].map((course, i) => (
                  <div
                    key={i}
                    className="bg-[#1C1C1C] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative h-40 sm:h-48 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600">
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">{course.title}</h3>
                      <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{course.description}</p>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{course.details}</p>
                      <Button className="bg-[#E63946] hover:bg-[#FF3B3F] transition-colors w-full py-3 font-bold text-sm sm:text-base">
                        {course.cta}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-[#F6E3C3] text-black py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Why Our Training Works</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    title: "Hands-On Training",
                    description: "Learn by doing with real devices in a fully equipped lab.",
                    icon: "🔧",
                  },
                  {
                    title: "Lifetime Access",
                    description: "Access your training videos and resources anytime.",
                    icon: "♾️",
                  },
                  {
                    title: "Industry Certification",
                    description: "Get recognized certification to boost your career.",
                    icon: "🏆",
                  },
                  {
                    title: "Expert Trainers",
                    description: "Learn from certified technicians with years of experience.",
                    icon: "👨‍🏫",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 sm:p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What You'll Learn Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">From Basics to Expert-Level Repairs</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { skill: "Hardware and software repairing", bg: "bg-[#1C1C1C]" },
                  { skill: "iPhone & Android device troubleshooting", bg: "bg-[#F6E3C3]" },
                  { skill: "LCD & touchscreen replacements", bg: "bg-[#1C1C1C]" },
                  { skill: "Battery & charging port repairs", bg: "bg-[#F6E3C3]" },
                  { skill: "Water damage restoration", bg: "bg-[#1C1C1C]" },
                  { skill: "Soldering & micro-soldering techniques", bg: "bg-[#F6E3C3]" },
                  { skill: "OS reinstallation & firmware flashing", bg: "bg-[#1C1C1C]" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.bg} ${item.bg === "bg-[#1C1C1C]" ? "text-white" : "text-black"} p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className="text-3xl sm:text-4xl text-[#E63946] mb-3 sm:mb-4">
                      ✅
                    </div>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">{item.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-[#1C1C1C] py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-white">
                What Our Students Have to Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    text: `"I started with zero knowledge and now run my own mobile repair shop. The hands-on training was incredible."`,
                    name: "Rahul S.",
                    role: "Mobile Repair Shop Owner",
                  },
                  {
                    text: `"The micro-soldering techniques I learned helped me double my income. Highly recommended!"`,
                    name: "Sneha K.",
                    role: "Professional Technician",
                  },
                  {
                    text: `"The trainers are supportive, and the lifetime access means I can always refresh my skills."`,
                    name: "Arjun P.",
                    role: "Certified Mobile Technician",
                  },
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2A2A2A] p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-[#E63946] text-lg sm:text-xl"
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{t.text}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E63946] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="font-semibold text-white text-sm sm:text-base">{t.name}</p>
                        <p className="text-xs sm:text-sm text-gray-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Impact Section */}
          <section className="bg-[#1C1C1C] text-white rounded-2xl p-8 sm:p-12 md:p-16 my-12 sm:my-16 md:my-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
              {[
                { number: "2,000+", text: "Students Trained" },
                { number: "95%", text: "Course Completion Rate" },
                { number: "85%", text: "Students Start Their Own Business" },
              ].map((stat, idx) => (
                <div key={idx} className="hover:scale-105 transition-transform duration-300">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E63946] mb-2 sm:mb-4">
                    {stat.number}
                  </p>
                  <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg">{stat.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Instructor Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
                    Meet Your Trainer – Ankit Sharma
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Ankit has over 12 years of experience in mobile repairing and has trained thousands of technicians across India. He specializes in chip-level repairs and advanced diagnostics.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#E63946] to-[#FF3B3F] rounded-full flex items-center justify-center text-white font-bold text-4xl sm:text-5xl md:text-6xl shadow-2xl hover:scale-105 transition-transform duration-300">
                    AS
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="bg-[#E63946] text-white py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20 text-center">
            <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                Start Your Journey as a Mobile Repairing Expert Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed">
                Gain the skills, confidence, and certification to start your own repair business or land a high-paying technician job.
              </p>
              <Button className="bg-white text-[#E63946] hover:bg-gray-100 hover:scale-105 transition-all duration-300 rounded-xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 font-bold text-base sm:text-lg md:text-xl shadow-lg">
                Enroll Now – Limited Seats Available
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#1C1C1C] p-6 sm:p-8 md:p-10 rounded-2xl mt-12 sm:mt-16 md:mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
              <p className="font-semibold text-sm sm:text-base">
                &copy; {new Date().getFullYear()} Mobile Repair Academy. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a href="#" className="hover:text-[#E63946] transition-colors text-sm sm:text-base">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#E63946] transition-colors text-sm sm:text-base">
                  Terms of Service
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
