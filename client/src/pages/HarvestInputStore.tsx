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

const mockStores = [
  { id: "STORE-001", name: "Central Warehouse", location: "Main Depot", manager: "Carlos Mendez", capacity: "5000 units", currentStock: "3,450", utilization: "69%" },
  { id: "STORE-002", name: "North Region Store", location: "Northern Hub", manager: "Maria Santos", capacity: "3000 units", currentStock: "2,100", utilization: "70%" },
  { id: "STORE-003", name: "South Distribution", location: "Southern Zone", manager: "Jose Garcia", capacity: "4000 units", currentStock: "1,800", utilization: "45%" },
  { id: "STORE-004", name: "East Supply Center", location: "East Quarter", manager: "Ana Rodriguez", capacity: "2500 units", currentStock: "2,350", utilization: "94%" },
  { id: "STORE-005", name: "West Depot", location: "West End", manager: "Pedro Silva", capacity: "3500 units", currentStock: "1,200", utilization: "34%" },
];

export default function HarvestInputStore() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Input Store</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-store">Add Store</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-update-inventory">Update Inventory</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Store ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead className="text-right">Capacity</TableHead>
              <TableHead className="text-right">Current Stock</TableHead>
              <TableHead className="text-right">Utilization</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStores.map((store, index) => (
              <TableRow key={store.id} className="hover:bg-muted/30" data-testid={`row-store-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-input-store/${store.id}`} data-testid={`link-store-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{store.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-name-${index}`}>{store.name}</TableCell>
                <TableCell className="text-sm" data-testid={`text-location-${index}`}>{store.location}</TableCell>
                <TableCell>
                  <Link href={`/users/${store.manager}`} data-testid={`link-manager-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{store.manager}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-right" data-testid={`text-capacity-${index}`}>{store.capacity}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-stock-${index}`}>{store.currentStock}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={parseInt(store.utilization) > 80 ? "outline" : "secondary"} className="text-xs" data-testid={`badge-utilization-${index}`}>
                    {store.utilization}
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
                      <DropdownMenuItem data-testid={`menu-view-inventory-${index}`}>View Inventory</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-transactions-${index}`}>View Transactions</DropdownMenuItem>
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
