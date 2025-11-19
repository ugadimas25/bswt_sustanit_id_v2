import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  Package, Users, Scale, CheckCircle2, 
  Truck, QrCode, FileCheck, Link2
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

const mockLots = [
  { 
    id: "LOT-1291-240625",
    lotNumber: "LOT-1291-240625", 
    containerId: "AASA (Mill)", 
    farmers: 12, 
    totalWeight: 7850,
    harvestDate: "24/06/2024", 
    processingDate: "25/06/2024", 
    certifications: ["RSPO", "EUDR"],
    status: "Processed",
    origin: "Western Province",
    deforestationScore: 100,
  },
  { 
    id: "LOT-1290-240624",
    lotNumber: "LOT-1290-240624", 
    containerId: "AASA (Mill)", 
    farmers: 8, 
    totalWeight: 5920,
    harvestDate: "23/06/2024", 
    processingDate: "24/06/2024", 
    certifications: ["RSPO"],
    status: "Processed",
    origin: "Western Province",
    deforestationScore: 100,
  },
  { 
    id: "LOT-1289-240623",
    lotNumber: "LOT-1289-240623", 
    containerId: "NUKU (Collection)", 
    farmers: 15, 
    totalWeight: 9450,
    harvestDate: "22/06/2024", 
    processingDate: "23/06/2024", 
    certifications: ["RSPO", "EUDR"],
    status: "In Transit",
    origin: "Central Region",
    deforestationScore: 100,
  },
  { 
    id: "LOT-1288-240622",
    lotNumber: "LOT-1288-240622", 
    containerId: "EASTERN (Mill)", 
    farmers: 10, 
    totalWeight: 6750,
    harvestDate: "21/06/2024", 
    processingDate: "22/06/2024", 
    certifications: ["RSPO", "EUDR", "ISPO"],
    status: "Processed",
    origin: "Eastern Province",
    deforestationScore: 98,
  },
  { 
    id: "LOT-1287-240621",
    lotNumber: "LOT-1287-240621", 
    containerId: "AASA (Mill)", 
    farmers: 18, 
    totalWeight: 11250,
    harvestDate: "20/06/2024", 
    processingDate: "21/06/2024", 
    certifications: ["RSPO"],
    status: "Shipped",
    origin: "Western Province",
    deforestationScore: 100,
  },
  { 
    id: "LOT-1286-240620",
    lotNumber: "LOT-1286-240620", 
    containerId: "NUKU (Collection)", 
    farmers: 7, 
    totalWeight: 4820,
    harvestDate: "19/06/2024", 
    processingDate: "20/06/2024", 
    certifications: ["RSPO", "EUDR"],
    status: "Processed",
    origin: "Central Region",
    deforestationScore: 95,
  },
  { 
    id: "LOT-1285-240619",
    lotNumber: "LOT-1285-240619", 
    containerId: "SOUTHERN (Mill)", 
    farmers: 14, 
    totalWeight: 8920,
    harvestDate: "18/06/2024", 
    processingDate: "19/06/2024", 
    certifications: ["RSPO"],
    status: "Processed",
    origin: "Southern Region",
    deforestationScore: 100,
  },
  { 
    id: "LOT-1284-240618",
    lotNumber: "LOT-1284-240618", 
    containerId: "AASA (Mill)", 
    farmers: 9, 
    totalWeight: 6180,
    harvestDate: "17/06/2024", 
    processingDate: "18/06/2024", 
    certifications: ["RSPO", "EUDR"],
    status: "Shipped",
    origin: "Western Province",
    deforestationScore: 100,
  },
  { 
    id: "LOT-1283-240617",
    lotNumber: "LOT-1283-240617", 
    containerId: "NUKU (Collection)", 
    farmers: 11, 
    totalWeight: 7425,
    harvestDate: "16/06/2024", 
    processingDate: "17/06/2024", 
    certifications: ["RSPO", "EUDR", "Organic"],
    status: "In Transit",
    origin: "Central Region",
    deforestationScore: 100,
  },
  { 
    id: "LOT-1282-240616",
    lotNumber: "LOT-1282-240616", 
    containerId: "EASTERN (Mill)", 
    farmers: 13, 
    totalWeight: 8560,
    harvestDate: "15/06/2024", 
    processingDate: "16/06/2024", 
    certifications: ["RSPO"],
    status: "Processed",
    origin: "Eastern Province",
    deforestationScore: 92,
  },
];

