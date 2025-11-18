import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, TrendingUp } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockSales = [
  { saleId: "SALE-2024-112", buyer: "Global Palm Oil Corp", product: "Certified Palm Oil", quantity: "25,000 kg", unitPrice: "$0.85/kg", totalAmount: "$21,250.00", saleDate: "15/11/2025", status: "Completed" },
  { saleId: "SALE-2024-111", buyer: "EcoFuel Industries", product: "RSPO Certified Palm Oil", quantity: "18,500 kg", unitPrice: "$0.90/kg", totalAmount: "$16,650.00", saleDate: "10/11/2025", status: "Completed" },
  { saleId: "SALE-2024-110", buyer: "Green Energy Ltd", product: "EUDR Compliant Palm Oil", quantity: "30,000 kg", unitPrice: "$0.95/kg", totalAmount: "$28,500.00", saleDate: "05/11/2025", status: "Pending Payment" },
];

export default function CompanySales() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/company-sales">Company Sales</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">Sales Records</BreadcrumbPage>
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
            <DropdownMenuItem>Record Sale</DropdownMenuItem>
            <DropdownMenuItem>Generate Invoice</DropdownMenuItem>
            <DropdownMenuItem>Sales Report</DropdownMenuItem>
            <DropdownMenuItem>Export to CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$66,400</div>
              <p className="text-xs text-muted-foreground mt-1">Total revenue</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Volume Sold</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">73,500</div>
              <p className="text-xs text-muted-foreground mt-1">Kilograms</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Price</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$0.90</div>
              <p className="text-xs text-muted-foreground mt-1">Per kilogram</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Sale ID</TableHead>
                <TableHead className="font-medium">Buyer</TableHead>
                <TableHead className="font-medium">Product</TableHead>
                <TableHead className="font-medium">Quantity</TableHead>
                <TableHead className="font-medium">Unit Price</TableHead>
                <TableHead className="font-medium">Total Amount</TableHead>
                <TableHead className="font-medium">Sale Date</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSales.map((sale, index) => (
                <TableRow key={sale.saleId} className="hover:bg-muted/30" data-testid={`row-sale-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/company-sales/${sale.saleId}`}>
                      <span className="text-primary hover:underline cursor-pointer">{sale.saleId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{sale.buyer}</TableCell>
                  <TableCell className="text-sm">{sale.product}</TableCell>
                  <TableCell className="text-right">{sale.quantity}</TableCell>
                  <TableCell className="text-right">{sale.unitPrice}</TableCell>
                  <TableCell className="text-right font-medium">{sale.totalAmount}</TableCell>
                  <TableCell className="text-sm">{sale.saleDate}</TableCell>
                  <TableCell>
                    <Badge variant={sale.status === "Completed" ? "secondary" : "outline"} className="text-xs">
                      {sale.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7" data-testid={`button-actions-${index}`}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Generate Invoice</DropdownMenuItem>
                        <DropdownMenuItem>View Certificate</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
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
