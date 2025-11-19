import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Eye } from "lucide-react";

const sampleData = [
  { id: "DB-001", name: "Regional Performance", widgets: 8, owner: "Admin", views: 1234, lastUpdated: "2024-11-18" },
  { id: "DB-002", name: "Farmer Compliance Overview", widgets: 6, owner: "Manager", views: 892, lastUpdated: "2024-11-17" },
  { id: "DB-003", name: "Harvest Analytics", widgets: 12, owner: "Admin", views: 2145, lastUpdated: "2024-11-19" },
];

export default function ReportsDashboards() {
  return (
    <PageTemplate
      title="Custom Dashboards"
      description="Create and manage personalized dashboards with custom widgets"
      data={sampleData}
      columns={[
        { key: "id", label: "Dashboard ID" },
        { key: "name", label: "Dashboard Name" },
        { key: "widgets", label: "Widgets" },
        { key: "owner", label: "Owner" },
        { key: "views", label: "Views" },
        { key: "lastUpdated", label: "Last Updated" },
      ]}
      stats={[
        { label: "Total Dashboards", value: "3", icon: BarChart3 },
        { label: "Total Widgets", value: "26", icon: Users },
        { label: "Total Views", value: "4,271", icon: Eye },
      ]}
      addButtonText="Create Dashboard"
      addButtonHref="/reports/dashboards/new"
    />
  );
}
