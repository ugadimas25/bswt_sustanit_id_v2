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
import { ChevronDown, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockAreas = [
  { id: "PA-001", farmer: "Carlos Mendez", field: "FLD-045", crop: "Coffee", areaPlanted: "2.5 ha", plantingDate: "2024-01-15", status: "Growing" },
  { id: "PA-002", farmer: "Maria Santos", field: "FLD-078", crop: "Cocoa", areaPlanted: "3.2 ha", plantingDate: "2024-01-10", status: "Growing" },
  { id: "PA-003", farmer: "Jose Garcia", field: "FLD-132", crop: "Coffee", areaPlanted: "4.1 ha", plantingDate: "2024-02-01", status: "Recently Planted" },
  { id: "PA-004", farmer: "Ana Rodriguez", field: "FLD-201", crop: "Bananas", areaPlanted: "1.8 ha", plantingDate: "2023-11-20", status: "Mature" },
  { id: "PA-005", farmer: "Pedro Silva", field: "FLD-267", crop: "Coffee", areaPlanted: "3.7 ha", plantingDate: "2024-01-25", status: "Growing" },
];

export default function PlantedArea() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/farming-inputs" data-testid="breadcrumb-farming-inputs">Farming Inputs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Planted Area</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-planting">Record Planting</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-map">View on Map</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Planted Area</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-total-area">15.3 ha</div>
              <p className="text-xs text-muted-foreground mt-1">All crops</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Coffee Area</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-coffee-area">10.3 ha</div>
              <p className="text-xs text-muted-foreground mt-1">67.3% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Plantings</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-active-plantings">5</div>
              <p className="text-xs text-muted-foreground mt-1">This season</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Area ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="text-right">Area Planted</TableHead>
              <TableHead>Planting Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAreas.map((area, index) => (
              <TableRow key={area.id} className="hover:bg-muted/30" data-testid={`row-area-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/planted-area/${area.id}`} data-testid={`link-area-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{area.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${area.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{area.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${area.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{area.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">{area.crop}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium">{area.areaPlanted}</TableCell>
                <TableCell>{area.plantingDate}</TableCell>
                <TableCell>
                  <Badge variant={area.status === "Growing" || area.status === "Mature" ? "secondary" : "outline"} className="text-xs">
                    {area.status}
                  </Badge>
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
                      <DropdownMenuItem data-testid={`menu-view-on-map-${index}`}>View on Map</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Planting</DropdownMenuItem>
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
