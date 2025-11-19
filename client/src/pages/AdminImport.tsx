import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

const sampleData = [
  { id: "IMP-001", filename: "farmers_batch_1.csv", records: 145, imported: 145, failed: 0, date: "2024-11-15", status: "Completed" },
  { id: "IMP-002", filename: "fields_data.xlsx", records: 89, imported: 87, failed: 2, date: "2024-11-16", status: "Completed with Errors" },
  { id: "IMP-003", filename: "farms_update.csv", records: 62, imported: 0, failed: 0, date: "2024-11-18", status: "Processing" },
];

export default function AdminImport() {
  return (
    <PageTemplate
      title="Data Import (AI-Assisted)"
      description="Upload and import farmer and farm data with AI-powered validation"
      data={sampleData}
      columns={[
        { key: "id", label: "Import ID" },
        { key: "filename", label: "Filename" },
        { key: "records", label: "Total Records" },
        { key: "imported", label: "Imported" },
        { key: "failed", label: "Failed" },
        { key: "date", label: "Import Date" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Completed" ? "default" : value === "Processing" ? "secondary" : "outline"}>
              {value}
            </Badge>
          )
        },
      ]}
      stats={[
        { label: "Total Imports", value: "3", icon: Upload },
        { label: "Records Imported", value: "232", icon: CheckCircle },
        { label: "Failed Records", value: "2", icon: AlertCircle },
      ]}
      addButtonText="Upload File"
      addButtonHref="/admin/import/upload"
    />
  );
}
