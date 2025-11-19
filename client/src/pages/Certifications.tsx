import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  Award, Building2, Calendar, Shield, 
  CheckCircle2, AlertCircle, FileCheck
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { EnhancedDataTable, Column, AIInsight } from "@/components/EnhancedDataTable";

const mockCertifications = [
  { 
    id: "CERT-001",
    code: "RSPO", 
    name: "Roundtable on Sustainable Palm Oil", 
    issuer: "RSPO International", 
    validityPeriod: "5 years", 
    auditFrequency: "Annual",
    certifiedFarmers: 287,
    certifiedArea: 3450,
    lastAudit: "15/03/2024",
    nextAudit: "15/03/2025",
    complianceRate: 98,
    status: "Active",
    requiresGPS: true,
  },
  { 
    id: "CERT-002",
    code: "EUDR", 
    name: "EU Deforestation Regulation", 
    issuer: "European Union", 
    validityPeriod: "Ongoing", 
    auditFrequency: "Continuous",
    certifiedFarmers: 312,
    certifiedArea: 3890,
    lastAudit: "10/11/2024",
    nextAudit: "10/12/2024",
    complianceRate: 96,
    status: "Active",
    requiresGPS: true,
  },
  { 
    id: "CERT-003",
    code: "ISPO", 
    name: "Indonesian Sustainable Palm Oil", 
    issuer: "Indonesian Government", 
    validityPeriod: "3 years", 
    auditFrequency: "Annual",
    certifiedFarmers: 156,
    certifiedArea: 1950,
    lastAudit: "20/08/2024",
    nextAudit: "20/08/2025",
    complianceRate: 94,
    status: "Active",
    requiresGPS: false,
  },
  { 
    id: "CERT-004",
    code: "ORGANIC", 
    name: "Organic Certification", 
    issuer: "International Organic Alliance", 
    validityPeriod: "1 year", 
    auditFrequency: "Biannual",
    certifiedFarmers: 45,
    certifiedArea: 280,
    lastAudit: "05/09/2024",
    nextAudit: "05/03/2025",
    complianceRate: 100,
    status: "Active",
    requiresGPS: false,
  },
  { 
    id: "CERT-005",
    code: "FAIR-TRADE", 
    name: "Fair Trade Certification", 
    issuer: "Fairtrade International", 
    validityPeriod: "3 years", 
    auditFrequency: "Biennial",
    certifiedFarmers: 89,
    certifiedArea: 620,
    lastAudit: "12/06/2023",
    nextAudit: "12/06/2025",
    complianceRate: 92,
    status: "Active",
    requiresGPS: false,
  },
  { 
    id: "CERT-006",
    code: "RAINFOREST", 
    name: "Rainforest Alliance Certified", 
    issuer: "Rainforest Alliance", 
    validityPeriod: "3 years", 
    auditFrequency: "Annual",
    certifiedFarmers: 124,
    certifiedArea: 1150,
    lastAudit: "18/01/2024",
    nextAudit: "18/01/2025",
    complianceRate: 97,
    status: "Active",
    requiresGPS: true,
  },
];

const columns: Column[] = [
  {
    key: "code",
    label: "Code",
    sortable: true,
    render: (value, row) => (
      <div className="flex items-center gap-2">
        <Award className="h-4 w-4 text-primary" />
        <span className="font-mono font-medium text-primary hover:underline cursor-pointer" data-testid={`link-cert-${value}`}>
          {value}
        </span>
      </div>
    ),
  },
  {
    key: "name",
    label: "Certification Name",
    sortable: true,
    width: "w-64",
  },
  {
    key: "issuer",
    label: "Issuing Body",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <Building2 className="h-3 w-3 text-muted-foreground" />
        <span className="text-sm">{value}</span>
      </div>
    ),
  },
  {
    key: "certifiedFarmers",
    label: "Farmers",
    sortable: true,
    render: (value) => (
      <span className="font-medium">{value.toLocaleString()}</span>
    ),
  },
  {
    key: "certifiedArea",
    label: "Area (ha)",
    sortable: true,
    render: (value) => (
      <span className="font-medium">{value.toLocaleString()}</span>
    ),
  },
  {
    key: "complianceRate",
    label: "Compliance",
    sortable: true,
    render: (value) => (
      <Badge 
        variant={
          value >= 98 ? "secondary" :
          value >= 95 ? "outline" :
          "destructive"
        }
      >
        {value === 100 ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <AlertCircle className="h-3 w-3 mr-1" />}
        {value}%
      </Badge>
    ),
  },
  {
    key: "nextAudit",
    label: "Next Audit",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <Calendar className="h-3 w-3 text-muted-foreground" />
        <span className="text-sm">{value}</span>
      </div>
    ),
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value) => (
      <Badge variant="secondary">
        <Shield className="h-3 w-3 mr-1" />
        {value}
      </Badge>
    ),
  },
];

