import { Button } from "@/components/ui/button";
import React from "react";

const CalltoAction = () => {
  return (
    <section className="bg-[#E63946] text-white py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20 text-center">
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
          Ready to Start Your Journey?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 opacity-90 max-w-4xl mx-auto leading-relaxed">
          Join thousands of successful technicians who have transformed their
          skills with our comprehensive training programs.
        </p>
        <Button className="bg-white text-[#E63946] hover:bg-gray-100 hover:scale-105 transition-all duration-300 rounded-xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 font-bold text-base sm:text-lg md:text-xl shadow-lg">
          Our Most Powerful Course
        </Button>
      </div>
    </section>
  );
};

export default CalltoAction;
