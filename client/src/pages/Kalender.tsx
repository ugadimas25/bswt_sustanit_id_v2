import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Clock, MapPin, Users } from "lucide-react";

export default function Kalender() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Pelatihan Praktik Pertanian Berkelanjutan",
      type: "Training",
      date: "22 Nov 2025",
      time: "09:00 - 15:00",
      location: "Desa Suka Maju, Kalimantan Tengah",
      participants: 45,
      status: "Confirmed"
    },
    {
      id: 2,
      title: "Penilaian RSPO - Kelompok Tani Makmur",
      type: "Assessment",
      date: "24 Nov 2025",
      time: "08:00 - 12:00",
      location: "Desa Harapan Jaya, Riau",
      participants: 12,
      status: "Confirmed"
    },
    {
      id: 3,
      title: "Pengumpulan Hasil Panen",
      type: "Collection",
      date: "25 Nov 2025",
      time: "06:00 - 11:00",
      location: "Pabrik Kelapa Sawit Sentosa",
      participants: 8,
      status: "Scheduled"
    },
    {
      id: 4,
      title: "Workshop Sistem Ketertelusuran",
      type: "Workshop",
      date: "27 Nov 2025",
      time: "13:00 - 17:00",
      location: "Kantor Solidaridad, Jakarta",
      participants: 30,
      status: "Confirmed"
    },
    {
      id: 5,
      title: "Penilaian ISPO - Kelompok Tani Sejahtera",
      type: "Assessment",
      date: "29 Nov 2025",
      time: "09:00 - 14:00",
      location: "Desa Karya Bakti, Jambi",
      participants: 15,
      status: "Scheduled"
    },
  ];

  const typeColors: Record<string, string> = {
    Training: "bg-blue-100 text-blue-700 border-blue-200",
    Assessment: "bg-green-100 text-green-700 border-green-200",
    Collection: "bg-orange-100 text-orange-700 border-orange-200",
    Workshop: "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Kalender Kegiatan</h1>
          <p className="text-muted-foreground mt-1">Jadwal pelatihan, penilaian, dan kegiatan lapangan</p>
        </div>
        <Button data-testid="button-add-event">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Kegiatan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover-elevate">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Kegiatan Minggu Ini</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-weekly-events">8</p>
              </div>
              <div className="p-3 rounded-lg bg-muted text-primary">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Kegiatan Bulan Ini</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-monthly-events">24</p>
              </div>
              <div className="p-3 rounded-lg bg-muted text-blue-600">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Peserta</p>
                <p className="text-2xl font-bold mt-1" data-testid="text-total-participants">892</p>
              </div>
              <div className="p-3 rounded-lg bg-muted text-green-600">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kegiatan Mendatang</CardTitle>
          <CardDescription>Daftar kegiatan yang dijadwalkan dalam waktu dekat</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 border rounded-lg hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-event-${event.id}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-muted text-primary mt-1">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-lg" data-testid={`text-event-title-${event.id}`}>
                            {event.title}
                          </h3>
                          <Badge 
                            variant="outline"
                            className={typeColors[event.type]}
                            data-testid={`badge-event-type-${event.id}`}
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span data-testid={`text-event-date-${event.id}`}>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span data-testid={`text-event-time-${event.id}`}>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span data-testid={`text-event-location-${event.id}`}>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span data-testid={`text-event-participants-${event.id}`}>{event.participants} peserta</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={event.status === "Confirmed" ? "default" : "secondary"}
                    data-testid={`badge-event-status-${event.id}`}
                  >
                    {event.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
