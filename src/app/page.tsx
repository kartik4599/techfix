import Courses from "@/feature/home-page/components/Courses";
import FAQ from "@/feature/home-page/components/FAQ";
import Footer from "@/feature/home-page/components/Footer";
import Header from "@/feature/home-page/components/Header";
import HeroSection from "@/feature/home-page/components/HeroSection";
import Reviews from "@/feature/home-page/components/Reviews";
import WhyChooseUs from "@/feature/home-page/components/WhyChooseUs";

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
