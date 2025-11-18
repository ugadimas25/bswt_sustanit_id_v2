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

const mockInputs = [
  { id: "OI-001", name: "Organic Compost", category: "Soil Amendment", supplier: "BioCycle Co", unitPrice: "$25/bag", stockStatus: "In Stock" },
  { id: "OI-002", name: "Bio-stimulant Plus", category: "Growth Enhancer", supplier: "GreenGrow", unitPrice: "$45/L", stockStatus: "In Stock" },
  { id: "OI-003", name: "Agricultural Lime", category: "pH Adjuster", supplier: "LimePro", unitPrice: "$18/bag", stockStatus: "Low Stock" },
  { id: "OI-004", name: "Organic Mulch", category: "Weed Suppression", supplier: "EcoFarm", unitPrice: "$12/bag", stockStatus: "In Stock" },
  { id: "OI-005", name: "Seaweed Extract", category: "Foliar Nutrition", supplier: "OceanBio", unitPrice: "$38/L", stockStatus: "In Stock" },
];

export default function OtherInputs() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Other Inputs</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-input">Add Input</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-update-inventory">Update Inventory</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-list">Export List</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Input ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
              <TableHead>Stock Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockInputs.map((input, index) => (
              <TableRow key={input.id} className="hover:bg-muted/30" data-testid={`row-input-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/other-inputs/${input.id}`} data-testid={`link-input-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{input.id}</span>
                  </Link>
                </TableCell>
                <TableCell>{input.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">{input.category}</Badge>
                </TableCell>
                <TableCell className="text-sm">
                  <Link href={`/suppliers/${input.supplier}`} data-testid={`link-supplier-${index}`}>
                    <span className="hover:underline cursor-pointer">{input.supplier}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-right font-medium">{input.unitPrice}</TableCell>
                <TableCell>
                  <Badge variant={input.stockStatus === "In Stock" ? "secondary" : "outline"} className="text-xs">
                    {input.stockStatus}
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Input</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-stock-${index}`}>View Stock History</DropdownMenuItem>
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
