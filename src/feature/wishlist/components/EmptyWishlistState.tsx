import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Heart, Star } from "lucide-react";

function EmptyWishlistState() {
  const popularCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      price: "$69.99",
      originalPrice: "$99.99",
      discount: 30,
      thumbnail: "/react-course-thumbnail.jpg",
      duration: "14 hours",
      rating: 4.9,
      studentsCount: 15600,
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      instructor: "Alex Rodriguez",
      price: "$49.99",
      originalPrice: "$79.99",
      discount: 37,
      thumbnail: "/nodejs-course-thumbnail.jpg",
      duration: "10 hours",
      rating: 4.6,
      studentsCount: 12500,
    },
    {
      id: 3,
      title: "TypeScript Mastery",
      instructor: "Lisa Wang",
      price: "$39.99",
      originalPrice: "$59.99",
      discount: 33,
      thumbnail: "/typescript-course-thumbnail.png",
      duration: "6 hours",
      rating: 4.8,
      studentsCount: 8900,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          My Wishlist
        </h1>
        <p className="text-muted-foreground text-pretty">
          Save courses you want to take later
        </p>
      </div>

      {/* Empty State */}
      <Card>
        <CardContent className="p-12 text-center">
          <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start building your learning wishlist! Browse courses and save the
            ones you want to take later.
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

      {/* Popular Courses to Add */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Popular Courses You Might Like
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
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
                  {course.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-primary">
                      {course.discount}% OFF
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-balance">
                        {course.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {course.instructor}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">
                          {course.price}
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          {course.originalPrice}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1 bg-transparent"
                      >
                        <Heart className="h-3 w-3" />
                        Add
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

export default EmptyWishlistState;
