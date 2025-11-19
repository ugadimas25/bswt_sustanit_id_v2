import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Layers } from "lucide-react";

const sampleData = [
  { id: "RG-001", name: "Central Region", country: "Uganda", districts: 15, farmers: 234, active: true },
  { id: "RG-002", name: "Eastern Region", country: "Uganda", districts: 12, farmers: 189, active: true },
  { id: "RG-003", name: "Western Region", country: "Kenya", districts: 18, farmers: 312, active: true },
];

export default function AdminRegions() {
  return (
    <PageTemplate
      title="Region Settings"
      description="Configure regions and their administrative boundaries"
      data={sampleData}
      columns={[
        { key: "id", label: "Region ID" },
        { key: "name", label: "Region Name" },
        { key: "country", label: "Country" },
        { key: "districts", label: "Districts" },
        { key: "farmers", label: "Farmers" },
        { 
          key: "active", 
          label: "Status",
          render: (value) => (
            <Badge variant={value ? "default" : "secondary"}>{value ? "Active" : "Inactive"}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Total Regions", value: "3", icon: MapPin },
        { label: "Total Districts", value: "45", icon: Layers },
        { label: "Total Farmers", value: "735", icon: Users },
      ]}
      addButtonText="Add Region"
      addButtonHref="/admin/regions/new"
    />
  );
}
