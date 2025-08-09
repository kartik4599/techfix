import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="flex min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] flex-col gap-4 sm:gap-6 bg-cover bg-center items-center justify-center p-4 sm:p-6 lg:p-8 text-center rounded-xl mx-4 sm:mx-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYM5U5G2HjinQKe2h7tcDMViqKU8fS9t33C_F4aacwvcSFu2jEBdx_m3RDpq4ZXTkbfUU462rtid0tFxtcFr1oQjOtnMZfUGXnl94sPFzqR_7Cn0rNJQn6H9Qi_OYBfyGsj_jfG4UH783fl4takhv8FYnuNapGopfI1jVTsztaLQ29WRRBz_wBq3bkuVelr0r_M6Cm_nMGUdYRkVlwb_3VtTUOfPjS3f2f_cFxLwOcwc6fHiQbWQGX7mXMzJy3SMM1cf2MMBoxXaM")',
      }}
    >
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-tight px-2">
        Master Mobile Repair Skills
      </h1>
      <p className="text-white max-w-2xl text-sm sm:text-base px-2">
        Unlock your potential in the booming mobile repair industry with our
        comprehensive courses. Learn from industry experts and gain hands-on
        experience.
      </p>
      <Button className="bg-[#a1ee87] text-[#111b0e] rounded-full font-bold text-sm sm:text-base px-6 sm:px-8">
        Enroll Now
      </Button>
    </section>
  );
}
