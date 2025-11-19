import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Building2, Package, DollarSign } from "lucide-react";

const sampleData = [
  { id: "BUY-001", name: "Global Coffee Exports", contact: "John Smith", volume: 45000, orders: 12, status: "Active" },
  { id: "BUY-002", name: "Premium Cocoa Ltd", contact: "Sarah Johnson", volume: 32000, orders: 8, status: "Active" },
  { id: "BUY-003", name: "Tea Trading Co", contact: "Michael Brown", volume: 18000, orders: 5, status: "Inactive" },
];

export default function AdminBuyers() {
  return (
    <PageTemplate
      title="Buyers Management"
      description="Manage buyer relationships and purchase orders"
      data={sampleData}
      columns={[
        { key: "id", label: "Buyer ID" },
        { key: "name", label: "Company Name" },
        { key: "contact", label: "Contact Person" },
        { key: "volume", label: "Total Volume (kg)" },
        { key: "orders", label: "Orders" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Active" ? "default" : "secondary"}>{value}</Badge>
          )
        },
      ]}
      stats={[
        { label: "Active Buyers", value: "2", icon: Building2 },
        { label: "Total Volume", value: "95,000 kg", icon: Package },
        { label: "Total Orders", value: "25", icon: DollarSign },
      ]}
      addButtonText="Add Buyer"
      addButtonHref="/admin/buyers/new"
    />
  );
}
