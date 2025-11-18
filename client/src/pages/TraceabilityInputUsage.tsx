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

const mockInputUsage = [
  { id: "IU-001", farmer: "Carlos Mendez", farmerId: "FMR-045", field: "FLD-045", inputType: "Fertilizer", inputName: "NPK 15-15-15", quantity: "50 kg", applicationDate: "2024-02-15", crop: "Coffee" },
  { id: "IU-002", farmer: "Maria Santos", farmerId: "FMR-078", field: "FLD-078", inputType: "Pesticide", inputName: "Organic Neem Oil", quantity: "10 L", applicationDate: "2024-02-14", crop: "Cocoa" },
  { id: "IU-003", farmer: "Jose Garcia", farmerId: "FMR-132", field: "FLD-132", inputType: "Fertilizer", inputName: "Compost", quantity: "200 kg", applicationDate: "2024-02-10", crop: "Coffee" },
  { id: "IU-004", farmer: "Ana Rodriguez", farmerId: "FMR-201", field: "FLD-201", inputType: "Herbicide", inputName: "Organic Weed Control", quantity: "5 L", applicationDate: "2024-02-08", crop: "Coffee" },
  { id: "IU-005", farmer: "Pedro Silva", farmerId: "FMR-267", field: "FLD-267", inputType: "Fertilizer", inputName: "Calcium Carbonate", quantity: "75 kg", applicationDate: "2024-02-05", crop: "Bananas" },
];

export default function TraceabilityInputUsage() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Input Usage</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-usage">Record Usage</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-compliance">View Compliance</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usage ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Input Type</TableHead>
              <TableHead>Input Name</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Application Date</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockInputUsage.map((usage, index) => (
              <TableRow key={usage.id} className="hover:bg-muted/30" data-testid={`row-input-usage-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/traceability-input-usage/${usage.id}`} data-testid={`link-usage-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{usage.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${usage.farmerId}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{usage.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${usage.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{usage.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-input-type-${index}`}>{usage.inputType}</Badge>
                </TableCell>
                <TableCell data-testid={`text-input-name-${index}`}>{usage.inputName}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{usage.quantity}</TableCell>
                <TableCell data-testid={`text-application-date-${index}`}>{usage.applicationDate}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{usage.crop}</Badge>
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
                      <DropdownMenuItem data-testid={`menu-view-compliance-${index}`}>View Compliance</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-trace-${index}`}>View Trace</DropdownMenuItem>
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
