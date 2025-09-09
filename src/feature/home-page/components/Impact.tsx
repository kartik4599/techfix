const Impact = () => {
  return (
    <section className="bg-[#1C1C1C] text-white rounded-2xl p-8 sm:p-12 md:p-16 my-12 sm:my-16 md:my-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
        {[
          { number: "2,000+", text: "Students Trained" },
          { number: "95%", text: "Course Completion Rate" },
          { number: "85%", text: "Students Start Their Own Business" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="hover:scale-105 transition-transform duration-300"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E63946] mb-2 sm:mb-4">
              {stat.number}
            </p>
            <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
