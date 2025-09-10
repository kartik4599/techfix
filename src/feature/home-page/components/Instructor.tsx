const Instructor = () => {
  return (
    <section id="instructor" className="py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Meet Your Trainer
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Learn from industry experts who have trained thousands of
              successful technicians. Our instructors specialize in firmware,
              software, eMMC, and UFS repair.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#E63946] to-[#FF3B3F] rounded-full flex items-center justify-center text-white font-bold text-4xl sm:text-5xl md:text-6xl shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src={"https://areducation.co.in/Untitled-2.png"}
                alt={""}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
