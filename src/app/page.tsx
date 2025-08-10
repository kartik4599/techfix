import type { Metadata } from "next";
import Courses from "@/feature/home-page/components/Courses";
import FAQ from "@/feature/home-page/components/FAQ";
import Footer from "@/feature/home-page/components/Footer";
import Header from "@/feature/home-page/components/Header";
import HeroSection from "@/feature/home-page/components/HeroSection";
import Reviews from "@/feature/home-page/components/Reviews";
import WhyChooseUs from "@/feature/home-page/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Online Learning Platform - Master New Skills with Expert-Led Courses",
  description:
    "Transform your career with our comprehensive online courses. Learn from industry experts, get certified, and join thousands of successful learners. Start your learning journey today!",
  keywords: [
    "online learning",
    "online courses",
    "skill development",
    "professional certification",
    "e-learning platform",
    "career advancement",
    "expert instructors",
    "interactive learning",
  ],
  authors: [{ name: "Education Platform Team" }],
  creator: "Education Platform",
  publisher: "Education Platform",
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
    siteName: "Education Platform",
    title:
      "Online Learning Platform - Master New Skills with Expert-Led Courses",
    description:
      "Transform your career with our comprehensive online courses. Learn from industry experts, get certified, and join thousands of successful learners.",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Education Platform - Online Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter",
    creator: "@your_twitter",
    title:
      "Online Learning Platform - Master New Skills with Expert-Led Courses",
    description:
      "Transform your career with our comprehensive online courses. Learn from industry experts, get certified, and join thousands of successful learners.",
    images: ["https://your-domain.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  category: "education",
  classification: "Educational Technology",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function Home() {
  return (
    <main className="bg-[#f9fbf8] min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col gap-10 p-4 max-w-7xl mx-auto">
        <HeroSection />
        <WhyChooseUs />
        <Courses />
        <Reviews />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
