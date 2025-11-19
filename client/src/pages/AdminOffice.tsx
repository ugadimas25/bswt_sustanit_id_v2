import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, FileText } from "lucide-react";

const sampleData = [
  { id: "OFF-001", title: "Office Supplies Order", category: "Procurement", date: "2024-11-15", assignee: "Admin", status: "Pending" },
  { id: "OFF-002", title: "Equipment Maintenance", category: "Facilities", date: "2024-11-16", assignee: "Manager", status: "In Progress" },
  { id: "OFF-003", title: "Staff Meeting Minutes", category: "Meetings", date: "2024-11-18", assignee: "Secretary", status: "Completed" },
];

export default function AdminOffice() {
  return (
    <PageTemplate
      title="Office Matters"
      description="Manage office-related tasks, facilities, and administrative items"
      data={sampleData}
      columns={[
        { key: "id", label: "Matter ID" },
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        { key: "date", label: "Date" },
        { key: "assignee", label: "Assignee" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Completed" ? "default" : value === "In Progress" ? "secondary" : "outline"}>
              {value}
            </Badge>
          )
        },
      ]}
      stats={[
        { label: "Total Matters", value: "3", icon: Building },
        { label: "Pending", value: "1", icon: Calendar },
        { label: "Completed", value: "1", icon: FileText },
      ]}
      addButtonText="New Matter"
      addButtonHref="/admin/office/new"
    />
  );
}
