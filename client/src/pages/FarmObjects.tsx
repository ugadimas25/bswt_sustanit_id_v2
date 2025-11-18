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

const farmObjects = [
  { id: 1, name: "Main Storage Building", type: "Storage", farm: "Greenfield Farm", status: "Active" },
  { id: 2, name: "Irrigation System A", type: "Equipment", farm: "Valley Farm", status: "Active" },
  { id: 3, name: "Processing Unit 1", type: "Processing", farm: "Highland Farm", status: "Maintenance" },
  { id: 4, name: "Water Tank", type: "Infrastructure", farm: "Riverside Farm", status: "Active" },
  { id: 5, name: "Cold Storage", type: "Storage", farm: "Greenfield Farm", status: "Active" },
];

export default function FarmObjects() {
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
              <BreadcrumbPage>Farm Objects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Farm Objects</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Manage farm infrastructure and equipment
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
            <Button size="default" data-testid="button-add-object">
              <Plus className="h-4 w-4 mr-2" />
              Add Farm Object
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Objects</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">456</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-active">
            <CardHeader className="pb-2">
              <CardDescription>Active</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-active">423</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-maintenance">
            <CardHeader className="pb-2">
              <CardDescription>In Maintenance</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-maintenance">33</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-farms">
            <CardHeader className="pb-2">
              <CardDescription>Farms</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-farms">124</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Farm Objects</CardTitle>
            <CardDescription data-testid="text-table-description">
              All farm infrastructure and equipment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-name">Object Name</TableHead>
                  <TableHead data-testid="header-type">Type</TableHead>
                  <TableHead data-testid="header-farm">Farm</TableHead>
                  <TableHead data-testid="header-status">Status</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmObjects.map((obj, index) => (
                  <TableRow key={obj.id} data-testid={`row-object-${index}`}>
                    <TableCell data-testid={`cell-name-${index}`}>{obj.name}</TableCell>
                    <TableCell data-testid={`cell-type-${index}`}>
                      <Badge variant="outline" data-testid={`badge-type-${index}`}>{obj.type}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-farm-${index}`}>{obj.farm}</TableCell>
                    <TableCell data-testid={`cell-status-${index}`}>
                      <Badge variant={obj.status === "Active" ? "default" : "secondary"} data-testid={`badge-status-${index}`}>
                        {obj.status}
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
