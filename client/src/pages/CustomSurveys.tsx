import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { FileText, Target, Users } from "lucide-react";

const sampleData = [
  { id: "CS-001", name: "Certification Compliance Survey", category: "Certification", status: "Active", responses: 245, completion: "85%" },
  { id: "CS-002", name: "Climate Impact Assessment", category: "Climate", status: "Active", responses: 189, completion: "72%" },
  { id: "CS-003", name: "Compliance Audit Q2 2024", category: "Compliance", status: "Completed", responses: 312, completion: "100%" },
];

export default function CustomSurveys() {
  return (
    <PageTemplate
      title="Custom Surveys"
      description="Build and manage custom surveys for certification, compliance, and climate assessments"
      data={sampleData}
      columns={[
        { key: "id", label: "Survey ID" },
        { key: "name", label: "Survey Name" },
        { key: "category", label: "Category" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Active" ? "default" : "secondary"}>{value}</Badge>
          )
        },
        { key: "responses", label: "Responses" },
        { key: "completion", label: "Completion Rate" },
      ]}
      stats={[
        { label: "Active Surveys", value: "2", icon: FileText },
        { label: "Total Responses", value: "746", icon: Users },
        { label: "Avg Completion", value: "86%", icon: Target },
      ]}
      addButtonText="Create Survey"
      addButtonHref="/surveys/custom/new"
    />
  );
}
