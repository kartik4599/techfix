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
        url: "https://areducation.co.in/Untitled-2.png",
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
    images: ["https://areducation.co.in/Untitled-2.png"],
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
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#111111] text-white font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-4 md:py-6">
          <div className="text-xl sm:text-2xl font-bold font-poppins">
            <span className="text-[#E63946]">AR</span> <span>EDUCATION</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
            <Link className="hover:text-[#E63946] transition-colors" href="/">
              Home
            </Link>
            <Link
              className="hover:text-[#E63946] transition-colors"
              href="/tools"
            >
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
            <Link
              className="hover:text-[#E63946] transition-colors"
              href="/videos"
            >
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

        <main>
          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row items-center py-12 sm:py-16 md:py-20 lg:py-24 gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
                Not Just Repairing : <br />
                Becoming a Pro
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
                From firmware flashing to eMMC & UFS replacements, AR Education
                teaches you everything you need to become a professional mobile
                repair expert.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Button className="bg-[#E63946] hover:bg-[#FF3B3F] transition-colors rounded-md px-6 sm:px-8 py-3 sm:py-4 font-bold w-full sm:w-auto text-base sm:text-lg">
                  Explore Our Courses
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition-all rounded-md px-6 sm:px-8 py-3 sm:py-4 font-bold w-full sm:w-auto text-base sm:text-lg"
                >
                  Power of three
                </Button>
              </div>
              <div>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">
                  FEATURED TOOLS:
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 items-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    Flash F64
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    Easyjtag plus
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    UMT Tool
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    MIPITESTER
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    Pandora
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#E63946] to-[#FF3B3F] rounded-2xl flex items-center justify-center">
                <img
                  alt="Mobile Repair Training"
                  src="/hero_image.png"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          {/* Courses Section */}
          <section className="bg-[#F6E3C3] text-black py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Our Comprehensive Courses
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Software Masterclass",
                    subtitle: "The Ultimate Guide",
                    description:
                      "The essential course every mobile repair technician must master. Build a strong foundation in software repair before advancing to eMMC and UFS programming.",
                    details:
                      "5 Chapters | 50+ Topics | 4 Chipset Brands | Easy Hindi Language",
                    cta: "Enroll Now",
                    href: "/courses/software-fundamentals",
                    curriculumHref: "/courses/software-fundamentals#curriculum",
                    imageSrc: "/software.png",
                  },
                  {
                    title: "eMMC & UFS Repair",
                    subtitle: "Mastery Course",
                    description:
                      "Advanced chip-level training for technicians ready to master storage chip repair, data recovery, and replacement techniques.",
                    details:
                      "5 Chapters | 60+ Topics | 2 Tools Mastered | Easy Hindi Language",
                    cta: "Enroll Now",
                    href: "/courses/emmc-ufs-mastery",
                    curriculumHref: "/courses/emmc-ufs-mastery#curriculum",
                    imageSrc: "/eMMC.png",
                  },
                  {
                    title: "The Power of Three",
                    subtitle: "Complete Mobile Repair Mastery",
                    description:
                      "Master Software Fundamentals, eMMC, and UFS repair - all three essential skills in one comprehensive program.",
                    details:
                      "4 Modules | 100+ Topics | 3 Courses in One | Easy Hindi Language",
                    cta: "Enroll Now",
                    href: "/courses",
                    curriculumHref: "/courses#curriculum",
                    bgColor: "",
                    borderColor: "border-red-600",
                    imageSrc: "/power.png",
                  },
                ].map((course, i) => (
                  <div
                    key={i}
                    className="bg-[#1C1C1C] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <img
                      src={course.imageSrc}
                      alt={course.title}
                      className="relative w-full object-cover "
                    />
                    {/* <div className="relative h-40 sm:h-48 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600"></div> */}
                    <div className="p-6 sm:p-8">
                      <h4 className="text-lg font-bold text-gray-300 mb-1">
                        {course.subtitle}
                      </h4>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        {course.description}
                      </p>
                      <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                        {course.details}
                      </p>
                      <div className="flex flex-col gap-3">
                        <Link
                          href={course.href}
                          className={`bg-red-600 hover:bg-red-700 transition-colors w-full py-3 font-bold text-sm sm:text-base text-center rounded-lg`}
                        >
                          {course.cta}
                        </Link>
                        <Link
                          href={course.curriculumHref}
                          className={`border border-red-600 text-white text-center py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200`}
                        >
                          View Curriculum Details
                        </Link>
                      </div>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Why Our Training Works
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    title: "Hands-On Training",
                    description:
                      "Learn by doing with real devices in a fully equipped lab.",
                    icon: "🔧",
                  },
                  {
                    title: "Lifetime Access",
                    description:
                      "Access your training videos and resources anytime.",
                    icon: "♾️",
                  },
                  {
                    title: "Industry Certification",
                    description:
                      "Get recognized certification to boost your career.",
                    icon: "🏆",
                  },
                  {
                    title: "Expert Trainers",
                    description:
                      "Learn from certified technicians with years of experience.",
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
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What You'll Learn Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  From Basics to Expert-Level Repairs
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { skill: "Firmware Flashing", bg: "bg-[#1C1C1C]" },
                  { skill: "Software Repair", bg: "bg-[#F6E3C3]" },
                  { skill: "eMMC & UFS Replacement", bg: "bg-[#1C1C1C]" },
                  { skill: "Chip-Level Repair", bg: "bg-[#F6E3C3]" },
                  { skill: "Data Recovery", bg: "bg-[#1C1C1C]" },
                  { skill: "Hardware Diagnostics", bg: "bg-[#F6E3C3]" },
                  { skill: "Unlocking & IMEI Repair", bg: "bg-[#1C1C1C]" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.bg} ${
                      item.bg === "bg-[#1C1C1C]" ? "text-white" : "text-black"
                    } p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className="text-3xl sm:text-4xl text-[#E63946] mb-3 sm:mb-4">
                      ✅
                    </div>
                    <p className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">
                      {item.skill}
                    </p>
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
                    <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                      {t.text}
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E63946] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="font-semibold text-white text-sm sm:text-base">
                          {t.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {t.role}
                        </p>
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
                <div
                  key={idx}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E63946] mb-2 sm:mb-4">
                    {stat.number}
                  </p>
                  <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg">
                    {stat.text}
                  </p>
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
                    Meet Your Trainer
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Learn from industry experts who have trained thousands of
                    successful technicians. Our instructors specialize in
                    firmware, software, eMMC, and UFS repair.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#E63946] to-[#FF3B3F] rounded-full flex items-center justify-center text-white font-bold text-4xl sm:text-5xl md:text-6xl shadow-2xl hover:scale-105 transition-transform duration-300">
                    <img
                      src={"https://areducation.co.in/Untitled-2.png"}
                      alt={""}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="bg-[#E63946] text-white py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20 text-center">
            <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed">
                Join thousands of successful technicians who have transformed
                their skills with our comprehensive training programs.
              </p>
              <Button className="bg-white text-[#E63946] hover:bg-gray-100 hover:scale-105 transition-all duration-300 rounded-xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 font-bold text-base sm:text-lg md:text-xl shadow-lg">
                Our Most Powerful Course
              </Button>
            </div>
          </section>

          {/* Footer */}
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
        </main>
      </div>
    </div>
  );
}
