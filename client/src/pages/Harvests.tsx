import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "wouter";
import { 
  Boxes, Scale, TrendingUp, AlertTriangle, 
  Package, CheckCircle2, MapPin
} from "lucide-react";
import { EnhancedDataTable, Column, AIInsight } from "@/components/EnhancedDataTable";

const mockHarvests = [
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.8",
    farmers: "ADEYEMO ADELOWO",
    farmerIds: "INA-1111",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    balanceKg: "36.0",
    qualityGrade: "Premium",
    status: "In Transit",
    positions: "1",
    activities: 1,
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.33",
    farmers: "ADEYEMO ADELOWO",
    farmerIds: "INA-1111",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    balanceKg: "90.0",
    qualityGrade: "Premium",
    status: "Processed",
    positions: "1",
    activities: 1,
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.31",
    farmers: "ADEYEMO ADELOWO",
    farmerIds: "INA-1111",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    balanceKg: "65.0",
    qualityGrade: "Standard",
    status: "Quality Check",
    positions: "1",
    activities: 1,
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.20",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    balanceKg: "590.0",
    qualityGrade: "Premium",
    status: "Stored",
    positions: "1",
    activities: 2,
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.19",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    balanceKg: "590.0",
    qualityGrade: "Premium",
    status: "Processed",
    positions: "1",
    activities: 1,
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.18",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    balanceKg: "590.0",
    qualityGrade: "Standard",
    status: "In Transit",
    positions: "1",
    activities: 1,
  },
  {
    collectedAt: "24/06/2025",
    harvestCollectionNumber: "HC8049.65.17",
    farmers: "A. ADELUGBA",
    farmerIds: "INA-1983",
    lotNumber: "1291-240625",
    containerId: "AASA (Mill)",
    balanceKg: "590.0",
    qualityGrade: "Premium",
    status: "Processed",
    positions: "1",
    activities: 2,
  },
  {
    collectedAt: "23/06/2025",
    harvestCollectionNumber: "HC8049.65.16",
    farmers: "AGNES Adeleye",
    farmerIds: "INA-1711",
    lotNumber: "1291-230625",
    containerId: "AASA (Mill)",
    balanceKg: "320.0",
    qualityGrade: "Premium",
    status: "Stored",
    positions: "1",
    activities: 1,
  },
  {
    collectedAt: "23/06/2025",
    harvestCollectionNumber: "HC8049.65.15",
    farmers: "MARIAM Adeleye",
    farmerIds: "INA-1588",
    lotNumber: "1291-230625",
    containerId: "AASA (Mill)",
    balanceKg: "245.0",
    qualityGrade: "Standard",
    status: "Quality Check",
    positions: "1",
    activities: 1,
  },
  {
    collectedAt: "23/06/2025",
    harvestCollectionNumber: "HC8049.65.14",
    farmers: "ORIOWO Adeleye",
    farmerIds: "INA-1589",
    lotNumber: "1291-230625",
    containerId: "AASA (Mill)",
    balanceKg: "410.0",
    qualityGrade: "Premium",
    status: "Processed",
    positions: "1",
    activities: 2,
  },
];

const columns: Column[] = [
  {
    key: "collectedAt",
    label: "Date",
    sortable: true,
    render: (value) => (
      <span className="text-sm font-medium">{value}</span>
    ),
  },
  {
    key: "harvestCollectionNumber",
    label: "Collection #",
    sortable: true,
    render: (value) => (
      <Link href={`/harvests/${value}`}>
        <span className="text-primary hover:underline cursor-pointer font-medium">
          {value}
        </span>
      </Link>
    ),
  },
  {
    key: "farmers",
    label: "Farmer",
    render: (value, row) => (
      <Link href={`/producers/${row.farmerIds}`}>
        <span className="hover:underline cursor-pointer">{value}</span>
      </Link>
    ),
  },
  {
    key: "balanceKg",
    label: "Weight (Kg)",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-2">
        <Scale className="h-3 w-3 text-muted-foreground" />
        <span className="font-medium">{value}</span>
      </div>
    ),
  },
  {
    key: "qualityGrade",
    label: "Quality",
    sortable: true,
    render: (value) => (
      <Badge 
        variant={value === "Premium" ? "default" : "secondary"}
      >
        {value}
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
          value === "Processed" ? "secondary" :
          value === "Stored" ? "outline" :
          value === "In Transit" ? "default" :
          "destructive"
        }
      >
        {value === "Processed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
        {value === "Quality Check" && <AlertTriangle className="h-3 w-3 mr-1" />}
        {value}
      </Badge>
    ),
  },
  {
    key: "lotNumber",
    label: "Lot #",
    render: (value) => (
      <span className="text-sm text-muted-foreground">{value}</span>
    ),
  },
  {
    key: "containerId",
    label: "Container",
    render: (value) => (
      <div className="flex items-center gap-2">
        <Package className="h-3 w-3 text-muted-foreground" />
        <span className="text-sm">{value}</span>
      </div>
    ),
  },
  {
    key: "positions",
    label: "GPS",
    render: (value) => (
      <div className="flex justify-center">
        {value && <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />}
      </div>
    ),
  },
];

const stats = [
  {
    label: "Total Collections",
    value: "3,847",
    change: 18,
    trend: "up" as const,
    icon: Boxes,
  },
  {
    label: "Total Volume (Kg)",
    value: "152,340",
    change: 22,
    trend: "up" as const,
    icon: Scale,
  },
  {
    label: "Premium Grade",
    value: "68%",
    change: 5,
    trend: "up" as const,
    icon: TrendingUp,
  },
  {
    label: "In Quality Check",
    value: "23",
    change: -12,
    trend: "down" as const,
    icon: AlertTriangle,
  },
];

const aiInsights: AIInsight[] = [
  {
    type: "prediction",
    message: "Predicted 15% increase in harvest volume next month based on weather patterns and historical data. Prepare additional storage capacity.",
    severity: "low",
  },
  {
    type: "recommendation",
    message: "Premium grade rate increased by 12% after implementing AI-recommended quality control measures. Continue current protocols.",
    severity: "low",
  },
  {
    type: "anomaly",
    message: "3 collections showing unusual weight discrepancies (>10% variance). Recommend immediate verification and scale calibration.",
    severity: "high",
  },
];

export default function Harvests() {
  const [, setLocation] = useLocation();

  const rowActions = (row: any) => [
    {
      label: "View Details",
      onClick: () => setLocation(`/harvests/${row.harvestCollectionNumber}`),
    },
    {
      label: "View on Map",
      onClick: () => console.log("View map for", row.harvestCollectionNumber),
    },
    {
      label: "View Activities",
      onClick: () => console.log("View activities for", row.harvestCollectionNumber),
    },
    {
      label: "Edit Collection",
      onClick: () => console.log("Edit collection", row.harvestCollectionNumber),
    },
    {
      label: "Print Receipt",
      onClick: () => console.log("Print receipt for", row.harvestCollectionNumber),
    },
  ];

  return (
    <div className="p-6" data-testid="page-harvests">
      <EnhancedDataTable
        title="Harvest Operations"
        description="Complete harvest tracking with quality control, batch management, and real-time analytics"
        data={mockHarvests}
        columns={columns}
        stats={stats}
        aiInsights={aiInsights}
        searchable
        filterable
        exportable
        bulkActions
        rowActions={rowActions}
        onRowClick={(row) => setLocation(`/harvests/${row.harvestCollectionNumber}`)}
      />
    </div>
  );
}
