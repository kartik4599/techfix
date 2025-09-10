import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center py-12 sm:py-16 md:py-20 lg:py-24 gap-8 lg:gap-12">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Not Just Repairing : <br />
          Becoming a Pro
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
          From firmware flashing to eMMC & UFS replacements, AR Education
          teaches you everything you need to become a professional mobile repair
          expert.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Link
            href="#courses"
            className="bg-[#E63946] hover:bg-[#FF3B3F] transition-colors rounded-md px-6 sm:px-8 py-3 sm:py-4 font-bold w-full sm:w-auto text-base sm:text-lg"
          >
            Explore Our Courses
          </Link>
          <Link
            href="/sign-in"
            className="bg-transparent border border-[#E63946] text-[#E63946] transition-colors rounded-md px-6 sm:px-8 py-3 sm:py-4 font-bold w-full sm:w-auto text-base sm:text-lg"
          >
            Power of three
          </Link>
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
            <p className="text-lg sm:text-xl md:text-2xl font-bold">UMT Tool</p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">
              MIPITESTER
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">Pandora</p>
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
  );
}
