"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  Star,
  Heart,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardOverview() {
  if (false) {
    return <DashboardSkeleton />;
  }

  if (!true) {
    return <div>Error loading user data</div>;
  }

  // if (user.isNewUser) {
  //   return <NewUserDashboard user={user} />;
  // }

  return <ExistingUserDashboard />;
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NewUserDashboard({ user }: { user: any }) {
  const popularCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      thumbnail: "/react-course-thumbnail.jpg",
      instructor: "Sarah Johnson",
      duration: "12 hours",
      rating: 4.8,
      price: "Free",
      students: "50,000+",
    },
    {
      id: 2,
      title: "JavaScript for Beginners",
      thumbnail: "/javascript-course-thumbnail.png",
      instructor: "Mike Chen",
      duration: "8 hours",
      rating: 4.9,
      price: "$29.99",
      students: "35,000+",
    },
    {
      id: 3,
      title: "UI/UX Design Basics",
      thumbnail: "/placeholder-m3v4t.png",
      instructor: "Emma Davis",
      duration: "10 hours",
      rating: 4.7,
      price: "$39.99",
      students: "25,000+",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section for New Users */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight text-balance">
          Welcome to LearnHub, {user.firstName}! 🎉
        </h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Start your learning journey today. Explore thousands of courses and
          build the skills you need to succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button size="lg" className="gap-2">
            <BookOpen className="h-5 w-5" />
            Browse All Courses
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Play className="h-5 w-5" />
            Take a Quick Tour
          </Button>
        </div>
      </div>

      {/* Getting Started Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">
            Get Started in 3 Easy Steps
          </CardTitle>
          <CardDescription className="text-pretty">
            Follow these steps to make the most of your learning experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold">Choose Your Path</h3>
              <p className="text-sm text-muted-foreground">
                Browse our course catalog and find topics that interest you
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold">Start Learning</h3>
              <p className="text-sm text-muted-foreground">
                Enroll in courses and begin your learning journey at your own
                pace
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold">Earn Certificates</h3>
              <p className="text-sm text-muted-foreground">
                Complete courses and earn certificates to showcase your skills
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Courses for New Users */}
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">
            Popular Courses to Get You Started
          </CardTitle>
          <CardDescription className="text-pretty">
            These courses are perfect for beginners and highly rated by our
            community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <Badge className="absolute top-2 left-2 bg-primary">
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

                    <p className="text-xs text-muted-foreground">
                      {course.students} students enrolled
                    </p>

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

function ExistingUserDashboard() {
  const recentCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      progress: 75,
      thumbnail: "/react-course-thumbnail.jpg",
      instructor: "Sarah Johnson",
      duration: "12 hours",
      rating: 4.8,
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      progress: 45,
      thumbnail: "/javascript-course-thumbnail.png",
      instructor: "Mike Chen",
      duration: "8 hours",
      rating: 4.9,
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 20,
      thumbnail: "/placeholder-m3v4t.png",
      instructor: "Emma Davis",
      duration: "15 hours",
      rating: 4.7,
    },
  ];

  const suggestedCourses = [
    {
      id: 4,
      title: "Node.js Backend Development",
      thumbnail: "/nodejs-course-thumbnail.jpg",
      instructor: "Alex Rodriguez",
      duration: "10 hours",
      rating: 4.6,
      price: "$49.99",
    },
    {
      id: 5,
      title: "TypeScript Mastery",
      thumbnail: "/typescript-course-thumbnail.png",
      instructor: "Lisa Wang",
      duration: "6 hours",
      rating: 4.8,
      price: "$39.99",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          Welcome back, User! 👋
        </h1>
        <p className="text-muted-foreground text-pretty">
          Continue your learning journey and track your progress
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Enrolled Courses
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{3}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{1}</div>
            <p className="text-xs text-muted-foreground">Keep going!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{2}</div>
            <p className="text-xs text-muted-foreground">Certificates earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Learning Streak
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">days in a row</p>
          </CardContent>
        </Card>
      </div>

      {/* Recently Watched */}
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">Continue Learning</CardTitle>
          <CardDescription className="text-pretty">
            Resume where you left off
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                  <Button
                    size="icon"
                    className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-primary/80 hover:bg-primary"
                  >
                    <Play className="h-5 w-5 text-primary-foreground" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-1 text-balance">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{course.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      • {course.duration}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <Button className="w-full mt-3" size="sm">
                    Resume Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suggested Courses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">Recommended for You</CardTitle>
          <CardDescription className="text-pretty">
            Based on your learning preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {suggestedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="flex gap-4 p-4">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-sm text-balance">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {course.instructor}
                    </p>
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{course.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        • {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {course.price}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent"
                      >
                        Add to Wishlist
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
