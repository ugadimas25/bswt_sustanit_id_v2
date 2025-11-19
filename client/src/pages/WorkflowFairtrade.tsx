import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield } from "lucide-react";

const sampleData = [
  { id: "FT-001", farmerName: "John Kamau", farmerId: "F-1234", status: "Certified", certDate: "2024-01-15", expiryDate: "2027-01-15", premiumEarned: "$2,400", region: "Central" },
  { id: "FT-002", farmerName: "Mary Wanjiku", farmerId: "F-1567", status: "Certified", certDate: "2024-02-20", expiryDate: "2027-02-20", premiumEarned: "$3,100", region: "Northern" },
  { id: "FT-003", farmerName: "Peter Omondi", farmerId: "F-1890", status: "Pending Review", certDate: "-", expiryDate: "-", premiumEarned: "$0", region: "Western" },
  { id: "FT-004", farmerName: "Grace Achieng", farmerId: "F-2134", status: "Certified", certDate: "2024-03-10", expiryDate: "2027-03-10", premiumEarned: "$2,850", region: "Eastern" },
  { id: "FT-005", farmerName: "David Mwangi", farmerId: "F-2456", status: "Certified", certDate: "2024-04-05", expiryDate: "2027-04-05", premiumEarned: "$4,200", region: "Central" },
];

export default function WorkflowFairtrade() {
  return (
    <PageTemplate
      title="Fairtrade Certification Workflow"
      description="Manage Fairtrade certification status and premium tracking for fair trade compliance"
      data={sampleData}
      columns={[
        { key: "id", label: "Fairtrade ID" },
        { key: "farmerName", label: "Farmer Name" },
        { key: "farmerId", label: "Farmer ID" },
        { 
          key: "status", 
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Certified" ? "default" : "secondary"}>
              {value === "Certified" ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
              {value}
            </Badge>
          )
        },
        { key: "certDate", label: "Certification Date" },
        { key: "expiryDate", label: "Expiry Date" },
        { key: "premiumEarned", label: "Premium Earned" },
        { key: "region", label: "Region" },
      ]}
      stats={[
        { label: "Certified Farmers", value: "4", icon: CheckCircle },
        { label: "Pending Review", value: "1", icon: Clock },
        { label: "Total Premiums", value: "$12,550", icon: Shield },
      ]}
      addButtonText="Add Fairtrade Application"
      addButtonHref="/workflow/fairtrade/new"
    />
  );
}
