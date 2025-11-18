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
  { id: "COST-001", inputName: "NPK 15-15-15", category: "Fertilizer", unitCost: "$45.00", quantity: "120 bags", totalCost: "$5,400", period: "Q1 2024" },
  { id: "COST-002", inputName: "Glyphosate 360", category: "Herbicide", unitCost: "$28.50", quantity: "85 L", totalCost: "$2,422.50", period: "Q1 2024" },
  { id: "COST-003", inputName: "Urea 46%", category: "Fertilizer", unitCost: "$38.00", quantity: "200 bags", totalCost: "$7,600", period: "Q1 2024" },
  { id: "COST-004", inputName: "Malathion 57", category: "Pesticide", unitCost: "$32.00", quantity: "60 L", totalCost: "$1,920", period: "Q1 2024" },
  { id: "COST-005", inputName: "DAP", category: "Fertilizer", unitCost: "$52.00", quantity: "95 bags", totalCost: "$4,940", period: "Q1 2024" },
];

export default function InputCosts() {
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
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Input Costs</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-add-cost">Add Cost Record</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-import-data">Import Data</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-export-report">Export Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Input Costs</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-total-costs">$22,282.50</div>
              <p className="text-xs text-muted-foreground mt-1">Q1 2024</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fertilizer Costs</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-fertilizer-costs">$17,940</div>
              <p className="text-xs text-muted-foreground mt-1">80.5% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Chemical Costs</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-chemical-costs">$4,342.50</div>
              <p className="text-xs text-muted-foreground mt-1">19.5% of total</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cost ID</TableHead>
              <TableHead>Input Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Unit Cost</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Total Cost</TableHead>
              <TableHead>Period</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCosts.map((cost, index) => (
              <TableRow key={cost.id} className="hover:bg-muted/30" data-testid={`row-cost-${index}`}>
                <TableCell className="font-medium">
                  <Link href={`/input-costs/${cost.id}`} data-testid={`link-cost-${index}`}>
                    <span className="text-primary hover:underline cursor-pointer">{cost.id}</span>
                  </Link>
                </TableCell>
                <TableCell>{cost.inputName}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">{cost.category}</Badge>
                </TableCell>
                <TableCell className="text-right">{cost.unitCost}</TableCell>
                <TableCell className="text-right">{cost.quantity}</TableCell>
                <TableCell className="text-right font-medium">{cost.totalCost}</TableCell>
                <TableCell className="text-sm">{cost.period}</TableCell>
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
