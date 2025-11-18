import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Download } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const operatorCosts = [
  { id: 1, operator: "North Operations Team", category: "Labor", month: "November 2024", amount: 12500, currency: "USD" },
  { id: 2, operator: "South Operations Team", category: "Equipment", month: "November 2024", amount: 8750, currency: "USD" },
  { id: 3, operator: "East Operations Team", category: "Transportation", month: "November 2024", amount: 5400, currency: "USD" },
  { id: 4, operator: "West Operations Team", category: "Labor", month: "November 2024", amount: 10200, currency: "USD" },
  { id: 5, operator: "Central Operations Team", category: "Supplies", month: "November 2024", amount: 6800, currency: "USD" },
];

export default function GAOperatorCosts() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Breadcrumb data-testid="breadcrumb-navigation">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/producers">Farmers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>GA Operator Costs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">GA Operator Costs</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Track grower association operator operational costs
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="default" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="default" data-testid="button-export">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="default" data-testid="button-add-cost">
              <Plus className="h-4 w-4 mr-2" />
              Add Cost
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Costs (This Month)</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">$43,650</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-labor">
            <CardHeader className="pb-2">
              <CardDescription>Labor Costs</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-labor">$22,700</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-equipment">
            <CardHeader className="pb-2">
              <CardDescription>Equipment</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-equipment">$8,750</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-other">
            <CardHeader className="pb-2">
              <CardDescription>Other Costs</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-other">$12,200</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">GA Operator Costs</CardTitle>
            <CardDescription data-testid="text-table-description">
              All operational costs for grower association operators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-operator">Operator</TableHead>
                  <TableHead data-testid="header-category">Category</TableHead>
                  <TableHead data-testid="header-month">Month</TableHead>
                  <TableHead data-testid="header-amount">Amount</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {operatorCosts.map((cost, index) => (
                  <TableRow key={cost.id} data-testid={`row-cost-${index}`}>
                    <TableCell data-testid={`cell-operator-${index}`}>{cost.operator}</TableCell>
                    <TableCell data-testid={`cell-category-${index}`}>
                      <Badge variant="outline" data-testid={`badge-category-${index}`}>{cost.category}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-month-${index}`}>{cost.month}</TableCell>
                    <TableCell data-testid={`cell-amount-${index}`}>
                      {cost.currency} ${cost.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-view-${index}`}>View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
