import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Package, TruckIcon, MapPin, Plus } from "lucide-react";

export default function Ketertelusuran() {
  const traceabilityStats = [
    { label: "Total Transaksi", value: "3,542", icon: Activity, color: "text-primary" },
    { label: "Batch Aktif", value: "156", icon: Package, color: "text-blue-600" },
    { label: "Dalam Pengiriman", value: "24", icon: TruckIcon, color: "text-orange-600" },
    { label: "Lokasi Terdaftar", value: "87", icon: MapPin, color: "text-green-600" },
  ];

  const recentTransactions = [
    { 
      id: "BS-2025-001", 
      farmer: "Pak Budi Santoso", 
      quantity: "1,250 kg", 
      buyer: "PT Sawit Makmur",
      certified: true,
      standard: "RSPO",
      date: "18 Nov 2025",
      status: "Delivered"
    },
    { 
      id: "BS-2025-002", 
      farmer: "Ibu Sri Wahyuni", 
      quantity: "890 kg", 
      buyer: "CV Kelapa Jaya",
      certified: true,
      standard: "ISPO",
      date: "17 Nov 2025",
      status: "In Transit"
    },
    { 
      id: "BS-2025-003", 
      farmer: "Pak Ahmad Yani", 
      quantity: "2,100 kg", 
      buyer: "PT Sawit Makmur",
      certified: false,
      standard: "-",
      date: "16 Nov 2025",
      status: "Delivered"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-page-title">Ketertelusuran Produksi</h1>
          <p className="text-muted-foreground mt-1">Pantau alur produksi sawit dari petani hingga pembeli</p>
        </div>
        <Button data-testid="button-add-transaction">
          <Plus className="w-4 h-4 mr-2" />
          Catat Transaksi
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {traceabilityStats.map((stat, index) => (
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
          <CardTitle>Transaksi Terbaru</CardTitle>
          <CardDescription>Riwayat transaksi dan pengiriman hasil panen</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover-elevate active-elevate-2 cursor-pointer gap-4"
                data-testid={`card-transaction-${transaction.id}`}
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium" data-testid={`text-batch-id-${transaction.id}`}>
                        Batch ID: {transaction.id}
                      </p>
                      <p className="text-sm text-muted-foreground">{transaction.farmer}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground ml-8">
                    <span>Pembeli: {transaction.buyer}</span>
                    <span>•</span>
                    <span>Jumlah: {transaction.quantity}</span>
                    <span>•</span>
                    <span>{transaction.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {transaction.certified && (
                    <Badge variant="default" data-testid={`badge-certified-${transaction.id}`}>
                      {transaction.standard} Certified
                    </Badge>
                  )}
                  <Badge 
                    variant={transaction.status === "Delivered" ? "default" : "secondary"}
                    data-testid={`badge-status-${transaction.id}`}
                  >
                    {transaction.status}
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
