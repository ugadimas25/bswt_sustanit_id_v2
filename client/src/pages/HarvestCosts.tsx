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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockCosts = [
  { id: "HC-001", farmer: "Carlos Mendez", field: "FLD-045", costType: "Labor", amount: "$1,250", quantity: "350 kg", unitCost: "$3.57/kg", date: "2024-03-15" },
  { id: "HC-002", farmer: "Maria Santos", field: "FLD-078", costType: "Transportation", amount: "$580", quantity: "280 kg", unitCost: "$2.07/kg", date: "2024-03-14" },
  { id: "HC-003", farmer: "Jose Garcia", field: "FLD-132", costType: "Processing", amount: "$840", quantity: "420 kg", unitCost: "$2.00/kg", date: "2024-03-13" },
  { id: "HC-004", farmer: "Ana Rodriguez", field: "FLD-201", costType: "Labor", amount: "$950", quantity: "190 kg", unitCost: "$5.00/kg", date: "2024-03-12" },
  { id: "HC-005", farmer: "Pedro Silva", field: "FLD-267", costType: "Storage", amount: "$465", quantity: "310 kg", unitCost: "$1.50/kg", date: "2024-03-11" },
];

export default function HarvestCosts() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Costs</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-record-cost">Record Cost</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-analytics">View Analytics</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Harvest Costs</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-total-costs">$4,085</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-period">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Labor Costs</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-labor-costs">$2,200</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-labor-percent">53.9% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Cost per kg</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-avg-cost">$2.64</div>
              <p className="text-xs text-muted-foreground mt-1" data-testid="text-avg-desc">All activities</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cost ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Field</TableHead>
              <TableHead>Cost Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Unit Cost</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCosts.map((cost, index) => (
              <TableRow key={cost.id} className="hover:bg-muted/30" data-testid={`row-cost-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/harvest-costs/${cost.id}`} data-testid={`link-cost-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{cost.id}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/producers/${cost.farmer}`} data-testid={`link-farmer-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{cost.farmer}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`/fields/${cost.field}`} data-testid={`link-field-${index}`}>
                    <span className="text-sm hover:underline cursor-pointer">{cost.field}</span>
                  </Link>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-cost-type-${index}`}>{cost.costType}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium" data-testid={`text-amount-${index}`}>{cost.amount}</TableCell>
                <TableCell className="text-right" data-testid={`text-quantity-${index}`}>{cost.quantity}</TableCell>
                <TableCell className="text-right font-mono text-sm" data-testid={`text-unit-cost-${index}`}>{cost.unitCost}</TableCell>
                <TableCell data-testid={`text-date-${index}`}>{cost.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid={`button-actions-${index}`}>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem data-testid={`menu-view-details-${index}`}>View Details</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-edit-${index}`}>Edit Cost</DropdownMenuItem>
                      <DropdownMenuItem data-testid={`menu-view-breakdown-${index}`}>View Breakdown</DropdownMenuItem>
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
