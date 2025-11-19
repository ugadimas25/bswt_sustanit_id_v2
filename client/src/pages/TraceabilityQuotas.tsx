import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const sampleData = [
  { id: "QT-001", farmer: "AGNES Adeleye", quota: 2000, delivered: 1850, remaining: 150, compliance: "Full", status: "Active" },
  { id: "QT-002", farmer: "Bima Anwar", quota: 1500, delivered: 1200, remaining: 300, compliance: "Partial", status: "Active" },
  { id: "QT-003", farmer: "Eri Baldo", quota: 1000, delivered: 1000, remaining: 0, compliance: "Full", status: "Completed" },
];

export default function TraceabilityQuotas() {
  return (
    <PageTemplate
      title="Quota Management"
      description="Manage farmer quotas based on compliance and performance"
      data={sampleData}
      columns={[
        { key: "id", label: "Quota ID" },
        { key: "farmer", label: "Farmer Name" },
        { key: "quota", label: "Total Quota (kg)" },
        { key: "delivered", label: "Delivered (kg)" },
        { key: "remaining", label: "Remaining (kg)" },
        { 
          key: "compliance", 
          label: "Compliance",
          render: (value) => (
            <Badge variant={value === "Full" ? "default" : "secondary"}>{value}</Badge>
          )
        },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Active" ? "default" : "outline"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Active Quotas", value: "2", icon: Target },
        { label: "Total Farmers", value: "3", icon: Users },
        { label: "Avg Fulfillment", value: "91%", icon: TrendingUp },
      ]}
      addButtonText="Set Quota"
      addButtonHref="/traceability-quotas/new"
    />
  );
}
