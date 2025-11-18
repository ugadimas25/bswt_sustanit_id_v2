import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingDown, MapPin } from "lucide-react";
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

const summaryData = [
  { id: 1, region: "North Region", fields: 345, highRisk: 12, incidents: 3, area: 4.5 },
  { id: 2, region: "South Region", fields: 428, highRisk: 8, incidents: 2, area: 3.2 },
  { id: 3, region: "East Region", fields: 267, highRisk: 2, incidents: 1, area: 1.8 },
  { id: 4, region: "West Region", fields: 205, highRisk: 1, incidents: 1, area: 3.3 },
];

export default function FieldsDeforestationSummary() {
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
              <BreadcrumbPage>Fields Deforestation Summary</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Fields Deforestation Summary</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Aggregate deforestation statistics by region
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="default" data-testid="button-export">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="default" data-testid="button-map">
              <MapPin className="h-4 w-4 mr-2" />
              Regional Map
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total-fields">
            <CardHeader className="pb-2">
              <CardDescription>Total Fields</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total-fields">1,245</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-total-risk">
            <CardHeader className="pb-2">
              <CardDescription>High Risk Fields</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total-risk">23</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-total-incidents">
            <CardHeader className="pb-2">
              <CardDescription>Total Incidents</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total-incidents">7</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-total-area">
            <CardHeader className="pb-2">
              <CardDescription>Total Area Affected</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total-area">12.8 ha</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-trend">
          <CardHeader>
            <CardTitle data-testid="text-trend-title">Deforestation Trend</CardTitle>
            <CardDescription data-testid="text-trend-description">
              Year-over-year comparison
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-6 w-6 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-green-500" data-testid="text-trend-percentage">-45%</p>
                <p className="text-sm text-muted-foreground" data-testid="text-trend-note">
                  Incidents decreased compared to last year
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Regional Summary</CardTitle>
            <CardDescription data-testid="text-table-description">
              Deforestation statistics by region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-region">Region</TableHead>
                  <TableHead data-testid="header-fields">Total Fields</TableHead>
                  <TableHead data-testid="header-high-risk">High Risk</TableHead>
                  <TableHead data-testid="header-incidents">Incidents</TableHead>
                  <TableHead data-testid="header-area">Area Affected (ha)</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {summaryData.map((region, index) => (
                  <TableRow key={region.id} data-testid={`row-region-${index}`}>
                    <TableCell data-testid={`cell-region-${index}`}>
                      <Badge variant="outline" data-testid={`badge-region-${index}`}>{region.region}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-fields-${index}`}>{region.fields}</TableCell>
                    <TableCell data-testid={`cell-high-risk-${index}`}>{region.highRisk}</TableCell>
                    <TableCell data-testid={`cell-incidents-${index}`}>{region.incidents}</TableCell>
                    <TableCell data-testid={`cell-area-${index}`}>{region.area} ha</TableCell>
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
