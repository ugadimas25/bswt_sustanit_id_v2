import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Award } from "lucide-react";

const sampleData = [
  { id: "STF-001", name: "James Anderson", role: "Field Officer", department: "Operations", region: "Central", status: "Active" },
  { id: "STF-002", name: "Maria Garcia", role: "Compliance Manager", department: "Quality", region: "Northern", status: "Active" },
  { id: "STF-003", name: "David Lee", role: "Training Coordinator", department: "Training", region: "Eastern", status: "Active" },
];

export default function AdminStaff() {
  return (
    <PageTemplate
      title="Staff Management"
      description="Manage staff members, roles, and assignments"
      data={sampleData}
      columns={[
        { key: "id", label: "Staff ID" },
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
        { key: "department", label: "Department" },
        { key: "region", label: "Region" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Active" ? "default" : "secondary"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Total Staff", value: "3", icon: Users },
        { label: "Departments", value: "3", icon: Briefcase },
        { label: "Active Staff", value: "3", icon: Award },
      ]}
      addButtonText="Add Staff"
      addButtonHref="/admin/staff/new"
    />
  );
}
