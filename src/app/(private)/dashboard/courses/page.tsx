"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen, Clock, Star, Play, Filter, Search } from "lucide-react";

export default function MyCoursesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  //   if (isLoading) {
  //     return <div>Loading courses...</div>;
  //   }

  //   if (!user) {
  //     return <div>Error loading user data</div>;
  //   }

  //   if (user.isNewUser || user.enrolledCourses.length === 0) {
  //     return <EmptyCoursesState />;
  //   }

  const courses =
    //   user.enrolledCourses ||
    [
      {
        id: 1,
        title: "React Fundamentals",
        instructor: "Sarah Johnson",
        progress: 75,
        status: "in-progress",
        thumbnail: "/react-course-thumbnail.jpg",
        duration: "12 hours",
        rating: 4.8,
        enrolledDate: "2024-01-15",
        totalLessons: 24,
        completedLessons: 18,
      },
      {
        id: 2,
        title: "JavaScript Advanced Concepts",
        instructor: "Mike Chen",
        progress: 45,
        status: "in-progress",
        thumbnail: "/javascript-course-thumbnail.png",
        duration: "8 hours",
        rating: 4.9,
        enrolledDate: "2024-02-01",
        totalLessons: 16,
        completedLessons: 7,
      },
      {
        id: 3,
        title: "UI/UX Design Principles",
        instructor: "Emma Davis",
        progress: 20,
        status: "in-progress",
        thumbnail: "/placeholder.svg?key=design",
        duration: "15 hours",
        rating: 4.7,
        enrolledDate: "2024-02-10",
        totalLessons: 30,
        completedLessons: 6,
      },
      {
        id: 4,
        title: "HTML & CSS Basics",
        instructor: "John Smith",
        progress: 100,
        status: "completed",
        thumbnail: "/placeholder.svg?key=html",
        duration: "6 hours",
        rating: 4.6,
        enrolledDate: "2023-12-01",
        totalLessons: 12,
        completedLessons: 12,
      },
      {
        id: 5,
        title: "Python for Beginners",
        instructor: "Lisa Wang",
        progress: 100,
        status: "completed",
        thumbnail: "/placeholder.svg?key=python",
        duration: "10 hours",
        rating: 4.8,
        enrolledDate: "2023-11-15",
        totalLessons: 20,
        completedLessons: 20,
      },
      {
        id: 6,
        title: "Database Design",
        instructor: "Alex Rodriguez",
        progress: 0,
        status: "not-started",
        thumbnail: "/placeholder.svg?key=database",
        duration: "14 hours",
        rating: 4.5,
        enrolledDate: "2024-02-20",
        totalLessons: 28,
        completedLessons: 0,
      },
    ];

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || course.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.enrolledDate).getTime() -
          new Date(a.enrolledDate).getTime()
        );
      } else if (sortBy === "oldest") {
        return (
          new Date(a.enrolledDate).getTime() -
          new Date(b.enrolledDate).getTime()
        );
      } else if (sortBy === "progress") {
        return b.progress - a.progress;
      }
      return 0;
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Completed
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            In Progress
          </Badge>
        );
      case "not-started":
        return <Badge variant="secondary">Not Started</Badge>;
      default:
        return null;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getActionButton = (course: any) => {
    if (course.status === "completed") {
      return (
        <Button variant="outline" className="w-full bg-transparent">
          Review Course
        </Button>
      );
    } else if (course.status === "in-progress") {
      return <Button className="w-full">Resume Course</Button>;
    } else {
      return <Button className="w-full">Start Course</Button>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          My Courses
        </h1>
        <p className="text-muted-foreground text-pretty">
          Manage and track your learning progress
        </p>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses or instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="not-started">Not Started</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="progress">Progress</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
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
              <Button
                size="icon"
                className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-primary/80 hover:bg-primary"
              >
                <Play className="h-5 w-5 text-primary-foreground" />
              </Button>
              <div className="absolute top-2 right-2">
                {getStatusBadge(course.status)}
              </div>
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
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>
                      {course.completedLessons}/{course.totalLessons}
                    </span>
                  </div>
                </div>

                {course.status !== "not-started" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                {getActionButton(course)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
