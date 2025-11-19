import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { FileText, Filter, Download } from "lucide-react";

const sampleData = [
  { id: "RB-001", name: "Monthly Harvest Report", type: "Scheduled", format: "PDF", frequency: "Monthly", lastRun: "2024-11-01" },
  { id: "RB-002", name: "Farmer Compliance Summary", type: "On-Demand", format: "Excel", frequency: "Ad-hoc", lastRun: "2024-11-15" },
  { id: "RB-003", name: "Financial Performance", type: "Scheduled", format: "PDF", frequency: "Weekly", lastRun: "2024-11-18" },
];

export default function ReportsBuilder() {
  return (
    <PageTemplate
      title="Report Builder"
      description="Build custom reports with flexible filters and export options"
      data={sampleData}
      columns={[
        { key: "id", label: "Report ID" },
        { key: "name", label: "Report Name" },
        { 
          key: "type", 
          label: "Type",
          render: (value) => (
            <Badge variant={value === "Scheduled" ? "default" : "secondary"}>{value}</Badge>
          )
        },
        { key: "format", label: "Format" },
        { key: "frequency", label: "Frequency" },
        { key: "lastRun", label: "Last Run" },
      ]}
      stats={[
        { label: "Total Reports", value: "3", icon: FileText },
        { label: "Scheduled", value: "2", icon: Filter },
        { label: "Exports This Month", value: "45", icon: Download },
      ]}
      addButtonText="Build Report"
      addButtonHref="/reports/builder/new"
    />
  );
}
