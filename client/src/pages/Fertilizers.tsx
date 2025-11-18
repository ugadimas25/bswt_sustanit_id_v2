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

const mockFertilizers = [
  { id: "FERT-001", name: "NPK 15-15-15", type: "Compound", nutrientRatio: "15-15-15", manufacturer: "FertilCo", unitPrice: "$45/bag", status: "In Stock" },
  { id: "FERT-002", name: "Urea 46%", type: "Nitrogen", nutrientRatio: "46-0-0", manufacturer: "AgriNutrient", unitPrice: "$38/bag", status: "In Stock" },
  { id: "FERT-003", name: "DAP", type: "Phosphate", nutrientRatio: "18-46-0", manufacturer: "CropFeed", unitPrice: "$52/bag", status: "Low Stock" },
  { id: "FERT-004", name: "Potash", type: "Potassium", nutrientRatio: "0-0-60", manufacturer: "K-Plus", unitPrice: "$42/bag", status: "In Stock" },
  { id: "FERT-005", name: "NPK 20-10-10", type: "Compound", nutrientRatio: "20-10-10", manufacturer: "FertilCo", unitPrice: "$48/bag", status: "In Stock" },
];

export default function Fertilizers() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Fertilizers</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-fertilizer">Add Fertilizer</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-update-stock">Update Stock</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-list">Export List</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fertilizer ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>NPK Ratio</TableHead>
              <TableHead>Manufacturer</TableHead>
              <TableHead>Unit Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockFertilizers.map((fert, index) => (
              <TableRow key={fert.id} className="hover:bg-muted/30" data-testid={`row-fertilizer-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/fertilizers/${fert.id}`} data-testid={`link-fertilizer-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{fert.id}</span>
                  </Link>
                </TableCell>
                <TableCell>{fert.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">{fert.type}</Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">{fert.nutrientRatio}</TableCell>
                <TableCell className="text-sm">{fert.manufacturer}</TableCell>
                <TableCell className="font-medium">{fert.unitPrice}</TableCell>
                <TableCell>
                  <Badge variant={fert.status === "In Stock" ? "secondary" : "outline"} className="text-xs">
                    {fert.status}
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Fertilizer</DropdownMenuItem>
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
