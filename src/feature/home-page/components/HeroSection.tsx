import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center py-20 gap-10">
      <div className="md:w-1/2">
        <p className="text-[#E63946] font-semibold text-lg">
          LEARN THE SKILL OF THE FUTURE
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold my-4 leading-tight">
          Become a Mobile Repairing Expert from Scratch
        </h1>
        <p className="text-muted-foreground max-w-xl mb-8">
          Learn everything you need to know about mobile repair, from basic
          troubleshooting to complex hardware fixes.
        </p>
        <div className="flex items-center space-x-6">
          <Button className="bg-[#E63946] hover:bg-[#FF3B3F]">
            BECOME A MEMBER
          </Button>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-[#E63946]"
          >
            <PlayCircle size={40} />
            <span className="font-semibold text-lg">Watch Video</span>
          </a>
        </div>
        <div className="mt-12">
          <p className="text-muted-foreground text-lg font-semibold mb-4">
            FEATURED ON:
          </p>
          <div className="flex flex-wrap gap-8">
            {["iFixit", "GSMArena", "TechCrunch", "The Verge"].map((brand) => (
              <p key={brand} className="text-2xl font-bold">
                {brand}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/hero-image.jpg"
          alt="Mobile Repairing"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
