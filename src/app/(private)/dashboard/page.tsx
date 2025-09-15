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
import { BookOpen, Clock, Award, TrendingUp, Play, Star } from "lucide-react";
import DashboardSkeleton from "@/feature/dashboard/components/DashboardSkeleton";

export default function DashboardOverview() {
  if (false) {
    return <DashboardSkeleton />;
  }

  if (!true) {
    return <div>Error loading user data</div>;
  }

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
