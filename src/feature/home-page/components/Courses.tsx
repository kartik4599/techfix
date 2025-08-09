export default function Courses() {
  
const courses = [
  {
    title: "Basic Mobile Repair",
    description: "Learn the fundamentals of mobile phone repair, including hardware and software troubleshooting.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc8gpH_6Zm_x5XJ_PUzxWt85IaFXbvPu0KaiwfUpaCxM0PnSHzUPsUAaEkSPc2B448GQROKyKYvRAAgAt_ClrkkTYcy143KgmL3RTzNaBuwQOo6KPmEAqrZQTkU6eclUEqWUDCunmUSPUOmrRlJkUSGwhApUgSxQudcSLx-thYaeULNwn2hUzULP36G_mRSyPIpd6jOQ61h3fp9zmSBEDhkb8E7URpVkV_B4yZm8cOs-xV1WyTaNcs7yUM2tVGVTcngrqTTVlgZEY", // Replace with actual image import or path
    imageAlt: "Basic Mobile Repair Course",
  },
  {
    title: "Advanced Smartphone Repair",
    description: "Master complex repairs for the latest smartphones, including screen replacement, water damage restoration, and more.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbbdmz9-vyPkKp_RymszdLC1tkzaSe3Amtjfkr9ljiMgFq5Jgyqyq6vl5LoXtTxLZOA2c0-j549g4T-hseNYuhWj3cYJfduCrx2NtZjtLKsnOQfML2deB3FTV51IAwnh4o3rS4ym0HC2A0RvSg_NVPii2eVcd7ETaKSGvZq712r7sBT44eYzU8rT8G5n1tMNkSvTSdg81jw7P7EojxlJAp0cKzhHGis8DS-ppH5yGTjBdNzhk4B7BUYbS48DrsQR2g-kVEgZetQ-Q", // Replace
    imageAlt: "Advanced Smartphone Repair Course",
  },
  {
    title: "Micro Soldering Techniques",
    description: "Develop expertise in micro soldering, essential for repairing complex circuit board issues.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYM5U5G2HjinQKe2h7tcDMViqKU8fS9t33C_F4aacwvcSFu2jEBdx_m3RDpq4ZXTkbfUU462rtid0tFxtcFr1oQjOtnMZfUGXnl94sPFzqR_7Cn0rNJQn6H9Qi_OYBfyGsj_jfG4UH783fl4takhv8FYnuNapGopfI1jVTsztaLQ29WRRBz_wBq3bkuVelr0r_M6Cm_nMGUdYRkVlwb_3VtTUOfPjS3f2f_cFxLwOcwc6fHiQbWQGX7mXMzJy3SMM1cf2MMBoxXaM", // Replace
    imageAlt: "Micro Soldering Techniques Course",
  },
];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Our Courses</h2>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <div key={c.title} className="flex flex-col gap-3 sm:gap-4">
            <div
              className="aspect-video bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${c.imageSrc})` }}
            />
            <h3 className="font-medium text-base sm:text-lg">{c.title}</h3>
            <p className="text-sm sm:text-base text-[#629550] leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
