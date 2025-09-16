"use client";

import type React from "react";
import Video from "next-video";
import introVideo from "@/videos/get-started.mp4.json";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  SkipBack,
  SkipForward,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Clock,
  BookOpen,
  Lock,
  Menu,
} from "lucide-react";

interface Lecture {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  videoUrl?: string;
  description?: string;
  resources?: Array<{
    name: string;
    type: "pdf" | "code" | "link";
    url: string;
  }>;
}

interface Section {
  id: string;
  title: string;
  lectures: Lecture[];
  expanded: boolean;
}

interface CourseData {
  id: string;
  title: string;
  instructor: string;
  totalDuration: string;
  progress: number;
  sections: Section[];
}

// Mock course data
const mockCourseData: CourseData = {
  id: "react-fundamentals",
  title: "React Fundamentals",
  instructor: "John Smith",
  totalDuration: "8h 45m",
  progress: 35,
  sections: [
    {
      id: "intro",
      title: "Introduction to React",
      expanded: true,
      lectures: [
        {
          id: "welcome",
          title: "Welcome to the Course",
          duration: "3:21",
          completed: true,
          locked: false,
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          description:
            "Get introduced to the course structure and what you'll learn throughout this comprehensive React journey.",
          resources: [
            { name: "Course Outline", type: "pdf", url: "/course-outline.pdf" },
            { name: "Setup Guide", type: "pdf", url: "/setup-guide.pdf" },
          ],
        },
        {
          id: "what-you-learn",
          title: "What You Will Learn",
          duration: "4:05",
          completed: true,
          locked: false,
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          description:
            "Overview of all the React concepts, tools, and techniques you'll master by the end of this course.",
          resources: [
            {
              name: "Learning Objectives",
              type: "pdf",
              url: "/objectives.pdf",
            },
          ],
        },
        {
          id: "react-overview",
          title: "React Overview & History",
          duration: "6:12",
          completed: false,
          locked: false,
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          description:
            "Learn about React's history, why it was created, and how it revolutionized frontend development.",
          resources: [],
        },
      ],
    },
    {
      id: "fundamentals",
      title: "React Fundamentals",
      expanded: false,
      lectures: [
        {
          id: "jsx-intro",
          title: "Introduction to JSX",
          duration: "8:10",
          completed: false,
          locked: false,
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          description:
            "Understand JSX syntax and how it makes writing React components intuitive and powerful.",
          resources: [
            {
              name: "JSX Cheat Sheet",
              type: "pdf",
              url: "/jsx-cheat-sheet.pdf",
            },
            {
              name: "Practice Exercises",
              type: "code",
              url: "/jsx-exercises.zip",
            },
          ],
        },
        {
          id: "components",
          title: "Creating Your First Component",
          duration: "12:30",
          completed: false,
          locked: false,
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          description:
            "Build your first React component from scratch and understand the component-based architecture.",
          resources: [],
        },
        {
          id: "props",
          title: "Understanding Props",
          duration: "9:45",
          completed: false,
          locked: false,
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          description:
            "Learn how to pass data between components using props and create reusable component interfaces.",
          resources: [
            {
              name: "Props Examples",
              type: "code",
              url: "/props-examples.zip",
            },
          ],
        },
      ],
    },
    {
      id: "state-management",
      title: "State Management",
      expanded: false,
      lectures: [
        {
          id: "usestate-hook",
          title: "useState Hook Deep Dive",
          duration: "15:20",
          completed: false,
          locked: true,
          description:
            "Master the useState hook for managing component state and building interactive applications.",
          resources: [],
        },
        {
          id: "useeffect-hook",
          title: "useEffect Hook & Side Effects",
          duration: "18:45",
          completed: false,
          locked: true,
          description:
            "Handle side effects, API calls, and lifecycle events using the powerful useEffect hook.",
          resources: [],
        },
      ],
    },
  ],
};

