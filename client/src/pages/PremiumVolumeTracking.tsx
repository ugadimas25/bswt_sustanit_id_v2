import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Package, DollarSign, TrendingUp } from "lucide-react";

const sampleData = [
  { id: "PVT-001", farmer: "AGNES Adeleye", volume: 6200, threshold: 5000, premium: 310, status: "Qualified" },
  { id: "PVT-002", farmer: "Bima Anwar", volume: 4800, threshold: 5000, premium: 0, status: "Not Qualified" },
  { id: "PVT-003", farmer: "Eri Baldo", volume: 5500, threshold: 5000, premium: 275, status: "Qualified" },
];

export default function PremiumVolumeTracking() {
  return (
    <PageTemplate
      title="Volume Tracking"
      description="Track farmer volumes against premium thresholds"
      data={sampleData}
      columns={[
        { key: "id", label: "Tracking ID" },
        { key: "farmer", label: "Farmer Name" },
        { key: "volume", label: "Volume (kg)" },
        { key: "threshold", label: "Threshold (kg)" },
        { key: "premium", label: "Premium Earned ($)" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Qualified" ? "default" : "secondary"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Qualified Farmers", value: "2", icon: Package },
        { label: "Total Premiums", value: "$585", icon: DollarSign },
        { label: "Qualification Rate", value: "67%", icon: TrendingUp },
      ]}
      addButtonText="Track Volume"
      addButtonHref="/premium-volume-tracking/new"
    />
  );
}
