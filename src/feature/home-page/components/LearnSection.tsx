const LearnSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            From Basics to Expert-Level Repairs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {[
            { skill: "Firmware Flashing", bg: "bg-[#1C1C1C]" },
            { skill: "Software Repair", bg: "bg-[#F6E3C3]" },
            { skill: "eMMC & UFS Replacement", bg: "bg-[#1C1C1C]" },
            { skill: "Chip-Level Repair", bg: "bg-[#F6E3C3]" },
            { skill: "Data Recovery", bg: "bg-[#1C1C1C]" },
            { skill: "Hardware Diagnostics", bg: "bg-[#F6E3C3]" },
            { skill: "Unlocking & IMEI Repair", bg: "bg-[#1C1C1C]" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} ${
                item.bg === "bg-[#1C1C1C]" ? "text-white" : "text-black"
              } p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="text-3xl sm:text-4xl text-[#E63946] mb-3 sm:mb-4">
                ✅
              </div>
              <p className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">
                {item.skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
