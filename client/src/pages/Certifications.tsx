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

const mockCertifications = [
  { id: 1, code: "RSPO", name: "Roundtable on Sustainable Palm Oil", issuer: "RSPO", validityPeriod: "5 years", requiresAudit: true, status: "Active" },
  { id: 2, code: "EUDR", name: "EU Deforestation Regulation", issuer: "European Union", validityPeriod: "Annual", requiresAudit: true, status: "Active" },
  { id: 3, code: "ISPO", name: "Indonesian Sustainable Palm Oil", issuer: "Indonesian Government", validityPeriod: "3 years", requiresAudit: true, status: "Active" },
  { id: 4, code: "ORGANIC", name: "Organic Certification", issuer: "Various Bodies", validityPeriod: "1 year", requiresAudit: true, status: "Active" },
];

export default function Certifications() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/system">System</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Certifications</BreadcrumbPage>
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
            <DropdownMenuItem>Add Certification</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">ID</TableHead>
                <TableHead className="font-medium">Code</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Issuer</TableHead>
                <TableHead className="font-medium">Validity Period</TableHead>
                <TableHead className="font-medium">Requires Audit</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCertifications.map((cert) => (
                <TableRow key={cert.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{cert.id}</TableCell>
                  <TableCell className="font-mono text-sm">{cert.code}</TableCell>
                  <TableCell>{cert.name}</TableCell>
                  <TableCell className="text-sm">{cert.issuer}</TableCell>
                  <TableCell className="text-sm">{cert.validityPeriod}</TableCell>
                  <TableCell className="text-sm">{cert.requiresAudit ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">{cert.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
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
