import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, DollarSign } from "lucide-react";
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

const mockFinancials = [
  { cycleId: "CC-2024-001", campaign: "Palm Oil 2024-25", cropType: "Palm Oil", revenue: "$125,450", costs: "$78,250", profit: "$47,200", profitMargin: "37.6%", status: "Active" },
  { cycleId: "CC-2024-002", campaign: "Coffee 2024", cropType: "Coffee", revenue: "$85,300", costs: "$52,100", profit: "$33,200", profitMargin: "38.9%", status: "Active" },
  { cycleId: "CC-2023-005", campaign: "Palm Oil 2023-24", cropType: "Palm Oil", revenue: "$218,900", costs: "$142,300", profit: "$76,600", profitMargin: "35.0%", status: "Completed" },
];

export default function CroppingCycleFinancials() {
  return (
    <div className="space-y-4 -m-6">
      <div className="px-6 pt-6 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/planting-campaigns" data-testid="breadcrumb-planting-campaigns">Planting Campaigns</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium" data-testid="breadcrumb-current">Cropping Cycle Financials</BreadcrumbPage>
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
            <DropdownMenuItem data-testid="menu-export-report">Export Financial Report</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-update-costs">Update Costs</DropdownMenuItem>
            <DropdownMenuItem data-testid="menu-view-analytics">View Analytics</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-total-revenue">$429,650</div>
              <p className="text-xs text-muted-foreground mt-1">All cycles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Costs</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-total-costs">$272,650</div>
              <p className="text-xs text-muted-foreground mt-1">Operating expenses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Net Profit</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold" data-testid="stat-net-profit">$157,000</div>
              <p className="text-xs text-muted-foreground mt-1">36.5% margin</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-medium">Cycle ID</TableHead>
                <TableHead className="font-medium">Campaign</TableHead>
                <TableHead className="font-medium">Crop Type</TableHead>
                <TableHead className="font-medium">Revenue</TableHead>
                <TableHead className="font-medium">Costs</TableHead>
                <TableHead className="font-medium">Profit</TableHead>
                <TableHead className="font-medium">Profit Margin</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockFinancials.map((item, index) => (
                <TableRow key={item.cycleId} className="hover:bg-muted/30" data-testid={`row-financial-${index}`}>
                  <TableCell className="font-medium">
                    <Link href={`/cropping-cycle-financials/${item.cycleId}`} data-testid={`link-cycle-${index}`}>
                      <span className="text-primary hover:underline cursor-pointer">{item.cycleId}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{item.campaign}</TableCell>
                  <TableCell>{item.cropType}</TableCell>
                  <TableCell className="text-right font-medium">{item.revenue}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{item.costs}</TableCell>
                  <TableCell className="text-right font-medium text-primary">{item.profit}</TableCell>
                  <TableCell className="text-right">{item.profitMargin}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === "Active" ? "secondary" : "outline"} className="text-xs">
                      {item.status}
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
                        <DropdownMenuItem data-testid={`menu-update-costs-${index}`}>Update Costs</DropdownMenuItem>
                        <DropdownMenuItem data-testid={`menu-export-${index}`}>Export Report</DropdownMenuItem>
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
