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

const farmerAttributes = [
  { id: 1, attribute: "Gender", type: "Demographic", values: "Male, Female, Other", required: true },
  { id: 2, attribute: "Age Group", type: "Demographic", values: "18-30, 31-45, 46-60, 60+", required: true },
  { id: 3, attribute: "Farm Size Category", type: "Farm", values: "Small, Medium, Large", required: true },
  { id: 4, attribute: "Primary Crop", type: "Production", values: "Oil Palm, Cocoa, Coffee", required: true },
  { id: 5, attribute: "Payment Method", type: "Financial", values: "Cash, Mobile Money, Bank Transfer", required: false },
];

export default function FarmersAttributes() {
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
              <BreadcrumbPage>Farmers Attributes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Farmers Attributes</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Define custom attributes for farmer profiles
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
            <Button size="default" data-testid="button-add-attribute">
              <Plus className="h-4 w-4 mr-2" />
              Add Attribute
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Attributes</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">24</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-required">
            <CardHeader className="pb-2">
              <CardDescription>Required Attributes</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-required">12</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-optional">
            <CardHeader className="pb-2">
              <CardDescription>Optional Attributes</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-optional">12</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-categories">
            <CardHeader className="pb-2">
              <CardDescription>Categories</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-categories">6</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Farmer Attributes</CardTitle>
            <CardDescription data-testid="text-table-description">
              All custom attributes defined for farmer profiles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-attribute">Attribute Name</TableHead>
                  <TableHead data-testid="header-type">Type</TableHead>
                  <TableHead data-testid="header-values">Possible Values</TableHead>
                  <TableHead data-testid="header-required">Required</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {farmerAttributes.map((attr, index) => (
                  <TableRow key={attr.id} data-testid={`row-attribute-${index}`}>
                    <TableCell data-testid={`cell-attribute-${index}`}>{attr.attribute}</TableCell>
                    <TableCell data-testid={`cell-type-${index}`}>
                      <Badge variant="outline" data-testid={`badge-type-${index}`}>{attr.type}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-values-${index}`} className="max-w-xs truncate">
                      {attr.values}
                    </TableCell>
                    <TableCell data-testid={`cell-required-${index}`}>
                      <Badge 
                        variant={attr.required ? "default" : "secondary"} 
                        data-testid={`badge-required-${index}`}
                      >
                        {attr.required ? "Yes" : "No"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" data-testid={`button-edit-${index}`}>Edit</Button>
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