const columns: Column[] = [
  {
    key: "lotNumber",
    label: "Lot Number",
    sortable: true,
    render: (value) => (
      <span className="text-primary hover:underline cursor-pointer font-medium" data-testid={`link-lot-${value}`}>
        {value}
      </span>
    ),
  },
  {
    key: "containerId",
    label: "Container",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <Package className="h-3 w-3 text-muted-foreground" />
        <span className="text-sm">{value}</span>
      </div>
    ),
  },
  {
    key: "farmers",
    label: "Farmers",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <Users className="h-3 w-3 text-muted-foreground" />
        <span className="font-medium">{value}</span>
      </div>
    ),
  },
  {
    key: "totalWeight",
    label: "Total Weight",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <Scale className="h-3 w-3 text-muted-foreground" />
        <span className="font-medium">{value.toLocaleString()} kg</span>
      </div>
    ),
  },
  {
    key: "harvestDate",
    label: "Harvest Date",
    sortable: true,
  },
  {
    key: "certifications",
    label: "Certifications",
    render: (value: string[]) => (
      <div className="flex flex-wrap gap-1">
        {value.map((cert) => (
          <Badge key={cert} variant="secondary" className="text-xs">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            {cert}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    key: "deforestationScore",
    label: "EUDR Score",
    sortable: true,
    render: (value) => (
      <Badge 
        variant={
          value === 100 ? "secondary" :
          value >= 95 ? "outline" :
          "destructive"
        }
      >
        {value}%
      </Badge>
    ),
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value) => (
      <Badge 
        variant={
          value === "Shipped" ? "secondary" :
          value === "Processed" ? "outline" :
          "outline"
        }
      >
        {value === "Shipped" && <Package className="h-3 w-3 mr-1" />}
        {value === "In Transit" && <Truck className="h-3 w-3 mr-1" />}
        {value === "Processed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
        {value}
      </Badge>
    ),
  },
];

const stats = [
  {
    label: "Total Lots",
    value: "10",
    change: 15,
    trend: "up" as const,
    icon: Package,
  },
  {
    label: "Total Weight",
    value: "77,125 kg",
    change: 12,
    trend: "up" as const,
    icon: Scale,
  },
  {
    label: "Participating Farmers",
    value: "117",
    change: 8,
    trend: "up" as const,
    icon: Users,
  },
  {
    label: "EUDR Compliance",
    value: "98.5%",
    change: 2,
    trend: "up" as const,
    icon: CheckCircle2,
  },
];

const aiInsights: AIInsight[] = [
  {
    type: "recommendation",
    message: "LOT-1286-240620 and LOT-1282-240616 have deforestation scores below 95%. Recommend field verification and GPS polygon updates for 4 farms in Central and Eastern regions to improve EUDR compliance.",
    severity: "high",
  },
  {
    type: "trend",
    message: "AASA Mill processes 40% of total volume with 100% EUDR compliance. Western Province farms show strongest traceability data quality and certification coverage.",
    severity: "low",
  },
  {
    type: "prediction",
    message: "Based on processing patterns, expect 45-50 new lots next week. NUKU Collection center showing increased volume (+25%) - recommend resource allocation.",
    severity: "medium",
  },
  {
    type: "recommendation",
    message: "LOT-1283-240617 contains Organic-certified production. Consider segregating organic lots for premium pricing opportunities (+15-20% market value).",
    severity: "medium",
  },
];

export default function Traceability() {
  const [, setLocation] = useLocation();

  const rowActions = (row: any) => [
    {
      label: "View Chain of Custody",
      onClick: () => setLocation(`/traceability/${row.id}`),
    },
    {
      label: "View Farmers",
      onClick: () => console.log("View farmers for", row.id),
    },
    {
      label: "Download Certificate",
      onClick: () => console.log("Download certificate", row.id),
    },
    {
      label: "Generate QR Code",
      onClick: () => console.log("Generate QR code", row.id),
    },
    {
      label: "Verify EUDR Compliance",
      onClick: () => console.log("Verify EUDR for", row.id),
    },
  ];

  return (
    <div className="space-y-6" data-testid="page-traceability">
      {/* Breadcrumb and Actions Header */}
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/traceability">Traceability</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Lot Tracking</BreadcrumbPage>
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
              data-testid="action-create-lot"
              onClick={() => console.log("Create lot")}
            >
              <Package className="h-4 w-4 mr-2" />
              Create Lot
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-generate-qr"
              onClick={() => console.log("Generate QR codes")}
            >
              <QrCode className="h-4 w-4 mr-2" />
              Generate QR Codes
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-export-chain"
              onClick={() => console.log("Export chain of custody")}
            >
              <Link2 className="h-4 w-4 mr-2" />
              Export Chain of Custody
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-compliance-report"
              onClick={() => console.log("Compliance report")}
            >
              <FileCheck className="h-4 w-4 mr-2" />
              Compliance Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <EnhancedDataTable
        title="Supply Chain Traceability"
        description="Track production lots from farm to mill with full chain of custody and EUDR compliance"
        data={mockLots}
        columns={columns}
        stats={stats}
        aiInsights={aiInsights}
        searchable
        filterable
        exportable
        bulkActions
        rowActions={rowActions}
        onRowClick={(row) => setLocation(`/traceability/${row.id}`)}
      />
    </div>
  );
}
