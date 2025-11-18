import { Link } from "wouter";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Warehouse } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockWarehouses = [
  { id: "WH-001", name: "Central Storage Facility", location: "Main District", capacity: "5,000 kg", currentStock: "3,750 kg", utilization: "75%", manager: "John Smith" },
  { id: "WH-002", name: "North Region Depot", location: "Northern Zone", capacity: "3,500 kg", currentStock: "2,980 kg", utilization: "85%", manager: "Sarah Johnson" },
  { id: "WH-003", name: "Processing Center A", location: "East District", capacity: "4,200 kg", currentStock: "2,100 kg", utilization: "50%", manager: "Mike Davis" },
  { id: "WH-004", name: "Export Staging Warehouse", location: "Port Area", capacity: "6,000 kg", currentStock: "5,400 kg", utilization: "90%", manager: "Lisa Brown" },
  { id: "WH-005", name: "South Valley Storage", location: "South Region", capacity: "2,800 kg", currentStock: "1,680 kg", utilization: "60%", manager: "Tom Wilson" },
];

export default function HarvestWarehouse() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/harvests" data-testid="breadcrumb-harvests">Harvests</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Warehouse</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-warehouse">Add Warehouse</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-transfer-stock">Transfer Stock</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Capacity</CardTitle>
              <Warehouse className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-total-capacity">21,500 kg</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-warehouses">5 warehouses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Stock</CardTitle>
              <Warehouse className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-current-stock">15,910 kg</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-utilization">74% utilized</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Available Capacity</CardTitle>
              <Warehouse className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-available-capacity">5,590 kg</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-available-desc">Space remaining</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Warehouse ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Capacity</TableHead>
              <TableHead className="text-right">Current Stock</TableHead>
              <TableHead className="text-right">Utilization</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockWarehouses.map((warehouse, index) => (
              <TableRow key={warehouse.id} className="hover:bg-muted/30" data-testid={`row-warehouse-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-warehouse/${warehouse.id}`} data-testid={`link-warehouse-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{warehouse.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-name-${index}`}>{warehouse.name}</TableCell>
                <TableCell className="text-sm" data-testid={`text-location-${index}`}>{warehouse.location}</TableCell>
                <TableCell className="text-right" data-testid={`text-capacity-${index}`}>{warehouse.capacity}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-stock-${index}`}>{warehouse.currentStock}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={parseInt(warehouse.utilization) > 80 ? "outline" : "secondary"} className="text-xs" data-testid={`badge-utilization-${index}`}>
                    {warehouse.utilization}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${warehouse.manager}`} data-testid={`link-manager-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{warehouse.manager}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-inventory-${index}`}>View Inventory</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-manage-${index}`}>Manage Warehouse</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
