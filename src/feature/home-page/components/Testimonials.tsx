const Testimonials = () => {
  return (
    <section className="bg-[#1C1C1C] py-12 sm:py-16 md:py-20 rounded-2xl my-12 sm:my-16 md:my-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-white">
          What Our Students Have to Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              text: `"I started with zero knowledge and now run my own mobile repair shop. The hands-on training was incredible."`,
              name: "Rahul S.",
              role: "Mobile Repair Shop Owner",
            },
            {
              text: `"The micro-soldering techniques I learned helped me double my income. Highly recommended!"`,
              name: "Sneha K.",
              role: "Professional Technician",
            },
            {
              text: `"The trainers are supportive, and the lifetime access means I can always refresh my skills."`,
              name: "Arjun P.",
              role: "Certified Mobile Technician",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-[#2A2A2A] p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E63946] text-lg sm:text-xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E63946] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="font-semibold text-white text-sm sm:text-base">
                    {t.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
