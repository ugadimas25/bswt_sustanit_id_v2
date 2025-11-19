import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Users } from "lucide-react";

const sampleData = [
  { id: "CN-001", name: "Uganda", code: "UG", regions: 8, farmers: 456, active: true },
  { id: "CN-002", name: "Kenya", code: "KE", regions: 12, farmers: 789, active: true },
  { id: "CN-003", name: "Tanzania", code: "TZ", regions: 6, farmers: 234, active: false },
];

export default function AdminCountry() {
  return (
    <PageTemplate
      title="Country Settings"
      description="Manage country configurations and regional structures"
      data={sampleData}
      columns={[
        { key: "id", label: "Country ID" },
        { key: "name", label: "Country Name" },
        { key: "code", label: "ISO Code" },
        { key: "regions", label: "Regions" },
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
        { label: "Active Countries", value: "2", icon: Globe },
        { label: "Total Regions", value: "26", icon: MapPin },
        { label: "Total Farmers", value: "1,479", icon: Users },
      ]}
      addButtonText="Add Country"
      addButtonHref="/admin/country/new"
    />
  );
}
