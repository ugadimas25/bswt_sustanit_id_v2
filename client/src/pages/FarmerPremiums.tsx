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

const farmerPremiums = [
  { id: 1, farmer: "John Smith", premiumType: "Organic", amount: 450, currency: "USD", status: "Paid", date: "2024-11-15" },
  { id: 2, farmer: "Mary Johnson", premiumType: "Fair Trade", amount: 320, currency: "USD", status: "Pending", date: "2024-11-18" },
  { id: 3, farmer: "David Chen", premiumType: "Quality Bonus", amount: 280, currency: "USD", status: "Paid", date: "2024-11-10" },
  { id: 4, farmer: "Sarah Williams", premiumType: "Organic", amount: 500, currency: "USD", status: "Processing", date: "2024-11-17" },
  { id: 5, farmer: "Ahmed Hassan", premiumType: "Sustainability", amount: 375, currency: "USD", status: "Paid", date: "2024-11-12" },
];

export default function FarmerPremiums() {
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
              <BreadcrumbPage>Farmer Premiums</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Farmer Premiums</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Track premium payments to farmers
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
            <Button size="default" data-testid="button-add-premium">
              <Plus className="h-4 w-4 mr-2" />
              Add Premium
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Premiums Paid</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">$124,580</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-month">
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-month">$8,945</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-pending">
            <CardHeader className="pb-2">
              <CardDescription>Pending</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-pending">$2,340</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-farmers">
            <CardHeader className="pb-2">
              <CardDescription>Farmers Benefited</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-farmers">456</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Farmer Premiums</CardTitle>
            <CardDescription data-testid="text-table-description">
              All premium payments to farmers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-farmer">Farmer</TableHead>
                  <TableHead data-testid="header-type">Premium Type</TableHead>
                  <TableHead data-testid="header-amount">Amount</TableHead>
                  <TableHead data-testid="header-date">Date</TableHead>
                  <TableHead data-testid="header-status">Status</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmerPremiums.map((premium, index) => (
                  <TableRow key={premium.id} data-testid={`row-premium-${index}`}>
                    <TableCell data-testid={`cell-farmer-${index}`}>{premium.farmer}</TableCell>
                    <TableCell data-testid={`cell-type-${index}`}>
                      <Badge variant="outline" data-testid={`badge-type-${index}`}>{premium.premiumType}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-amount-${index}`}>
                      {premium.currency} ${premium.amount}
                    </TableCell>
                    <TableCell data-testid={`cell-date-${index}`}>{premium.date}</TableCell>
                    <TableCell data-testid={`cell-status-${index}`}>
                      <Badge 
                        variant={premium.status === "Paid" ? "default" : premium.status === "Pending" ? "secondary" : "outline"} 
                        data-testid={`badge-status-${index}`}
                      >
                        {premium.status}
                      </Badge>
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
