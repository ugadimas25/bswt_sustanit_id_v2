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

const mockTargets = [
  { id: "TGT-001", name: "Weed Control", category: "Herbicide", description: "Broadleaf weed management", season: "Spring", status: "Active" },
  { id: "TGT-002", name: "Pest Management", category: "Pesticide", description: "Insect control for coffee", season: "All Year", status: "Active" },
  { id: "TGT-003", name: "Fungal Prevention", category: "Fungicide", description: "Coffee rust prevention", season: "Rainy", status: "Active" },
  { id: "TGT-004", name: "Soil Treatment", category: "Fertilizer", description: "Nutrient supplementation", season: "Pre-Planting", status: "Active" },
  { id: "TGT-005", name: "Aphid Control", category: "Pesticide", description: "Aphid prevention", season: "Spring", status: "Inactive" },
];

export default function ChemicalApplicationTargets() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Application Targets</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-create-target">Create Target</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-import-targets">Import Targets</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-csv">Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Target ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Season</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTargets.map((target, index) => (
              <TableRow key={target.id} className="hover:bg-muted/30" data-testid={`row-target-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/chemical-application-targets/${target.id}`} data-testid={`link-target-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{target.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-name-${index}`}>{target.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${index}`}>{target.category}</Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground" data-testid={`text-description-${index}`}>{target.description}</TableCell>
                <TableCell data-testid={`text-season-${index}`}>{target.season}</TableCell>
                <TableCell>
                  <Badge variant={target.status === "Active" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {target.status}
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Target</DropdownMenuItem>
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
