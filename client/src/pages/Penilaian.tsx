import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, Plus, TrendingUp, FileText, Award } from "lucide-react";

export default function Penilaian() {
  const assessmentStats = [
    { label: "Total Penilaian", value: "1,245", icon: ClipboardCheck, color: "text-primary" },
    { label: "Selesai Bulan Ini", value: "89", icon: TrendingUp, color: "text-green-600" },
    { label: "Menunggu Tinjauan", value: "23", icon: FileText, color: "text-orange-600" },
    { label: "Tingkat Kepatuhan", value: "78%", icon: Award, color: "text-blue-600" },
  ];

  const recentAssessments = [
    { id: 1, farmer: "Pak Budi Santoso", standard: "RSPO", score: 85, status: "Sesuai", date: "15 Nov 2025" },
    { id: 2, farmer: "Ibu Sri Wahyuni", standard: "ISPO", score: 72, status: "Sebagian", date: "14 Nov 2025" },
    { id: 3, farmer: "Pak Ahmad Yani", standard: "RSPO", score: 91, status: "Sesuai", date: "13 Nov 2025" },
    { id: 4, farmer: "Ibu Dewi Lestari", standard: "ISPO", score: 68, status: "Sebagian", date: "12 Nov 2025" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Penilaian Keberlanjutan</h1>
          <p className="text-muted-foreground mt-1">Kelola penilaian standar RSPO dan ISPO untuk petani</p>
        </div>
        <Button data-testid="button-add-assessment">
          <Plus className="w-4 h-4 mr-2" />
          Mulai Penilaian Baru
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {assessmentStats.map((stat, index) => (
          <Card key={index} className="hover-elevate" data-testid={`card-stat-${index}`}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1" data-testid={`text-stat-value-${index}`}>{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Penilaian Terbaru</CardTitle>
          <CardDescription>Daftar penilaian keberlanjutan yang baru dilakukan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAssessments.map((assessment) => (
              <div
                key={assessment.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-assessment-${assessment.id}`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <ClipboardCheck className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium" data-testid={`text-farmer-name-${assessment.id}`}>{assessment.farmer}</p>
                      <p className="text-sm text-muted-foreground">{assessment.date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  <Badge variant="outline" data-testid={`badge-standard-${assessment.id}`}>{assessment.standard}</Badge>
                  <Badge 
                    variant={assessment.status === "Sesuai" ? "default" : "secondary"}
                    data-testid={`badge-status-${assessment.id}`}
                  >
                    {assessment.status}
                  </Badge>
                  <span className="text-lg font-semibold" data-testid={`text-score-${assessment.id}`}>{assessment.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
