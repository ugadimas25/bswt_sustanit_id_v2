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
  { id: "PUR-001", farmer: "Carlos Mendez", farmerId: "FMR-045", purchaseDate: "2024-03-15", crop: "Coffee", quantity: "1,250 kg", price: "$4,875", batch: "HB-001", status: "Verified" },
  { id: "PUR-002", farmer: "Maria Santos", farmerId: "FMR-078", purchaseDate: "2024-03-14", crop: "Cocoa", quantity: "980 kg", price: "$3,822", batch: "HB-002", status: "Pending" },
  { id: "PUR-003", farmer: "Jose Garcia", farmerId: "FMR-132", purchaseDate: "2024-03-13", crop: "Coffee", quantity: "1,580 kg", price: "$6,162", batch: "HB-003", status: "Verified" },
  { id: "PUR-004", farmer: "Ana Rodriguez", farmerId: "FMR-201", purchaseDate: "2024-03-12", crop: "Coffee", quantity: "790 kg", price: "$3,160", batch: "HB-004", status: "Verified" },
  { id: "PUR-005", farmer: "Pedro Silva", farmerId: "FMR-267", purchaseDate: "2024-03-11", crop: "Bananas", quantity: "1,120 kg", price: "$2,016", batch: "HB-005", status: "Verified" },
];

export default function TraceabilityPurchases() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/traceability" data-testid="breadcrumb-traceability">Traceability</BreadcrumbLink>
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
            <DropdownMenuItem data-testid="menu-verify-pending">Verify Pending</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Purchase ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Purchase Date</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPurchases.map((purchase, index) => (
              <TableRow key={purchase.id} className="hover:bg-muted/30" data-testid={`row-purchase-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/traceability-purchases/${purchase.id}`} data-testid={`link-purchase-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{purchase.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${purchase.farmerId}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{purchase.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell data-testid={`text-purchase-date-${index}`}>{purchase.purchaseDate}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-crop-${index}`}>{purchase.crop}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-quantity-${index}`}>{purchase.quantity}</TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-price-${index}`}>{purchase.price}</TableCell>
                <TableCell>
                  <Link href={`/harvest-batches/${purchase.batch}`} data-testid={`link-batch-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{purchase.batch}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant={purchase.status === "Verified" ? "secondary" : "outline"} className="text-xs" data-testid={`badge-status-${index}`}>
                    {purchase.status}
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
                      <DropdownMenuItem data-testid={`menu-verify-${index}`}>Verify Purchase</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-trace-${index}`}>View Trace</DropdownMenuItem>
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
