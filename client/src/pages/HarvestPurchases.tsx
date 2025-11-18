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
  { id: "HP-001", date: "2024-03-15", farmer: "Carlos Mendez", crop: "Coffee", quantity: "350 kg", pricePerKg: "$4.50", totalAmount: "$1,575", paymentStatus: "Paid" },
  { id: "HP-002", date: "2024-03-14", farmer: "Maria Santos", crop: "Cocoa", quantity: "280 kg", pricePerKg: "$5.20", totalAmount: "$1,456", paymentStatus: "Pending" },
  { id: "HP-003", date: "2024-03-13", farmer: "Jose Garcia", crop: "Coffee", quantity: "420 kg", pricePerKg: "$4.45", totalAmount: "$1,869", paymentStatus: "Paid" },
  { id: "HP-004", date: "2024-03-12", farmer: "Ana Rodriguez", crop: "Bananas", quantity: "190 kg", pricePerKg: "$2.80", totalAmount: "$532", paymentStatus: "Paid" },
  { id: "HP-005", date: "2024-03-11", farmer: "Pedro Silva", crop: "Coffee", quantity: "310 kg", pricePerKg: "$4.55", totalAmount: "$1,410.50", paymentStatus: "Pending" },
];

export default function HarvestPurchases() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Purchases</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-process-payments">Process Payments</DropdownMenuItem>
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
              <TableHead>Farmer</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price/kg</TableHead>
              <TableHead className="text-right">Total Amount</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPurchases.map((purchase, index) => (
              <TableRow key={purchase.id} className="hover:bg-muted/30" data-testid={`row-purchase-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-purchases/${purchase.id}`} data-testid={`link-purchase-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{purchase.id}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-date-${index}`}>{purchase.date}</TableCell>
                <TableCell>
                  <Link href={`/producers/${purchase.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{purchase.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{purchase.crop}</Badge>
                </TableCell>
                <TableCell className="text-right" data-testid={`text-quantity-${index}`}>{purchase.quantity}</TableCell>
                <TableCell className="text-right font-mono" data-testid={`text-price-per-kg-${index}`}>{purchase.pricePerKg}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-total-amount-${index}`}>{purchase.totalAmount}</TableCell>
                <TableCell>
                  <Badge variant={purchase.paymentStatus === "Paid" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-payment-status-${index}`}>
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
                      <DropdownMenuItem data-testid={`menu-process-payment-${index}`}>Process Payment</DropdownMenuItem>
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
