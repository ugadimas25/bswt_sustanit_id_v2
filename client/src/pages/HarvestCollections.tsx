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

const mockCollections = [
  { id: "HC-001", date: "2024-03-15", farmer: "Carlos Mendez", field: "FLD-045", crop: "Coffee", quantity: "350 kg", collector: "Mike Davis", status: "Verified" },
  { id: "HC-002", date: "2024-03-15", farmer: "Maria Santos", field: "FLD-078", crop: "Cocoa", quantity: "280 kg", collector: "Sarah Johnson", status: "Pending" },
  { id: "HC-003", date: "2024-03-14", farmer: "Jose Garcia", field: "FLD-132", crop: "Coffee", quantity: "420 kg", collector: "Mike Davis", status: "Verified" },
  { id: "HC-004", date: "2024-03-14", farmer: "Ana Rodriguez", field: "FLD-201", crop: "Bananas", quantity: "190 kg", collector: "Tom Wilson", status: "Verified" },
  { id: "HC-005", date: "2024-03-13", farmer: "Pedro Silva", field: "FLD-267", crop: "Coffee", quantity: "310 kg", collector: "Mike Davis", status: "Pending" },
];

export default function HarvestCollections() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/harvests" data-testid="breadcrumb-harvests">Harvests</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Collections</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-collection">Record Collection</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-verify-pending">Verify Pending</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Collection ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead>Collector</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCollections.map((collection, index) => (
              <TableRow key={collection.id} className="hover:bg-muted/30" data-testid={`row-collection-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-collections/${collection.id}`} data-testid={`link-collection-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{collection.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-date-${index}`}>{collection.date}</TableCell>
                <TableCell>
                  <Link href={`/producers/${collection.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{collection.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${collection.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{collection.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{collection.crop}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{collection.quantity}</TableCell>
                <TableCell>
                  <Link href={`/users/${collection.collector}`} data-testid={`link-collector-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{collection.collector}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant={collection.status === "Verified" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {collection.status}
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
                      <DropdownMenuItem data-testid={`menu-verify-${index}`}>Verify Collection</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-print-receipt-${index}`}>Print Receipt</DropdownMenuItem>
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
