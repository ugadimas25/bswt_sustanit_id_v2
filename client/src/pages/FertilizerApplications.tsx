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

const mockApplications = [
  { id: "FAPP-001", farmer: "Carlos Mendez", field: "FLD-045", fertilizer: "NPK 15-15-15", quantity: "50 kg", date: "2024-03-15", method: "Broadcast" },
  { id: "FAPP-002", farmer: "Maria Santos", field: "FLD-078", fertilizer: "Urea 46%", quantity: "75 kg", date: "2024-03-14", method: "Side-dress" },
  { id: "FAPP-003", farmer: "Jose Garcia", field: "FLD-132", fertilizer: "DAP", quantity: "60 kg", date: "2024-03-13", method: "Basal" },
  { id: "FAPP-004", farmer: "Ana Rodriguez", field: "FLD-201", fertilizer: "Potash", quantity: "40 kg", date: "2024-03-12", method: "Top-dress" },
  { id: "FAPP-005", farmer: "Pedro Silva", field: "FLD-267", fertilizer: "NPK 20-10-10", quantity: "55 kg", date: "2024-03-11", method: "Broadcast" },
];

export default function FertilizerApplications() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Fertilizer Applications</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-application">Record Application</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-import-data">Import Data</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Fertilizer</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockApplications.map((app, index) => (
              <TableRow key={app.id} className="hover:bg-muted/30" data-testid={`row-application-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/fertilizer-applications/${app.id}`} data-testid={`link-application-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{app.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${app.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{app.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${app.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{app.field}</span>
                  </Link>
                </TableCell>
                <TableCell>{app.fertilizer}</TableCell>
                <TableCell className="text-right font-medium">{app.quantity}</TableCell>
                <TableCell>{app.date}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">{app.method}</Badge>
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Application</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-history-${index}`}>View History</DropdownMenuItem>
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
