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

const mockVarieties = [
  { id: "VAR-001", name: "Glyphosate 360", type: "Herbicide", manufacturer: "AgriChem Co", concentration: "360 g/L", status: "Approved" },
  { id: "VAR-002", name: "Malathion 57", type: "Pesticide", manufacturer: "CropGuard", concentration: "57% EC", status: "Approved" },
  { id: "VAR-003", name: "Copper Fungicide", type: "Fungicide", manufacturer: "PlantCare", concentration: "50% WP", status: "Approved" },
  { id: "VAR-004", name: "Lambda-cyhalothrin", type: "Pesticide", manufacturer: "BioDefense", concentration: "2.5% EC", status: "Pending" },
  { id: "VAR-005", name: "Atrazine 500", type: "Herbicide", manufacturer: "AgriChem Co", concentration: "500 g/L", status: "Approved" },
];

export default function ChemicalApplicationVarieties() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Application Varieties</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-variety">Add Variety</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-import-data">Import Data</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-csv">Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Variety ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Manufacturer</TableHead>
              <TableHead>Concentration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockVarieties.map((variety, index) => (
              <TableRow key={variety.id} className="hover:bg-muted/30" data-testid={`row-variety-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/chemical-application-varieties/${variety.id}`} data-testid={`link-variety-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{variety.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-name-${index}`}>{variety.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-type-${index}`}>{variety.type}</Badge>
                </TableCell>
                <TableCell className="text-sm" data-testid={`text-manufacturer-${index}`}>{variety.manufacturer}</TableCell>
                <TableCell data-testid={`text-concentration-${index}`}>{variety.concentration}</TableCell>
                <TableCell>
                  <Badge variant={variety.status === "Approved" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {variety.status}
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Variety</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-applications-${index}`}>View Applications</DropdownMenuItem>
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
