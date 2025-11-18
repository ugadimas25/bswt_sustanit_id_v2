import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const mockPartners = [
  { id: "PRTN-001", name: "BioControl Inc", type: "Supplier", category: "Pest Control", contact: "contact@biocontrol.com", phone: "+1-555-0123", country: "USA", status: "Active" },
  { id: "PRTN-002", name: "Global Palm Oil Corp", type: "Buyer", category: "Palm Oil Processor", contact: "purchasing@globalpalm.com", phone: "+65-6789-0123", country: "Singapore", status: "Active" },
  { id: "PRTN-003", name: "RSPO Certification Agency", type: "Certifier", category: "Sustainability", contact: "certifications@rspo.org", phone: "+60-3-2302-1500", country: "Malaysia", status: "Active" },
  { id: "PRTN-004", name: "IrrigaTech Solutions", type: "Supplier", category: "Irrigation Equipment", contact: "sales@irrigatech.com", phone: "+234-1-234-5678", country: "Nigeria", status: "Active" },
];

export default function Partners() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/partners">Partners</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">All Partners</BreadcrumbPage>
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
            <DropdownMenuItem>Add Partner</DropdownMenuItem>
            <DropdownMenuItem>Import Partners</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Partner ID</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Type</TableHead>
                <TableHead className="font-medium">Category</TableHead>
                <TableHead className="font-medium">Contact Email</TableHead>
                <TableHead className="font-medium">Phone</TableHead>
                <TableHead className="font-medium">Country</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPartners.map((partner, index) => (
                <TableRow key={partner.id} className="hover:bg-muted/30" data-testid={`row-partner-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/partners/${partner.id}`}>
                      <span className="text-primary hover:underline cursor-pointer">{partner.id}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{partner.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{partner.type}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{partner.category}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{partner.contact}</TableCell>
                  <TableCell className="text-sm">{partner.phone}</TableCell>
                  <TableCell className="text-sm">{partner.country}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{partner.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Partner</DropdownMenuItem>
                        <DropdownMenuItem>View Contracts</DropdownMenuItem>
                        <DropdownMenuItem>View Transactions</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
