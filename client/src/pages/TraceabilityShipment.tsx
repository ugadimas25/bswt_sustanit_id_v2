import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Package } from "lucide-react";

const sampleData = [
  { id: "SH-001", container: "CONT-2024-001", product: "Coffee", quantity: 1000, destination: "Port of Rotterdam", date: "2024-11-18", status: "In Transit" },
  { id: "SH-002", container: "CONT-2024-002", product: "Cocoa", quantity: 750, destination: "Port of Hamburg", date: "2024-11-20", status: "Scheduled" },
  { id: "SH-003", container: "CONT-2024-003", product: "Tea", quantity: 500, destination: "Port of Antwerp", date: "2024-11-14", status: "Delivered" },
];

export default function TraceabilityShipment() {
  return (
    <PageTemplate
      title="Shipment Transactions"
      description="Manage and track shipment operations and deliveries"
      data={sampleData}
      columns={[
        { key: "id", label: "Shipment ID" },
        { key: "container", label: "Container" },
        { key: "product", label: "Product" },
        { key: "quantity", label: "Quantity (kg)" },
        { key: "destination", label: "Destination" },
        { key: "date", label: "Ship Date" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Delivered" ? "default" : value === "In Transit" ? "secondary" : "outline"}>
              {value}
            </Badge>
          )
        },
      ]}
      stats={[
        { label: "Active Shipments", value: "1", icon: Truck },
        { label: "Total Quantity", value: "2,250 kg", icon: Package },
        { label: "Destinations", value: "3", icon: MapPin },
      ]}
      addButtonText="New Shipment"
      addButtonHref="/traceability-shipment/new"
    />
  );
}
