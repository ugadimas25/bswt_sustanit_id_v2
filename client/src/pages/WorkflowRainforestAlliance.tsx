import { EnhancedDataTable, Column } from "@/components/EnhancedDataTable";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

interface RainforestAllianceRecord {
  id: string;
  farmerName: string;
  farmerId: string;
  certificationStatus: string;
  auditDate: string;
  expiryDate: string;
  complianceScore: number;
  criticalNonCompliances: number;
  majorNonCompliances: number;
  minorNonCompliances: number;
  region: string;
  hectares: number;
  lastInspection: string;
}

const sampleData: RainforestAllianceRecord[] = [
  { id: "RA-001", farmerName: "John Kamau", farmerId: "F-1234", certificationStatus: "Certified", auditDate: "2024-03-15", expiryDate: "2027-03-15", complianceScore: 95, criticalNonCompliances: 0, majorNonCompliances: 1, minorNonCompliances: 3, region: "Central", hectares: 4.5, lastInspection: "2024-10-20" },
  { id: "RA-002", farmerName: "Mary Wanjiku", farmerId: "F-1567", certificationStatus: "Certified", auditDate: "2024-04-20", expiryDate: "2027-04-20", complianceScore: 98, criticalNonCompliances: 0, majorNonCompliances: 0, minorNonCompliances: 2, region: "Northern", hectares: 6.2, lastInspection: "2024-11-01" },
  { id: "RA-003", farmerName: "Peter Omondi", farmerId: "F-1890", certificationStatus: "Pending Audit", auditDate: "2024-11-25", expiryDate: "-", complianceScore: 0, criticalNonCompliances: 0, majorNonCompliances: 0, minorNonCompliances: 0, region: "Western", hectares: 3.8, lastInspection: "2024-08-15" },
  { id: "RA-004", farmerName: "Grace Achieng", farmerId: "F-2134", certificationStatus: "Suspended", auditDate: "2023-12-10", expiryDate: "2026-12-10", complianceScore: 72, criticalNonCompliances: 2, majorNonCompliances: 5, minorNonCompliances: 8, region: "Eastern", hectares: 5.1, lastInspection: "2024-09-05" },
  { id: "RA-005", farmerName: "David Mwangi", farmerId: "F-2456", certificationStatus: "In Corrective Action", auditDate: "2024-02-28", expiryDate: "2027-02-28", complianceScore: 85, criticalNonCompliances: 0, majorNonCompliances: 3, minorNonCompliances: 4, region: "Central", hectares: 7.3, lastInspection: "2024-10-30" },
  { id: "RA-006", farmerName: "Sarah Njeri", farmerId: "F-2789", certificationStatus: "Certified", auditDate: "2024-05-10", expiryDate: "2027-05-10", complianceScore: 92, criticalNonCompliances: 0, majorNonCompliances: 2, minorNonCompliances: 5, region: "Northern", hectares: 4.9, lastInspection: "2024-11-05" },
  { id: "RA-007", farmerName: "James Kiprop", farmerId: "F-3012", certificationStatus: "Certified", auditDate: "2024-06-15", expiryDate: "2027-06-15", complianceScore: 97, criticalNonCompliances: 0, majorNonCompliances: 0, minorNonCompliances: 1, region: "Eastern", hectares: 8.2, lastInspection: "2024-11-10" },
  { id: "RA-008", farmerName: "Lucy Wambui", farmerId: "F-3345", certificationStatus: "Not Certified", auditDate: "-", expiryDate: "-", complianceScore: 0, criticalNonCompliances: 0, majorNonCompliances: 0, minorNonCompliances: 0, region: "Western", hectares: 2.5, lastInspection: "2024-07-20" },
  { id: "RA-009", farmerName: "Daniel Koech", farmerId: "F-3678", certificationStatus: "Certified", auditDate: "2024-07-20", expiryDate: "2027-07-20", complianceScore: 94, criticalNonCompliances: 0, majorNonCompliances: 1, minorNonCompliances: 2, region: "Central", hectares: 5.7, lastInspection: "2024-11-12" },
  { id: "RA-010", farmerName: "Elizabeth Nyambura", farmerId: "F-4001", certificationStatus: "Pending Audit", auditDate: "2024-12-01", expiryDate: "-", complianceScore: 0, criticalNonCompliances: 0, majorNonCompliances: 0, minorNonCompliances: 0, region: "Northern", hectares: 6.8, lastInspection: "2024-10-25" },
];

