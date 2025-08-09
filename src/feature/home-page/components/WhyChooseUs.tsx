import { Nut, Users,  TestTube, Briefcase } from "lucide-react";


export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from seasoned professionals with years of experience in the mobile repair industry.",
      icon: Users,
    },
    {
      title: "Hands-On Training",
      description:
        "Gain practical skills through extensive hands-on training and real-world repair scenarios.",
      icon: Nut,
    },
    {
      title: "Industry-Recognized Certification",
      description:
        "Earn a certification that is recognized and respected by employers in the field.",
      icon: Nut,
    },
    {
      title: "State-of-the-Art Labs",
      description:
        "Train in state-of-the-art labs equipped with the latest tools and technology.",
      icon: TestTube,
    },
    {
      title: "Career Support",
      description:
        "Receive guidance and support to help you launch your career in mobile repair.",
      icon: Briefcase,
    },
    // Add more features if needed
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Why Choose Us</h2>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col gap-3 sm:gap-4 border border-[#d6e6d1] rounded-lg p-4 sm:p-6 bg-[#f9fbf8] h-fit"
          >
            <div className="text-[#111b0e] w-6 h-6 sm:w-8 sm:h-8">
              <f.icon className="w-full h-full" />
            </div>
            <h3 className="text-base sm:text-lg font-bold leading-tight">{f.title}</h3>
            <p className="text-sm sm:text-base text-[#629550] leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
