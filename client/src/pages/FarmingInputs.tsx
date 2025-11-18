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

const mockInputs = [
  { id: "INP-001", name: "Organic Fertilizer NPK 10-10-10", category: "Fertilizer", unit: "kg", stockLevel: "2,500", reorderLevel: "500", supplier: "AgriChem Ltd" },
  { id: "INP-002", name: "Biopesticide Solution", category: "Pesticide", unit: "liters", stockLevel: "350", reorderLevel: "100", supplier: "BioControl Inc" },
  { id: "INP-003", name: "Palm Oil Seeds (Tenera)", category: "Seeds", unit: "kg", stockLevel: "150", reorderLevel: "50", supplier: "Seed Masters" },
  { id: "INP-004", name: "Drip Irrigation Pipes", category: "Equipment", unit: "meters", stockLevel: "5,000", reorderLevel: "1,000", supplier: "IrrigaTech" },
  { id: "INP-005", name: "Mulch Material", category: "Soil Amendment", unit: "tons", stockLevel: "45", reorderLevel: "10", supplier: "EcoFarm Supplies" },
];

export default function FarmingInputs() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/farming-inputs">Farming Inputs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Inventory</BreadcrumbPage>
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
            <DropdownMenuItem>Add New Input</DropdownMenuItem>
            <DropdownMenuItem>Record Usage</DropdownMenuItem>
            <DropdownMenuItem>Stock Adjustment</DropdownMenuItem>
            <DropdownMenuItem>Export Inventory</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Input ID</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Category</TableHead>
                <TableHead className="font-medium">Unit</TableHead>
                <TableHead className="font-medium">Stock Level</TableHead>
                <TableHead className="font-medium">Reorder Level</TableHead>
                <TableHead className="font-medium">Supplier</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInputs.map((input, index) => (
                <TableRow key={input.id} className="hover:bg-muted/30" data-testid={`row-input-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/farming-inputs/${input.id}`}>
                      <span className="text-primary hover:underline cursor-pointer">{input.id}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{input.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{input.category}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{input.unit}</TableCell>
                  <TableCell className="text-right font-medium">{input.stockLevel}</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{input.reorderLevel}</TableCell>
                  <TableCell className="text-sm">{input.supplier}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Input</DropdownMenuItem>
                        <DropdownMenuItem>Record Usage</DropdownMenuItem>
                        <DropdownMenuItem>View History</DropdownMenuItem>
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
