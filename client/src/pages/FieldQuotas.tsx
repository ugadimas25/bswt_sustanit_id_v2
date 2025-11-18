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

const fieldQuotas = [
  { id: 1, field: "Field A - Section 1", farmer: "John Smith", quota: 5000, unit: "kg", period: "2024 Q4", achieved: 4200 },
  { id: 2, field: "Field B - Section 2", farmer: "Mary Johnson", quota: 3500, unit: "kg", period: "2024 Q4", achieved: 3700 },
  { id: 3, field: "Field C - Section 3", farmer: "David Chen", quota: 6200, unit: "kg", period: "2024 Q4", achieved: 5800 },
  { id: 4, field: "Field D - Section 1", farmer: "Sarah Williams", quota: 4800, unit: "kg", period: "2024 Q4", achieved: 3100 },
  { id: 5, field: "Field E - Section 4", farmer: "Ahmed Hassan", quota: 5500, unit: "kg", period: "2024 Q4", achieved: 5650 },
];

export default function FieldQuotas() {
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
              <BreadcrumbPage>Field Quotas</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Field Quotas</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Manage production quotas for individual fields
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
            <Button size="default" data-testid="button-add-quota">
              <Plus className="h-4 w-4 mr-2" />
              Add Quota
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total-quota">
            <CardHeader className="pb-2">
              <CardDescription>Total Quota</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total-quota">25,000 kg</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-achieved">
            <CardHeader className="pb-2">
              <CardDescription>Achieved</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-achieved">22,450 kg</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-percentage">
            <CardHeader className="pb-2">
              <CardDescription>Achievement Rate</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-percentage">89.8%</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-fields">
            <CardHeader className="pb-2">
              <CardDescription>Fields Tracked</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-fields">456</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Field Quotas</CardTitle>
            <CardDescription data-testid="text-table-description">
              Production quotas and achievements by field
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-field">Field</TableHead>
                  <TableHead data-testid="header-farmer">Farmer</TableHead>
                  <TableHead data-testid="header-quota">Quota</TableHead>
                  <TableHead data-testid="header-achieved">Achieved</TableHead>
                  <TableHead data-testid="header-percentage">Achievement</TableHead>
                  <TableHead data-testid="header-period">Period</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fieldQuotas.map((quota, index) => {
                  const percentage = ((quota.achieved / quota.quota) * 100).toFixed(1);
                  return (
                    <TableRow key={quota.id} data-testid={`row-quota-${index}`}>
                      <TableCell data-testid={`cell-field-${index}`}>{quota.field}</TableCell>
                      <TableCell data-testid={`cell-farmer-${index}`}>{quota.farmer}</TableCell>
                      <TableCell data-testid={`cell-quota-${index}`}>{quota.quota} {quota.unit}</TableCell>
                      <TableCell data-testid={`cell-achieved-${index}`}>{quota.achieved} {quota.unit}</TableCell>
                      <TableCell data-testid={`cell-percentage-${index}`}>
                        <Badge 
                          variant={Number(percentage) >= 100 ? "default" : Number(percentage) >= 75 ? "secondary" : "outline"} 
                          data-testid={`badge-percentage-${index}`}
                        >
                          {percentage}%
                        </Badge>
                      </TableCell>
                      <TableCell data-testid={`cell-period-${index}`}>{quota.period}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" data-testid={`button-view-${index}`}>View Details</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
