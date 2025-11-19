import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLocation } from "wouter";
import { 
  Calendar, TrendingUp, Users, MapPin, 
  Sprout, CheckCircle2, Clock, Target
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
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { EnhancedDataTable, Column, AIInsight } from "@/components/EnhancedDataTable";

const mockCampaigns = [
  {
    id: "PC-2024-001",
    name: "Palm Oil Production Campaign 2024-25",
    cropType: "Palm Oil",
    startDate: "01/09/2024",
    endDate: "31/08/2025",
    targetAcreage: 2500,
    registeredFields: 156,
    actualAcreage: 2340,
    progressPercent: 94,
    registeredFarmers: 89,
    status: "Active",
    region: "Western Province",
  },
  {
    id: "PC-2024-002",
    name: "Coffee Harvest Season 2024",
    cropType: "Coffee",
    startDate: "15/10/2024",
    endDate: "30/04/2025",
    targetAcreage: 850,
    registeredFields: 89,
    actualAcreage: 875,
    progressPercent: 103,
    registeredFarmers: 67,
    status: "Active",
    region: "Central Highlands",
  },
  {
    id: "PC-2023-005",
    name: "Palm Oil Production Campaign 2023-24",
    cropType: "Palm Oil",
    startDate: "01/09/2023",
    endDate: "31/08/2024",
    targetAcreage: 2200,
    registeredFields: 203,
    actualAcreage: 2198,
    progressPercent: 100,
    registeredFarmers: 95,
    status: "Completed",
    region: "Western Province",
  },
  {
    id: "PC-2024-003",
    name: "Cocoa Growing Season 2024",
    cropType: "Cocoa",
    startDate: "01/11/2024",
    endDate: "31/10/2025",
    targetAcreage: 650,
    registeredFields: 42,
    actualAcreage: 380,
    progressPercent: 58,
    registeredFarmers: 34,
    status: "Active",
    region: "Southern Region",
  },
  {
    id: "PC-2024-004",
    name: "Organic Coffee Initiative 2024",
    cropType: "Coffee",
    startDate: "20/09/2024",
    endDate: "15/05/2025",
    targetAcreage: 420,
    registeredFields: 67,
    actualAcreage: 415,
    progressPercent: 99,
    registeredFarmers: 52,
    status: "Active",
    region: "Eastern Highlands",
  },
  {
    id: "PC-2023-008",
    name: "Rubber Plantation Expansion 2023",
    cropType: "Rubber",
    startDate: "15/06/2023",
    endDate: "31/12/2023",
    targetAcreage: 1200,
    registeredFields: 78,
    actualAcreage: 1150,
    progressPercent: 96,
    registeredFarmers: 43,
    status: "Completed",
    region: "Western Province",
  },
  {
    id: "PC-2024-005",
    name: "Sustainable Palm Oil Project 2024",
    cropType: "Palm Oil",
    startDate: "01/08/2024",
    endDate: "31/07/2025",
    targetAcreage: 1800,
    registeredFields: 112,
    actualAcreage: 1425,
    progressPercent: 79,
    registeredFarmers: 71,
    status: "Active",
    region: "Northern Territory",
  },
];

const columns: Column[] = [
  {
    key: "id",
    label: "Campaign ID",
    sortable: true,
    render: (value) => (
      <span className="text-primary hover:underline cursor-pointer font-medium" data-testid={`link-campaign-${value}`}>
        {value}
      </span>
    ),
  },
  {
    key: "name",
    label: "Campaign Name",
    sortable: true,
    width: "w-64",
  },
  {
    key: "cropType",
    label: "Crop Type",
    sortable: true,
    render: (value) => (
      <Badge variant="outline">
        <Sprout className="h-3 w-3 mr-1" />
        {value}
      </Badge>
    ),
  },
  {
    key: "registeredFarmers",
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
    key: "registeredFields",
    label: "Fields",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <MapPin className="h-3 w-3 text-muted-foreground" />
        <span className="font-medium">{value}</span>
      </div>
    ),
  },
  {
    key: "progressPercent",
    label: "Registration Progress",
    sortable: true,
    width: "w-48",
    render: (value, row) => (
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {row.actualAcreage.toLocaleString()} / {row.targetAcreage.toLocaleString()} ha
          </span>
          <span className="font-medium">{value}%</span>
        </div>
        <Progress 
          value={value} 
          className={`h-2 ${
            value >= 100 ? '[&>div]:bg-green-600' :
            value >= 80 ? '[&>div]:bg-primary' :
            value >= 50 ? '[&>div]:bg-amber-600' :
            '[&>div]:bg-red-600'
          }`}
        />
      </div>
    ),
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    render: (value) => (
      <Badge 
        variant={value === "Active" ? "secondary" : "outline"}
      >
        {value === "Active" ? <Clock className="h-3 w-3 mr-1" /> : <CheckCircle2 className="h-3 w-3 mr-1" />}
        {value}
      </Badge>
    ),
  },
  {
    key: "region",
    label: "Region",
    sortable: true,
  },
];

