import { courses } from "@/lib/data";
import Link from "next/link";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-xl mb-8 sm:mb-12">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 sm:p-8 flex items-center justify-center bg-gradient-to-br from-[#E63946] to-[#FF3B3F]">
              <img
                src={course.imageSrc}
                alt={course.title}
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 p-6 sm:p-8">
              <span className="inline-block bg-gray-800 text-gray-300 text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
                {course.level}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
                {course.title}
              </h1>
              <h2 className="text-xl sm:text-2xl text-[#E63946] font-bold mb-4">
                {course.subtitle}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {course.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
                <div>
                  <strong>Duration:</strong> {course.duration}
                </div>
                <div>
                  <strong>Language:</strong> {course.language}
                </div>
                <div>
                  <strong>Certificate:</strong> {course.certificate}
                </div>
                <div>
                  <strong>Price:</strong>{" "}
                  <span className="text-yellow-400 font-bold">
                    {course.price}
                  </span>
                </div>
              </div>
              <button className="mt-6 bg-[#E63946] hover:bg-[#FF3B3F] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                {course.cta}
              </button>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 border-b border-gray-700 pb-2">
            What You’ll Learn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#E63946] mt-1">✅</span>
                <p className="text-gray-300">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Covered */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 border-b border-gray-700 pb-2">
            Tools You’ll Master
          </h2>
          <div className="flex flex-wrap gap-3">
            {course.toolsCovered.map((tool, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="mb-10 sm:mb-16" id="curriculum">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 border-b border-gray-700 pb-2">
            Curriculum
          </h2>
          <div className="space-y-6">
            {course.curriculum.map((item, idx) => (
              <div key={idx} className="bg-[#1C1C1C] p-5 rounded-xl">
                <h3 className="text-lg font-bold mb-3">
                  {item.chapter || item.module}
                </h3>
                {item.description && (
                  <p className="text-gray-400 mb-3">{item.description}</p>
                )}
                {item.topics && (
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                    {item.topics.map((topic, tIdx) => (
                      <li key={tIdx}>{topic}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 border-b border-gray-700 pb-2">
            Prerequisites
          </h2>
          <p className="text-gray-300 bg-[#1C1C1C] p-4 rounded-lg">
            {course.prerequisites}
          </p>
        </section>

        {/* CTA */}
        <div className="text-center py-8 sm:py-12 bg-[#1C1C1C] rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Ready to Master Mobile Repair?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join {course.title} today and start your journey to becoming a
            certified mobile repair expert.
          </p>
          <button className="bg-[#E63946] hover:bg-[#FF3B3F] text-white font-bold py-3 px-8 sm:px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
