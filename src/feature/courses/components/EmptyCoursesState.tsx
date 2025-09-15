import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Clock, Heart, Star } from "lucide-react";

function EmptyCoursesState() {
  const suggestedCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "Sarah Johnson",
      thumbnail: "/react-course-thumbnail.jpg",
      duration: "12 hours",
      rating: 4.8,
      price: "Free",
      level: "Beginner",
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      instructor: "Mike Chen",
      thumbnail: "/javascript-course-thumbnail.png",
      duration: "8 hours",
      rating: 4.9,
      price: "$29.99",
      level: "Beginner",
    },
    {
      id: 3,
      title: "UI/UX Design Basics",
      instructor: "Emma Davis",
      thumbnail: "/placeholder-m3v4t.png",
      duration: "10 hours",
      rating: 4.7,
      price: "$39.99",
      level: "Beginner",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          My Courses
        </h1>
        <p className="text-muted-foreground text-pretty">
          Start your learning journey by enrolling in your first course
        </p>
      </div>

      {/* Empty State */}
      <Card className="text-center py-12">
        <CardContent>
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {
              "You haven't enrolled in any courses yet. Browse our catalog and start learning something new today!"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Browse All Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent"
            >
              <Star className="h-5 w-5" />
              View Popular Courses
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Suggested Courses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">
            Recommended Courses for Beginners
          </CardTitle>
          <CardDescription className="text-pretty">
            Start with these highly-rated courses perfect for new learners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {suggestedCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 left-2 bg-primary">
                    {course.level}
                  </Badge>
                  <Badge className="absolute top-2 right-2 bg-green-600">
                    {course.price}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-balance mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        Enroll Now
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default EmptyCoursesState;
