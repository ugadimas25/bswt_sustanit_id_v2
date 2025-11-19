import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Database, Settings, Code } from "lucide-react";

const sampleData = [
  { id: "CF-001", name: "Organic Certification Number", fieldType: "Text", category: "Purchase", required: true, usage: 145 },
  { id: "CF-002", name: "Processing Temperature", fieldType: "Number", category: "Processing", required: true, usage: 89 },
  { id: "CF-003", name: "Shipment Container Type", fieldType: "Dropdown", category: "Shipment", required: false, usage: 234 },
];

export default function TraceabilityCustomFields() {
  return (
    <PageTemplate
      title="Custom Transaction Fields"
      description="Define custom fields for purchase, processing, and shipment transactions"
      data={sampleData}
      columns={[
        { key: "id", label: "Field ID" },
        { key: "name", label: "Field Name" },
        { key: "fieldType", label: "Type" },
        { key: "category", label: "Category" },
        { 
          key: "required", 
          label: "Required",
          render: (value) => (
            <Badge variant={value ? "default" : "secondary"}>{value ? "Yes" : "No"}</Badge>
          )
        },
        { key: "usage", label: "Usage Count" },
      ]}
      stats={[
        { label: "Total Fields", value: "3", icon: Database },
        { label: "Active Fields", value: "3", icon: Settings },
        { label: "Total Usage", value: "468", icon: Code },
      ]}
      addButtonText="Add Custom Field"
      addButtonHref="/traceability/custom-fields/new"
    />
  );
}
