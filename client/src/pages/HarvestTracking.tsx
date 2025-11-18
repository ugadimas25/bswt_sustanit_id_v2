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

const mockTracking = [
  { id: "HT-001", batch: "HB-001", currentLocation: "Processing Center A", lastUpdate: "2024-03-15 14:30", nextDestination: "Warehouse WH-001", eta: "2024-03-16 09:00", status: "In Transit" },
  { id: "HT-002", batch: "HB-002", currentLocation: "Warehouse WH-002", lastUpdate: "2024-03-15 10:15", nextDestination: "Export Terminal", eta: "2024-03-17 08:00", status: "Stored" },
  { id: "HT-003", batch: "HB-003", currentLocation: "Collection Point", lastUpdate: "2024-03-14 16:45", nextDestination: "Processing Center B", eta: "2024-03-15 07:30", status: "In Transit" },
  { id: "HT-004", batch: "HB-004", currentLocation: "Processing Center B", lastUpdate: "2024-03-14 11:20", nextDestination: "Quality Lab", eta: "2024-03-15 13:00", status: "Processing" },
  { id: "HT-005", batch: "HB-005", currentLocation: "Export Terminal", lastUpdate: "2024-03-13 09:00", nextDestination: "Shipped", eta: "Departed", status: "Delivered" },
];

export default function HarvestTracking() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Tracking</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-update-location">Update Location</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-map">View on Map</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking ID</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Current Location</TableHead>
              <TableHead>Last Update</TableHead>
              <TableHead>Next Destination</TableHead>
              <TableHead>ETA</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTracking.map((track, index) => (
              <TableRow key={track.id} className="hover:bg-muted/30" data-testid={`row-tracking-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-tracking/${track.id}`} data-testid={`link-tracking-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{track.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/harvest-batches/${track.batch}`} data-testid={`link-batch-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{track.batch}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-current-location-${index}`}>{track.currentLocation}</TableCell>
                <TableCell className="text-sm font-mono" data-testid={`text-last-update-${index}`}>{track.lastUpdate}</TableCell>
                <TableCell data-testid={`text-next-destination-${index}`}>{track.nextDestination}</TableCell>
                <TableCell className="text-sm" data-testid={`text-eta-${index}`}>{track.eta}</TableCell>
                <TableCell>
                  <Badge variant={track.status === "Delivered" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {track.status}
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
                      <DropdownMenuItem data-testid={`menu-view-history-${index}`}>View History</DropdownMenuItem>
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
