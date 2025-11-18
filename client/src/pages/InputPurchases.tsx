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

const mockPurchases = [
  { id: "PUR-001", date: "2024-03-01", supplier: "AgriChem Co", inputName: "NPK 15-15-15", quantity: "500 bags", totalCost: "$22,500", paymentStatus: "Paid" },
  { id: "PUR-002", date: "2024-02-28", supplier: "CropGuard", inputName: "Glyphosate 360", quantity: "200 L", totalCost: "$5,700", paymentStatus: "Paid" },
  { id: "PUR-003", date: "2024-02-25", supplier: "FertilCo", inputName: "Urea 46%", quantity: "400 bags", totalCost: "$15,200", paymentStatus: "Pending" },
  { id: "PUR-004", date: "2024-02-20", supplier: "BioDefense", inputName: "Malathion 57", quantity: "150 L", totalCost: "$4,800", paymentStatus: "Paid" },
  { id: "PUR-005", date: "2024-02-15", supplier: "PlantCare", inputName: "Copper Fungicide", quantity: "100 kg", totalCost: "$3,200", paymentStatus: "Paid" },
];

export default function InputPurchases() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Input Purchases</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-purchase">Record Purchase</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-manage-suppliers">Manage Suppliers</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Purchase ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Input Name</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Total Cost</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPurchases.map((purchase, index) => (
              <TableRow key={purchase.id} className="hover:bg-muted/30" data-testid={`row-purchase-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/input-purchases/${purchase.id}`} data-testid={`link-purchase-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{purchase.id}</span>
                  </Link>
                </TableCell>
                <TableCell>{purchase.date}</TableCell>
                <TableCell>
                  <Link href={`/suppliers/${purchase.supplier}`} data-testid={`link-supplier-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{purchase.supplier}</span>
                  </Link>
                </TableCell>
                <TableCell>{purchase.inputName}</TableCell>
                <TableCell className="text-right">{purchase.quantity}</TableCell>
                <TableCell className="text-right font-medium">{purchase.totalCost}</TableCell>
                <TableCell>
                  <Badge variant={purchase.paymentStatus === "Paid" ? "secondary" : "outline"} className="text-xs">
                    {purchase.paymentStatus}
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
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Purchase</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-invoice-${index}`}>View Invoice</DropdownMenuItem>
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
