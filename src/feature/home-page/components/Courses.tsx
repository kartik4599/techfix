import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CoursesSection() {
  const courses = [
    {
      title: "Beginner Mode: Start Your Repair Journey",
      type: "FUNDAMENTALS COURSE",
      img: "/course1.jpg",
      points: [
        "Tools and safety precautions.",
        "Diagnosing common issues.",
        "Screen and battery replacements.",
        "Basic soldering techniques.",
      ],
    },
    {
      title: "Pro Mode: Master Complex Repairs",
      type: "ADVANCED COURSE",
      img: "/course2.jpg",
      points: [
        "Motherboard-level repairs.",
        "Advanced micro-soldering.",
        "Data recovery techniques.",
        "Unlocking and software issues.",
      ],
    },
  ];

  return (
    <section className="bg-[#F6E3C3] text-black rounded-lg py-20 px-6">
      <div className="text-center mb-12">
        <p className="text-[#E63946] font-semibold">OUR OFFERINGS</p>
        <h2 className="text-4xl font-bold">Courses</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <Card key={course.title} className="bg-[#1C1C1C] text-white">
            <img
              src={course.img}
              alt={course.title}
              className="h-64 w-full object-cover rounded-t-lg"
            />
            <CardHeader>
              <p className="text-sm text-[#E63946] font-semibold">
                {course.type}
              </p>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 my-6 text-gray-400">
                {course.points.map((point) => (
                  <li key={point}>✅ {point}</li>
                ))}
              </ul>
              <Button className="w-full bg-[#E63946] hover:bg-[#FF3B3F]">
                GET STARTED
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