export function CourseLearnSection({ courseId }: { courseId: string }) {
  const [courseData, setCourseData] = useState<CourseData>(mockCourseData);
  const [currentLecture, setCurrentLecture] = useState<Lecture | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const firstLecture = courseData.sections[0]?.lectures[0];
    if (firstLecture && !currentLecture) {
      setCurrentLecture(firstLecture);
    }
  }, [courseData, currentLecture]);

  const toggleSection = (sectionId: string) => {
    setCourseData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section
      ),
    }));
  };

  const selectLecture = (lecture: Lecture) => {
    if (!lecture.locked) {
      setCurrentLecture(lecture);
      setIsMobileMenuOpen(false);
    }
  };

  const markAsCompleted = (lectureId: string) => {
    setCourseData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) => ({
        ...section,
        lectures: section.lectures.map((lecture) =>
          lecture.id === lectureId ? { ...lecture, completed: true } : lecture
        ),
      })),
    }));
  };

  const getNextLecture = () => {
    if (!currentLecture) return null;

    for (let i = 0; i < courseData.sections.length; i++) {
      const section = courseData.sections[i];
      const lectureIndex = section.lectures.findIndex(
        (l) => l.id === currentLecture.id
      );

      if (lectureIndex !== -1) {
        if (lectureIndex < section.lectures.length - 1) {
          return section.lectures[lectureIndex + 1];
        }
        if (i < courseData.sections.length - 1) {
          return courseData.sections[i + 1].lectures[0];
        }
      }
    }
    return null;
  };

  const getPreviousLecture = () => {
    if (!currentLecture) return null;

    for (let i = 0; i < courseData.sections.length; i++) {
      const section = courseData.sections[i];
      const lectureIndex = section.lectures.findIndex(
        (l) => l.id === currentLecture.id
      );

      if (lectureIndex !== -1) {
        if (lectureIndex > 0) {
          return section.lectures[lectureIndex - 1];
        }
        if (i > 0) {
          const prevSection = courseData.sections[i - 1];
          return prevSection.lectures[prevSection.lectures.length - 1];
        }
      }
    }
    return null;
  };

  const nextLecture = getNextLecture();
  const previousLecture = getPreviousLecture();

  const handleVideoEnded = () => {
    if (nextLecture && !nextLecture.locked) {
      selectLecture(nextLecture);
    }
  };

  const CourseCurriculum = () => (
    <>
      <div className="p-4 border-b">
        <h1 className="font-semibold text-lg text-balance">
          {courseData.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          by {courseData.instructor}
        </p>
        <div className="mt-3">
          <div className="flex items-center justify-between text-sm mb-1">
            <span>Course Progress</span>
            <span>{courseData.progress}%</span>
          </div>
          <Progress value={courseData.progress} className="h-2" />
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {courseData.totalDuration}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {courseData.sections.reduce(
              (acc, section) => acc + section.lectures.length,
              0
            )}{" "}
            lectures
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {courseData.sections.map((section) => (
            <Collapsible
              key={section.id}
              open={section.expanded}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-3 h-auto font-medium"
                >
                  <span className="text-left">{section.title}</span>
                  {section.expanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 ml-4">
                {section.lectures.map((lecture) => (
                  <Button
                    key={lecture.id}
                    variant={
                      currentLecture?.id === lecture.id ? "secondary" : "ghost"
                    }
                    className={`w-full justify-start p-3 h-auto text-left ${
                      currentLecture?.id === lecture.id
                        ? "bg-[#E63946]/10 border-l-2 border-[#E63946]"
                        : ""
                    }`}
                    onClick={() => selectLecture(lecture)}
                    disabled={lecture.locked}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex-shrink-0 mt-0.5">
                        {lecture.locked ? (
                          <Lock className="h-4 w-4 text-muted-foreground" />
                        ) : lecture.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-[#E63946]" />
                        ) : (
                          <Circle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-pretty">
                          {lecture.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {lecture.duration}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ScrollArea>
    </>
  );

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] bg-background">
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-card/50">
        <div>
          <h1 className="font-semibold text-lg text-balance">
            {courseData.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            by {courseData.instructor}
          </p>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="flex flex-col h-full">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Course Curriculum</SheetTitle>
              </SheetHeader>
              <CourseCurriculum />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex w-80 border-r bg-card/50 flex-col">
        <CourseCurriculum />
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        {currentLecture ? (
          <>
            <div className="bg-black aspect-video">
              <Video
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                src={introVideo as any}
                onEnded={handleVideoEnded}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 overflow-auto">
              <div className="p-4 sm:p-6">
                <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-balance mb-2">
                      {currentLecture.title}
                    </h1>
                    {currentLecture.description && (
                      <p className="text-muted-foreground text-pretty">
                        {currentLecture.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <Button
                      variant="outline"
                      disabled={!previousLecture}
                      onClick={() =>
                        previousLecture && selectLecture(previousLecture)
                      }
                      className="order-1 sm:order-none"
                    >
                      <SkipBack className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Previous Lecture</span>
                      <span className="sm:hidden">Previous</span>
                    </Button>

                    <div className="flex items-center justify-center gap-2 order-3 sm:order-none">
                      {!currentLecture.completed && (
                        <Button
                          variant="outline"
                          onClick={() => markAsCompleted(currentLecture.id)}
                          className="text-xs sm:text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">
                            Mark as Completed
                          </span>
                          <span className="sm:hidden">Complete</span>
                        </Button>
                      )}
                      {currentLecture.completed && (
                        <Badge
                          variant="secondary"
                          className="bg-[#E63946]/10 text-[#E63946]"
                        >
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>

                    <Button
                      disabled={!nextLecture || nextLecture.locked}
                      onClick={() => nextLecture && selectLecture(nextLecture)}
                      className="bg-[#E63946] hover:bg-[#E63946]/90 order-2 sm:order-none"
                    >
                      <span className="hidden sm:inline">Next Lecture</span>
                      <span className="sm:hidden">Next</span>
                      <SkipForward className="h-4 w-4 ml-2" />
                    </Button>
                  </div>

                  <Separator />

                  {currentLecture.resources &&
                    currentLecture.resources.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <FileText className="h-5 w-5" />
                            Lecture Resources
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {currentLecture.resources.map((resource, index) => (
                              <Button
                                key={index}
                                variant="ghost"
                                className="w-full justify-start p-3 h-auto"
                                asChild
                              >
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Download className="h-4 w-4 mr-2 flex-shrink-0" />
                                  <span className="flex-1 text-left text-sm">
                                    {resource.name}
                                  </span>
                                  <Badge variant="outline" className="ml-2">
                                    {resource.type.toUpperCase()}
                                  </Badge>
                                </a>
                              </Button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">My Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <textarea
                        placeholder="Take notes for this lecture..."
                        className="w-full h-24 sm:h-32 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 focus:border-[#E63946] text-sm"
                      />
                      <Button className="mt-2 bg-[#E63946] hover:bg-[#E63946]/90 w-full sm:w-auto">
                        Save Notes
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Select a Lecture</h2>
              <p className="text-muted-foreground text-center">
                <span className="hidden sm:inline">
                  Choose a lecture from the sidebar to start learning
                </span>
                <span className="sm:hidden">
                  Tap the menu button to choose a lecture
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
