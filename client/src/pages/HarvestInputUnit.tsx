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

const mockUnits = [
  { id: "UNIT-001", name: "Kilograms", symbol: "kg", type: "Weight", conversionFactor: "1.0", status: "Active" },
  { id: "UNIT-002", name: "Liters", symbol: "L", type: "Volume", conversionFactor: "1.0", status: "Active" },
  { id: "UNIT-003", name: "Bags (50kg)", symbol: "bag", type: "Weight", conversionFactor: "50.0", status: "Active" },
  { id: "UNIT-004", name: "Gallons", symbol: "gal", type: "Volume", conversionFactor: "3.785", status: "Active" },
  { id: "UNIT-005", name: "Metric Tons", symbol: "MT", type: "Weight", conversionFactor: "1000.0", status: "Active" },
];

export default function HarvestInputUnit() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Input Units</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-unit">Add Unit</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-import-units">Import Units</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-list">Export List</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Unit ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Conversion Factor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUnits.map((unit, index) => (
              <TableRow key={unit.id} className="hover:bg-muted/30" data-testid={`row-unit-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-input-unit/${unit.id}`} data-testid={`link-unit-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{unit.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-name-${index}`}>{unit.name}</TableCell>
                <TableCell className="font-mono text-sm" data-testid={`text-symbol-${index}`}>{unit.symbol}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-type-${index}`}>{unit.type}</Badge>
                </TableCell>
                <TableCell className="text-right font-mono" data-testid={`text-conversion-${index}`}>{unit.conversionFactor}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-status-${index}`}>{unit.status}</Badge>
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Unit</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-usage-${index}`}>View Usage</DropdownMenuItem>
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
