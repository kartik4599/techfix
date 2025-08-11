import CourseCard from "./CourseCard";

const courses = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCL8xPb3b6iKcFsD0Nn5kcnOXkX3OrkgbFLUO57xv9NcYhJpE2KOs3f4ZHHx_yVQvBmp02BGAtBpNjP6IqPovWkmH862R9DKZQfO4hMoQIFMSbkePR3cqCCeJwVaRb_rQH8er5tsSPc6cwUoVVJN2lbHZng9b-xQl1TjLyguSZ3-jr1OkPL4fbrZoIgkt1o-GgmFXQJCiQyE7N8HnAshdu2Ab7NQTlQ-X8s5pt-LSLJoJ4_Eb-Mz35S02EFa0GJ0qtZ5C5heqwoheU",
    title: "Mobile Repairing Fundamentals",
    description:
      "Learn the basics of mobile device repair, including component identification, disassembly, and reassembly.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwErvhh_4pOdO73XXGe-fTpAefs8F1R3IMrJsAdcIAX5Q-YDOq5OfXtOoHP07zCTvzxvu3Z96EPSdLRFV7NX05qcSL6XcDw_8fM5eH-eeprHE-OqO7THzSCm_s0bX-qwUgzfuM-zn5NaKRGyAR9J7fcTGT2GbQr5Nv70qGrgnwvR7-uXfHPU0M52_pWd66rL9SRO10eHanaWRmyAmNw1ISUcKCzzZj92_DeZMdEirpK3-8C8SX_hn34Cvu9yAcwR7e9ApQp6cjr-I",
    title: "Advanced Micro-Soldering Techniques",
    description:
      "Master advanced micro-soldering techniques for repairing complex circuit board issues in mobile devices.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGjaZY5ZcceKJzU3f0yZhtxTFDhOAWqNznMTOBahyeWQI1prLH3qOfRWCme89p5fFtKCvWvsaCn_igqBBoHvlBgR1rrQO8A8AQ4eb-sWtJRzVnX7Eka-4-QcdtsgTN9_mjJFPHFySpC619OesL8wGotisU6cS8BCe9JIzzV9KvsVJmqIOT-e7a3KASKw4P3SkVqA7uThyyXjHePHijOx7xMf_MBcUV0He7iSRT_fX5O_HLA5bGkp5xeB0a0vwgbHeUiMcrbjd8PMM",
    title: "Smartphone Diagnostics and Troubleshooting",
    description:
      "Develop expertise in diagnosing and troubleshooting hardware and software problems in smartphones.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyi3AfOGufr24WjvXruiA1_wLmjJCbqdSSt3ZzmqI_TCLqCH_m5VYA4fG233eX-Bc7_WhTczinC1uSXKjz1srNC0Xo9rxw4zHBEKGy48ju_IqiuYeTtbiud7P_NwHtHssCd43O2Mx25UOUV4IQq_6SKtP7Sc45G6pCaPm9myVVJNjrEQgaRLtV0spKB5HK1YEnQmWk-ulfKfdGT2tUbz9J0G8myOcgaMBYeRk-rsnULvIWEu4UcsosQcz-gkHVQrQYORcaWg_RBBI",
    title: "Tablet Repair and Maintenance",
    description:
      "Gain skills in repairing and maintaining tablets, covering common issues and advanced repair methods.",
  },
];

export default function CoursesPage() {
  return (
    <section className="px-4 md:px-10 py-8">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-[28px] font-bold text-center pb-3">
          Explore Our Comprehensive Mobile Repair Courses
        </h2>
        <p className="text-center text-base text-[#111b0e] dark:text-white">
          Unlock the secrets of mobile device repair with our comprehensive
          courses. From basic troubleshooting to advanced micro-soldering.
        </p>

        <h3 className="text-[22px] font-bold mt-6">All Courses</h3>

        {/* Category Dropdown */}
        <div className="flex flex-wrap gap-4 py-3">
          <select className="rounded-xl border border-[#d6e6d1] bg-[#f9fbf8] dark:bg-[#111b0e] dark:border-[#1f291d] p-3 text-base">
            <option>Select Category</option>
            <option>Beginner</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center py-4">
          <button className="rounded-full bg-[#eaf3e8] px-4 py-2 text-sm font-bold text-[#111b0e] dark:bg-[#1f291d] dark:text-white">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
