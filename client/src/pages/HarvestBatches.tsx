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

const mockBatches = [
  { id: "HB-001", batchNumber: "2024-03-001", crop: "Coffee", quantity: "1,250 kg", quality: "Premium", processDate: "2024-03-15", status: "Processing" },
  { id: "HB-002", batchNumber: "2024-03-002", crop: "Cocoa", quantity: "980 kg", quality: "Standard", processDate: "2024-03-14", status: "Completed" },
  { id: "HB-003", batchNumber: "2024-03-003", crop: "Coffee", quantity: "1,580 kg", quality: "Premium", processDate: "2024-03-13", status: "Completed" },
  { id: "HB-004", batchNumber: "2024-03-004", crop: "Coffee", quantity: "790 kg", quality: "Organic Premium", processDate: "2024-03-12", status: "Processing" },
  { id: "HB-005", batchNumber: "2024-03-005", crop: "Bananas", quantity: "1,120 kg", quality: "Standard", processDate: "2024-03-11", status: "Completed" },
];

export default function HarvestBatches() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Batches</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-batch">Create Batch</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-merge-batches">Merge Batches</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch ID</TableHead>
              <TableHead>Batch Number</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Quality Grade</TableHead>
              <TableHead>Process Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockBatches.map((batch, index) => (
              <TableRow key={batch.id} className="hover:bg-muted/30" data-testid={`row-batch-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-batches/${batch.id}`} data-testid={`link-batch-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{batch.id}</span>
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-batch-number-${index}`}>{batch.batchNumber}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{batch.crop}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{batch.quantity}</TableCell>
                <TableCell>
                  <Badge variant={batch.quality.includes("Premium") ? "secondary" : "outline"} className="text-xs" data-testid={`badge-quality-${index}`}>
                    {batch.quality}
                  </Badge>
                </TableCell>
                <TableCell data-testid={`text-process-date-${index}`}>{batch.processDate}</TableCell>
                <TableCell>
                  <Badge variant={batch.status === "Completed" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {batch.status}
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
                      <DropdownMenuItem data-testid={`menu-split-batch-${index}`}>Split Batch</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-traceability-${index}`}>View Traceability</DropdownMenuItem>
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
