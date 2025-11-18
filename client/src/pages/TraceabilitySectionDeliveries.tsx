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

const mockSectionDeliveries = [
  { id: "SD-001", section: "Section A", deliveryDate: "2024-03-15", batch: "HB-001", quantity: "625 kg", destination: "Warehouse WH-001", driver: "Mike Davis", status: "Delivered" },
  { id: "SD-002", section: "Section B", deliveryDate: "2024-03-15", batch: "HB-002", quantity: "490 kg", destination: "Processing Center A", driver: "Tom Wilson", status: "In Transit" },
  { id: "SD-003", section: "Section C", deliveryDate: "2024-03-14", batch: "HB-003", quantity: "790 kg", destination: "Export Terminal", driver: "Mike Davis", status: "Delivered" },
  { id: "SD-004", section: "Section A", deliveryDate: "2024-03-14", batch: "HB-004", quantity: "395 kg", destination: "Quality Lab", driver: "Sarah Johnson", status: "Scheduled" },
  { id: "SD-005", section: "Section D", deliveryDate: "2024-03-13", batch: "HB-005", quantity: "560 kg", destination: "Warehouse WH-002", driver: "Tom Wilson", status: "Delivered" },
];

export default function TraceabilitySectionDeliveries() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Section Deliveries</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-track-shipment">Track Shipment</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Delivery ID</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Delivery Date</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSectionDeliveries.map((delivery, index) => (
              <TableRow key={delivery.id} className="hover:bg-muted/30" data-testid={`row-section-delivery-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/traceability-section-deliveries/${delivery.id}`} data-testid={`link-delivery-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{delivery.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-section-${index}`}>{delivery.section}</Badge>
                </TableCell>
                <TableCell data-testid={`text-delivery-date-${index}`}>{delivery.deliveryDate}</TableCell>
                <TableCell>
                  <Link href={`/harvest-batches/${delivery.batch}`} data-testid={`link-batch-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{delivery.batch}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{delivery.quantity}</TableCell>
                <TableCell data-testid={`text-destination-${index}`}>{delivery.destination}</TableCell>
                <TableCell>
                  <Link href={`/users/${delivery.driver}`} data-testid={`link-driver-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{delivery.driver}</span>
                  </Link>
                </TableCell>
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
