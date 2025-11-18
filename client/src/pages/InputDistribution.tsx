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

const mockDistributions = [
  { id: "DIST-001", date: "2024-03-15", recipient: "Farmers Group A", input: "NPK 15-15-15", quantity: "250 bags", distributor: "Carlos Mendez", status: "Completed" },
  { id: "DIST-002", date: "2024-03-14", recipient: "Farmers Group B", input: "Urea 46%", quantity: "180 bags", distributor: "Maria Santos", status: "Completed" },
  { id: "DIST-003", date: "2024-03-13", recipient: "Individual Farmers", input: "Glyphosate 360", quantity: "95 L", distributor: "Jose Garcia", status: "In Progress" },
  { id: "DIST-004", date: "2024-03-12", recipient: "Farmers Group C", input: "DAP", quantity: "200 bags", distributor: "Ana Rodriguez", status: "Pending" },
  { id: "DIST-005", date: "2024-03-11", recipient: "Farmers Group A", input: "Malathion 57", quantity: "75 L", distributor: "Pedro Silva", status: "Completed" },
];

export default function InputDistribution() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Input Distribution</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-new-distribution">New Distribution</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-import-data">Import Data</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Distribution ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Input</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Distributor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDistributions.map((dist, index) => (
              <TableRow key={dist.id} className="hover:bg-muted/30" data-testid={`row-distribution-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/input-distribution/${dist.id}`} data-testid={`link-distribution-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{dist.id}</span>
                  </Link>
                </TableCell>
                <TableCell>{dist.date}</TableCell>
                <TableCell className="text-sm">{dist.recipient}</TableCell>
                <TableCell>{dist.input}</TableCell>
                <TableCell className="text-right font-medium">{dist.quantity}</TableCell>
                <TableCell>
                  <Link href={`/users/${dist.distributor}`} data-testid={`link-distributor-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{dist.distributor}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant={dist.status === "Completed" ? "secondary" : "outline"} className="text-xs">
                    {dist.status}
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Distribution</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-recipients-${index}`}>View Recipients</DropdownMenuItem>
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
