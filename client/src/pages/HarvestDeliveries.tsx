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

const mockDeliveries = [
  { id: "HD-001", date: "2024-03-15", batch: "HB-001", destination: "Export Terminal", quantity: "1,250 kg", driver: "Mike Davis", vehicle: "TRK-045", status: "Delivered" },
  { id: "HD-002", date: "2024-03-15", batch: "HB-002", destination: "Warehouse WH-002", quantity: "980 kg", driver: "Tom Wilson", vehicle: "TRK-032", status: "In Transit" },
  { id: "HD-003", date: "2024-03-14", batch: "HB-003", destination: "Processing Center A", quantity: "1,580 kg", driver: "Mike Davis", vehicle: "TRK-045", status: "Delivered" },
  { id: "HD-004", date: "2024-03-14", batch: "HB-004", destination: "Quality Lab", quantity: "790 kg", driver: "Sarah Johnson", vehicle: "TRK-018", status: "Scheduled" },
  { id: "HD-005", date: "2024-03-13", batch: "HB-005", destination: "Export Terminal", quantity: "1,120 kg", driver: "Tom Wilson", vehicle: "TRK-032", status: "Delivered" },
];

export default function HarvestDeliveries() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Deliveries</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-schedule-delivery">Schedule Delivery</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-assign-vehicle">Assign Vehicle</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Delivery ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDeliveries.map((delivery, index) => (
              <TableRow key={delivery.id} className="hover:bg-muted/30" data-testid={`row-delivery-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-deliveries/${delivery.id}`} data-testid={`link-delivery-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{delivery.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-date-${index}`}>{delivery.date}</TableCell>
                <TableCell>
                  <Link href={`/harvest-batches/${delivery.batch}`} data-testid={`link-batch-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{delivery.batch}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-destination-${index}`}>{delivery.destination}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{delivery.quantity}</TableCell>
                <TableCell>
                  <Link href={`/users/${delivery.driver}`} data-testid={`link-driver-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{delivery.driver}</span>
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-vehicle-${index}`}>{delivery.vehicle}</TableCell>
                <TableCell>
                  <Badge variant={delivery.status === "Delivered" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {delivery.status}
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
                      <DropdownMenuItem data-testid={`menu-track-${index}`}>Track Delivery</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-print-manifest-${index}`}>Print Manifest</DropdownMenuItem>
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
