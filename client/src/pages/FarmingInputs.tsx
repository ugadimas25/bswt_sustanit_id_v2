import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link, useLocation } from "wouter";
import { 
  Package, TrendingDown, AlertTriangle, DollarSign,
  PackageCheck, PackageX, ShoppingCart
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

const mockInputs = [
  { 
    id: "INP-001",
    name: "Organic Fertilizer NPK 10-10-10",
    category: "Fertilizer",
    unit: "kg",
    stockLevel: 2500,
    reorderLevel: 500,
    maxCapacity: 5000,
    stockPercent: 50,
    supplier: "AgriChem Ltd",
    supplierId: "SUP-001",
    unitCost: 2.50,
    totalValue: 6250,
    lastRestocked: "10/11/2024",
    monthlyUsage: 450,
    status: "Adequate",
    daysUntilReorder: 120
  },
  {
    id: "INP-002",
    name: "Biopesticide Solution",
    category: "Pesticide",
    unit: "liters",
    stockLevel: 350,
    reorderLevel: 100,
    maxCapacity: 1000,
    stockPercent: 35,
    supplier: "BioControl Inc",
    supplierId: "SUP-002",
    unitCost: 15.00,
    totalValue: 5250,
    lastRestocked: "15/11/2024",
    monthlyUsage: 180,
    status: "Adequate",
    daysUntilReorder: 45
  },
  {
    id: "INP-003",
    name: "Palm Oil Seeds (Tenera)",
    category: "Seeds",
    unit: "kg",
    stockLevel: 80,
    reorderLevel: 50,
    maxCapacity: 500,
    stockPercent: 16,
    supplier: "Seed Masters",
    supplierId: "SUP-003",
    unitCost: 12.00,
    totalValue: 960,
    lastRestocked: "05/10/2024",
    monthlyUsage: 30,
    status: "Low Stock",
    daysUntilReorder: 30
  },
  {
    id: "INP-004",
    name: "Drip Irrigation Pipes",
    category: "Equipment",
    unit: "meters",
    stockLevel: 5000,
    reorderLevel: 1000,
    maxCapacity: 10000,
    stockPercent: 50,
    supplier: "IrrigaTech",
    supplierId: "SUP-004",
    unitCost: 0.75,
    totalValue: 3750,
    lastRestocked: "01/11/2024",
    monthlyUsage: 800,
    status: "Adequate",
    daysUntilReorder: 150
  },
  {
    id: "INP-005",
    name: "Mulch Material",
    category: "Soil Amendment",
    unit: "tons",
    stockLevel: 8,
    reorderLevel: 10,
    maxCapacity: 100,
    stockPercent: 8,
    supplier: "EcoFarm Supplies",
    supplierId: "SUP-005",
    unitCost: 45.00,
    totalValue: 360,
    lastRestocked: "20/10/2024",
    monthlyUsage: 12,
    status: "Critical",
    daysUntilReorder: 0
  },
  {
    id: "INP-006",
    name: "Herbicide Glyphosate 360",
    category: "Herbicide",
    unit: "liters",
    stockLevel: 650,
    reorderLevel: 200,
    maxCapacity: 1500,
    stockPercent: 43,
    supplier: "AgriChem Ltd",
    supplierId: "SUP-001",
    unitCost: 8.50,
    totalValue: 5525,
    lastRestocked: "12/11/2024",
    monthlyUsage: 220,
    status: "Adequate",
    daysUntilReorder: 60
  },
  {
    id: "INP-007",
    name: "Potassium Fertilizer",
    category: "Fertilizer",
    unit: "kg",
    stockLevel: 1200,
    reorderLevel: 300,
    maxCapacity: 3000,
    stockPercent: 40,
    supplier: "AgriChem Ltd",
    supplierId: "SUP-001",
    unitCost: 3.20,
    totalValue: 3840,
    lastRestocked: "08/11/2024",
    monthlyUsage: 280,
    status: "Adequate",
    daysUntilReorder: 90
  },
  {
    id: "INP-008",
    name: "Fungicide Treatment",
    category: "Pesticide",
    unit: "kg",
    stockLevel: 45,
    reorderLevel: 50,
    maxCapacity: 500,
    stockPercent: 9,
    supplier: "BioControl Inc",
    supplierId: "SUP-002",
    unitCost: 18.00,
    totalValue: 810,
    lastRestocked: "25/10/2024",
    monthlyUsage: 35,
    status: "Low Stock",
    daysUntilReorder: 15
  },
  {
    id: "INP-009",
    name: "Growth Hormones",
    category: "Growth Regulator",
    unit: "liters",
    stockLevel: 120,
    reorderLevel: 40,
    maxCapacity: 300,
    stockPercent: 40,
    supplier: "BioControl Inc",
    supplierId: "SUP-002",
    unitCost: 25.00,
    totalValue: 3000,
    lastRestocked: "18/11/2024",
    monthlyUsage: 35,
    status: "Adequate",
    daysUntilReorder: 65
  },
  {
    id: "INP-010",
    name: "Irrigation Valves",
    category: "Equipment",
    unit: "units",
    stockLevel: 25,
    reorderLevel: 20,
    maxCapacity: 100,
    stockPercent: 25,
    supplier: "IrrigaTech",
    supplierId: "SUP-004",
    unitCost: 35.00,
    totalValue: 875,
    lastRestocked: "30/10/2024",
    monthlyUsage: 8,
    status: "Low Stock",
    daysUntilReorder: 20
  },
];

const columns: Column[] = [
  {
    key: "id",
    label: "Input ID",
    sortable: true,
    render: (value) => (
      <Link href={`/farming-inputs/${value}`} data-testid={`link-input-${value}`}>
        <span className="text-primary hover:underline cursor-pointer font-medium">
          {value}
        </span>
      </Link>
    ),
  },
  {
    key: "name",
    label: "Input Name",
    sortable: true,
    width: "w-64",
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
    render: (value) => (
      <Badge variant="outline">
        {value}
      </Badge>
    ),
  },
  {
    key: "stockLevel",
    label: "Stock Level",
    sortable: true,
    render: (value, row) => (
      <div className="flex items-center gap-2">
        <Package className="h-3 w-3 text-muted-foreground" />
        <span className={`font-medium ${
          row.status === "Critical" ? "text-red-600 dark:text-red-400" :
          row.status === "Low Stock" ? "text-orange-600 dark:text-orange-400" :
          "text-foreground"
        }`}>
          {value.toLocaleString()} {row.unit}
        </span>
      </div>
    ),
  },
  {
    key: "stockPercent",
    label: "Stock Status",
    sortable: true,
    width: "w-48",
    render: (value, row) => (
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {row.stockLevel.toLocaleString()} / {row.maxCapacity.toLocaleString()}
          </span>
          <span className="font-medium">{value}%</span>
        </div>
        <Progress 
          value={value} 
          className={`h-2 ${
            value < 10 ? '[&>div]:bg-red-600' :
            value < 30 ? '[&>div]:bg-orange-600' :
            '[&>div]:bg-primary'
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
        variant={
          value === "Critical" ? "destructive" :
          value === "Low Stock" ? "outline" :
          "secondary"
        }
      >
        {value === "Critical" && <AlertTriangle className="h-3 w-3 mr-1" />}
        {value === "Low Stock" && <PackageX className="h-3 w-3 mr-1" />}
        {value === "Adequate" && <PackageCheck className="h-3 w-3 mr-1" />}
        {value}
      </Badge>
    ),
  },
  {
    key: "supplier",
    label: "Supplier",
    sortable: true,
    render: (value, row) => (
      <Link href={`/suppliers/${row.supplierId}`} data-testid={`link-supplier-${row.supplierId}`}>
        <span className="hover:underline cursor-pointer text-sm">{value}</span>
      </Link>
    ),
  },
  {
    key: "totalValue",
    label: "Inventory Value",
    sortable: true,
    render: (value) => (
      <div className="flex items-center gap-1">
        <DollarSign className="h-3 w-3 text-muted-foreground" />
        <span className="font-medium">${value.toLocaleString()}</span>
      </div>
    ),
  },
];

const stats = [
  {
    label: "Total Inventory Value",
    value: "$30,620",
    change: 8,
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    label: "Low Stock Items",
    value: "4",
    change: -20,
    trend: "down" as const,
    icon: PackageX,
  },
  {
    label: "Critical Items",
    value: "1",
    change: 0,
    trend: "neutral" as const,
    icon: AlertTriangle,
  },
  {
    label: "Avg Stock Level",
    value: "38%",
    change: -5,
    trend: "down" as const,
    icon: Package,
  },
];

const aiInsights: AIInsight[] = [
  {
    type: "anomaly",
    message: "URGENT: Mulch Material (INP-005) below reorder level. Current stock: 8 tons. Recommend immediate purchase of 50 tons from EcoFarm Supplies.",
    severity: "high",
  },
  {
    type: "recommendation",
    message: "3 items approaching low stock within 30 days: Palm Oil Seeds, Fungicide Treatment, Irrigation Valves. Recommend bulk order to optimize shipping costs.",
    severity: "medium",
  },
  {
    type: "prediction",
    message: "Based on usage trends, Organic Fertilizer NPK will need reordering in 120 days. Current consumption: 450 kg/month, stock sufficient until March 2025.",
    severity: "low",
  },
  {
    type: "recommendation",
    message: "AgriChem Ltd supplies 3 different products. Consolidating orders could save 15% on shipping. Recommend coordinated purchasing schedule.",
    severity: "low",
  },
];

export default function FarmingInputs() {
  const [, setLocation] = useLocation();

  const rowActions = (row: any) => [
    {
      label: "View Details",
      onClick: () => setLocation(`/farming-inputs/${row.id}`),
    },
    {
      label: "Edit Input",
      onClick: () => console.log("Edit input", row.id),
    },
    {
      label: "Record Usage",
      onClick: () => console.log("Record usage for", row.id),
    },
    {
      label: "Adjust Stock",
      onClick: () => console.log("Adjust stock for", row.id),
    },
    {
      label: "Reorder Now",
      onClick: () => console.log("Reorder", row.id),
    },
  ];

  return (
    <div className="space-y-6" data-testid="page-farming-inputs">
      {/* Breadcrumb and Actions Header */}
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/farming-inputs">Farming Inputs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Inventory</BreadcrumbPage>
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
              data-testid="action-add-input"
              onClick={() => console.log("Add new input")}
            >
              <Package className="h-4 w-4 mr-2" />
              Add New Input
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-record-usage"
              onClick={() => console.log("Record usage")}
            >
              <TrendingDown className="h-4 w-4 mr-2" />
              Record Usage
            </DropdownMenuItem>
            <DropdownMenuItem 
              data-testid="action-bulk-order"
              onClick={() => console.log("Bulk order")}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Create Bulk Order
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <EnhancedDataTable
        title="Farming Inputs Inventory"
        description="Track stock levels, reorder points, and inventory value with AI-powered alerts"
        data={mockInputs}
        columns={columns}
        stats={stats}
        aiInsights={aiInsights}
        searchable
        filterable
        exportable
        bulkActions
        rowActions={rowActions}
        onRowClick={(row) => setLocation(`/farming-inputs/${row.id}`)}
      />
    </div>
  );
}
