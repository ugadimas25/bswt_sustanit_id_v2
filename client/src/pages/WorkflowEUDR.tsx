import { PageTemplate } from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, MapPin } from "lucide-react";

const sampleData = [
  { id: "EUDR-001", farmerName: "John Kamau", farmerId: "F-1234", deforestationRisk: "No Risk", gpsVerified: "Yes", dueDate: "2024-12-31", plotArea: "4.5 ha", complianceStatus: "Compliant", region: "Central" },
  { id: "EUDR-002", farmerName: "Mary Wanjiku", farmerId: "F-1567", deforestationRisk: "No Risk", gpsVerified: "Yes", dueDate: "2024-12-31", plotArea: "6.2 ha", complianceStatus: "Compliant", region: "Northern" },
  { id: "EUDR-003", farmerName: "Peter Omondi", farmerId: "F-1890", deforestationRisk: "Medium Risk", gpsVerified: "Pending", dueDate: "2024-12-31", plotArea: "3.8 ha", complianceStatus: "Action Required", region: "Western" },
  { id: "EUDR-004", farmerName: "Grace Achieng", farmerId: "F-2134", deforestationRisk: "High Risk", gpsVerified: "No", dueDate: "2024-12-31", plotArea: "5.1 ha", complianceStatus: "Non-Compliant", region: "Eastern" },
  { id: "EUDR-005", farmerName: "David Mwangi", farmerId: "F-2456", deforestationRisk: "No Risk", gpsVerified: "Yes", dueDate: "2024-12-31", plotArea: "7.3 ha", complianceStatus: "Compliant", region: "Central" },
];

export default function WorkflowEUDR() {
  return (
    <PageTemplate
      title="EUDR Regulation Compliance Workflow"
      description="Track EU Deforestation Regulation compliance, GPS verification, and deforestation risk assessment"
      data={sampleData}
      columns={[
        { key: "id", label: "EUDR ID" },
        { key: "farmerName", label: "Farmer Name" },
        { key: "farmerId", label: "Farmer ID" },
        { 
          key: "deforestationRisk", 
          label: "Deforestation Risk",
          render: (value: any) => {
            const variants: Record<string, any> = {
              "No Risk": "default",
              "Medium Risk": "secondary",
              "High Risk": "destructive"
            };
            return <Badge variant={variants[value as string] || "outline"}>{value}</Badge>;
          }
        },
        { 
          key: "gpsVerified", 
          label: "GPS Verified",
          render: (value: any) => (
            <Badge variant={value === "Yes" ? "default" : "outline"}>
              {value === "Yes" ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
              {value}
            </Badge>
          )
        },
        { 
          key: "complianceStatus", 
          label: "Compliance Status",
          render: (value: any) => {
            const variants: Record<string, any> = {
              "Compliant": "default",
              "Action Required": "secondary",
              "Non-Compliant": "destructive"
            };
            return <Badge variant={variants[value as string] || "outline"}>{value}</Badge>;
          }
        },
        { key: "plotArea", label: "Plot Area" },
        { key: "dueDate", label: "Due Date" },
        { key: "region", label: "Region" },
      ]}
      stats={[
        { label: "Compliant Farms", value: "3", icon: CheckCircle },
        { label: "Action Required", value: "1", icon: AlertTriangle },
        { label: "GPS Verified", value: "3", icon: MapPin },
      ]}
      addButtonText="Add EUDR Assessment"
      addButtonHref="/workflow/eudr/new"
    />
  );
}
