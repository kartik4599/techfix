import FacilitiesSection from "@/feature/about-us/components/FacilitiesSection";
import HeroAbout from "@/feature/about-us/components/HeroAbout";
import MissionSection from "@/feature/about-us/components/MissionSection";
import StorySection from "@/feature/about-us/components/StorySection";
import TeamGrid from "@/feature/about-us/components/TeamGrid";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-10 p-4 max-w-7xl mx-auto">
      <HeroAbout />
      <StorySection />
      <MissionSection />
      <TeamGrid />
      <FacilitiesSection />
    </div>
  );
};

export default Page;
