import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Trophy } from "lucide-react";

function EmptyCertificatesState() {
  const achievementMilestones = [
    {
      title: "First Course Completion",
      description: "Complete your first course to earn your first certificate",
      icon: "🎯",
      progress: 0,
    },
    {
      title: "Skill Builder",
      description: "Complete 3 courses to unlock the Skill Builder badge",
      icon: "🏗️",
      progress: 0,
    },
    {
      title: "Learning Streak",
      description: "Study for 7 consecutive days to earn the Consistency badge",
      icon: "🔥",
      progress: 0,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          My Certificates
        </h1>
        <p className="text-muted-foreground text-pretty">
          Track your achievements and showcase your skills
        </p>
      </div>

      {/* Empty State */}
      <Card>
        <CardContent className="p-12 text-center">
          <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No certificates yet</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start your learning journey and earn certificates by completing
            courses. Each certificate showcases your new skills and
            achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Start Learning
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent"
            >
              <Trophy className="h-5 w-5" />
              View Sample Certificate
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">Achievement Milestones</CardTitle>
          <p className="text-sm text-muted-foreground text-pretty">
            Complete these milestones to earn special badges and certificates
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievementMilestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >
                <div className="text-2xl">{milestone.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-balance">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {milestone.description}
                  </p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {milestone.progress}% Complete
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How Certificates Work */}
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">How Certificates Work</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold">Complete Course</h4>
              <p className="text-sm text-muted-foreground">
                Finish all lessons and pass the final assessment
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h4 className="font-semibold">Earn Certificate</h4>
              <p className="text-sm text-muted-foreground">
                Receive a verified certificate with your name and completion
                date
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h4 className="font-semibold">Share & Showcase</h4>
              <p className="text-sm text-muted-foreground">
                Download, share on LinkedIn, or add to your portfolio
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default EmptyCertificatesState;
