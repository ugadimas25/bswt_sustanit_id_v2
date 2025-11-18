import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Download, MapPin, AlertTriangle } from "lucide-react";
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

const deforestationData = [
  { id: 1, field: "Field A - Section 1", farmer: "John Smith", riskLevel: "Low", area: 0.2, unit: "ha", lastCheck: "2024-11-15" },
  { id: 2, field: "Field B - Section 2", farmer: "Mary Johnson", riskLevel: "High", area: 1.5, unit: "ha", lastCheck: "2024-11-14" },
  { id: 3, field: "Field C - Section 3", farmer: "David Chen", riskLevel: "Medium", area: 0.8, unit: "ha", lastCheck: "2024-11-12" },
  { id: 4, field: "Field D - Section 1", farmer: "Sarah Williams", riskLevel: "Low", area: 0.1, unit: "ha", lastCheck: "2024-11-10" },
  { id: 5, field: "Field E - Section 4", farmer: "Ahmed Hassan", riskLevel: "None", area: 0.0, unit: "ha", lastCheck: "2024-11-08" },
];

export default function FieldsDeforestation() {
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
              <BreadcrumbPage>Fields Deforestation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Fields Deforestation</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Monitor deforestation risk and incidents by field
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
            <Button variant="outline" size="default" data-testid="button-map-view">
              <MapPin className="h-4 w-4 mr-2" />
              Map View
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Fields Monitored</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">1,245</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-high-risk">
            <CardHeader className="pb-2">
              <CardDescription>High Risk Fields</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-high-risk">23</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-incidents">
            <CardHeader className="pb-2">
              <CardDescription>Incidents This Year</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-incidents">7</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-area">
            <CardHeader className="pb-2">
              <CardDescription>Total Area Affected</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-area">12.8 ha</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Field Deforestation Risk</CardTitle>
            <CardDescription data-testid="text-table-description">
              Deforestation monitoring for all fields
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-field">Field</TableHead>
                  <TableHead data-testid="header-farmer">Farmer</TableHead>
                  <TableHead data-testid="header-risk">Risk Level</TableHead>
                  <TableHead data-testid="header-area">Affected Area</TableHead>
                  <TableHead data-testid="header-check">Last Check</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deforestationData.map((data, index) => (
                  <TableRow key={data.id} data-testid={`row-deforestation-${index}`}>
                    <TableCell data-testid={`cell-field-${index}`}>{data.field}</TableCell>
                    <TableCell data-testid={`cell-farmer-${index}`}>{data.farmer}</TableCell>
                    <TableCell data-testid={`cell-risk-${index}`}>
                      <Badge 
                        variant={data.riskLevel === "High" ? "destructive" : data.riskLevel === "Medium" ? "secondary" : "outline"} 
                        data-testid={`badge-risk-${index}`}
                      >
                        {data.riskLevel === "High" && <AlertTriangle className="h-3 w-3 mr-1" />}
                        {data.riskLevel}
                      </Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-area-${index}`}>{data.area} {data.unit}</TableCell>
                    <TableCell data-testid={`cell-check-${index}`}>{data.lastCheck}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-view-${index}`}>View on Map</Button>
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
