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
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockLocations = [
  { id: "LOC-001", locationName: "Warehouse WH-001", locationType: "Storage", region: "North Region", capacity: "5,000 kg", currentStock: "3,250 kg", status: "Active" },
  { id: "LOC-002", locationName: "Processing Center A", locationType: "Processing", region: "South Valley", capacity: "10,000 kg", currentStock: "6,120 kg", status: "Active" },
  { id: "LOC-003", locationName: "Export Terminal", locationType: "Export Hub", region: "Coastal Area", capacity: "20,000 kg", currentStock: "15,340 kg", status: "Active" },
  { id: "LOC-004", locationName: "Collection Point CP-12", locationType: "Collection", region: "East Plains", capacity: "2,000 kg", currentStock: "890 kg", status: "Active" },
  { id: "LOC-005", locationName: "Quality Lab", locationType: "Testing", region: "Central Region", capacity: "500 kg", currentStock: "120 kg", status: "Active" },
];

export default function TraceabilityLocations() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/traceability" data-testid="breadcrumb-traceability">Traceability</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Locations</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-location">Add Location</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-map">View on Map</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Location ID</TableHead>
              <TableHead>Location Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="text-right">Capacity</TableHead>
              <TableHead className="text-right">Current Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLocations.map((location, index) => (
              <TableRow key={location.id} className="hover:bg-muted/30" data-testid={`row-location-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/traceability-locations/${location.id}`} data-testid={`link-location-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{location.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-location-name-${index}`}>{location.locationName}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-type-${index}`}>{location.locationType}</Badge>
                </TableCell>
                <TableCell data-testid={`text-region-${index}`}>{location.region}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-capacity-${index}`}>{location.capacity}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-current-stock-${index}`}>{location.currentStock}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-status-${index}`}>{location.status}</Badge>
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
                      <DropdownMenuItem data-testid={`menu-view-on-map-${index}`}>View on Map</DropdownMenuItem>
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