const stats = [
  {
    label: "Active Certifications",
    value: "6",
    change: 0,
    trend: "neutral" as const,
    icon: Award,
  },
  {
    label: "Certified Farmers",
    value: "1,013",
    change: 15,
    trend: "up" as const,
    icon: CheckCircle2,
  },
  {
    label: "Certified Area",
    value: "11,340 ha",
    change: 12,
    trend: "up" as const,
    icon: Shield,
  },
  {
    label: "Avg Compliance",
    value: "96.2%",
    change: 3,
    trend: "up" as const,
    icon: FileCheck,
  },
];

const aiInsights: AIInsight[] = [
  {
    type: "recommendation",
    message: "EUDR compliance rate at 96% with 4% of farmers pending GPS polygon updates. Prioritize Western and Central regions (87 farms) for GPS mapping to reach 100% before December audit.",
    severity: "high",
  },
  {
    type: "anomaly",
    message: "Fair Trade certification showing 92% compliance - lower than other schemes. 7 farmers in Eastern Province need updated fair labor documentation and cooperative membership records.",
    severity: "medium",
  },
  {
    type: "prediction",
    message: "Based on current certification rates, expect 125 additional farmers to achieve RSPO certification by Q1 2025. Training program effectiveness increased 18% this quarter.",
    severity: "low",
  },
  {
    type: "trend",
    message: "Organic certification maintains 100% compliance with zero non-conformances. Strong performance in Southern Region - consider expanding organic program to 75-100 additional farmers.",
    severity: "low",
  },
];

export default function Certifications() {
  const [, setLocation] = useLocation();

  const rowActions = (row: any) => [
    {
      label: "View Details",
      onClick: () => setLocation(`/certifications/${row.id}`),
    },
    {
      label: "View Certified Farmers",
      onClick: () => console.log("View farmers for", row.code),
    },
    {
      label: "Audit Schedule",
      onClick: () => console.log("View audit schedule", row.code),
    },
    {
      label: "Compliance Report",
      onClick: () => console.log("Compliance report", row.code),
    },
    {
      label: "Download Certificate",
      onClick: () => console.log("Download certificate", row.code),
    },
  ];

  return (
    <div className="space-y-6" data-testid="page-certifications">
      {/* Breadcrumb and Actions Header */}
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/certifications">Certifications</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Certification Schemes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" data-testid="button-actions">
              Actions
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem 
              data-testid="action-add-certification"
              onClick={() => console.log("Add certification")}
            >
              <Award className="h-4 w-4 mr-2" />
              Add Certification
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-audit-calendar"
              onClick={() => console.log("Audit calendar")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Audit Calendar
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-compliance-dashboard"
              onClick={() => console.log("Compliance dashboard")}
            >
              <FileCheck className="h-4 w-4 mr-2" />
              Compliance Dashboard
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <EnhancedDataTable
        title="Certification Schemes"
        description="Manage certification standards, compliance tracking, and audit schedules across all programs"
        data={mockCertifications}
        columns={columns}
        stats={stats}
        aiInsights={aiInsights}
        searchable
        filterable
        exportable
        bulkActions
        rowActions={rowActions}
        onRowClick={(row) => setLocation(`/certifications/${row.id}`)}
      />
    </div>
  );
}
