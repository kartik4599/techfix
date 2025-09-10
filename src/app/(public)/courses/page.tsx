import { courses } from "@/lib/data";

// app/courses/page.jsx
export const metadata = {
  title: "Our Courses - AR Education",
  description:
    "Master mobile repair with our comprehensive courses: Software, eMMC/UFS, and The Power of Three.",
};

export default function CoursesPage() {
  return (
    <div className="bg-[#111111] text-white font-inter min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Master the Skills That Matter
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Choose from our industry-leading courses designed to take you from
            beginner to expert mobile repair technician.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#1C1C1C] rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 flex items-center justify-center">
                <img
                  src={course.imageSrc}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <span className="inline-block bg-gray-800 text-gray-300 text-xs sm:text-sm px-2.5 py-1 rounded mb-3 w-fit">
                  {course.level}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                  {course.title}
                </h3>
                <h4 className="text-lg sm:text-xl font-bold text-[#E63946] mb-3">
                  {course.subtitle}
                </h4>
                <p className="text-gray-300 text-sm mb-4 flex-1">
                  {course.description}
                </p>

                {/* Details Tag */}
                <div className="text-gray-400 text-xs mb-5">
                  {course.details}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={course.href}
                    className="bg-[#E63946] hover:bg-[#FF3B3F] transition-colors w-full py-3 font-bold text-sm sm:text-base text-center rounded-lg"
                  >
                    {course.cta}
                  </a>
                  <a
                    href={course.curriculumHref}
                    className="border border-gray-600 hover:border-gray-400 text-white text-center py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200"
                  >
                    View Curriculum Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-[#1C1C1C] rounded-2xl p-8 sm:p-12 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of successful technicians who have transformed
              their skills with our comprehensive training programs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#E63946] hover:bg-[#FF3B3F] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Guidance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
