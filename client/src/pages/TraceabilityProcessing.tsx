import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Package, Activity, TrendingUp } from "lucide-react";

const sampleData = [
  { id: "PR-001", batch: "BATCH-2024-001", product: "Coffee", inputKg: 1200, outputKg: 1050, date: "2024-11-15", status: "Completed" },
  { id: "PR-002", batch: "BATCH-2024-002", product: "Cocoa", inputKg: 850, outputKg: 780, date: "2024-11-16", status: "In Progress" },
  { id: "PR-003", batch: "BATCH-2024-003", product: "Tea", inputKg: 650, outputKg: 620, date: "2024-11-17", status: "Quality Check" },
];

export default function TraceabilityProcessing() {
  return (
    <PageTemplate
      title="Processing Transactions"
      description="Track processing operations from raw materials to finished products"
      data={sampleData}
      columns={[
        { key: "id", label: "Transaction ID" },
        { key: "batch", label: "Batch Number" },
        { key: "product", label: "Product" },
        { key: "inputKg", label: "Input (kg)" },
        { key: "outputKg", label: "Output (kg)" },
        { key: "date", label: "Processing Date" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Completed" ? "default" : "secondary"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Total Processed", value: "2,700 kg", icon: Package },
        { label: "Active Batches", value: "2", icon: Activity },
        { label: "Avg Yield", value: "91.5%", icon: TrendingUp },
      ]}
      addButtonText="New Processing"
      addButtonHref="/traceability-processing/new"
    />
  );
}
