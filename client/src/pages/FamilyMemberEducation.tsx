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

const educationLevels = [
  { id: 1, level: "None", count: 234 },
  { id: 2, level: "Primary", count: 892 },
  { id: 3, level: "Secondary", count: 1456 },
  { id: 4, level: "Tertiary", count: 345 },
  { id: 5, level: "Vocational", count: 178 },
];

export default function FamilyMemberEducation() {
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
              <BreadcrumbPage>Family Member Education</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-page-title">Family Member Education</h1>
            <p className="text-muted-foreground mt-1" data-testid="text-page-description">
              Track education levels of farmer family members
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
            <Button size="default" data-testid="button-add-education">
              <Plus className="h-4 w-4 mr-2" />
              Add Education Level
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card data-testid="card-stat-total">
            <CardHeader className="pb-2">
              <CardDescription>Total Family Members</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-total">3,105</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-educated">
            <CardHeader className="pb-2">
              <CardDescription>With Education</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-educated">2,871</CardTitle>
            </CardHeader>
          </Card>
          <Card data-testid="card-stat-secondary">
            <CardHeader className="pb-2">
              <CardDescription>Secondary & Above</CardDescription>
              <CardTitle className="text-3xl" data-testid="text-stat-secondary">1,801</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card data-testid="card-table-container">
          <CardHeader>
            <CardTitle data-testid="text-table-title">Education Levels</CardTitle>
            <CardDescription data-testid="text-table-description">
              Distribution of education levels among family members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead data-testid="header-level">Education Level</TableHead>
                  <TableHead data-testid="header-count">Family Members</TableHead>
                  <TableHead data-testid="header-percentage">Percentage</TableHead>
                  <TableHead data-testid="header-actions">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {educationLevels.map((level, index) => (
                  <TableRow key={level.id} data-testid={`row-level-${index}`}>
                    <TableCell data-testid={`cell-level-${index}`}>
                      <Badge variant="outline" data-testid={`badge-level-${index}`}>{level.level}</Badge>
                    </TableCell>
                    <TableCell data-testid={`cell-count-${index}`}>{level.count}</TableCell>
                    <TableCell data-testid={`cell-percentage-${index}`}>
                      {((level.count / 3105) * 100).toFixed(1)}%
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
