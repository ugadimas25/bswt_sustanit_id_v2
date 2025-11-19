import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Leaf } from "lucide-react";

const sampleData = [
  { id: "ORG-001", farmerName: "John Kamau", farmerId: "F-1234", status: "Certified Organic", certBody: "KOAN", certDate: "2024-05-10", transitionPeriod: "Completed", region: "Central" },
  { id: "ORG-002", farmerName: "Mary Wanjiku", farmerId: "F-1567", status: "In Transition", certBody: "IFOAM", certDate: "-", transitionPeriod: "Year 2 of 3", region: "Northern" },
  { id: "ORG-003", farmerName: "Sarah Njeri", farmerId: "F-2789", status: "Certified Organic", certBody: "USDA", certDate: "2024-06-15", transitionPeriod: "Completed", region: "Northern" },
  { id: "ORG-004", farmerName: "James Kiprop", farmerId: "F-3012", status: "Certified Organic", certBody: "EU Organic", certDate: "2024-07-20", transitionPeriod: "Completed", region: "Eastern" },
  { id: "ORG-005", farmerName: "Daniel Koech", farmerId: "F-3678", status: "Application Pending", certBody: "-", certDate: "-", transitionPeriod: "Not Started", region: "Central" },
];

export default function WorkflowOrganic() {
  return (
    <PageTemplate
      title="Organic Certification Workflow"
      description="Track organic certification status, transition periods, and compliance with organic standards"
      data={sampleData}
      columns={[
        { key: "id", label: "Organic ID" },
        { key: "farmerName", label: "Farmer Name" },
        { key: "farmerId", label: "Farmer ID" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => {
            const isCertified = value === "Certified Organic";
            return (
              <Badge variant={isCertified ? "default" : "secondary"}>
                {isCertified ? <CheckCircle className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
                {value}
              </Badge>
            );
          }
        },
        { key: "certBody", label: "Certification Body" },
        { key: "certDate", label: "Certification Date" },
        { key: "transitionPeriod", label: "Transition Status" },
        { key: "region", label: "Region" },
      ]}
      stats={[
        { label: "Certified Organic", value: "3", icon: CheckCircle },
        { label: "In Transition", value: "1", icon: Leaf },
        { label: "Applications", value: "1", icon: XCircle },
      ]}
      addButtonText="Start Organic Application"
      addButtonHref="/workflow/organic/new"
    />
  );
}
