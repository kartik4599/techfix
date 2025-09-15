"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Award,
  Download,
  Share2,
  Search,
  Calendar,
  ExternalLink,
} from "lucide-react";
import EmptyCertificatesState from "@/feature/certificates/components/EmptyCertificatesState";

export default function CertificatesSection() {
  //   const { user, isLoading } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const certificates: any[] = [];
  // user?.isNewUser || !user?.certificates?.length ? [] : user.certificates;

  //   if (isLoading) {
  //     return <div>Loading certificates...</div>;
  //   }

  //   if (!user) {
  //     return <div>Error loading user data</div>;
  //   }

  if (
    // user.isNewUser ||
    certificates.length === 0
  ) {
    return <EmptyCertificatesState />;
  }

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const downloadCertificate = (certificateId: string) => {
    // Simulate certificate download
    console.log(`Downloading certificate: ${certificateId}`);
  };

  const shareCertificate = (certificateId: string) => {
    // Simulate sharing functionality
    navigator.clipboard.writeText(
      `https://learnhub.com/certificates/${certificateId}`
    );
    console.log(`Certificate link copied: ${certificateId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          My Certificates
        </h1>
        <p className="text-muted-foreground text-pretty">
          Your earned certificates and achievements
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Certificates
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{certificates.length}</div>
            <p className="text-xs text-muted-foreground">Earned this year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Skills Acquired
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              {certificates.reduce((acc, cert) => acc + cert.skills.length, 0)}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(certificates.flatMap((cert) => cert.skills)).size}
            </div>
            <p className="text-xs text-muted-foreground">Unique skills</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Latest Certificate
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">
              {certificates.length > 0 ? certificates[0].courseName : "None"}
            </div>
            <p className="text-xs text-muted-foreground">
              {certificates.length > 0
                ? new Date(certificates[0].completedDate).toLocaleDateString()
                : "Complete a course to earn your first certificate"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search certificates by course, instructor, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </CardContent>
      </Card>

      {/* Certificates Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCertificates.map((certificate) => (
          <Card
            key={certificate.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/10 to-accent/20 p-6 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Award className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-lg text-balance">
                  {certificate.courseName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Certificate of Completion
                </p>
              </div>
              <Badge className="absolute top-2 right-2 bg-primary">
                Verified
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                  <p className="font-medium">{certificate.instructor}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="font-medium">
                    {new Date(certificate.completedDate).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Skills Learned
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Certificate ID
                  </p>
                  <p className="font-mono text-xs">
                    {certificate.certificateId}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() =>
                      downloadCertificate(certificate.certificateId)
                    }
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => shareCertificate(certificate.certificateId)}
                    className="bg-transparent"
                  >
                    <Share2 className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(certificate.credentialUrl, "_blank")
                    }
                    className="bg-transparent"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCertificates.length === 0 && certificates.length > 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              No certificates found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
