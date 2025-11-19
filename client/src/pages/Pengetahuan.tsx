import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Award, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Pengetahuan() {
  const knowledgeStats = [
    { label: "Artikel Tersedia", value: "234", icon: FileText, color: "text-primary" },
    { label: "Video Tutorial", value: "67", icon: Video, color: "text-blue-600" },
    { label: "Materi Pelatihan", value: "45", icon: BookOpen, color: "text-green-600" },
    { label: "Sertifikat Diterbitkan", value: "892", icon: Award, color: "text-orange-600" },
  ];

  const knowledgeResources = [
    {
      id: 1,
      title: "Panduan Praktik Pertanian Berkelanjutan",
      type: "Artikel",
      category: "Praktik Terbaik",
      description: "Teknik budidaya kelapa sawit yang ramah lingkungan dan meningkatkan produktivitas",
      views: 1245,
      duration: "15 menit"
    },
    {
      id: 2,
      title: "Standar Sertifikasi RSPO untuk Petani Swadaya",
      type: "Video",
      category: "Sertifikasi",
      description: "Memahami persyaratan dan proses sertifikasi RSPO untuk petani kelapa sawit",
      views: 892,
      duration: "23 menit"
    },
    {
      id: 3,
      title: "Pengelolaan Hama dan Penyakit Kelapa Sawit",
      type: "Pelatihan",
      category: "Pengelolaan Hama",
      description: "Cara mengidentifikasi dan mengatasi hama serta penyakit pada tanaman kelapa sawit",
      views: 1567,
      duration: "2 jam"
    },
    {
      id: 4,
      title: "Sistem Ketertelusuran Produksi Sawit",
      type: "Artikel",
      category: "Ketertelusuran",
      description: "Pentingnya ketertelusuran dalam rantai pasok kelapa sawit dan cara implementasinya",
      views: 745,
      duration: "10 menit"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Pusat Pengetahuan</h1>
          <p className="text-muted-foreground mt-1">Akses materi edukasi dan pelatihan untuk petani kelapa sawit</p>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Cari artikel, video, atau materi pelatihan..." 
              className="pl-10"
              data-testid="input-search"
            />
          </div>
          <Button variant="outline" data-testid="button-filter">Saring</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {knowledgeStats.map((stat, index) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {knowledgeResources.map((resource) => (
          <Card 
            key={resource.id} 
            className="hover-elevate active-elevate-2 cursor-pointer"
            data-testid={`card-resource-${resource.id}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg" data-testid={`text-resource-title-${resource.id}`}>
                    {resource.title}
                  </CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" data-testid={`badge-type-${resource.id}`}>{resource.type}</Badge>
                    <Badge variant="secondary" data-testid={`badge-category-${resource.id}`}>{resource.category}</Badge>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-muted text-primary">
                  {resource.type === 'Video' ? <Video className="w-5 h-5" /> : 
                   resource.type === 'Pelatihan' ? <BookOpen className="w-5 h-5" /> : 
                   <FileText className="w-5 h-5" />}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3">{resource.description}</CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span data-testid={`text-views-${resource.id}`}>{resource.views} tayangan</span>
                <span>•</span>
                <span data-testid={`text-duration-${resource.id}`}>{resource.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
