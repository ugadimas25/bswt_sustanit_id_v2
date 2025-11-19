import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, FileText, Video, MessageCircle, Phone, Mail, Book } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Bantuan() {
  const supportCategories = [
    { 
      icon: Book, 
      title: "Panduan Pengguna", 
      description: "Pelajari cara menggunakan platform Bentang Sawit",
      count: 45,
      color: "text-blue-600"
    },
    { 
      icon: Video, 
      title: "Video Tutorial", 
      description: "Tonton video panduan langkah demi langkah",
      count: 23,
      color: "text-green-600"
    },
    { 
      icon: HelpCircle, 
      title: "FAQ", 
      description: "Pertanyaan yang sering diajukan",
      count: 78,
      color: "text-orange-600"
    },
    { 
      icon: MessageCircle, 
      title: "Hubungi Kami", 
      description: "Dapatkan bantuan dari tim support",
      count: null,
      color: "text-purple-600"
    },
  ];

  const faqItems = [
    {
      category: "Akun & Login",
      question: "Bagaimana cara mengatur ulang kata sandi?",
      answer: "Klik 'Lupa Kata Sandi' di halaman login, masukkan email Anda, dan ikuti instruksi yang dikirim ke email."
    },
    {
      category: "Penilaian",
      question: "Apa perbedaan antara standar RSPO dan ISPO?",
      answer: "RSPO adalah standar internasional untuk kelapa sawit berkelanjutan, sedangkan ISPO adalah standar nasional Indonesia."
    },
    {
      category: "Ketertelusuran",
      question: "Bagaimana cara mencatat transaksi penjualan?",
      answer: "Buka menu Ketertelusuran, klik 'Catat Transaksi', isi detail pembeli, jumlah, dan harga, lalu simpan."
    },
    {
      category: "Teknis",
      question: "Apakah aplikasi bisa digunakan offline?",
      answer: "Ya, aplikasi mobile dapat menyimpan data sementara dan akan sinkronisasi otomatis saat koneksi tersedia."
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 21 1234 5678",
      description: "Senin - Jumat, 08:00 - 17:00 WIB"
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@bentangsawit.id",
      description: "Respon dalam 24 jam"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+62 812 3456 7890",
      description: "Chat langsung dengan tim kami"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Pusat Bantuan</h1>
        <p className="text-muted-foreground">Temukan panduan, tutorial, dan dukungan untuk menggunakan Bentang Sawit</p>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Cari bantuan, panduan, atau FAQ..." 
            className="pl-10"
            data-testid="input-search-help"
          />
        </div>
        <Button variant="outline" data-testid="button-search">Cari</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {supportCategories.map((category, index) => (
          <Card 
            key={index} 
            className="hover-elevate active-elevate-2 cursor-pointer"
            data-testid={`card-category-${index}`}
          >
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`p-4 rounded-lg bg-muted ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold" data-testid={`text-category-title-${index}`}>{category.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  {category.count && (
                    <Badge variant="secondary" className="mt-2" data-testid={`badge-count-${index}`}>
                      {category.count} item
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pertanyaan yang Sering Diajukan (FAQ)</CardTitle>
          <CardDescription>Jawaban atas pertanyaan umum tentang Bentang Sawit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-faq-${index}`}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold" data-testid={`text-faq-question-${index}`}>
                        {item.question}
                      </h4>
                      <Badge variant="outline" data-testid={`badge-faq-category-${index}`}>
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hubungi Tim Support</CardTitle>
          <CardDescription>Butuh bantuan lebih lanjut? Tim kami siap membantu Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover-elevate active-elevate-2 cursor-pointer text-center"
                data-testid={`card-contact-${index}`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-lg bg-muted text-primary">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid={`text-contact-title-${index}`}>{method.title}</h4>
                    <p className="text-sm font-medium text-primary mt-1" data-testid={`text-contact-value-${index}`}>
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
