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

const mockContainers = [
  { id: "CTR-001", containerNumber: "CONT2024-001", containerType: "Dry Container 20ft", batch: "HB-001", quantity: "1,250 kg", location: "Warehouse WH-001", status: "Filled" },
  { id: "CTR-002", containerNumber: "CONT2024-002", containerType: "Reefer 40ft", batch: "HB-002", quantity: "2,340 kg", location: "Export Terminal", status: "In Transit" },
  { id: "CTR-003", containerNumber: "CONT2024-003", containerType: "Dry Container 20ft", batch: "HB-003", quantity: "1,580 kg", location: "Processing Center A", status: "Filled" },
  { id: "CTR-004", containerNumber: "CONT2024-004", containerType: "Dry Container 40ft", batch: "HB-004", quantity: "3,120 kg", location: "Warehouse WH-002", status: "Sealed" },
  { id: "CTR-005", containerNumber: "CONT2024-005", containerType: "Reefer 20ft", batch: "HB-005", quantity: "890 kg", location: "Export Terminal", status: "Shipped" },
];

export default function TraceabilityContainers() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Containers</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-register-container">Register Container</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-track-shipment">Track Shipment</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Container ID</TableHead>
              <TableHead>Container Number</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Current Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockContainers.map((container, index) => (
              <TableRow key={container.id} className="hover:bg-muted/30" data-testid={`row-container-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/traceability-containers/${container.id}`} data-testid={`link-container-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{container.id}</span>
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-container-number-${index}`}>{container.containerNumber}</TableCell>
                <TableCell data-testid={`text-container-type-${index}`}>{container.containerType}</TableCell>
                <TableCell>
                  <Link href={`/harvest-batches/${container.batch}`} data-testid={`link-batch-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{container.batch}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{container.quantity}</TableCell>
                <TableCell data-testid={`text-location-${index}`}>{container.location}</TableCell>
                <TableCell>
                  <Badge variant={container.status === "Shipped" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {container.status}
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
                      <DropdownMenuItem data-testid={`menu-track-${index}`}>Track Container</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-manifest-${index}`}>View Manifest</DropdownMenuItem>
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
