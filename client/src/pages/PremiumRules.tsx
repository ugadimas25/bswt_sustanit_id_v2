import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Target } from "lucide-react";

const sampleData = [
  { id: "PR-001", name: "High Volume Bonus", threshold: "5000 kg", premium: "$50/ton", active: true, beneficiaries: 23 },
  { id: "PR-002", name: "Quality Premium", threshold: "Grade A", premium: "$75/ton", active: true, beneficiaries: 18 },
  { id: "PR-003", name: "Early Delivery Bonus", threshold: "Before deadline", premium: "$25/ton", active: false, beneficiaries: 12 },
];

export default function PremiumRules() {
  return (
    <PageTemplate
      title="Premium Rules"
      description="Define and manage premium rules based on volume, quality, and timing"
      data={sampleData}
      columns={[
        { key: "id", label: "Rule ID" },
        { key: "name", label: "Premium Name" },
        { key: "threshold", label: "Threshold" },
        { key: "premium", label: "Premium Amount" },
        { 
          key: "active", 
          label: "Status",
          render: (value) => (
            <Badge variant={value ? "default" : "secondary"}>{value ? "Active" : "Inactive"}</Badge>
          )
        },
        { key: "beneficiaries", label: "Beneficiaries" },
      ]}
      stats={[
        { label: "Active Rules", value: "2", icon: Award },
        { label: "Total Beneficiaries", value: "53", icon: TrendingUp },
        { label: "Avg Premium", value: "$50", icon: Target },
      ]}
      addButtonText="Create Rule"
      addButtonHref="/premium-rules/new"
    />
  );
}
