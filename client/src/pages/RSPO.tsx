import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, Plus, CheckCircle2, Clock } from "lucide-react";

export default function RSPO() {
  const principles = [
    { number: 1, title: "Perilaku etis dan transparansi" },
    { number: 2, title: "Operasi legal" },
    { number: 3, title: "Optimalisasi produktivitas" },
    { number: 4, title: "Perlindungan lingkungan" },
    { number: 5, title: "Tanggung jawab terhadap pekerja" },
    { number: 6, title: "Tanggung jawab sosial" },
    { number: 7, title: "Pengembangan perkebunan baru" },
    { number: 8, title: "Peningkatan berkelanjutan" },
  ];

  const assessmentHistory = [
    { id: 1, date: "18/11/2025", status: "Compliant", score: 100.00 },
    { id: 2, date: "18/11/2025", status: "In Progress", score: 60.00 },
    { id: 3, date: "18/11/2025", status: "Compliant", score: 80.00 },
    { id: 4, date: "18/11/2025", status: "In Progress", score: 60.00 },
    { id: 5, date: "18/11/2025", status: "Compliant", score: 100.00 },
    { id: 6, date: "18/11/2025", status: "Compliant", score: 100.00 },
    { id: 7, date: "18/11/2025", status: "Compliant", score: 100.00 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Penilaian Keberlanjutan</h1>
          <p className="text-muted-foreground mt-1">Penilaian mandiri terhadap standar RSPO/ISPO</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" data-testid="button-tab-rspo">RSPO</Button>
          <Button variant="outline" data-testid="button-tab-ispo">ISPO</Button>
          <Button data-testid="button-add-assessment">
            <Plus className="w-4 h-4 mr-2" />
            Mulai Penilaian Baru
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Indikator RSPO (Roundtable on Sustainable Palm Oil)</CardTitle>
          <CardDescription>Standar RSPO mencakup 8 prinsip dan 43 kriteria untuk produksi kelapa sawit berkelanjutan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <Card
                key={principle.number}
                className="hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-principle-${principle.number}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold flex-shrink-0">
                      {principle.number}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-semibold" data-testid={`text-principle-title-${principle.number}`}>
                        Prinsip {principle.number}: {principle.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Riwayat Penilaian</CardTitle>
          <CardDescription>Daftar penilaian RSPO yang telah dilakukan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessmentHistory.map((assessment) => (
              <Card
                key={assessment.id}
                className="hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-assessment-${assessment.id}`}
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {assessment.status === "Compliant" ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-orange-600" />
                        )}
                        <span className="font-medium" data-testid={`text-assessment-type-${assessment.id}`}>
                          Penilaian RSPO
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground" data-testid={`text-assessment-date-${assessment.id}`}>
                      {assessment.date}
                    </div>

                    <div className="space-y-2">
                      <Badge 
                        variant={assessment.status === "Compliant" ? "default" : "secondary"}
                        data-testid={`badge-status-${assessment.id}`}
                      >
                        {assessment.status}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Skor Kepatuhan</div>
                      <div className="text-2xl font-bold" data-testid={`text-score-${assessment.id}`}>
                        {assessment.score.toFixed(2)}%
                      </div>
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
