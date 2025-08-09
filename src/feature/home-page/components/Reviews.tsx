import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Reviews() {
  const reviews = [
  {
    name: "Michael Rodriguez",
    date: "2023-08-15",
    rating: 5,
    review: `"The Basic Mobile Repair course was exactly what I needed to start my own repair business. The instructors were knowledgeable and the hands-on labs were invaluable."`,
    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc29wJTpWFthnuy-moDfb0q1NGmkbqpM-m8SMkZGxRDl-h9CG1kD9Ds5fRnsbePOVXAsEO4WPq8mI3fayBn4IRcKLQlLftrjwr8mRbVlRm1sFUgueOnVOCeeurE7Z9VpL8lNva2_B6a-gGUQi6OJIcsUTvapN7R386_xsoLOe04K_gsnMi-_Z80LGg1HiaUL7143wxMG_swh4yefTU0yb6GGtl3wgIl8WhtCd6KVnjjjENNfJy4_20cRs9YhOWqDeUFQr3TKazJQU", // Replace
    avatarAlt: "Michael Rodriguez",
    likes: 15,
    dislikes: 1,
  },
  {
    name: "Olivia Bennett",
    date: "2023-09-22",
    rating: 5,
    review: `"I took the Advanced Smartphone Repair course and it exceeded my expectations. The course content was up-to-date and the practical sessions were very helpful. Highly recommended!"`,
    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPJki9blOTRGh2HgLBTl3NtlI2DjdSMo9Z29T5ssoL8uqNQwUDTleQpse2aD9Z-T6N5h8xnLKNKbd_QYMGua60f2_j4uwrOuYiOx05dgS5RBwm2QQ_WZfhjXUaK4ABVZxq24EfegxU2f3-mgIK8l__c8SntMPzzzdQnJZQrPRTkKPaAxV6QYAiKz0eNvhLBHOmV-o2azjDzgoMuiiYQB1fQsXE6EAzG7DFhMACvL4vzDDETVQBwIra3SJhsryCZt8xFLNhJEen3Dk", // Replace
    avatarAlt: "Olivia Bennett",
    likes: 12,
    dislikes: 2,
  },
  {
    name: "Lucas Harper",
    date: "2023-10-10",
    rating: 5,
    review: `"The Micro Soldering Techniques course was challenging but incredibly rewarding. I now feel confident tackling complex board-level repairs. Great instructors!"`,
    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbbdmz9-vyPkKp_RymszdLC1tkzaSe3Amtjfkr9ljiMgFq5Jgyqyq6vl5LoXtTxLZOA2c0-j549g4T-hseNYuhWj3cYJfduCrx2NtZjtLKsnOQfML2deB3FTV51IAwnh4o3rS4ym0HC2A0RvSg_NVPii2eVcd7ETaKSGvZq712r7sBT44eYzU8rT8G5n1tMNkSvTSdg81jw7P7EojxlJAp0cKzhHGis8DS-ppH5yGTjBdNzhk4B7BUYbS48DrsQR2g-kVEgZetQ-Q", // Replace or use a default
    avatarAlt: "Lucas Harper",
    likes: 8,
    dislikes: 0,
  },
];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Student Reviews</h2>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <Card key={r.name} className="bg-[#f9fbf8] h-fit">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center gap-3">
                <div
                  className="size-10 sm:size-12 rounded-full bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${r.avatarSrc})` }}
                />
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base truncate">{r.name}</p>
                  <p className="text-xs sm:text-sm text-[#629550]">{r.date}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm sm:text-base leading-relaxed">{r.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
