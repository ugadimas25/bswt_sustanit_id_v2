import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, MapPin } from "lucide-react";

export default function HargaPasar() {
  const priceStats = [
    { label: "Harga TBS Rata-rata", value: "Rp 2,850", unit: "/kg", icon: DollarSign, trend: "+5.2%", up: true },
    { label: "Harga CPO", value: "Rp 12,500", unit: "/kg", icon: TrendingUp, trend: "+3.8%", up: true },
    { label: "Harga Tertinggi", value: "Rp 3,200", unit: "/kg", icon: TrendingUp, trend: "+2.1%", up: true },
    { label: "Harga Terendah", value: "Rp 2,400", unit: "/kg", icon: TrendingDown, trend: "-1.5%", up: false },
  ];

  const regionalPrices = [
    {
      region: "Sumatera Utara",
      province: "Sumatera",
      price: 2950,
      change: 5.2,
      lastUpdate: "19 Nov 2025",
      marketStatus: "Active"
    },
    {
      region: "Riau",
      province: "Sumatera",
      price: 2875,
      change: 3.8,
      lastUpdate: "19 Nov 2025",
      marketStatus: "Active"
    },
    {
      region: "Kalimantan Tengah",
      province: "Kalimantan",
      price: 2820,
      change: -1.2,
      lastUpdate: "19 Nov 2025",
      marketStatus: "Active"
    },
    {
      region: "Kalimantan Barat",
      province: "Kalimantan",
      price: 2765,
      change: 2.5,
      lastUpdate: "18 Nov 2025",
      marketStatus: "Active"
    },
    {
      region: "Jambi",
      province: "Sumatera",
      price: 2890,
      change: 4.1,
      lastUpdate: "18 Nov 2025",
      marketStatus: "Active"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold" data-testid="text-page-title">Harga Pasar Sawit</h1>
        <p className="text-muted-foreground">Pantau harga Tandan Buah Segar (TBS) dan CPO di berbagai wilayah</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {priceStats.map((stat, index) => (
          <Card key={index} className="hover-elevate" data-testid={`card-stat-${index}`}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <p className="text-2xl font-bold" data-testid={`text-price-${index}`}>{stat.value}</p>
                    <span className="text-sm text-muted-foreground">{stat.unit}</span>
                  </div>
                  <div className={`flex items-center gap-1 mt-2 text-sm ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span data-testid={`text-trend-${index}`}>{stat.trend}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.up ? 'text-green-600' : 'text-orange-600'}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Harga Regional TBS</CardTitle>
          <CardDescription>Harga Tandan Buah Segar per kilogram berdasarkan wilayah</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {regionalPrices.map((region, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover-elevate active-elevate-2 cursor-pointer gap-3"
                data-testid={`card-region-${index}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2 rounded-lg bg-muted text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid={`text-region-name-${index}`}>{region.region}</p>
                    <p className="text-sm text-muted-foreground">{region.province}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-right">
                    <p className="text-2xl font-bold" data-testid={`text-region-price-${index}`}>
                      Rp {region.price.toLocaleString('id-ID')}
                    </p>
                    <p className="text-xs text-muted-foreground">per kg</p>
                  </div>
                  
                  <div className={`flex items-center gap-1 ${region.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {region.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span className="font-semibold" data-testid={`text-region-change-${index}`}>
                      {region.change >= 0 ? '+' : ''}{region.change}%
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="outline" data-testid={`badge-status-${index}`}>{region.marketStatus}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{region.lastUpdate}</p>
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
