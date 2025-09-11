import { courses } from "@/lib/data";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Our Courses - AR Education",
  description:
    "Master mobile repair with our comprehensive courses: Software, eMMC/UFS, and The Power of Three.",
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string | string[] | undefined }>;
}) {
  const id = (await params)?.id;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link
            href="/courses"
            className="text-[#E63946] hover:underline font-medium"
          >
            ← Back to All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] text-white font-inter min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#E63946]/90 to-[#FF3B3F]/80 rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12">
            <div className="flex justify-center">
              <img
                src={course.imageSrc}
                alt={course.title}
                className="w-72 sm:w-80 h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300"
              />
            </div>
            <div>
              <span className="inline-block bg-black/30 text-white text-xs sm:text-sm px-3 py-1 rounded-full mb-4">
                {course.level}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">
                {course.title}
              </h1>
              <h2 className="text-xl sm:text-2xl text-yellow-300 font-semibold mb-5">
                {course.subtitle}
              </h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                {course.description}
              </p>
              <button className="bg-black/80 hover:bg-black text-white font-bold py-3 px-6 rounded-xl shadow-lg transition transform hover:scale-105">
                {course.cta}
              </button>
            </div>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Duration", value: course.duration },
            { label: "Language", value: course.language },
            { label: "Certificate", value: course.certificate },
            { label: "Price", value: course.price },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#1C1C1C] rounded-xl p-5 text-center shadow-lg"
            >
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-lg font-bold text-white mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* What You'll Learn */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
            What You’ll Learn
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {course.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] p-4 rounded-lg flex items-start gap-3 shadow-md hover:shadow-xl transition"
              >
                <span className="text-[#E63946] text-lg">✔</span>
                <p className="text-gray-300">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Covered */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
            Tools You’ll Master
          </h2>
          <div className="flex flex-wrap gap-3">
            {course.toolsCovered.map((tool, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 px-5 py-2 rounded-full text-sm shadow hover:scale-105 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Curriculum (Accordion Style) */}
        <section className="mb-14" id="curriculum">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
            Curriculum
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {course.curriculum.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-[#1C1C1C] rounded-xl shadow-md border-b-0"
              >
                <AccordionTrigger className="hover:no-underline p-5 text-lg font-semibold">
                  <span className="text-left flex-1">
                    {item.chapter || item.module}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0">
                  {item.description && (
                    <p className="text-gray-400 mb-3">{item.description}</p>
                  )}
                  {item.topics && (
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {item.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Prerequisites */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
            Prerequisites
          </h2>
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-5 rounded-lg flex items-start gap-3">
            <span className="text-yellow-400">⚡</span>
            <p className="text-gray-200">{course.prerequisites}</p>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-[#E63946] to-[#FF3B3F] rounded-3xl shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
            Join <strong>{course.title}</strong> today and start your journey to
            becoming a certified expert.
          </p>
          <button className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition transform hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