const columns: Column[] = [
  { 
    key: "id", 
    label: "Certification ID",
    sortable: true,
  },
  { 
    key: "farmerName", 
    label: "Farmer Name",
    sortable: true,
  },
  { 
    key: "farmerId", 
    label: "Farmer ID",
    sortable: true,
  },
  { 
    key: "certificationStatus", 
    label: "Status",
    sortable: true,
    render: (value: any) => {
      const variants: Record<string, { variant: any, icon: any }> = {
        "Certified": { variant: "default", icon: CheckCircle },
        "Pending Audit": { variant: "secondary", icon: Clock },
        "Suspended": { variant: "destructive", icon: XCircle },
        "In Corrective Action": { variant: "secondary", icon: AlertTriangle },
        "Not Certified": { variant: "outline", icon: XCircle },
      };
      const config = variants[value as string] || { variant: "outline", icon: AlertTriangle };
      const Icon = config.icon;
      return (
        <Badge variant={config.variant as any} className="gap-1">
          <Icon className="h-3 w-3" />
          {value}
        </Badge>
      );
    }
  },
  { 
    key: "complianceScore", 
    label: "Compliance Score",
    sortable: true,
    render: (value: any) => {
      const score = Number(value);
      if (score === 0) return <span className="text-muted-foreground">-</span>;
      const color = score >= 90 ? "text-green-600 dark:text-green-400" : score >= 80 ? "text-amber-600 dark:text-amber-400" : "text-red-600 dark:text-red-400";
      return <span className={`font-semibold ${color}`}>{score}%</span>;
    }
  },
  { 
    key: "criticalNonCompliances", 
    label: "Critical",
    sortable: true,
    render: (value: any) => {
      const count = Number(value);
      return count > 0 ? <Badge variant="destructive">{count}</Badge> : <span className="text-muted-foreground">0</span>;
    }
  },
  { 
    key: "majorNonCompliances", 
    label: "Major",
    sortable: true,
    render: (value: any) => {
      const count = Number(value);
      return count > 0 ? <Badge variant="secondary">{count}</Badge> : <span className="text-muted-foreground">0</span>;
    }
  },
  { 
    key: "minorNonCompliances", 
    label: "Minor",
    sortable: true,
    render: (value: any) => {
      const count = Number(value);
      return count > 0 ? <Badge variant="outline">{count}</Badge> : <span className="text-muted-foreground">0</span>;
    }
  },
  { 
    key: "region", 
    label: "Region",
    sortable: true,
  },
  { 
    key: "hectares", 
    label: "Hectares",
    sortable: true,
  },
  { 
    key: "auditDate", 
    label: "Audit Date",
    sortable: true,
  },
  { 
    key: "expiryDate", 
    label: "Expiry Date",
    sortable: true,
  },
  { 
    key: "lastInspection", 
    label: "Last Inspection",
    sortable: true,
  },
];

const aiInsights = [
  {
    type: "anomaly" as const,
    message: "1 farmer (Grace Achieng) has critical non-compliances requiring immediate corrective action. Suspension may be lifted after successful re-audit scheduled for Dec 15."
  },
  {
    type: "recommendation" as const,
    message: "2 farmers pending audit in next 2 weeks. Ensure pre-audit documentation is complete and self-assessments submitted to avoid delays."
  },
  {
    type: "trend" as const,
    message: "Average compliance score is 92.3% among certified farmers - exceeding Rainforest Alliance minimum requirement of 80%. Focus on reducing minor non-compliances through targeted training."
  },
  {
    type: "prediction" as const,
    message: "80% certification rate represents strong Rainforest Alliance adoption. 3 farmers completing corrective actions expected to achieve full compliance by Q1 2025."
  },
];

export default function WorkflowRainforestAlliance() {
  return (
    <EnhancedDataTable
      title="Rainforest Alliance Certification Workflow"
      description="Track and manage Rainforest Alliance certification status, compliance scores, and audit schedules"
      data={sampleData}
      columns={columns}
      aiInsights={aiInsights}
    />
  );
}
