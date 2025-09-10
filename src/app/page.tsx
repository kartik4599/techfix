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

import Header from "@/feature/home-page/components/Header";
import Hero from "@/feature/home-page/components/HeroSection";
import CoursesSection from "@/feature/home-page/components/Courses";
import AboutInstructor from "@/feature/home-page/components/WhyChooseUs";
import Testimonials from "@/feature/home-page/components/Testimonials";
import Impact from "@/feature/home-page/components/Impact";
import Instructor from "@/feature/home-page/components/Instructor";
import Footer from "@/feature/home-page/components/Footer";
import CalltoAction from "@/feature/home-page/components/Call-to-Action";
import LearnSection from "@/feature/home-page/components/LearnSection";
import FAQ from "@/feature/home-page/components/FAQ";

export default function Page() {
  return (
    <div className="bg-[#111111] text-white font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header />

        <main>
          <Hero />
          <CoursesSection />
          <AboutInstructor />
          <LearnSection />
          <Testimonials />
          <Impact />
          <Instructor />
          <FAQ />
          <CalltoAction />
          <Footer />
        </main>
      </div>
    </div>
  );
}