const stats = [
  {
    label: "Active Campaigns",
    value: "5",
    change: 25,
    trend: "up" as const,
    icon: Calendar,
  },
  {
    label: "Total Farmers",
    value: "313",
    change: 12,
    trend: "up" as const,
    icon: Users,
  },
  {
    label: "Registered Fields",
    value: "468",
    change: 8,
    trend: "up" as const,
    icon: MapPin,
  },
  {
    label: "Avg Progress",
    value: "87%",
    change: 5,
    trend: "up" as const,
    icon: Target,
  },
];

const aiInsights: AIInsight[] = [
  {
    type: "anomaly",
    message: "Cocoa Growing Season 2024 (PC-2024-003) significantly behind target at 58% progress. Only 42 fields registered vs target of 650 ha. Recommend outreach campaign in Southern Region.",
    severity: "high",
  },
  {
    type: "recommendation",
    message: "Coffee Harvest Season 2024 exceeded target acreage by 3%. Consider expanding target for next season based on strong farmer participation in Central Highlands.",
    severity: "medium",
  },
  {
    type: "prediction",
    message: "Based on current registration rates, Sustainable Palm Oil Project 2024 will reach 100% target by February 2025. On track for successful completion.",
    severity: "low",
  },
  {
    type: "trend",
    message: "Palm Oil campaigns show consistent 94-100% completion rates across Western Province. Strong farmer engagement and field officer effectiveness in this region.",
    severity: "low",
  },
];

export default function PlantingCampaigns() {
  const [, setLocation] = useLocation();

  const rowActions = (row: any) => [
    {
      label: "View Details",
      onClick: () => setLocation(`/planting-campaigns/${row.id}`),
    },
    {
      label: "Edit Campaign",
      onClick: () => console.log("Edit campaign", row.id),
    },
    {
      label: "View Fields",
      onClick: () => console.log("View fields for", row.id),
    },
    {
      label: "View Farmers",
      onClick: () => console.log("View farmers for", row.id),
    },
    {
      label: "Download Report",
      onClick: () => console.log("Download report for", row.id),
    },
  ];

  return (
    <div className="space-y-6" data-testid="page-planting-campaigns">
      {/* Breadcrumb and Actions Header */}
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/planting-campaigns">Planting Campaigns</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">All Campaigns</BreadcrumbPage>
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
              data-testid="action-create-campaign"
              onClick={() => console.log("Create campaign")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Create Campaign
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-import-data"
              onClick={() => console.log("Import data")}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Import Data
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <EnhancedDataTable
        title="Planting Campaigns"
        description="Track crop production campaigns with field registration progress and farmer participation"
        data={mockCampaigns}
        columns={columns}
        stats={stats}
        aiInsights={aiInsights}
        searchable
        filterable
        exportable
        bulkActions
        rowActions={rowActions}
        onRowClick={(row) => setLocation(`/planting-campaigns/${row.id}`)}
      />
    </div>
  );
}
