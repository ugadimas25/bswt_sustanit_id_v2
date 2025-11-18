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

const mockFarmerHarvest = [
  { id: "FH-001", farmer: "Carlos Mendez", farmerId: "FMR-045", field: "FLD-045", crop: "Coffee", harvestDate: "2024-03-15", quantity: "1,250 kg", batch: "HB-001" },
  { id: "FH-002", farmer: "Maria Santos", farmerId: "FMR-078", field: "FLD-078", crop: "Cocoa", harvestDate: "2024-03-14", quantity: "980 kg", batch: "HB-002" },
  { id: "FH-003", farmer: "Jose Garcia", farmerId: "FMR-132", field: "FLD-132", crop: "Coffee", harvestDate: "2024-03-13", quantity: "1,580 kg", batch: "HB-003" },
  { id: "FH-004", farmer: "Ana Rodriguez", farmerId: "FMR-201", field: "FLD-201", crop: "Coffee", harvestDate: "2024-03-12", quantity: "790 kg", batch: "HB-004" },
  { id: "FH-005", farmer: "Pedro Silva", farmerId: "FMR-267", field: "FLD-267", crop: "Bananas", harvestDate: "2024-03-11", quantity: "1,120 kg", batch: "HB-005" },
];

export default function TraceabilityFarmerHarvest() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Farmer/Harvest Info</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-trace-harvest">Trace Harvest</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-verify-info">Verify Information</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Info ID</TableHead>
              <TableHead>Farmer Name</TableHead>
              <TableHead>Farmer ID</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead>Harvest Date</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockFarmerHarvest.map((record, index) => (
              <TableRow key={record.id} className="hover:bg-muted/30" data-testid={`row-farmer-harvest-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/traceability-farmer-harvest/${record.id}`} data-testid={`link-record-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{record.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${record.farmerId}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{record.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-farmer-id-${index}`}>{record.farmerId}</TableCell>
                <TableCell>
                  <Link href={`/fields/${record.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{record.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{record.crop}</Badge>
                </TableCell>
                <TableCell data-testid={`text-harvest-date-${index}`}>{record.harvestDate}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{record.quantity}</TableCell>
                <TableCell>
                  <Link href={`/harvest-batches/${record.batch}`} data-testid={`link-batch-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{record.batch}</span>
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
                      <DropdownMenuItem data-testid={`menu-view-trace-${index}`}>View Trace</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-download-certificate-${index}`}>Download Certificate</DropdownMenuItem>
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
