import Link from "next/link";

export default function CoursesSection() {
  const courses = [
    {
      title: "Software Masterclass",
      subtitle: "The Ultimate Guide",
      description:
        "The essential course every mobile repair technician must master. Build a strong foundation in software repair before advancing to eMMC and UFS programming.",
      details:
        "5 Chapters | 50+ Topics | 4 Chipset Brands | Easy Hindi Language",
      cta: "Enroll Now",
      href: "/courses/software-fundamentals",
      curriculumHref: "/courses/software-fundamentals#curriculum",
      imageSrc: "/software.png",
    },
    {
      title: "eMMC & UFS Repair",
      subtitle: "Mastery Course",
      description:
        "Advanced chip-level training for technicians ready to master storage chip repair, data recovery, and replacement techniques.",
      details:
        "5 Chapters | 60+ Topics | 2 Tools Mastered | Easy Hindi Language",
      cta: "Enroll Now",
      href: "/courses/emmc-ufs-mastery",
      curriculumHref: "/courses/emmc-ufs-mastery#curriculum",
      imageSrc: "/eMMC.png",
    },
    {
      title: "The Power of Three",
      subtitle: "Complete Mobile Repair Mastery",
      description:
        "Master Software Fundamentals, eMMC, and UFS repair - all three essential skills in one comprehensive program.",
      details:
        "4 Modules | 100+ Topics | 3 Courses in One | Easy Hindi Language",
      cta: "Enroll Now",
      href: "/courses",
      curriculumHref: "/courses#curriculum",
      bgColor: "",
      borderColor: "border-red-600",
      imageSrc: "/power.png",
    },
  ];

  return (
    <section className="bg-[#F6E3C3] text-black py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Comprehensive Courses
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-[#1C1C1C] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={course.imageSrc}
                alt={course.title}
                className="relative w-full object-cover "
              />
              {/* <div className="relative h-40 sm:h-48 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600"></div> */}
              <div className="p-6 sm:p-8">
                <h4 className="text-lg font-bold text-gray-300 mb-1">
                  {course.subtitle}
                </h4>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  {course.description}
                </p>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                  {course.details}
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href={course.href}
                    className={`bg-red-600 hover:bg-red-700 transition-colors w-full py-3 font-bold text-sm sm:text-base text-center rounded-lg`}
                  >
                    {course.cta}
                  </Link>
                  <Link
                    href={course.curriculumHref}
                    className={`border border-red-600 text-white text-center py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200`}
                  >
                    View Curriculum Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
