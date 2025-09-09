export default function AboutInstructor() {
  return (
    <section className="bg-[#F6E3C3] text-black py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Why Our Training Works
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Hands-On Training",
              description:
                "Learn by doing with real devices in a fully equipped lab.",
              icon: "🔧",
            },
            {
              title: "Lifetime Access",
              description: "Access your training videos and resources anytime.",
              icon: "♾️",
            },
            {
              title: "Industry Certification",
              description: "Get recognized certification to boost your career.",
              icon: "🏆",
            },
            {
              title: "Expert Trainers",
              description:
                "Learn from certified technicians with years of experience.",
              icon: "👨‍🏫",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
