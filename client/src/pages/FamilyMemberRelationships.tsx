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

const relationships = [
  { id: 1, type: "Spouse", count: 1245 },
  { id: 2, type: "Child", count: 2456 },
  { id: 3, type: "Parent", count: 456 },
  { id: 4, type: "Sibling", count: 678 },
  { id: 5, type: "Other", count: 234 },
];

export default function FamilyMemberRelationships() {
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
              <BreadcrumbPage>Family Member Relationships</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Family Member Relationships</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Manage relationship types for family members
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
            <Button size="default" data-testid="button-add-relationship">
              <Plus className="h-4 w-4 mr-2" />
              Add Relationship Type
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Relationships</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">5,069</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-types">
            <CardHeader className="pb-2">
              <CardDescription>Relationship Types</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-types">{relationships.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-children">
            <CardHeader className="pb-2">
              <CardDescription>Children</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-children">2,456</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Relationship Types</CardTitle>
            <CardDescription data-testid="text-table-description">
              Distribution of family member relationships
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-type">Relationship Type</TableHead>
                  <TableHead data-testid="header-count">Count</TableHead>
                  <TableHead data-testid="header-percentage">Percentage</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {relationships.map((rel, index) => (
                  <TableRow key={rel.id} data-testid={`row-relationship-${index}`}>
                    <TableCell data-testid={`cell-type-${index}`}>
                      <Badge variant="outline" data-testid={`badge-type-${index}`}>{rel.type}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-count-${index}`}>{rel.count}</TableCell>
                    <TableCell data-testid={`cell-percentage-${index}`}>
                      {((rel.count / 5069) * 100).toFixed(1)}%
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
